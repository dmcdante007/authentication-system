import classes from './ProfileForm.module.css';
import {useRef, useContext } from 'react';
import AuthContext from '../../store/auth-context';

const ProfileForm = () => {
  const newPasswordInput = useRef();
  const ctx = useContext(AuthContext);

  const submitHandler = (e)=> {
    e.preventDefault();

    const enteredNewPassword = newPasswordInput.current.value;

    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAvOmNGLPl3_8el7x7ah_Ha8s9rF9P5pb4', {
      method: 'POST',
      body: JSON.stringify({
        idToken: ctx.token,
        password: enteredNewPassword,
        returnSecureToken: false
      })
    }).then(res=> {
      
    })
  }

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input ref={newPasswordInput} type='password' minLength="7" id='new-password' />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
