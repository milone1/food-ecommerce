import { useContext } from "react";
import { Badge, Grid, TextField } from "@mui/material";
import { Outlet, Link } from "react-router-dom";
import ShoppingBasketRoundedIcon from "@mui/icons-material/ShoppingBasketRounded";
import { UserContext } from "../Context/UserContext";
import "../layouts/index.css";
import Carrousel from "../components/carousel";

const Ecommerce = () => {
  const { basket } = useContext(UserContext);

  return (
    <div>
      <nav className="nav-ecommerce">
        <Grid container alignItems="center" ml={5} mr={5}>
          <Grid item md={4}>
          </Grid>
          <Grid item md={4}>
            <TextField variant="standard" sx={{   width: 250, }} label="Buscar..." />
          </Grid>
          <Grid item md={4}>
            <ul className="ul-ecommerce">
              <li className="li-basket">
                <Link to="/basket">
                  Basket &nbsp;
                  <Badge badgeContent={basket ? basket.length : 0} color="primary">
                    <ShoppingBasketRoundedIcon />
                  </Badge>
                </Link>
              </li>
            </ul>
          </Grid>
        </Grid>
      </nav>
      <center>
        <Carrousel />
      </center>
      <div className="container-tags">
        <ul className="ul-tags">
          <li>
            <a href="/">Carnes</a>
          </li>
          <li>
            <a href="/">Sopas</a>
          </li>
          <li>
            <a href="/">Bebidas</a>
          </li>
          <li>
            <a href="/">Dulces</a>
          </li>
        </ul>
      </div>
      <Outlet />
      
    </div>
  );
};

export default Ecommerce;