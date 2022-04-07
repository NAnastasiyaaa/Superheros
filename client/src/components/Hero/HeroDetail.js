import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { FormLabel, TextField, Box, Button } from "@mui/material";

const HeroDetail = () => {
  const [inputs, setInputs] = useState({});
  const id = useParams().id;
  const history = useNavigate();

  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5000/heros/${id}`)
        .then((res) => res.data).then(data=>setInputs(data.hero));
    };
    fetchHandler()
  }, [id]);

  const sendRequest = async () => {
    await axios
      .put(`http://localhost:5000/heros/${id}`, {
        nickname: String(inputs.nickname),
        real_name: String(inputs.real_name),
        origin_description: String(inputs.origin_description),
        superpowers: Array(inputs.superpowers),
        catch_phrase: String(inputs.catch_phrase),
        image: String(inputs.image),
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(()=>history("/heros"))
  };

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
     {inputs && <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent={"center"}
          maxWidth={700}
          alignContent={"center"}
          alignSelf="center"
          marginLeft={"auto"}
          marginRight={"auto"}
          marginTop={5}
        >
          <FormLabel>Nickname</FormLabel>
          <TextField
            value={inputs.nickname}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            name="nickname"
          />

          <FormLabel>Real name</FormLabel>
          <TextField
            value={inputs.real_name}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            name="real_name"
          />

          <FormLabel>Origin description</FormLabel>
          <TextField
            value={inputs.origin_description}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            name="origin_description"
          />

          <FormLabel>Superpowers</FormLabel>
          <TextField
            value={inputs.superpowers}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            name="superpowers"
          />

          <FormLabel>Catch_phrase</FormLabel>
          <TextField
            value={inputs.catch_phrase}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            name="catch_phrase"
          />

          <FormLabel>Image</FormLabel>
          <TextField
            value={inputs.image}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            name="image"
          />

          <Button variant="contained" type="submit">
            Update hero
          </Button>
        </Box>
      </form>}
    </div>
  );
};

export default HeroDetail;
