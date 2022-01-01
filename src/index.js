import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from "./App";
import HomePage from "./HomePage";
import Resume from "./Resume";
import Header from './Header'
import Nav from './Nav'
import Footer from './Footer'
import Work from './Work'
import 'bootstrap/dist/css/bootstrap.min.css';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>

<Header />
        <Nav />
    <Routes>
     <Route path='/' element={<App />} />
       <Route path='/homepage' element={<HomePage />} />
       <Route path='/resume' element={<Resume />} />
       <Route path='/work' element={<Work />} />
          </Routes>
      <Footer />
  </BrowserRouter>,
  rootElement
);