const todoDB = [
    {
        id: 1,
        title: "Pirmer todo",
        description: "shkfasdkah",
        isComplete: false
    }
]

const getAllTodos = () => {
    return todoDB

}

const getTodoById = (id) => {
    const data = todoDB.filter((item) => item.id === id)
    return data[0]
}

const createTodo = (data) => {
    const newObj = {
        id: todoDB[todoDB.length - 1].id + 1,
        title: data.title,
        description: data.description,
        isComplete: false
    }

    todoDB.push(newObj)
    return todoDB
}

const deleteTodo = (id) => {
    const index = todoDB.findIndex((item) => item.id === id)
    todoDB.splice(index, 1)
    return 
    
}

const editTodo = (id, data) => {
    const index = todoDB.findIndex((item) => item.id === id)
    if (index !== -1) {
        todoDB[index] = {
            id,
            title: data.title, 
            description: data.description,
            isComplete: data.isComplete
        }
    } else {
        createTodo(data)
    }
    return todoDB
}

exports.getAllTodos = getAllTodos
exports.getTodoById = getTodoById
exports.createTodo = createTodo
exports.deleteTodo = deleteTodo
exports.editTodo = editTodo