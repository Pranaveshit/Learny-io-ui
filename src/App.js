import { BrowserRouter, Route, Routes } from "react-router-dom"; 
import Home from "./components/Home.jsx"

export default function App(){
  return(
    <div className="max-w-md mx-auto bg-white">
        <BrowserRouter>
        <Routes>
        <Route path="home" element={<Home />} />
        </Routes>
        </BrowserRouter>
    </div>
  )
}