import { Table } from 'react-bootstrap'
const CourseTable = ({courses}) => {
    return (
        <Table bordered responsive>
            <thead>
                <tr>
                    <th>Name</th>
                </tr> 
            </thead>
            <tbody>
            {courses.map(s=><tr key={s.id}><td>{s.name}</td></tr>)}
            </tbody>
        </Table>
    );
}

export default CourseTable;
