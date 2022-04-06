import React, { useEffect, useState } from "react";
import axios from "axios";
import Hero from './Hero'
import './Hero.css';
const URL = "http://localhost:5000/heros";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const Heros = () => {
  const [heros, setHeros] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setHeros(data.heros));
  }, []);
  console.log(heros);

  
  return (
    <div>
      <ul>
        {heros &&
          heros.map((hero, i) => (
            <li className="hero" key={i}>
              <Hero hero={hero}/>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Heros;
