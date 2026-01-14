import './App.css'
import { HashRouter as Router ,Routes,Route } from 'react-router-dom'
import { useState } from 'react'
import Homepage from '../src/pages/homepage'
import Servicepage from '../src/pages/servicepage'
import Aboutpage from '../src/pages/aboutpage'
import Projectpage from '../src/pages/projectpage'
import Sustainabilitypage from './pages/sustainabilitypage'
import Journalpage from './pages/journalpage'
import Contactpage from './pages/contactpage'
import PageLoader from './components/PageLoader'
// import Journalpage from './pages/journalpage'



function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

return(
  <>
    <PageLoader onComplete={handleLoadingComplete} />
    {!isLoading && (
      <Router>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/about' element={<Aboutpage/>}/>
          <Route path='/project' element={<Projectpage/>}/>
          <Route path='/service' element={<Servicepage/>}/>
          <Route path='/sustainability' element={<Sustainabilitypage/>}/>
          <Route path='/journal' element={<Journalpage/>}/>
          <Route path='/contact' element={<Contactpage/>}/>
        </Routes> 
      </Router>
    )}
  </>
)
 
}

export default App
