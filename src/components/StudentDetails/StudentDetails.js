import React from 'react'
import './StudentDetails.css'

const StudentDetails = ({ onRemove, student }) => (
    <div className="animated fadeIn studentDetails">
        <div>{student.fullName}</div>
        <div>
            <button onClick={onRemove}>Supprimer</button>
        </div>
    </div>
)

export default StudentDetails