import { initializeEditPage } from './views'
import { updateNote, removeNote, saveNotes } from './notes'

const removeEl = document.querySelector('#remove-note')
const noteTitleEl = document.querySelector('#note-title')
const noteBodyEl = document.querySelector('#note-body')
const noteId = location.hash.substring(1)

initializeEditPage(noteId)

noteTitleEl.addEventListener('change', (e) => {
    updateNote(noteId, {
        title: e.target.value
    })
})

noteBodyEl.addEventListener('change', (e) => {
    const note = updateNote(noteId, {
        body: e.target.value
    })

    saveNotes(notes)
})

removeEl.addEventListener('click', () => {
    removeNote(noteId)
    location.assign('/')
})

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
       initializeEditPage(noteId)
    }
})