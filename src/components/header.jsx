import React from 'react';
import { NavLink, useNavigate,  } from 'react-router-dom';
import {useSelector} from "react-redux"
import { useDispatch } from 'react-redux';
import {logout} from "../stores/userStore";
import authService from '../appwrite/auth';

const Header = () => {

  const user = useSelector((state)=>state.userState.user)
  // console.log("user log", user)
  const dispatcher = useDispatch();



  return (
    <header className="bg-green-700 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Toward AI</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><NavLink to="/" className={({isActive})=>isActive?"hover:text-blue-300 underline shadow-sm":"hover:text-blue-300 "}>Home</NavLink></li>
            <li><NavLink to="/about" className={({isActive})=>isActive?"hover:text-blue-300 underline shadow-sm":"hover:text-blue-300 "}>About</NavLink></li>
              {user?(
                <>
                <li><NavLink to="/blogs" className={({isActive})=>isActive?"hover:text-blue-300 underline shadow-sm":"hover:text-blue-300 "}>blogs</NavLink></li>
                <li><NavLink to="/newblog" className={({isActive})=>isActive?"hover:text-blue-300 underline shadow-sm":"hover:text-blue-300 "}>bost blog</NavLink></li>
                <li><a href="" className='hover:text-blue-300 ' onClick={(e)=>{
                    e.preventDefault();
                   new authService().logout();
                   dispatcher(logout());
                   }}>logout</a></li>
                              
              </>):
              (
                <>
                <li><NavLink to="/login" className={({isActive})=>isActive?"hover:text-blue-300 underline shadow-sm":"hover:text-blue-300 "}>login</NavLink></li>
                <li><NavLink to="/signup" className={({isActive})=>isActive?"hover:text-blue-300 underline shadow-sm":"hover:text-blue-300 "}>signup</NavLink></li>
                </>
              ) }
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
