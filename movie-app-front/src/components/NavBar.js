import {NavLink} from 'react-router-dom'

const NavBar = () => {

  //TO DO: LOGIN COMPONENT  {/* <Login /> */}

  return (
      <div className="navBar">

          <span><NavLink to='/' ><i class="fa-solid fa-house"></i></NavLink></span>
          <span><NavLink className='homeRedirect' to='/' >Movie Finder</NavLink></span>
          <span><NavLink className="auth" to="/auth/login" ><i class="fa-solid fa-arrow-right-to-bracket"></i></NavLink>
          <NavLink className="auth" to="/auth/register"><i class="fa-solid fa-circle-plus"></i></NavLink></span>

{/*           
          <span><a href="http://localhost:3000/" className="homeRedirect"><i class="fa-solid fa-house"></i></a></span>
          <span><a href="http://localhost:3000/" className="homeRedirect">Movies Finder</a></span>
          <span><i class="fa-solid fa-lines-leaning"></i></span> */}
      </div>
  )  
}



export default NavBar