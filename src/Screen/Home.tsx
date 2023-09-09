import { Button } from "@mui/material"
import NavData from "../component/Navbar"
import axios from "axios"
import { useState } from "react"
import CardData from "../component/Cards"


export default function HomeData(){

let [list,setlist]=useState<any>([])


   let getData = ()=>{
       axios.get('https://fakestoreapi.com/products')
       .then((res)=>{
           console.log(res.data)
           setlist([...res.data])
       })
       .catch((err)=>{
           console.log(err)
       })
   }
   return <>
   <NavData/>
  <div className="text-center fs-1 fw-bold py-5">
   <h1>Online Store</h1>
  </div>


   <div className="conatiner">
     <div>
     <img src="https://images.pexels.com/photos/3735641/pexels-photo-3735641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="w-100"/>
     </div>
   </div>

 <div className="text-center py-5">

<Button variant="contained" color="error" onClick={getData}>Click</Button>
 </div>
<CardData Arr={list}/>

   
   </>
}


