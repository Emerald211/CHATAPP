import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillChatDotsFill } from 'react-icons/bs'

const Sidenav = () => {

    const sidebars = [
        {
            name: "Home",
            path: '/home'
       },
       {
        name: "Chats",
        path: '/home/chat'
        },
        {
            name: "Profile",
            path: '/home/profile'
       },
    ]


  return (
      <div className=' sidenav-desktop bg-black flex flex-col gap-10 py-12 items-center text-white'>
          <div className=' mb-5 flex items-center gap-1'>
              <h1>Lets Chat</h1>
              <BsFillChatDotsFill />
          </div>
          {
              sidebars.map((eachitem) => {
                  return (
                      <Link className=' sidenav-link' to={eachitem.path}> { eachitem.name}</Link>
                  )
              })
        }      
    </div>
  )
}

export default Sidenav