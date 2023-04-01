import axios from 'axios'
import { useState, useEffect } from 'react'
import StudentForm from './StudentForm'
import Notification from './Notification'
import StudentTable from './StudentTable'

const Students = () => {
    const [students, setStudents] = useState([])
    const [notification, setNotification] = useState(null)
    useEffect(() => {
        axios.get('/students').then(res => setStudents(res.data))
    }, [])

    const addStudent = (event) => {
        event.preventDefault()
        const newStudent = {
            first_name: event.target.first_name.value,
            last_name: event.target.last_name.value,
            birth_date: event.target.birth_date.value,
        }
        axios.post('/students', newStudent).then(res => {
            setStudents([...students, res.data])
            setNotification(`${newStudent.first_name} ${newStudent.last_name} added!`)
            setTimeout(() => {
                setNotification(null)
              }, 3000)
            event.target.reset()
        })
        
    }
    return (
        <div>
            <Notification notification = {notification} />
            <h1>Students</h1>
            <h2>Add a new student</h2>
            <StudentForm handleSubmit={addStudent}/>
            <h2>List of students</h2>
            <StudentTable students={students} />
        </div>
    );
}

export default Students;
