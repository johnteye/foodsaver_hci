import React from 'react'
import Foodsaver from '../foodsaver.png'
import Recipepic1 from '../recipepic1.png'
import Recipepic2 from '../recipepic2.png'
import {Link } from 'react-router-dom';

const Recipe = () => {
  return (
    <div className="bg-[url('./recipe.png')]  flex flex-col gap-20 w-screen h-screen bg-cover">
        <div className="flex justify-between items-center relative top-5">
            <img src={Foodsaver} alt="Logo" className="left-5 w-[250px] relative "></img>
            <div className="flex gap-3 relative right-5">
            <Link to="/home"> 
            <button className="rounded-[5px] text-[20px] text-white w-[120px] h-[50px] bg-[#0A484E] relative">
                Home
              </button> </Link>
              <Link to="/signup"> 
              <button className="rounded-[5px] text-[20px] text-white w-[120px] h-[50px] bg-[#0A484E] relative">
                Logout
              </button> </Link>
            </div>
        </div>

        <div className="relative flex "> 
            <img src={Recipepic1} alt="recipe" className="relative left-10 w-[600px]"></img>
            <div className="relative gap-10 flex flex-col top-10 left-[300px]">
                <p className="text-[24px] text-white text-semibold">Fresh Soya Milk <br></br>with Soya Khebaab</p>
                <img src={Recipepic2} alt="recipe" className="relative w-[300px]"></img>
            </div>
            
        </div>

    </div>
  )
}

export default Recipe