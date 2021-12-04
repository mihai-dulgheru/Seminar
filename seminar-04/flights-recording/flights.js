const fetch = require('node-fetch')

async function getObjectFromUrl (url) {
  const response = await fetch(url)
  // return await response.json();
  return JSON.parse(await response.text())
}

async function getFlight (key) {
  try {
    var flight = {}
    const object = await getObjectFromUrl(`https://data-live.flightradar24.com/clickhandler/?version=1.5&flight=${key}`)
    flight = {
      airline: object.airline.name,
      from: object.airport.origin.name,
      to: object.airport.destination.name
    }
  } catch (error) {
  } finally {
    return flight
  }
}

async function getFlights () {
  const flights = []
  const object = await getObjectFromUrl('https://data-live.flightradar24.com/zones/fcgi/feed.js?faa=1&bounds=49.751%2C42.639%2C17.822%2C32.818&satellite=1&mlat=1&flarm=1&adsb=1&gnd=1&air=1&vehicles=1&estimated=1&maxage=14400&gliders=1&stats=1')
  for (const key in object) {
    if (typeof object[key] === 'object') {
      const flight = await getFlight(key)
      if (flight.airline && flight.from && flight.to) {
        flights.push(flight)
      }
    }
  }
  return flights.sort((first, second) =>
    first.airline.toLowerCase() < second.airline.toLowerCase()
      ? -1
      : (first.airline.toLowerCase() > second.airline.toLowerCase() ? 1 : 0)
  )
}

async function main () {
  const flights = await getFlights()
  flights.forEach(flight => console.log(flight))
}

main()
