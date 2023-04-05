import React, { useEffect } from 'react'
import "./loginPage.scss"
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/actions/auth.action'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const dispatch = useDispatch()
const handleLogin = () => {
dispatch(login())
}

const accessToken = useSelector(state=> state.auth.accessToken)
const navigate = useNavigate()

useEffect(() => {
if(accessToken){
  navigate("/")
}
},[accessToken,navigate])

  return (
    <div className="login">
        <div className="login__container">
            <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="" />
            <button onClick={handleLogin}>Login With google</button>
            <p>Mvend Level-Up Task</p>
        </div>
    </div>
  )
}

export default LoginPage
