
const CourseTable = ({courses}) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                </tr> 
            </thead>
            <tbody>
            {courses.map(s=><tr key={s.id}><td>{s.name}</td></tr>)}
            </tbody>
        </table>
    );
}

export default CourseTable;
