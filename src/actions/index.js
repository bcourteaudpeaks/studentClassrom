import {ADD_STUDENT, REMOVE_STUDENT} from "../constants/actions-types";

export const addStudent = student => ({type: ADD_STUDENT, payload: student});
export const removeStudent = studentId => ({type: REMOVE_STUDENT, payload: studentId});