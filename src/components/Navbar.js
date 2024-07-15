import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { links } from '../data';
import "./navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className='nav'>
      <div className={`${showMenu ? 'nav__menu show-menu' : 'nav__menu'}`}>
        <ul className='nav__list'>
          {links.map(({ name, icon, path }, index) => {
            return (
              <li className='nav__item' key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive ? 'nav__link active-nav' : 'nav__link'
                  }
                  onClick={() => setShowMenu(!showMenu)} // Corrected here
                >
                  {icon}
                  <h3 className='nav__name'>{name}</h3>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      <div
        className={`${showMenu ? 'nav__toggle animate-toggle' : 'nav__toggle'}`}
        onClick={() => setShowMenu(!showMenu)} // Corrected here
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;






// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import { links } from '../data';
// import "./navbar.css"



// const Navbar = () => {
//   const [showMenu, setShowMenu] = useState(false);

//   return (
//     <nav className='nav'>
//      <div className={`${showMenu ? 'nav_ _menu show-menu' : 'nav_ _menu'}`}>
//          <ul className='nav_ _list'>
//           {links.map(({ name, icon, path }, index) => {
//             return (
//               <li className='nav_ _item' key={index}>
//                 <NavLink
//                   to={path}
//                   className={({isActive}) =>
//                     isActive ? 'nav_ _link active-nav' : 'nav_ _link'
//                   }
//                   onclick={() => setShowMenu(!showMenu)}
//                 >
//                   {icon}
//                   <h3 className='nav_ _name'> {name}</h3>
//                 </NavLink>
//               </li>
//             );
//           })}
//         </ul>
//       </div>

//       <div className={`${showMenu ? 'nav__toggle animate-toggle' : 'nav__toggle'}
//       `} 
//         onclick={() => setShowMenu(!showMenu)}>

//         <span></span>
//         <span></span>
//         <span></span>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
