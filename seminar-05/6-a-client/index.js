const apiUrl = 'http://localhost:8000/api/'

async function get (url) {
  return (await axios.get(url)).data
}

async function post (url, body) {
  return (await axios.post(url,
    JSON.stringify(body), {
      headers: { 'Content-Type': 'application/json' }
    })).data
}

async function loadTable () {
  const data = await get(apiUrl + 'getList')
  const tableDiv = document.getElementById('tableData')

  if (!data || !tableDiv) {
    return
  }

  const myTable = document.getElementById('myTable')
  if (myTable) { myTable.remove() }

  const myHtmlCode = []
  myHtmlCode.push('<table id="myTable">')
  myHtmlCode.push('<thead>')
  myHtmlCode.push('<tr><th hidden> Id </th><th> Name </th><th> Age </th></tr>')
  myHtmlCode.push('</thead>')
  myHtmlCode.push('<tbody>')

  for (const iterator of data) {
    myHtmlCode.push(`<tr><td hidden>${iterator.id}</td><td>${iterator.nume}</td><td>${iterator.varsta}</td></tr>`)
  }
  myHtmlCode.push('</tbody>')
  myHtmlCode.push('</table>')

  tableDiv.innerHTML = myHtmlCode.join('')
}

async function sendData () {
  const name = document.getElementById('inputName').value
  const age = parseInt(document.getElementById('inputAge').value)

  if (!name || !age) {
    alert('Completeaza toate campurile!')
  } else {
    await post(apiUrl + 'postList', { nume: name, varsta: age })
    await loadTable()
  }
}

loadTable()
