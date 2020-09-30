'use strict'

// Read existing notes from localStorage
const getSavedNotes =  () => {
    const notesJSON = localStorage.getItem('notes')

    try {
        return notesJSON !== null ? JSON.parse(notesJSON) : []    
    } catch (error) {
        console.log(error)
        return []
    }
    
}

// Save the notes to localStorage
const saveNotes =  (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes))
}

// Remove a note from the list
const removeNote =  (id) => {
    const noteIndex = notes.findIndex((note) =>  note.id === id)

    if (noteIndex > -1) {
        notes.splice(noteIndex, 1)
    }
}

// Generate the DOM structure for a note
const generateNoteDOM =  (note) => {
    const noteEl = document.createElement('a')
    const textEl = document.createElement('p')
    const statusEl = document.createElement('p')


    // Setup the remove note button
    // button.textContent = 'x'
    // noteEl.appendChild(button)
    // notEl.addEventListener('click', () => {
    //     removeNote(note.id)
    //     saveNotes(notes)
    //     renderNotes(notes, filters)
    // })

    // Setup the note title text
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

const sortNotes = (notes, sortBy) => {
    if (sortBy === 'byEdited') {
        return notes.sort((a, b) => {
            if (a.updatedAt > b.updatedAt) {
                return -1 
            } else if (a.updatedAt < b.updatedAt) {
                return 1
            } else {
                return 0
            }
        })
    }  else if (sortBy === 'byCreated') {
        return notes.sort((a, b) => {
            if (a.createdAt > b.createdAt) {
                return -1
            } else if (a.created < b.createdAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'alphabetical') {
        return notes.sort((a, b) => {
            if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1
            } else if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1
            } else {
                return 0
            }
        })
    } else {
        return notes
    }
}

// Render application notes
const renderNotes = (notes, filters) => {
    const notesDiv = document.querySelector('#notes')
    notes = sortNotes(notes, filters.sortBy)
    const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()))

    notesDiv.innerHTML = ''

    if(filteredNotes.length > 0) {
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