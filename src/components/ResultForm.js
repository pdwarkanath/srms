const ResultForm = ({students, courses, handleSubmit}) => {
    const scores = ['A', 'B', 'C', 'D', 'E', 'F']
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <p>Course: 
                <select name="course_id">
                    {courses.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                </select>
            </p>
            <p>Student: 
                <select name="student_id">
                    {students.map(s => <option key={s.id} value={s.id}>{s.first_name} {s.last_name}</option>)}
                </select>
            </p>
            <p>Score: 
                <select name="score">
                    {scores.map((s, idx) => <option key={idx} value={s}>{s}</option>)}
                </select>
            </p>
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ResultForm