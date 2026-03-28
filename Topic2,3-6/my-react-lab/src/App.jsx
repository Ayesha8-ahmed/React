import { useState } from 'react'
import Header from './components/Header.jsx'
import Child from './components/Child'
import Input from './components/Input'
import Display from './components/Display'
import ColorPicker from './components/ColorPicker'
import Toggle from './components/Toggle'
import laptopImg from './assets/laptop.png'
import phoneImg from './assets/phone.jpg'
import StudentList from './components/StudentList.jsx'
import ProductCard from './components/ProductCard'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import WelcomeMessage from './components/WelcomeMessage'
import Parent from './components/Parent'

import './App.css'

function App() {
  const [theme, setTheme] = useState("light")
  const [text, setText] = useState("")


  const students = [
    { name: "Ali", age: 20 },
    { name: "Sara", age: 22 },
    { name: "Ahmed", age: 19 }
  ]

  return (
    <>
      
      <Header />
      <Navbar />
      <Hero />
      <Parent/>
      <WelcomeMessage />
      <ColorPicker />
      <Toggle />
      

      <button onClick={() => setTheme("dark")}>Dark</button>
      <button onClick={() => setTheme("light")}>Light</button>

      <Child theme={theme} />

      <Input setText={setText} />
      <Display text={text} />

      <section id="center">
        <div>
          <h1>PRODUCTS</h1>
          <ProductCard 
           title="Laptop" 
           price={80000} 
           image={laptopImg} 
          />

          <ProductCard 
           title="Phone" 
           price={30000} 
           image={phoneImg} 
          />
          
          <h1>STUDENTS</h1>
          <StudentList students={students} />
        </div>
   
      <Footer /> 
      </section>

      <section id="spacer"></section>
    
    </>
  )
}

export default App



