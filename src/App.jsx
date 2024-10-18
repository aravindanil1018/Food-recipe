import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Recipe from "./Component/Recipe.jsx"
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
 import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from './Component/Header.jsx'

function App() {
  

  return (
    <>
    <Header/>
    <Recipe/>
    
    </>
  )
}

export default App
