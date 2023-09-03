import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import MoviesList from './components/MoviesList/MoviesList';
import About from './components/About/About';
import CreateMovie from './components/CreateMovie/CreateMovie';
import UpdateMovie from './components/UpdateMovie/UpdateMovie';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
    <Router>
      <Header/>
      <Routes>
        <Route path="/about" element={<About/>} />
        <Route path="/movie/list" element={<MoviesList/>} />
        <Route path="/movie/update/:id" element={<UpdateMovie/>} />
        <Route path="/movie/create" element={<CreateMovie/>} />
      </Routes>
    </Router>
    
    </div>
  );
}

export default App;
