import {BrowserRouter,Route,Routes}from "react-router-dom"
import HomeData from "../Screen/Home"
import AboutData from "../Screen/About"

export default function AppRout() {
    return <>
    <BrowserRouter>

    <Routes>
        <Route path="/" element={<HomeData/>}/>
        <Route path="about/:id" element={<AboutData/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
}