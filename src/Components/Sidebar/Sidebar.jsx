import React from 'react'
import "./_sidebar.scss"
import {
  MdOutlineSubscriptions,
    MdExitToApp,
    MdHistory,
    MdOutlineVideoLibrary,
    MdHome,
    MdOutlineWatchLater
} from "react-icons/md"
import {BiLike} from "react-icons/bi"
import { useDispatch } from 'react-redux'
import { logOut } from '../../redux/actions/auth.action'

const Sidebar = ({sidebar, handleSidebarToggle}) => {

  const dispatch = useDispatch()

  const handleLogOut = () => {

    dispatch(logOut())
  }

  return (
    <div className={sidebar? "sidebar open" : "sidebar"} onClick={() => handleSidebarToggle(false)}>
      <li>
        <MdHome size={23} />
        <span>Home</span>
      </li>

      

      <li>
        <MdOutlineSubscriptions size={23} />
        <span>Subscriptions</span>
      </li>

      

      <li>
        <BiLike size={23} />
        <span>Liked Videos</span>
      </li>

      

      <li>
        <MdHistory size={23} />
        <span>History</span>
      </li>

      

      <li>
        <MdOutlineVideoLibrary size={23} />
        <span>Library</span>
      </li>

      

      <li>
        <MdOutlineWatchLater size={23} />
        <span>Watch Later</span>
      </li>

      <hr />

      <li onClick={handleLogOut}>
        <MdExitToApp size={23} />
        <span>Log Out</span>
      </li>

      <hr />
    </div>
  )
}

export default Sidebar
