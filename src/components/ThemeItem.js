import React from 'react';
// import PropTypes from 'prop-types';

const ThemesItem = ({ color, img, changeColor }) => {
  return (
    <img
      src={img}
      alt=""
      className='theme__img'
      onClick={() => {
        changeColor(color)
      }} />
    );
  };

// ThemesItem.propTypes = {
//   color: PropTypes.string.isRequired,
//   img: PropTypes.string.isRequired,
//   changeColor: PropTypes.func.isRequired
// };

export default ThemesItem;




// import React from 'react';

// const ThemesItem = ({color, img, changeColor}) => {
//   return (
//    <img src={img} alt="" className='theme__img' onClick={()=>
//     {changeColor(color)}} />
//    )
// }

// export default ThemesItem;
