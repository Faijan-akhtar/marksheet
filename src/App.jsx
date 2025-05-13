import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css'
import Qr from "./Components/Qr"
import StudentTable from "./Components/Studenttable"

function App() {
 

  return (
    <>
    <BrowserRouter>
    <Routes>
      
      <Route path="/qr" element={<Qr />} />

        <Route path="/" element={<StudentTable />}/>
        </Routes>
        </BrowserRouter>
      
    </>
  )
}

export default App
