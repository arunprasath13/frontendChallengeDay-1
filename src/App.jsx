import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import logo from "./profile-thumbnail.png"
function App() {
 

  return (
    <div class="full">
      <div class="modal">
        <div class="modal_profile">
          <div class="profile">
            <img src={logo} />
          </div>
          <div class="profile_name">
            <h2>Sarah Dole</h2>
            <p class="tag">@sarahdole</p>
          </div>
        </div>
        <div class="modal_desc">
          <p>
            I've been searching for high-quality abstract images for my design<br></br>
            projects, and I'm thrilled to have found this platform. The variety
            and depth of creativity are astounding!
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
