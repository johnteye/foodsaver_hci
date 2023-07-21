import React from 'react'
import Foodsaver from '../foodsaver.png'
import Fitness from '../fitness.png'
import Fit1 from '../fit1.png'
import Fit2 from '../fit2.png'
import Fit3 from '../fit3.png'
import Fit4 from '../fit4.png'

const journey = () => {
  return (
    <div className="">
        <div className="bg-[url('./wave.png')]  w-screen h-screen  bg-contain">
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

            <div className="flex gap-40 relative left-10 top-10">
                <div className=" text-white flex flex-col gap-10 relative top-10">
                    <p className="w-[450px] text-[20px]">Eating healthy is easy with our app! Discover practical tips for making healthier food choices and start feeling your best. With our app, you'll have access to a variety of nutritious meal ideas, simple ingredient swaps, and more. </p>
                    <h1 className="text-[24px] font-bold">Start your journey to a healthier you today!</h1>
                </div>
                
                <img src={Fitness} alt="" className="w-[300px] relative left-[250px] h-[450px]"></img>
                
            </div>
        </div>

        {/* Below is the gallery */}
    
        <div className="flex gap-10 bg-white h-[700px]">
            <div className="flex flex-col gap-3 relative left-10 rounded-[20px]">
                <div className="flex gap-3">
                    <img src={Fit1} alt="Fit1" className="w-[200px] h-[400px]"></img>

                    <div className="flex flex-col gap-2">
                        <img src={Fit2} alt="Fit2" className="w-[400px] h-[200px]"></img>
                       
                        <img src={Fit3} alt="Fit3" className="w-[250px] h-[200px]"></img>
                        
                    </div>


                </div>

                <img src={Fit4} alt="Fit4" className="w-[600px] h-[250px]"></img>

            </div>

            <div className="w-[500px] relative left-10 top-10 bg-[#0A484E] h-[600px] rounded-[20px] text-white flex flex-col items-center text-[20px] justify-center gap-10" >
                <h1 className="text-[33px]">Energy Giving Foods</h1>

                <p className="w-[300px] text-justify">Boost your energy with healthy, whole foods! Foods like nuts, fruits, and whole grains provide long-lasting energy and help keep you feeling full and satisfied throughout the day. Incorporate these energy-giving foods into your diet for a natural and sustained energy boost</p>

            </div>
        </div>
    </div>
  )
}

export default journey