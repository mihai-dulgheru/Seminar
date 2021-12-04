const evenCollection = document.querySelectorAll('tbody tr:nth-child(even)')
const oddCollection = document.querySelectorAll('tbody tr:nth-child(odd)')

if (evenCollection && evenCollection.length > 0) {
  for (const item of evenCollection) {
    item.bgColor = 'red'
  }
}

if (oddCollection && oddCollection.length > 0) {
  for (const item of oddCollection) {
    item.bgColor = 'yellow'
  }
}
