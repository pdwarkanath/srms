import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CourseForm = ({handleSubmit}) => {
    return (
        <Form onSubmit={handleSubmit}>
            <Row className="my-2">
                <Col xs={2}>
                    <Form.Label for="name" className="my-1">Name: </Form.Label>
                </Col>
                <Col>
                    <Form.Control id="name" name="name" required/>
                </Col>
            </Row>
        <Button type="submit" className="my-3">Submit</Button>
        </Form>
    )
}

export default CourseForm