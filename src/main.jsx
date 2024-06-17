import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, } from 'react-router-dom'
import {Aboutme, Blogs, Blog,Login, Signup,  Home , BLogForm}  from "./pages/index.js"


const router = createBrowserRouter(createRoutesFromElements(
    <Route path='' element={<App />}>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element = {<Aboutme/>}/>
        <Route path='/signup' element = {<Signup/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/newblog' element = {<BLogForm/>}/>
        <Route path='/blogs' element = {<Blogs/>} loader={({params})=>{return true}}/>
        <Route path='/blog/:id' element = {<Blog/>} loader={({params})=>{return true}}/>
        <Route path='*' element = {<><p>404</p></>}/>
    </Route>
))
ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router}/>
)



