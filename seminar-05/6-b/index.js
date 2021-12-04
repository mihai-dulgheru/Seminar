const apiUrl = 'http://localhost:8000/api/'

async function get (url) {
  return (await axios.get(url)).data
}

async function load () {
  const id = document.querySelector('#id').value

  try {
    const data = await get(apiUrl + 'getList/' + id)
    document.querySelector('textarea').textContent = JSON.stringify(data)
  } catch (error) {
    alert('Nu există resursa cu id-ul ' + id)
  } finally {
    document.querySelector('#id').value = null
  }
}
