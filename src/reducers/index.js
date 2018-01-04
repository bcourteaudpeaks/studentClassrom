import {ADD_STUDENT, REMOVE_STUDENT} from "../constants/actions-types";

const initialState = {
    students: [{
        id: 1,
        fullName: 'Billy COURTEAUD'
    }, {
        id: 2,
        fullName: 'Jean DUPONT'
    }, {
        id: 3,
        fullName: 'Jeanne ALAMO'
    }, {
        id: 4,
        fullName: 'Thierry GASTON'
    }, {
        id: 5,
        fullName: 'Bob L\'EPONGE'
    }]
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_STUDENT:
            return {...state, students: state.students.concat(action.payload)};
        case REMOVE_STUDENT:
            const indexStudent = state.students.findIndex((student) => student.id === action.payload)
            let students = state.students
                .slice(0, indexStudent)
                .concat(state.students.slice(indexStudent + 1))
            return {...state, students};
        default:
            return state
    }
};

export default rootReducer;