/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import axios from "axios"
import { log } from "console"
import Link from "next/link"
import {useRouter} from 'next/navigation'
import { useState } from "react"
import "./sport.css"
import { FaVideo } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import React, { useEffect, useRef } from 'react';
import { MdCreateNewFolder } from "react-icons/md";
import { IoCreateOutline } from "react-icons/io5";
import { MdPersonalVideo } from "react-icons/md";
import { CiVideoOn } from "react-icons/ci";
import { VscLibrary } from "react-icons/vsc";
import { SiSololearn } from "react-icons/si";
export default function Profile(){ 
    const router=useRouter()
    const repeatItems = (parentEl:any, total = 0) => {
        const items = [...parentEl.children];
        console.log(items)
        for (let i = 0; i <= total - 1; ++i) {
            var cln = items[i].cloneNode(true);
            parentEl.appendChild(cln);
        }
    };
    
    const logout=async ()=>{
        try{
           await  axios.get('/api/users/logout')
           router.push("/login")
        }catch(err){
            console.log(err)
        }
        }
    
    const scrollingDivRef = useRef<HTMLDivElement>(null);
    
      useEffect(() => {
        // Execute repeatItems after the component has mounted
        repeatItems(scrollingDivRef.current, 4);
    
        // Add a scroll event listener to the scrolling-div
        const handleScroll = () => {
          // Call repeatItems when scrolling occurs
          repeatItems(scrollingDivRef.current, 4);
        };
    
        scrollingDivRef.current?.addEventListener('scroll', handleScroll);
    
        // Cleanup the event listener on component unmount
        return () => {
          scrollingDivRef.current?.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
      return (
    
        
    <>
    <body>
        <div className="headder">
            <div className="icone mt-5"><div className="icone ml-4"><SiSololearn /> </div> </div>
            <div className="para">
                <p>Microsoft Store</p>
            </div>
         
            <div className="search-bar">
                <div className="hoel-search-bar"> 
                    <div className="input-1">
                        <input type="text" placeholder="Search apps, Games, movies, and more"/>
                    </div>
                    <div className="search-icone mt-3 mr-2">
                    <IoIosSearch />
                    </div>
                </div>
                <div className="login">
              <p>AA</p>
             
            </div>
            <div style={{ marginLeft: '20px', marginTop: '10px' }}> {/* Adding more gap and adjusting top */}
                <button className="login-button" onClick={logout}>LogOut</button>
              </div>
            </div>
        </div>
    
    
        <div className="hole-content">
            <div className="side-bar">
            <Link href="/room">  <div className="home-icone">
                <CiVideoOn />
                    <p>conferance</p>
                </div></Link>
              
                <div className="apps-icone">
                <IoCreateOutline />
                    <p>Create</p>
                </div>
                <div className="game-icone">
                <MdPersonalVideo />
                    <p>My course</p>
                </div>
                <div className="game-icone mt-80">
                <VscLibrary />
                    <p>Library</p>
                </div>
            </div>
    
           
    
            <div className="scrolling-div" ref={scrollingDivRef}>
            
            
                    <div className="microsoft-office">
                        <h2>Microsoft Office</h2>
                    </div>
          
          
    
                <div className="car-race">
    
                </div>
                <div className="pc-game">
    
                </div>
                <div className="star">
    
                </div>
            </div>
            <button className="arrow left-arrow">&#10094;</button>
            <button className="arrow right-arrow">&#10095;</button>
    
            <div className="lower-wit">
            <div className="whats"> <div></div>
            <p>Next Js</p></div>
            <div className="instagram"><div></div><p>Javascript</p></div>
            <div className="telegram"><div></div><p>Flutter</p></div>
            <div className="netflix"><div></div><p>React js</p></div>
            <div className="spotify"><div></div><p>next js 14</p></div>
            <div className="vlc"><div></div><p>Node js</p></div>
        </div>
            
        </div>
       
        
    </body>
    </>
    
      )
    }