export function addNote (content) {
  return {
    type: 'ADD_NOTE',
    payload: content
  }
}

export function deleteNote (i) {
  return {
    type: 'DELETE_NODE',
    payload: i
  }
}
