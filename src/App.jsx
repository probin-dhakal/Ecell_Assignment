
import './App.css'

import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import About from './components/about/About'
import Home from './components/home/Home'
import Project from './components/project/Project'
import Contact from './components/contacts/Contact'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
 

  return (
   <>
    <Router>
       
      
     
      <div className="app-container">
      <Header />
      <div className="content-wrap">

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contacts" element={<Contact />}  />
        </Routes>
      
     </div>
      <Footer />
   </div>
  </Router>
   </>
    
     
      

  )
}

export default App
