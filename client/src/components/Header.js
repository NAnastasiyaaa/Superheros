import React, { useState } from "react";
import { AppBar, Tabs, Tab, Toolbar, Typography } from "@mui/material";
import FilterIcon from "@mui/icons-material/Filter";
import {NavLink} from 'react-router-dom'

const Header = () => {
  const [value, setValue] = useState();

  return (
    <div>
      <AppBar sx={{backgroundColor:"#008B8B"}} position="sticky">
        <Toolbar>
          <Typography>
            <FilterIcon /> All the superheros
          </Typography>
          <Tabs
            sx={{ml:"auto"}}
            textColor="inherit"
            indicatorColor="secondary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab LinkComponent={} label="Add hero"></Tab>
            <Tab label="Heros"></Tab>
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
