
const ResultTable = ({students, courses, results}) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Course</th>
                    <th>Student</th>
                    <th>Score</th>
                </tr> 
            </thead>
            <tbody>
               {
                results.map(r => {
                    const course = courses.find(c=>c.id===r.course_id)
                    const student = students.find(s=>s.id===r.student_id)
                    return(
                    <tr key={r.id}>
                        <td>
                            {course.name}
                        </td>
                        <td>
                            {student.first_name} {student.last_name}
                        </td>
                        <td>
                            {r.score}
                        </td>
                    </tr>
                )})
               }
            </tbody>
        </table>
    );
}

export default ResultTable;
