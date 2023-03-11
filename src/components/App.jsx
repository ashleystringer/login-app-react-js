import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from 'react-bootstrap';
import NavBar from './NavBar';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Logout from './Logout';
import Signup from './Signup';
import Confirm from './Confirm';
import Error from './Error';

/*
  Container (?)
    Route
      Navigation Bar
*/


function App() {
  return (
    <div className="App">
      <Container>
        <NavBar />
        <Routes>
          <Route path="/" element={<h1>Home</h1>}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Signup />}/>
          <Route path="/logout" element={<Logout />}/>
          <Route path="/success" element={<Confirm/>}/>
          <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
      </Container>

      <Error/>
    </div>
  )
}

export default App
