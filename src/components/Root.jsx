import React from 'react';
import App from './App';
import NavigationBar from './NavigationBar';
import About from './pages/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import NoMatch from './pages/NoMatch';

export default function Root() {
  return (
    <Router>
      <div className='todo-app-container'>
        <NavigationBar />
        <div className='content'>
          <Routes>
            <Route path='/' element={<App />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/blog' element={<Blog />}></Route>
            <Route path='/blog/:id' element={<BlogPost />}></Route>
            <Route path='*' element={<NoMatch />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}
