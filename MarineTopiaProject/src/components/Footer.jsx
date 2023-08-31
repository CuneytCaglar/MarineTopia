import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <>
      <div className="row">
            <div className="col-sm-7">
              <div>
              <form>
            <div className="mb-3 formFooter">
            <label htmlFor="exampleInputEmail1" className="form-label connect">CONNECT WITH US</label>
             <input type="email" className="form-control" style={{background:"transparent"}} id="exampleInputEmail1" placeholder="Your E-mail" aria-describedby="emailHelp"></input>
            </div>
            <div className="footer-social">
            <a href='#'><img className="social"  src=".\src\images\face.png" /></a>
            <a href='#'><img className="social"  src=".\src\images\twitter.png" /></a>
            <a href='#'><img className="social"  src=".\src\images\youtube.png" /></a>
            <a href='#'><img className="social"  src=".\src\images\insta.png" /></a>

            </div>
             </form>
            </div>
            </div>
            
            
            <div className="col-sm-5">
              <div>
              <div className="card cardFooter mb-3">
              <div className="row g-0">
               <div className="col-md-6">
              <img  className="marine" src=".\src\images\Group22.png" />
              <p className="footerCardp" >Vestibulum sollicitudin auctor dui a aliquam. Donec ac porta massa. Quisque tempus est ut leo interdum, eu facilisis augue</p>

               </div>
               <div className="col-md-6">
                <div className="card-body footer-card-body">
                 <ul className="footerUl">
                <li><NavLink className="btn nav-link"  to="/">Home</NavLink></li><br />
                <li ><NavLink className="btn nav-link"  to="/donate">Donate</NavLink></li> <br />
                <li> <NavLink className="btn nav-link"  to="/aboutus">About us</NavLink></li>
                </ul> 
                

      </div>
    </div>
  </div>
</div>
            </div>
            </div>
            <footer className="footerClass d-flex flex-wrap justify-content-between align-items-center py-3 border-top bg-dark">
                 <p className="footerLast col-md-4 mb-0">MarinaTopia - © 2023 All Rights Reserved</p>
                 </footer>
      </div>
    </>
  )
}
