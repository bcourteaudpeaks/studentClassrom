import React from 'react';
import {removeStudent} from "../../actions/index";
import {connect} from 'react-redux';
import './StudentList.css';

import StudentDetails from "../../components/StudentDetails/StudentDetails";

const mapStateToProps = state => {
    return {students: state.students};
};

const mapDispatchToProps = (dispatch) => {
    return {
        onStudentRemove: (id) => {
            dispatch(removeStudent(id))
        }
    }
};

const StudentList = ({students, onStudentRemove}) => (
    <div className="main">
        {students.map(student => {
            return <StudentDetails key={student.id} student={student} onRemove={() => onStudentRemove(student.id)}/>
        })}
    </div>
);

const List = connect(mapStateToProps, mapDispatchToProps)(StudentList);

export default List;