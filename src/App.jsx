import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home/Home'
import Service from './pages/Service/Service'

function App() {

	return (
		<>
			<Routes>
				<Route path='/' element={<Home/>}/>
				<Route path='/service' element={<Service/>}/>
			</Routes>
		</>
	)
}

export default App
