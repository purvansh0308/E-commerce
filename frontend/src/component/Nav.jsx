import React from 'react'
import { useContext } from 'react';
import logo from "../assets/Assets/vcart logo.png";
import { IoSearchCircleOutline } from "react-icons/io5";
import { FaCircleUser } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { userDataContext } from '../context/UserContext';
import { useState } from 'react';
import { MdShoppingCart } from "react-icons/md";
import { IoSearchCircle } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { IoIosHome } from "react-icons/io";
import { BiSolidCollection } from "react-icons/bi";
import axios from 'axios';
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { shopDataContext } from '../context/ShopContext';
import { authDataContext } from '../context/AuthContext';

function Nav() {
    let { getCurrentUser, userData } = useContext(userDataContext)
    let { serverUrl } = useContext(authDataContext);
    let [showSearch, setShowSearch] = useState(false);
    let [showProfile, setShowProfile] = useState(false); // Corrected variable name for consistency
    let navigate = useNavigate()
    let {search,setSearch,getCartCount} = useContext(shopDataContext )
    const handleLogout = async () => {
        try {
            const result = await axios.get(serverUrl + '/api/auth/logout', { withCredentials: true })
            console.log(result.data);
            getCurrentUser();
            navigate("/login")
            setShowProfile(false); // Corrected: Hide profile dropdown after logout
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='w-[100vw] h-[70px] bg-[#ecfafaec] z-10 fixed top-0 flex items-center justify-between px-[30px] shadow-md shadow-black  '>

            <div className='w-[20%] lg:w-[30%] flex items-center justify-start gap-[10px] cursor-pointer' onClick={()=>navigate("/")}>
                <img src={logo} alt="OneCart Logo" className='w-[40px]' />
                <h1 className='text-[25px] text-[black] font-sans '>OneCart</h1>
            </div>
            <div className='w-[50%] lg:w-[40%] hidden md:flex'>
                <ul className='flex items-center jsutify-center gap-[19px] text-[white]'>
                    <li className='text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl'onClick={()=>navigate("/")}>HOME</li>
                    <li className='text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl'onClick={()=>navigate("/collections")}>COLLECTIONS</li>
                    <li className='text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl'onClick={()=>navigate("/about")}>ABOUT</li>
                    <li className='text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl'onClick={()=>navigate("/contact")}>CONTACT</li>
                </ul>
            </div>
            <div className='w-[30%] flex items-center justify-end gap-[20px]'>
                {!showSearch && <IoSearchCircleOutline className='w-[38px] h-[38px] text-[#000000] cursor-pointer' onClick={() => { setShowSearch(prev => !prev);navigate("/collections") }} />}
                {showSearch && <IoSearchCircle className='w-[38px] h-[38px] text-[#000000] cursor-pointer' onClick={() => { setShowSearch(prev => !prev)}} />}
                {!userData && <FaCircleUser className='w-[29px] h-[29px] text-[#000000] cursor-pointer' onClick={() => { setShowProfile(prev => !prev) }} />}
                {userData && <div className='w-[30px] h-[30px] bg-[#080808] text-[white] rounded-full flex items-centeer justify-center cursor-pointer' onClick={() => { setShowProfile(prev => !prev) }}>{userData?.name?.slice(0, 1).toUpperCase() || "NA"}</div>}
                <MdOutlineShoppingCart className=' hidden md:flex w-[38px] h-[38px] text-[#000000] cursor-pointer' onClick={()=>navigate("/cart")}/>
                {userData && <p className='hidden md:flex absolute w-[18px] h-[18px] items-center justify-center bg-black px-[5px] py-[2px] text-white rounded-full text-[9px] top-[10px] right-[23px]'>{getCartCount()}</p>}
            </div>
            {showSearch && <div className='w-[100%] h-[80px] bg-[#d8f6f9dd] absolute top-[100%] left-0 right-0 flex items-center justify-center'>
                <input type="text" className='lg:w-[50%] w-[80%] h-[60%] bg-[#233533] rounded-[30px] px-[50px] placeholder:text-white text-[white] text-[18px] ' placeholder='Search here' onChange={(e)=>{setSearch(e.target.value)}} value={search}/>
            </div>}
            {showProfile && <div className='absolute w-[220px] h-[150px] bg-[#000000d7] top-[110%] right-[4%] border-[1px]  border-[#aaa9a9] rounded-[10px] z-10'>
                <ul className='w-[100%] h-[100%] flex items-start justify-around flex-col text-[17px] py-[10px] text-[white]'>
                    {!userData && <li className='w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer' onClick={() => { navigate("/login"); setShowProfile(false) }}>Login</li>}
                    {userData && <li className='w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer' onClick={() => { handleLogout() }}>Logout</li>}
                    <li className='w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer'onClick={()=>navigate("/orders")}>Order</li>
                    <li className='w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer'onClick={()=>navigate("/about")}>About</li>
                </ul>
            </div>}
            <div className='w-[100vw] h-[90px] flex items-center justify-between px-[20px] fixed bottom-0 left-0 bg-[#191818] md:hidden'>
                <button className='text-[white] flex items-center flex-col justify-center gap-[2px] cursor-pointer'onClick={()=>navigate("/")}><IoIosHome className='w-[30px] h-[30px] text-[white] md:hidden' />Home</button>
                <button className='text-[white] flex items-center flex-col justify-center gap-[2px] cursor-pointer'onClick={()=>navigate("/collections")}><BiSolidCollection className='w-[30px] h-[30px] text-[white] md:hidden' />Collection</button>
                <button className='text-[white] flex items-center flex-col justify-center gap-[2px] cursor-pointer'onClick={()=>navigate("/contact")}><MdOutlineConnectWithoutContact className='w-[30px] h-[30px] text-[white] md:hidden' />Contact</button>
                <button className='text-[white] flex items-center flex-col justify-center gap-[2px] cursor-pointer'onClick={()=>navigate("/cart")}><MdShoppingCart className='w-[30px] h-[30px] text-[white] md:hidden' />Cart</button>
               
               <p className='absolute w-[18px] h-[18px] flex items-center justify-center bg-white px-[5px] py-[2px] text-black font-semibold rounded-full text-[9px] top-[8px] right-[18px]'>{getCartCount()}</p>
            </div>
        </div>
    )
}

export default Nav