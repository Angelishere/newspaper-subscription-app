import logo from './logo.svg';
import './App.css';
import AddSubscriber from './components/AddSubscriber';
import SearchSubscriber from './components/SearchSubscriber';
import DeleteSubscriber from './components/DeleteSubscriber';
import ViewSubscriber from './components/ViewSubscriber';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path='/' element={<Home/>} />
        <Route path='/add' element={<AddSubscriber/>} />
        <Route path='/search' element={<SearchSubscriber/>} />
        <Route path='/delete' element={<DeleteSubscriber/>} />
        <Route path='/view' element={<ViewSubscriber/>} />


      </Routes>

    </BrowserRouter>
  );
}

export default App;
