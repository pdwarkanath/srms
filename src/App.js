import Home from './components/Home'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Students from './components/Students'
import Courses from './components/Courses'
import Results from './components/Results'

import {
  Routes,
  Route,
  Link
} from "react-router-dom"
const App = () => {
  return (
    <Container>
      <Row>
        <Col xs={3}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/students">Students</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/results">Results</Link></li>
          </ul>
        </Col>
        <Col>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/students" element={<Students/>} />
          <Route path="/courses" element={<Courses/>} />
          <Route path="/results" element={<Results/>} />
        </Routes>
        </Col>
      </Row>
      
    </Container>
  );
}

export default App;
