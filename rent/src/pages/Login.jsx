import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {login as authLogin} from "../store/authSlice"
// import {Button, Input, Logo} from './index'
import Button from '../components/Button'
import Input from '../components/Input'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import { useForm} from 'react-hook-form'

import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState("")

    const login = async(data) => {
        setError("")
        try{
            const session = await authService.login(data)
            if(session){
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(authLogin(userData));
                navigate("/")
                // navigate se programmatically app use kahi aur bhej sakte ho
            }
        }catch(error){
            setError(error.message)
        }
    }

  return (
    <MDBContainer className='my-5'>
      <MDBCard>

        <MDBRow className='g-0 d-flex align-items-center'>

          <MDBCol md='4'>
            <MDBCardImage src='https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg' alt='phone' className='rounded-t-5 rounded-tr-lg-0' fluid />
          </MDBCol>

          <MDBCol md='8'>
          <h2 className='text-center text-2xl font-bod leading-tight'>Sign in to your account</h2>
        <p className='mt-2 text-center text-base text-black/60'>
            Don&apos;t have any account?&nbsp;
            <Link
            to="/signup"
            className='font-medium text-primary transition-all duration-200 hover:underline'>
                Sign Up
            </Link>
        </p>
          {error && <p className='text-red-600 mt-8 text-center'>{error}</p>}
            <form onSubmit={handleSubmit(login)}>
            <MDBCardBody>

    {/* Email input */}
              <MDBInput 
              wrapperClass='mb-4' 
              label='Email address' 
              id='form1' 
              type='email'
              placeholder = "Enter your email"
              {...register("email",{
              required:true,
              validate:{
              matchPattern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.
              test(value)||
              "Email address must be a valid address",
               }
               })}
              />

     
              {/* Email input */}
              <MDBInput 
              wrapperClass='mb-4' 
              label='Password' 
              id='form2' 
              type='password'
              placeholder = "Enter your password"
              {...register("password",{
                  required:true,
                  
              })}
              />

{/* Button */}
              <MDBBtn 
              type='submit'
              className="mb-4 w-100"
              >Sign in</MDBBtn>

            </MDBCardBody>
            </form>
          </MDBCol>

        </MDBRow>

      </MDBCard>
    </MDBContainer>
  );
}

export default Login;