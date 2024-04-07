import './Header.css'


const Header = () => {
  return(
    <div 
      className='header-container'
    >

      {/* Name of the site */}
      <h1>
        CAPITAL CITIES 
          <br/>
        GIS APP
      </h1>    

      {/* More details */}
      <h2>
        Click on a red dot of a Capital City 
          <br/> 
        for information
      </h2>  

    </div>
  )
}

export default Header