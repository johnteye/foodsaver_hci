import React from 'react'
import Flower1 from '../flower1.png'
import Foodsaver from '../foodsaver.png'
import {Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="flex">
        <div className=" relative bg-[#F6F6F8] flex flex-col items-center justify-center  h-screen w-[683px] ">
              <h1 className="text-center text-[#12490C] font-600 text-[55.22px] font-bold top-10 leading-[60px] relative ">Sign Up <br></br>
and Come on In</h1>
              <img src={Flower1} alt={"flower"} className="w-[450px] relative top-8 "></img>
        </div>
        <div className="relative h-screen w-[683px] flex items-center justify-center bg-[#0A484E] ">
            <div className="items-center relative flex flex-col left-[60px] justify-center bg-white h-[550px] w-[400px] rounded-[25px] shadow-[0px_25px_50px_0px_rgba(0,0,0,0.25)]">
              <img src={Foodsaver} alt={"FoodSaver"} className="w-[220px] relative top-[-40px] h-[40px]"></img>
              <form className="flex flex-col gap-5">
                <input type="email" className="border border-black w-[330px] rounded-[5px] h-[50px]" placeholder="  Email here"></input>
                <input type="email" className="border border-black w-[330px] rounded-[5px] h-[50px]" placeholder="  Password"></input>
                <input type="email" className="border border-black w-[330px] rounded-[5px] h-[50px]" placeholder="  Confirm Password"></input>
                
              </form>
              <div className="text-[14px] flex gap-5 relative top-10">
                <p className="text-[#0A484E]">Forgod Password?</p> <p>Already got an account ?<span className="text-[#0A484E]">Login</span></p>
              </div>
            <Link to="/home">  <button className="rounded-[5px] text-[20px] text-white top-[80px] w-[120px] h-[50px] bg-[#0A484E] relative">
                Sign Up
              </button></Link>
             
            </div>
        </div>
    </div>
  )
}

export default Signup