import React, {useEffect}from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import {signin,logout} from "../stores/userStore"
import authService from "../appwrite/auth"
import { Provider,useDispatch } from 'react-redux'
import Container from '../components/container'

function Mainlayout() {

    const dispatcher = useDispatch()

    useEffect(() =>{
      const user = new authService().getUser().then(user =>
         {dispatcher(signin(user))})

    },[dispatcher])

  return (
    <>
        <Header/>
        <Container/>
        <Footer/>
    </>
  )
}

export default Mainlayout