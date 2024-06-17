import React,{ useState,useEffect } from 'react'
import Mainlayout from './pages/mainlayout'
import { Provider,useDispatch } from 'react-redux'
import userStore from "./stores/userStore"




function App() {

  return (
    <>
      <Provider store={userStore}>
        <Mainlayout/>
      </Provider>
    </>
  )
}

export default App
