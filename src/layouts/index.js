import { useContext } from "react";
import { Badge, Grid, TextField } from "@mui/material";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import "../layouts/index.css";
import Carrousel from "../components/carousel";

import ShoppingBasketRoundedIcon from "@mui/icons-material/ShoppingBasketRounded";
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

const Ecommerce = () => {
  const { basket } = useContext(UserContext);

  return (
    <div>
      <nav className="nav-ecommerce">
        <Grid container alignItems="center" justifyContent="center" ml={5} mr={5} mt={1.5}>
          <Grid item md={4}>
            <Link to="/">
              <HomeRoundedIcon />
            </Link>
          </Grid>
          <Grid item md={4}>
            <Link to="/login">
              <PersonRoundedIcon />
              Login
            </Link>
          </Grid>
          <Grid item md={4}>
            <ul className="ul-ecommerce">
              <li className="li-basket">
                <center>
                  <Link to="/basket">
                    Basket &nbsp;
                    <Badge badgeContent={basket ? basket.length : 0} color="primary">
                      <ShoppingBasketRoundedIcon />
                    </Badge>
                  </Link>
                </center>
              </li>
            </ul>
          </Grid>
        </Grid>
      </nav>
      <Outlet />
      
    </div>
  );
};

export default Ecommerce;