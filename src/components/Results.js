import axios from 'axios'
import { useState, useEffect } from 'react'
import ResultForm from './ResultForm'
import ResultTable from './ResultTable'
import Notification from './Notification'

const Results = () => {
    const [students, setStudents] = useState([])
    const [courses, setCourses] = useState([])
    const [results, setResults] = useState([])
    const [notification, setNotification] = useState(null)
    
    useEffect(() => {
        axios.get('/students').then(res => setStudents(res.data))
        axios.get('/courses').then(res => setCourses(res.data))
        axios.get('/results').then(res => setResults(res.data))
    }, [])


    const addResult = (event) => {
        event.preventDefault()
        const newResult = {
            course_id: Number(event.target.course_id.value),
            student_id: Number(event.target.student_id.value),
            score: event.target.score.value,
        }
        const existingResult = results.find(r=>r.course_id===newResult.course_id && r.student_id===newResult.student_id)
        if (!existingResult) {
            axios.post('/results', newResult).then(res => {
                setResults([...results, res.data])
                setNotification(`Score added!`)
                setTimeout(() => {
                    setNotification(null)
                  }, 3000)
                event.target.reset()
            })
        } else {
            axios.put(`/results/${existingResult.id}`, newResult).then(res => {
                setResults([...results.filter(r=>r.id!==existingResult.id), res.data])
                setNotification(`Score updated!`)
                setTimeout(() => {
                    setNotification(null)
                  }, 3000)
                event.target.reset()
            })
        }
        
        
    }
    return (
        <div>
            <Notification notification = {notification} />
            <h1>Results</h1>
            <h2>Add a new result</h2>
            <ResultForm students={students} courses={courses} handleSubmit={addResult}/>
            <h2>List of results</h2>
            <ResultTable students={students} courses={courses} results={results}/>

        </div>
    );
}

export default Results;
