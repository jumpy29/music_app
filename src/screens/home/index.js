import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Library from '../library'
import Feed from '../feed'
import Favorites from '../favorites'
import Player from '../player'
import Trending from '../trending'
import './home.css'
import Sidebar from '../../components/sidebar'
import Login from '../auth/login'

export default function Home() {
  return (
    <Router>
    <div className='main-body'>
      <Login />
      {/* <Sidebar/>
        <Routes>
            <Route path="/" element={<Library/>} />
            <Route path="/feed" element={<Feed/>} />
            <Route path="/favorites" element={<Favorites/>} />
            <Route path="/player" element={<Player/>} />
            <Route path="/trending" element={<Trending/>} />
        </Routes> */}
    </div>
    </Router>
  )
}
