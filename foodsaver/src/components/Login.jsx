import React from 'react'
import Foodsaver from '../foodsaver.png'
import {Link } from 'react-router-dom';


const Login = ()=>{
    return(
        <div className ="bg-[url('./login.png')] bg-cover flex justify-center items-center w-screen h-screen">
             <div className="relative h-screen w-[683px] flex items-center justify-center ">
            <div className="items-center relative flex flex-col gap-5 justify-center bg-white h-[550px] w-[400px] rounded-[25px] shadow-[0px_25px_50px_0px_rgba(0,0,0,0.25)]">
              <img src={Foodsaver} alt={"FoodSaver"} className="w-[220px] relative h-[40px]"></img>
              <h1 className="text-[32px] font-bold">Login Here</h1>
              <form className="flex flex-col gap-5">
                <input type="email" className="border border-black w-[330px] rounded-[5px] h-[50px]" placeholder="  Email here"></input>
                <input type="email" className="border border-black w-[330px] rounded-[5px] h-[50px]" placeholder="  Password"></input>
                
              </form>
              <div className="text-[14px] flex gap-10 relative top-5">
                <p className="text-[#0A484E]">Forgod Password?</p> <p>New User ?<Link to="/signup"><span className="text-[#0A484E]">Signup</span></Link></p>
              </div>
              <Link to= "/home">
              <button className="rounded-[5px] text-[20px] top-[30px] text-white w-[120px] h-[50px] bg-[#0A484E] relative">
                Login
              </button></Link>
            </div>
        </div>
        </div>
    );
}

export default Login