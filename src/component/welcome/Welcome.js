import React from 'react'
import { useNavigate } from 'react-router-dom'
import welcomeIcon from '../images/welcome.jpg'

const Welcome = () => {

  let navigate = useNavigate()
  return (
    <div className=' flex w-full h-full flex-col justify-center items-center'>
      <img className=' lg:w-[50%]' src={welcomeIcon} alt="" />
     <div>
        <button onClick={() => navigate("/home/chat")} className=' text-white font-bold bg-[#AE04B4] px-3 py-4'>Go to Chat</button>
      </div>
    </div>
  )
}

export default Welcome