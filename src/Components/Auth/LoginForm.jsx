import React from 'react';
import {loginValidateInfo} from './validateInfo';
import {useLoginForm} from './useForm';
import './Form.css';
import { Button, Checkbox, InputAdornment, TextField } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import HttpsIcon from '@mui/icons-material/Https';

const Login = ({ submitForm, setLoginPage }) => {
  const { handleChange, handleSubmit, values, errors } = useLoginForm(
    submitForm,
    loginValidateInfo
  );

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (
    <div className='form-content-right'>
      <form onSubmit={(e) => handleSubmit(e)} className='form' noValidate>
        <h1>
          Get started with us today! Login  your account by filling out the
          information below.
        </h1>
        <div className='form-inputs' style={{paddingBottom: "20px"}}>
        <TextField id="standard-basic" label="Username" variant="standard" 
                  className='form-input'
                  type='text'
                  name='username'
                  placeholder='Mobile number as username'
                  value={values.username}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon />
                      </InputAdornment>
                    ),
                  }}
      />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs' style={{paddingBottom: "20px"}}>
        <TextField id="standard-basic" label="Password" variant="standard" 
                  className='form-input'
                  type='password'
                  name='password'
                  placeholder='Enter your password'
                  value={values.password}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <HttpsIcon />
                      </InputAdornment>
                    ),
                  }}
      />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div style={{display: 'flex', width:"100%", justifyContent:"left", marginInlineStart:"25%", padding: "2%"}} >
          <div style={{ color:"grey"}}>
          Remember me: 
          <Checkbox {...label} />   
          </div>      
        </div>

        <div style={{display: 'flex', width:"100%", justifyContent:"space-around"}}>
        <Button  type='submit' variant="contained"   sx={{
            borderRadius: 10,
            padding:2,
            paddingInline: 6,
            marginInline:2,
            background: '#b08bf8' ,
            ':hover': {
              bgcolor: '#b08bf8', // theme.palette.primary.main
              color: 'white',
            },
         }}>Login</Button>
        <Button variant="contained"   sx={{
          borderRadius: 10,
          padding:2,
          paddingInline: 6,
          background: '#b08bf8',
          ':hover': {
            bgcolor: '#b08bf8', // theme.palette.primary.main
            color: 'white',
          }, 
        }}>Reload Setting</Button>
        </div>
        <div style={{width:"100%", padding:"50px", color:"grey"}}>
        <p>Ver : 0.1.40(176)</p>
        <p>Sys : 7a0axcvgtdg</p>
        </div>
      </form>
    </div>
  );
};

export default Login;
