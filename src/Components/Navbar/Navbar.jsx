import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import add from '../../Images/user.png';
import rem from '../../Images/check-out.png';
import cart from '../../Images/online-shopping.png';
import logo from '../../Images/ZENS logo TM CDR (1).png';
import "./Navbar.css";

const Navbar = () => {
  const [login, setLogin] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  useEffect(() => {
    setLogin(sessionStorage.getItem("login") === "true");
  }, []);

  const handleLinkClick = () => {
    setIsNavbarOpen(false);
  };

  return (
    <>
      {/* <!-- Navbar Start --> */}
      <div className="container-fluid sticky-top" style={{ backgroundColor: "#D10054" }}>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light p-0">
            <Link to="/" className="navbar-brand">
              <img src={logo} alt="" style={{ height: "42px" }} />
            </Link>
            <button
              type="button"
              className="navbar-toggler ms-auto me-0"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded={isNavbarOpen}
              aria-label="Toggle navigation"
              onClick={() => setIsNavbarOpen(!isNavbarOpen)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${isNavbarOpen ? 'show' : ''}`} id="navbarCollapse">
              <div className="navbar-nav ms-auto">
                <Link to="/" className="nav-item nav-link active headertext-dark" onClick={handleLinkClick}>Home</Link>
                <Link to="/product" className="nav-item nav-link" onClick={handleLinkClick}>Products</Link>
                <Link to="/shop" className="nav-item nav-link" onClick={handleLinkClick}>Shop</Link>
                <Link to="/feature" className="nav-item nav-link" onClick={handleLinkClick}>Features</Link>
                <Link to="/contact" className="nav-item nav-link" onClick={handleLinkClick}>Contact</Link>
                <Link to="/cart" onClick={handleLinkClick}>
                  <img src={cart} alt="Cart" style={{ height: 30 }} />
                </Link>
                &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                {login ? (
                  <Link to="/profile" onClick={handleLinkClick}>
                    <img src={add} alt="Profile" style={{ height: 30 }} /> <sup>2</sup>
                  </Link>
                ) : (
                  <Link to="/login" onClick={handleLinkClick} >
                    <img src={add} alt="Sign Up" style={{ height: 30 ,color:"white" }} />
                  </Link>
                )}
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* <!-- Navbar End --> */}
    </>
  );
};

export default Navbar;







// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import add from '../../Images/user.png';
// import rem from '../../Images/check-out.png';
// import cart from '../../Images/online-shopping.png';
// import logo from '../../Images/ZENS logo TM CDR (1).png'
// import "./Navbar.css"

// const Navbar = () => {
//   const [login, setLogin] = useState(false);

//   useEffect(() => {
//     setLogin(sessionStorage.getItem("login") === "true");
//   }, []);

//   return (
//     <>
//       {/* <!-- Navbar Start --> */}
//       <div className="container-fluid sticky-top">
//         <div className="container">
//           <nav className="navbar navbar-expand-lg navbar-light p-0">
//             <Link to="/" className="navbar-brand">
//               {/* <h2 className="text-dark">URZAA</h2> */}
//               <img src={logo} alt="" style={{height:"42px"}}/>
//             </Link>
//             <button
//               type="button"
//               className="navbar-toggler ms-auto me-0"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarCollapse"
//             >
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarCollapse">
//               <div className="navbar-nav ms-auto">
//                 <Link to="/" className="nav-item nav-link active headertext-dark">Home</Link>
//                 {/* <Link to="/about" className="nav-item nav-link">About</Link> */}
//                 <Link to="/product" className="nav-item nav-link">Products</Link>
//                 <Link to="/shop" className="nav-item nav-link">Shop</Link>
//                 <Link to="/feature" className="nav-item nav-link">Features</Link>
//                 {/* <Link to="/how_to_use" className="nav-item nav-link">How To Use</Link> */}
//                 {/* <div className="nav-item dropdown">
//                   <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
//                   <div className="dropdown-menu bg-light mt-2">
//                     <Link to="/feature" className="dropdown-item">Features</Link>
//                     <Link to="/how_to_use" className="dropdown-item">How To Use</Link>
//                     <Link to="/testimonial" className="dropdown-item">Testimonial</Link>
//                     <Link to="/blog" className="dropdown-item">Blog Articles</Link>
//                   </div>
//                 </div> */}
//                 <Link to="/contact" className="nav-item nav-link">Contact</Link>
//                   <Link to="/cart">
//                     <img src={cart} alt="Cart" style={{ height: 30 }} />
//                   </Link>
//                 &nbsp;&nbsp;&nbsp;
//                 {login ? (
//                   <Link to="/profile">
//                     <img src={add} alt="Profile" style={{ height: 30 }} />
//                   </Link>
//                 ) : (
//                   <Link to="/signup">
//                     <img src={add} alt="Sign Up" style={{ height: 30 }} />
//                   </Link>
//                 )}
//               </div>

//             </div>
//           </nav>
//         </div>
//       </div>
//       {/* <!-- Navbar End --> */}
//     </>
//   );
// };

// export default Navbar;
