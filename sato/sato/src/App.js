import React from 'react';
import './App.css';
import Navbar from './components/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages';
import About from './pages/about';
import Events from './pages/events';
import AnnualReport from './pages/annual';
import Teams from './pages/team';
import Blogs from './pages/blog';
import SignUp from './pages/signup';

function App() {
return (
	<Router>
	<Navbar />
    <Routes>
      {/* <Route path='/' exact component={<Home/>} /> */}
      <Route path='/about' component={<About/>} />
      <Route path='/events' component={<Events/>} />
      <Route path='/annual' component={<AnnualReport/>} />
      <Route path='/team' component={<Teams/>} />
      <Route path='/blogs' component={<Blogs/>} />
      <Route path='/sign-up' component={<SignUp/>} />
    </Routes>
	</Router>
);
}

export default App;
