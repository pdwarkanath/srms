import axios from 'axios'
import { useState, useEffect } from 'react'
import CourseForm from './CourseForm'
import Notification from './Notification'
import CourseTable from './CourseTable'

const Courses = () => {
    const [courses, setCourses] = useState([])
    const [notification, setNotification] = useState(null)
    useEffect(() => {
        axios.get('/courses').then(res => setCourses(res.data))
    }, [])

    const addCourse = (event) => {
        event.preventDefault()
        const newCourse = {
            name: event.target.name.value,
        }
        axios.post('/courses', newCourse).then(res => {
            setCourses([...courses, res.data])
            setNotification(`${newCourse.name} added!`)
            setTimeout(() => {
                setNotification(null)
              }, 3000)
            event.target.reset()
        })
        
    }
    return (
        <div>
            <Notification notification = {notification} />
            <h1>Courses</h1>
            <h2>Add a new course</h2>
            <CourseForm handleSubmit={addCourse}/>
            <h2>List of courses</h2>
            <CourseTable courses={courses} />
        </div>
    );
}

export default Courses;
