import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const StudentForm = ({handleSubmit}) => {
    let date = new Date()
    date.setFullYear(date.getFullYear()-10)
    const maxDate = date.toJSON().slice(0,10)
    return (
        <Form onSubmit={handleSubmit}>
            <Row className="my-2">
                <Col xs={2}>
                    <Form.Label for="first_name" className="my-1">First Name: </Form.Label>
                </Col>
                <Col>
                    <Form.Control id="first_name" name="first_name" required/>
                </Col>
            </Row>
            <Row className="my-2">
                <Col xs={2}>
                    <Form.Label for="last_name" className="my-1">Last Name: </Form.Label>
                </Col>
                <Col>
                    <Form.Control id="last_name" name="last_name" required/>
                </Col>
            </Row>
            <Row className="my-2">
                <Col xs={2}>
                    <Form.Label for="birth_date" className="my-1">Date of Birth: </Form.Label>
                </Col>
                <Col>
                    <Form.Control id="birth_date" name="birth_date" type="date" max={maxDate} required/>
                </Col>
            </Row>
        <Button type="submit" className="my-3">Submit</Button>
        </Form>
    )
}

export default StudentForm