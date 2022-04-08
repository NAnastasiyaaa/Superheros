import React, { useEffect, useState } from "react";
import axios from "axios";
import Hero from "./Hero";
import "./Hero.css";
import { Pagination } from "@mui/material";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import LastPageIcon from "@mui/icons-material/LastPage";

const Heros = () => {
  //
  const [pageNumber, setPageNumber] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [heros, setHeros] = useState([]);

  const pages = new Array(numberOfPages).fill(null).map((v, i) => i);

  useEffect(() => {
    fetch(`http://localhost:5000/heros?page=${pageNumber}`)
      .then((response) => response.json())
      .then(({ totalPages, heros }) => {
        setHeros(heros);
        setNumberOfPages(totalPages);
      });
  }, [pageNumber]);

  return (
    <div className="heroCard">
      <p style={{'margin-left':"10px"}}>Page of {pageNumber + 1}</p>
      {pages.map((pageIndex) => (
       <button 
          count={numberOfPages}
          className="paginationNumber"
          key={pageIndex}
          onClick={() => setPageNumber(pageIndex)}
        >
          {pageIndex + 1}
        </button>
      ))}

      <ul>
        {heros &&
          heros.map((hero, i) => (
            <li className="hero" key={i}>
              <Hero hero={hero} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Heros;
