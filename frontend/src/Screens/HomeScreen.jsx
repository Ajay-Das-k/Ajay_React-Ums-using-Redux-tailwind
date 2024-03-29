import { useEffect } from 'react'
import { ComplexNavbar } from '../Components/NavBar'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { Card, Avatar, Typography } from "@material-tailwind/react";
import { BASE_URL } from "../urls/urls";

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

      <Card
        className="p-5 m-10 flex flex-col items-center max-w-[40rem] mx-auto"
        color="gray"
        variant="gradient"
      >
        <Typography variant="h1">welcome Home</Typography>

        <Avatar
          variant="circular"
          alt="profile"
          src={`${BASE_URL}/static/profilePic/${
            userInfo.profile || "placeholder.jpg"
          }`}
          style={{ width: "15rem", height: "15rem" }} // Adjust the width and height as needed
        />
        <Card className="p-5 flex flex-col items-center bg-grey w-75">
          <Typography variant="h6">Name: {userInfo.name} </Typography>
          <Typography variant="h6">Email: {userInfo.email} </Typography>
        </Card>
      </Card>
    </>
  );
    
}

export default HomeScreen
