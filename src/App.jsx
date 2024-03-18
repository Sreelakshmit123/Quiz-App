
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Quiz from './Components/Quiz'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Quiz />}/>
    </Routes>
    </>
  )
}

export default App
