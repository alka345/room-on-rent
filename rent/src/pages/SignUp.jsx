import React, {useState} from 'react';
import authService from '../appwrite/auth'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../store/authSlice'
// import {Button, Input, Logo} from "./index.js"
import Button from '../components/Button'
import Input from '../components/Input'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

function Signup() {
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()

    const create = async(data) => {
        setError("")
        try {
            const userdata = await authService.createAccount(data)
            if (userdata) {
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(login(userData));
                navigate("/")
                
            }
        } catch (error) {
            setError(error.message)
        }
    }

  return (
    <MDBContainer fluid>

      <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <MDBCardBody>
        <p 
        // className='mt-2 text-center text-base text-black/60'
         classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4"
        >
            Already have an account?&nbsp;
            <Link
            to="/login"
            className='font-medium text-primary transition-all duration-200 hover:underline'>
                Sign In
            </Link>
        </p>
        {error && <p className='text-red-600 mt-8 text-center'>{error}</p>}
            <form onSubmit={handleSubmit(create)}>
          <MDBRow>
          {/* <h2 className='text-center text-2xl font-bod leading-tight'>Sign up to create account</h2> */}
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              {/* <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4"></p> */}
              <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up to create account</p>

              {/* <form onSubmit={handleSubmit(create)}> */}
            {/*Name input*/}
              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput
                   placeholder = "Enter your full name"
                   {...register("name",{
                       required: true,
                })}
                label='Your Name' 
                id='form1' 
                type='text' 
                className='w-100'/>
              </div>


              {/* Email Input */}

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <MDBInput
                label='Your Email'
                id='form2'
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
              </div>

              
              {/* Password Input */}

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <MDBInput 
                label='Password'
                id='form3'
                type='password'
                placeholder="Enter your password"
                {...register("password",{
                    required: true,
                })}
                 />
              </div>

               

{/* Button */}
              <MDBBtn 
              type='submit'
              className='mb-4' 
              size='lg'
              >Create Account</MDBBtn>

            </MDBCol>
{/* Second Half -image */}
            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
            </MDBCol>

          </MDBRow>
          </form >
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  );
}

export default Signup;