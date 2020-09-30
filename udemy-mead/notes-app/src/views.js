import moment from 'moment'
import { getFilters } from './filters'
import { sortNotes, getNotes } from './notes'

const renderNotes = () => {
    const notesDiv = document.querySelector('#notes')
    const filters = getFilters()
    const notes = sortNotes(filters.sortBy)
    const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()))

    notesDiv.innerHTML = ''

    if (filteredNotes.length > 0) {
        filteredNotes.forEach((note) => {
            const noteEl = generateNoteDOM(note)
            notesDiv.appendChild(noteEl)
        })
    } else {
        const emptyMessage = document.createElement('p')
        emptyMessage.textContent = "No notes to show.."
        emptyMessage.classList.add('empty-message')
        notesDiv.appendChild(emptyMessage)
    }
}

const generateNoteDOM = (note) => {
    const noteEl = document.createElement('a')
    const textEl = document.createElement('p')
    const statusEl = document.createElement('p')

    if (note.title.length > 0) {
        textEl.textContent = note.title
    } else {
        textEl.textContent = 'Unnamed note'
    }

    textEl.classList.add('list-item__title')
    statusEl.classList.add('list-item__subtitle')
    noteEl.appendChild(textEl)
    noteEl.setAttribute('href', `/edit.html#${note.id}`)
    noteEl.classList.add('list-item')

    statusEl.textContent = moment(note.updatedAt).fromNow()
    noteEl.appendChild(statusEl)

    return noteEl
}

const initializeEditPage = (noteId) => {
    const noteTitleEl = document.querySelector('#note-title')
    const noteBodyEl = document.querySelector('#note-body')
    const notes = getNotes()
    const note = notes.find((note) => note.id === noteId)

    if (!note) {
        location.assign('/index.html')
    }

    noteTitleEl.value = note.title
    noteBodyEl.value = note.body
    console.log(moment(note.updatedAt).fromNow())
}

export { renderNotes, generateNoteDOM, initializeEditPage }