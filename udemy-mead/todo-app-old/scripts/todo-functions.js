'use strict'
// Fetch existing todos from localStorage
const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos')

    try {
        return todosJSON !== null ? JSON.parse(todosJSON) : []
    } catch (error) {
        console.log(error)
        return []
    }
    
    // if (todosJSON !== null) {
    //     return JSON.parse(todosJSON)
    // } else {
    //     return []
    // }
}

// Save todos to localStorage
const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Remove todo by id
const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) =>  todo.id === id)

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

// Toggle the completed value for a given todo
const toggleTodo = (id) => {
    const todo = todos.find((todo) =>  todo.id === id)

    if (todo) {
        todo.completed = !todo.completed
    }
}

// Render application todos based on filters
const renderTodos = (todos, filters) => {
    const filteredTodos = todos.filter((todo) => {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        
        return searchTextMatch && hideCompletedMatch
    })

    const incompleteTodos = filteredTodos.filter((todo) =>  !todo.completed)

    document.querySelector('#todos').innerHTML = ''
    document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos))

    if (filteredTodos.length > 0) {
        filteredTodos.forEach((todo) => {
            document.querySelector('#todos').appendChild(generateTodoDOM(todo))
        })
    }else {
        const pEl = document.createElement('p')
        pEl.classList.add('empty-message')
        pEl.textContent = 'nothing to do - get a hobby'
        document.querySelector('#todos').appendChild(pEl)
    }
}

// Get the DOM elements for an individual note
const generateTodoDOM = (todo) => {
    const todoEl = document.createElement('label')
    const checkbox = document.createElement('input')
    const containerEl = document.createElement('div')
    const todoText = document.createElement('span')
    const removeButton = document.createElement('button')

    // Setup todo checkbox
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = todo.completed
    containerEl.appendChild(checkbox)
    checkbox.addEventListener('change', () => {
        toggleTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    // Setup the todo text
    todoText.textContent = todo.text
    containerEl.appendChild(todoText)
    todoEl.appendChild(containerEl)

    todoEl.classList.add('list-item')
    containerEl.classList.add('list-item__container')

    // Setup the remove button
    removeButton.textContent = 'remove'
    removeButton.classList.add('button', 'button--text')
    todoEl.appendChild(removeButton)
    removeButton.addEventListener('click', () => {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    return todoEl
}

// Get the DOM elements for list summary
const generateSummaryDOM = (incompleteTodos) => {
    const summary = document.createElement('h2')
    summary.textContent = incompleteTodos.length > 1 ? 
        `You have ${incompleteTodos.length} todos left` : 
        `You have ${incompleteTodos.length} todo left`
    summary.classList.add('list-title')
    return summary
}