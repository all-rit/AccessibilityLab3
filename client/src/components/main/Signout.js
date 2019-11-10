import React from 'react';
import '../../assets/stylesheets/signout.css';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {actions as appActions} from '../../reducers/AppReducer';
const mapStateToProps = (state) => ({
    state: state
});
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(appActions, dispatch)
});
/*
Function for handling the signout of a user
*/
const handleSignout = (actions) => {
    fetch('http://all.rit.edu/Lab3/'+process.env.REACT_APP_SERVER_URL + '/logout', {
        method: 'GET',
        credentials:'include',
        headers:{'Access-Control-Allow-Origin':'*', 'Access-Control-Allow-Headers': 'X-Requested-With'}
    })
        .then(res => res.text())
        .then(() => window.location.href = 'http://all.rit.edu/Lab3/')
        .then(() => actions.updateUser(null))
        .catch(error => console.log(error))
};

/*
Component for the dropdown below a users name on the application
*/
const Signout = ({state, actions}) => {

    return (
        <div className='dropdown signinButton'>
            <p className='username'>Welcome, {state.user.firstname}! &#9662;</p>
            <div className='dropdown-content'>
                <button onClick={() => handleSignout(actions)} className='link'>
                    Signout
                </button>
            </div>
        </div>
    );
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Signout);