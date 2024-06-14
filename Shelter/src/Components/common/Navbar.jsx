import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 




const Navbar = () => {


  return (
    <nav className="navbar">
     
      <div className="navbar-brand">
        <Link to="/">
         <img src="logo.png" height="70px" width="150px" alt="Logo" className="logo" />
         </Link>
      </div>



   

<div className="navbar-links">
  
  <li>
    <Link to="/">Home</Link>
  </li>
  <li>
    <Link to="/about">About</Link>
  </li>
  <li>
    <Link to="/listing">Listing</Link>
  </li>
  <li>
    <Link to="/services">Co Management</Link>
  </li>

  <li>
    <Link to="/contact">Contact</Link>
  </li>
</div>
<ul>
 <Link to="/login">
   <button>Login</button>
 </Link>
 <Link to="/register">
   <button>Sign Up</button>
 </Link>
 <Link to="/hostdashboard">
   <button>Host</button>
 </Link>
</ul>

    </nav>
  );
};




export default Navbar;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="navbar-brand">
//         <Link to="/">
//           <img src="favicon.png" height="50px" width="50px" alt="Logo" className="logo" />
//         </Link>
//       </div>

//       <div className="navbar-links">
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/listing">Listing</Link>
//           </li>
//           <li className="services">
//             <button>Services</button>
//             <ul className="dropdown">
//               <li>
//                 <Link to="/service1">Co Management</Link>
//               </li>
//               {/* Add more service links as needed */}
//             </ul>
//           </li>
//           <li>
//             <Link to="/contact">Contact</Link>
//           </li>
//         </ul>
//       </div>

//       <div className="navbar-icons">
//         <ul>
//           <li>
//             <Link to="/login">Login</Link>
//           </li>
//           <li>
//             <Link to="/register">Sign Up</Link>
//           </li>
//           <li>
//             <Link to="/hostdashboard">Host</Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

