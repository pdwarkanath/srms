import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ResultForm = ({students, courses, handleSubmit}) => {
    const scores = ['A', 'B', 'C', 'D', 'E', 'F']
    return (
        
        <Form onSubmit={handleSubmit}>
            <Row className="my-2">
                <Col xs={2}>
                    <Form.Label for="course" className="my-1">Course: </Form.Label>
                </Col>
                <Col>
                    <Form.Select id="course" name="course_id">
                        {courses.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                    </Form.Select>
                </Col>
            </Row>
            <Row className="my-2">
                <Col xs={2}>
                    <Form.Label for="student" className="my-1">Student: </Form.Label>
                </Col>
                <Col>
                    <Form.Select id="student" name="student_id">
                        {students.map(s => <option key={s.id} value={s.id}>{s.first_name} {s.last_name}</option>)}
                    </Form.Select>
                </Col>
            </Row>
            <Row className="my-2">
                <Col xs={2}>
                    <Form.Label for="score" className="my-1">Score: </Form.Label>
                </Col>
                <Col>
                    <Form.Select id="score" name="score">
                        {scores.map((s, idx) => <option key={idx} value={s}>{s}</option>)}
                    </Form.Select>
                </Col>
            </Row>
            <Button type="submit" className="my-3">Submit</Button>
        </Form>
    )
}

export default ResultForm