import React from 'react'
import Button from '../components/button'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Home() {
  const user = useSelector((state)=>state.userState.user)
  const navigate = useNavigate()



  return (
    <div className='text-center w-5/6 md:w-3/4 lg:w-1/2 mx-auto mt-16 p-8 bg-gray-200 rounded-md shadow-sm'>
      <div className='text-center p-4'>
        <h1 className='font-bold text-xl p-2 mx-auto text-gray-950'>Welcome to towardAI!</h1>
        <p className='w-fit mx-auto p-2 text-gray-950 text-md '>
          Embark on a journey where innovation meets intelligence. Dive into the world of artificial intelligence with us,
          and explore how AI is transforming the future, one breakthrough at a time. Whether you are an enthusiast,
          a professional, or simply curious about the possibilities, 
          towardAI is your gateway to understanding and leveraging the power of AI.
          Join our community and move forward with AI, today!
        </p>
      </div>
      <div>
        {user? (
          <div className='flex justify-center items-center gap-4 p-4'>
          <Button name={"blogs"} onClick={(e)=>{
            e.preventDefault();
            navigate("/blogs")}}/>
          <span>or</span>
          <Button name={"add a blog"} onClick={(e)=>{
            e.preventDefault();
            navigate("/newblog")}}/>
          </div>
        ):(
          <div  className='flex justify-center items-center gap-4 p-4'>
          <Button name={"login"} onClick={(e)=>{
             e.preventDefault();
            navigate("/login")}}/>
          or
          <Button name={"singup"} onClick={(e)=>{
            e.preventDefault();
            navigate("/signup")}}/>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home