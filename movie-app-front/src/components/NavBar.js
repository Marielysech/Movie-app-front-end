import {NavLink, useNavigate} from 'react-router-dom'
import React, {useState, useContext} from 'react'
import {useUserContext, UserContext} from '../contexts/UserContext'



const NavBar = () => {

  const userInfo = useUserContext()
  const navigate = useNavigate();

  //TO DO: LOGOUT COMPONENT  {/* <Login /> */}

  const logout = (event) => {

    event.preventDefault();

    const requestOptions = {
        method: 'GET',
        credentials: "include",
        headers: { 'Content-Type': 'application/json'},
    
      };

    fetch('/auth/logout', requestOptions)
    .then(res => console.log('user disconnected'))
    navigate('/', {replace:true})
    userInfo.setUserInfo({name: "", email: ""})
  }

  return (
      <div className="navBar">

          <span><NavLink to='/' ><i className="fa-solid fa-house"></i></NavLink></span>

          <span><NavLink className='homeRedirect' to='/' >Movie Finder</NavLink></span>
          
          <div className='userLinkContainer'>
            {userInfo.userInfo.name !== "Stranger" ? 
            <div>
            <NavLink className="favRedirect" to="/favorites"><i className="fa-solid fa-star"></i>Favorites</NavLink>
            <button onClick={logout} className="favRedirect" >Logout</button>
            </div> :
            <div>
              <NavLink className="auth" to="/auth/login" ><i className="fa-solid fa-arrow-right-to-bracket"></i></NavLink>
              <NavLink className="auth" to="/auth/register"><i className="fa-solid fa-circle-plus"></i></NavLink> 
            </div>}
            
          </div>

{/*           
          <span><a href="http://localhost:3000/" className="homeRedirect"><i class="fa-solid fa-house"></i></a></span>
          <span><a href="http://localhost:3000/" className="homeRedirect">Movies Finder</a></span>
          <span><i class="fa-solid fa-lines-leaning"></i></span> */}
      </div>
  )  
}



export default NavBar