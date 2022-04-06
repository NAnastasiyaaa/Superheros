import React from "react";
import { Button } from "@mui/material";
import './Hero.css';

const Hero = (props) => {
  const {
    _id,
    nickname,
    real_name,
    origin_description,
    superpowers,
    catch_phrase,
    image,
  } = props.hero;
  return (
    <div className="card">
      <img src={image} alt={nickname} />
      <h3>{nickname}</h3>
      <p>{real_name}</p>
      <p>{origin_description}</p>
      <p>{superpowers}</p>
      <p>{catch_phrase}</p>

      <Button sx={{mt:'auto'}}>Update</Button>
      <Button sx={{mt:'auto'}}>Delete</Button>
    </div>
  );
};

export default Hero;
