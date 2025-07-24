import React from 'react'
import back1 from "../assets/Assets/back1.png"
import back2 from "../assets/Assets/back2.png"
import back3 from "../assets/Assets/back3.png"
import back4 from "../assets/Assets/back4.png"

function Backgrounf({heroCount}) {
       if(heroCount===0){
         return <img src={back2} alt="" className=' w-[100%] h-[100%] float-left overflow-auto object-cover' />
       }else if(heroCount===1){
         return <img src={back1} alt="" className=' w-[100%] h-[100%] float-left overflow-auto object-cover' />
       }
       else if(heroCount===2){
         return <img src={back3} alt="" className=' w-[100%] h-[100%] float-left overflow-auto object-cover' />
       }
       else if(heroCount===3){
         return <img src={back4} alt="" className=' w-[100%] h-[100%] float-left overflow-auto object-cover' />
       }
}

export default Backgrounf
