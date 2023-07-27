import React from 'react'
import Foodsaver from '../foodsaver.png'
import Plant from '../plant.png'
import {Link } from 'react-router-dom';

const Home = () =>{

   const items = ["Donate Food", "Track Now", "Get Recipe", "Healthy Food Tips"]
   const titles= ["Donate Food", "Track Expiry", "Find Recipe", "Healthy Food Tips"]
   const message = ["Share the love and donate your food to those in need. Every donation counts and can make a big difference in someone's life. Give back to your community and help fight hunger today.", "Don't let food go to waste! Keep track of your food's expiry dates and reduce food waste in your home. Our app makes it easy to track and manage your food's shelf life, so you can eat your food before it goes bad. Say goodbye to wasted food and hello to savings and sustainability", "Looking for new recipe ideas? Look no further! Our app makes it easy to find and save delicious recipes for any occasion.  With a wide variety of recipes to choose from and step-by-step instructions, you'll be cooking up a storm in no time. Get inspired and start cooking today!", "Eating healthy doesn't have to be hard!  Our goal is to help you make positive changes to your diet that will improve your health and wellbeing. Start making healthier choices today and feel your best!"]

    return(
        <div id="home" className="w-screen h-screen  bg-white">
            <div className="relative flex justify-between items-center top-5 ">
                <img src={Foodsaver} alt="Logo" className="left-5 w-[200px] relative "></img>
                <Link to="/Signup"> 
                <button  className="rounded-[5px] text-center text-[20px] text-white  right-10 w-[120px] h-[50px] bg-[#0A484E] relative">Logout</button>
                </Link>
            </div>

            <div className="flex bg-[#F6F6F8] relative top-5  h-[600px]  ">
                <div className="flex flex-col relative left-10 top-20 gap-7" >
                    <h1 className="text-[#12490C] font-bold text-[55px] leading-[60px]">Join the Food Waste <br></br>Management system</h1>
                    <p className="w-[420px] text-justify text-[18px]">Welcome to our food waste management web app!
We're passionate about reducing food waste 
and helping individuals and businesses save money
while also doing their part to help the environment</p>
                  <Link to ="/fin">  <button className="rounded-[5px] text-center text-[20px] text-white  w-[150px] h-[50px] bg-[#0A484E] relative">Get Started</button> </Link>
                </div>

                <div>
                    <img src={Plant} alt="plant" className="w-[500px] h-[600px] relative left-[300px]"></img>
                    
                </div>
            </div>

            <div className="h-[600px] bg-white">
                    <h1 className="text-[45px] text-[#0A484E] relative left-10 top-10 ">
                    Service we Provide
                    </h1>

                    <ul className="flex gap-5 relative top-10 items-center justify-center ">
                        {
                            items.map((item, index) =>(
                                <li key={item} className=" text-white w-[300px] h-[450px] items-center flex flex-col justify-center  rounded-[20px] bg-[#0A484E]">
                                    <h1 className="top-[-30px] relative text-[20px] underline">{titles[index]}</h1>
                                    <p className="w-[230px] text-white">{message[index]}</p>
                                    {index === 2 ?( 
                                    <Link to="/recipe"> 
                                    <button className="rounded-[5px] top-[30px] text-[18px] text-white w-[150px] h-[50px] bg-[#0B835F] relative">{items[index]}</button>
                                    </Link>) : (<Link to="/journey"> 
                                    <button className="rounded-[5px] top-[30px] text-[18px] text-white w-[150px] h-[50px] bg-[#0B835F] relative">{items[index]}</button>
                                    </Link>)
                                    }
                                </li>
                            )
                            
                            )
                        }               
                    </ul>
            </div>
        </div>
    );
}

export default Home