import reducer from '../index.js';
import {addStudent, removeStudent} from '../../actions/index'

describe('reducer', () => {

    it('handles ADD_STUDENT', () => {
        const initialState = {
            students: []
        };

        const action = addStudent({
            id: 1,
            fullName: 'test'
        })

        const nextState = reducer(initialState, action);

        expect(nextState.students).toEqual([{
            id: 1,
            fullName: 'test'
        }]);
    });

    it('handles REMOVE_STUDENT', () => {
        const initialState = {
            students: [{
                id: 1,
                fullName: 'Billy Courteaud'
            }, {
                id: 2,
                fullName: 'Jean Moroni'
            }]
        };

        const action = removeStudent(initialState.students[0].id)

        const nextState = reducer(initialState, action);

        expect(nextState.students).toEqual([{
            id: 2,
            fullName: 'Jean Moroni'
        }]);
    })

});