import { ADD_STUDENT, REMOVE_STUDENT } from "./actions";

export default function reducer(state, action) {
  switch (action.type) {
    case ADD_STUDENT:
      const newStudent = action.payload
      return {
        ...state,
        students: [
          ...state.students,
          newStudent
        ],
      }
    case REMOVE_STUDENT:
    const id = action.payload  
    return {
        ...state,
        students: state.students.filter(student => student.id !== id)
      }
    default:
      return state;
  }
}
