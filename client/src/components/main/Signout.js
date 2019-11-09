import React from 'react';
import '../../assets/stylesheets/signout.css';

/*
Function for handling the signout of a user
*/
const handleSignout = () => {
    fetch('http://all.rit.edu/Lab3/'+process.env.REACT_APP_SERVER_URL + '/logout', {
        method: 'GET',
        credentials:'include',
        headers:{'Access-Control-Allow-Origin':'*', 'Access-Control-Allow-Headers': 'X-Requested-With'}
    })
        .then(res => res.text())
        .then(() => window.location.href = 'http://all.rit.edu/Lab3/')
        .catch(error => console.log(error))
};

/*
Component for the dropdown below a users name on the application
*/
const Signout = ({user}) => {

    return (
        <div className='dropdown signinButton'>
            <p className='username'>Welcome, {user}! &#9662;</p>
            <div className='dropdown-content'>
                <button onClick={() => handleSignout()} className='link'>
                    Signout
                </button>
            </div>
        </div>
    );
};

export default Signout;