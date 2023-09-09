import NavData from "../component/Navbar"
import { useParams } from "react-router-dom"
export default function AboutData(){
    const params = useParams()
    return <>
    <NavData/>
    <h1>About</h1>
    <h1>{params.id}</h1>
    
    </>
}