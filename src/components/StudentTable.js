
const StudentTable = ({students}) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Date of Birth</th>
                </tr> 
            </thead>
            <tbody>
            {students.map(s=><tr key={s.id}><td>{s.first_name} {s.last_name}</td><td>{s.birth_date}</td></tr>)}
            </tbody>
        </table>
    );
}

export default StudentTable;
