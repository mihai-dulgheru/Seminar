const INITIAL_STATE = {
  notes: []
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_NOTE':
      return { ...state, notes: [...state.notes, action.payload] }
    case 'DELETE_NODE':
      const newNotes = [...state.notes]
      const removed = newNotes.splice(action.payload, 1)
      console.log(removed)
      return { ...state, notes: newNotes }
    default:
      return state
  }
}
