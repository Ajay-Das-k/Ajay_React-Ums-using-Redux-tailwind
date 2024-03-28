import React from "react";
import { useSelector } from "react-redux";
import { Container, Card } from "@material-tailwind/react";

const Hero = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <div className="py-5">
      <Container>
        <Card className="p-5 flex flex-col items-center bg-light w-75">
         
           
              <h5>Welcome </h5>
              <h3 className="text-uppercase">{userInfo.name}</h3>
      
        
        </Card>
      </Container>
    </div>
  );
};

export default Hero; // Make sure to export default here
