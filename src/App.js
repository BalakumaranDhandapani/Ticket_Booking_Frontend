import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Portal from './Components/Portal';
import Login from './Components/Login';
import BookTicket from './Components/BookTicket';
import MyTickets from './Components/MyTickets';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Portal />} />
        <Route path='book-ticket/:_id' element={<BookTicket />} />
        <Route path='my-tickets' element={<MyTickets />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
