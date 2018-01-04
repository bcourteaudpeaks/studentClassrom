import React from 'react'
import AddStudent from '../containers/AddStudent/AddStudent'
import StudentList from '../containers/StudentList/StudentList'
import './App.css'

const App = () => (
    <div className="container">
        <AddStudent/>
        <StudentList/>
    </div>
);

export default App
