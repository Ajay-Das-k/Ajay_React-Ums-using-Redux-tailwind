import { useEffect } from 'react'
import { ComplexNavbar } from '../Components/NavBar'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import {  Card } from "@material-tailwind/react";

function HomeScreen() {

  const navigate = useNavigate()
  const {userInfo} = useSelector((state)=>state.auth)
  useEffect(()=>{
    if(!userInfo || userInfo?.isBlocked){
      toast('unautherised')
        navigate('/')
        return
    }
},[navigate, userInfo])
  return (
    <>
      <ComplexNavbar />
      
        <Card className="p-5 flex flex-col items-center bg-light w-75">
          <h1>Welcome </h1>
          <h3>{userInfo.name}</h3>
        </Card>
      
    </>
  );
    
}

export default HomeScreen
