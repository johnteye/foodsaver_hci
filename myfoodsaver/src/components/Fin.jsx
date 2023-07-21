import React from 'react'
import Foodsaver from '../foodsaver.png'
import {Link } from 'react-router-dom';

const Fin = () => {
  return (
    <div className="bg-[url('./recipemain.png')] w-screen h-screen bg-cover">
          <div className="flex justify-between items-center relative top-5">
            <img src={Foodsaver} alt="Logo" className="left-5 w-[250px] relative "></img>
            <div className="flex gap-3 relative right-5">
            <button className="rounded-[5px] text-[20px] text-white w-[120px] h-[50px] bg-[#0A484E] relative">
                Home
              </button>
              <button className="rounded-[5px] text-[20px] text-white w-[120px] h-[50px] bg-[#0A484E] relative">
                Logout
              </button>
            </div>
        </div>

        <button className="w-[100px] rounded-[20px] h-[50px] bg-white relative top-[520px] left-[120px]"> More </button>
        <button className="w-[100px] rounded-[20px] h-[50px] bg-white relative top-[520px] left-[280px]"> More </button>
        <button className="w-[100px] rounded-[20px] h-[50px] bg-white relative top-[520px] left-[420px]"> More </button>
        <button className="w-[100px] rounded-[20px] h-[50px] bg-white relative top-[520px] left-[570px]"> More </button>
        <button className="w-[100px] rounded-[20px] h-[50px] bg-white relative top-[520px] left-[720px]"> More </button>
    </div>
  )
}

export default Fin