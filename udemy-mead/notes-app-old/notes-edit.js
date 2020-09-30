'use strict'

const noteID = location.hash.substring(1)
const removeEl = document.querySelector('#remove-note')
const noteTitleEl = document.querySelector('#note-title')
const noteBodyEl = document.querySelector('#note-body')

let notes = getSavedNotes()
let note = notes.find((note) => note.id === noteID)

if (!note) {
    location.assign('/index.html')
}

noteTitleEl.value = note.title 
noteBodyEl.value = note.body
console.log(moment(note.updatedAt).fromNow())

noteTitleEl.addEventListener('change', (e) => {
    note.title = e.target.value
    note.updatedAt = moment().valueOf()
    saveNotes(notes)
})

noteBodyEl.addEventListener('change', (e) => {
    note.body = e.target.value
    note.updatedAt = moment().valueOf()
    saveNotes(notes)
})

removeEl.addEventListener('click', () => {
    removeNote(note.id)
    saveNotes(notes)
    location.assign('/')
})

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        note = notes.find(function (note) {
            return note.id === noteID
        })

        if (! note) {
            location.assign('/index.html')
        }

        noteTitleEl.value = note.title
        noteBodyEl.value = note.body
        noteUpdatedAtEl.textContent = moment(note.udpatedAt).fromNow()
    }
})