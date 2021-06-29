import React from 'react';
//import md5 from 'md5';

// Aprende más del Gravatar en: http://gravatar.com
function Gravatar(props) {
 // const email = props.email;
  //const hash = md5(email);

  return (
    <img
      className={props.className}
      src={`https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y`}
      alt="Avatar"
    />
  );
}

export default Gravatar;
