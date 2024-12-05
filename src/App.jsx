import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'

function App() {

	return (
		<>
		<Link to={"/"}>home</Link>
		<Link to={"/about"}>About</Link>
			<Routes>
				<Route path='/' element={<Home/>}/>
				<Route path='/about' element={<About/>}/>
			</Routes>
		</>
	)
}

export default App
