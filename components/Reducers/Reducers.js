import { CREATE_TODO, REMOVE_TODO } from "../Actions/Actions"

export const todos = (state = [], actions) => {
    const {type, payload} = actions

    switch (type) {
        case CREATE_TODO: {
            const {text} = payload;
            const newTodo = {
                text,
                isCompleted: false
            }
            return state.concat(newTodo)
        }
        case REMOVE_TODO: {
            const{text} = payload
            return state.filter(todo => todo.text !== text)
        }
        default:
            return state
    }
}