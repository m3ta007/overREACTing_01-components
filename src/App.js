import React from 'react'
import UserProfile from './components/UserProfile'
import UserProfileClassBased from './components/UserProfileClassBased'
import User from './models/User'
import logo from './logo.svg'
import './App.css'
import LikeBtn from './components/LikeBtn'
import LikeBtnClassBased from './components/LikeBtnClassBased'
import PurchaseList from './components/PurchaseList'

function App() {
  const user = new User({
    name: 'Jane Doe',
    status: 'Developer',
    online: true,
    avatar: logo,
    hobbies: ['JS', 'Frontend', 'React'],
  })

  return (
    <div className="App">
      <UserProfile user={user} />
      <LikeBtn />
      <hr />
      <UserProfileClassBased user={user} />
      <LikeBtnClassBased />
      <hr />
      <section>
        <h2>Purchase List</h2>
        <PurchaseList />
      </section>
    </div>
  )
}

export default App
