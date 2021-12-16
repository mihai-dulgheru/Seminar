import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { useEffect } from 'react'
import { Button } from 'primereact/button'

import { getNotes, deleteNote } from '../actions/actions'
import './NodeList.css'

const noteListSelector = (state) => state.list.notes

function NoteList (props) {
  const notes = useSelector(noteListSelector, shallowEqual)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getNotes())
  }, [dispatch])

  return (
    <div>
      <div>
        <h3>List of notes</h3>
        {notes.map((e) => (
          <div className='row' key={e.id}>
            <div className='content'>{e.content}</div>
            <Button
              icon='pi pi-times'
              className='p-button-rounded p-button-danger p-button-text'
              onClick={(evt) => dispatch(deleteNote(e.id))}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default NoteList
