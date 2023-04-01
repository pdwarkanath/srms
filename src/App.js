import Home from './components/Home'
import Students from './components/Students'
import Courses from './components/Courses'
import Results from './components/Results'

import {
  Routes,
  Route,
  Link
} from "react-router-dom"
import './app.css'
const App = () => {
  return (
    <div className="grid">
      <div className="left-pane">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/students">Students</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/results">Results</Link></li>
        </ul>
      </div>
      <div className="main-content">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/students" element={<Students/>} />
        <Route path="/courses" element={<Courses/>} />
        <Route path="/results" element={<Results/>} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
