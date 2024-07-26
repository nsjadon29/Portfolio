import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {

  const [nav, setNav]=useState(false);
  const links=[
    {
      id:1,
      link:'Home'
    },
    {
      id:2,
      link:'About'
    },
    {
      id:3,
      link:'Portfolio'
    },
    {
      id:4,
      link:'Experiences'
    },
    {
      id:5,
      link:'Contact'
    }
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 bg-black fixed text-gray-300 px-4">
        <div>
            <h1 className='font-signature text-5xl ml-2'>Nikhil</h1>
        </div>

        <ul className="hidden md:flex">

          {links.map(({id, link})=>(
            <li key={id} 
            className="px-4 text-gray-500 cursor-pointer capitalize duration-200 font-medium hover:scale-105">{link}
            </li>
          ))}
        </ul>

        <div onClick={()=>setNav(!nav)}className="pr-4 text-gray-500 z-10 cursor-pointer md:hidden">

          {nav ? <FaTimes size={30}/>: <FaBars size={30}/>}
        </div>

        {nav && (<ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full  h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 ">
        {links.map(({id, link})=>(
            <li key={id} 
            className="px-4 py-6 capitalize cursor-pointer text-4xl">{link}
            </li>
          ))}
         
        </ul>)}

        

    </div>
  )
}

export default Navbar