import React, { useContext, useState } from 'react'
import logo from "../assets/Assets/vcart logo.png";
import google from "../assets/Assets/google-original-logo.svg";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { authDataContext } from '../context/AuthContext';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../utils/firebase';
import axios from 'axios';
import { userDataContext } from '../context/userContext';
import { toast } from 'react-toastify';
function Login() {
 let [show, setShow] = useState(false)
  let [password,setPassword] = useState("");
  let [email,setEmail] = useState("")
  let {serverUrl} = useContext(authDataContext)
   let {getCurrentUser} = useContext(userDataContext)
  let navigate = useNavigate()
  const handleLogin = async(e)=>{
    e.preventDefaultl()
    try{
       const result = await axios.post(serverUrl + "/api/auth/login",{
        email,password
       },{withCredentials: true})
       console.log(result.data);
       toast.success("login successfully")
          getCurrentUser()
          navigate("/")
    }catch(error){
         console.log(error)
            toast.error("login successfully")
    }
  }
 const googleLogin =async()=>{
    try{
      const response = await signInWithPopup(auth,provider)
      let user = response.user
      let name = user.displayName;
      let email = user.email;
 
     const result = await axios.post(serverUrl + "/api/auth/googlelogin",{
       name,email
     },{withCredentials: true})
     console.log(result.data);
        toast.success("login successfully")  
        getCurrentUser()
          navigate("/")    
    }catch(error){
         console.log(error);
            toast.error("login successfully")
    }
  }
  return (
      <div className=' w-[100vw] h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-[white] flex flex-col items-center justify-start'>
        <div className='w-[100%] h-[70px] flex items-center justify-start px-[30px] gap-[10px] cursor-pointer' onClick={() => navigate("/")}>
          <img className='w-[40px]' src={logo} alt="" />
          <h1 className='text-[22px] font-sans'>oneCart</h1>
        </div>
        <div className='w-[100%] h-[90px] flex items-center justify-center flex-col gap-[10px]'>
          <span className='text-[25px] font-semibold'>Login to Account</span>
          <span className='text-[16px]'>welcome to oneCart, Place your order</span>
        </div>
        <div className='max-w-[600px] w-[90%] h-[450px] bg-[#00000025] border-[1px] border-[#96969635] backdrop:blur-2xl rounded-lg shadow-lg flex items-center justify-center'>
          <form action=""onSubmit={handleLogin} className='w-[90%] h-[90%] flex flex-col items-center justify-start gap-[20px]'>
            <div className='w-[90%] h-[50px] bg-[#42656cae] rounded-lg flex items-center justify-center gap-[10px] py-[20px] cursor-pointer hover:bg-[#558891] hover:shadow-lg hover:scale-[1.02] transition-all duration-300 ease-in-out' onClick={googleLogin}>
              <img className='w-[25px]' src={google} alt="" />
              <span>Login from google</span>
            </div>
            <div className='w-[100%] h-[20px] flex items-center justify-center gap-[10p0ppx]'>
              <div className='w-[40%] h-[1px] bg-[#96969635]'></div> OR <div className='w-[40%] h-[1px] bg-[#96969635]'></div>
            </div>
            <div className='w-[90%] h-[400px] flex flex-col items-center justify-center gap-[15px] relative'>
              <input type="text" className='w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:blur-sm rounded-lg shadow-lg  bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold' placeholder='Email' required onChange={(e)=>setEmail(e.target.value)} value={email}/>
              <input type={show?"text":"password"} className='w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:blur-sm rounded-lg shadow-lg  bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold' placeholder='Password' required onChange={(e)=>setPassword(e.target.value)} value={password}/>
              { !show && <FaRegEye className='bottom-[57%] w-[20px] h-[20px] cursor-pointer absolute right-[5%]' onClick={()=>{setShow(prev=>!prev)}}/>}
              {show && <FaEyeSlash className='bottom-[57%] w-[20px] h-[20px] cursor-pointer absolute right-[5%]'onClick={()=>{setShow(prev=>!prev)}}/>}
              <button className='w-[100%] h-[50px] bg-[#6060f5] rounded-lg flex items-center justify-center mt-[20px] text-[17px] font-semibold cursor-pointer'> 
                Login 
              </button>
              <p className='flex gap-[10px]'>Create Account!<span className='text-[#5555f6cf] text-[17px] font-semibold cursor-pointer'onClick={()=>{navigate("/signup")}}>SignUp</span></p>
            </div>
          </form>
        </div>
      </div>
  )
}

export default Login
