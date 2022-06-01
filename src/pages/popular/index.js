import { useState, useEffect, useContext } from "react";
import { Container, Grid, Button } from "@mui/material";
import "./index.css";
import { UserContext } from "../../Context/UserContext";
import { getProductFood } from "../../service/firestore";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import ProductDetail from "../../components/productDetail";
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import Carrousel from "../../components/carousel";

const Popular = () => {
    const { basket, storeBasket, deleteElementFromBasket } = useContext(UserContext);
  const [foods, setFoods] = useState([]);

  const fetchClothes = async () => {
    const data = await getProductFood();
    console.log("data", data);
    setFoods(data);
  };


  const ButtonForProduct = ({ food }) => {
    const findProduct = basket.find((bas) => bas.id === food.id);

    return (
      <>  
        {findProduct ? (
          <Button color="error" onClick={() => deleteElementFromBasket(food.id)} >
            <DeleteForeverRoundedIcon />
          </Button>
        ) : (
          <Button onClick={() => storeBasket(food)} className="button-basket">
            <AddShoppingCartRoundedIcon />
          </Button>
        )}
      </>
    );
  };
  

  useEffect(() => {
    fetchClothes();
  }, []);

  return (
    <> 
    <Container maxWidth="xl">
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
      <Grid container spacing={3} mt={5}>
        <Grid item md={12} sm={12} xs={12}>
          <h2 className="center">POPULAR FOOD</h2>
        </Grid>
        {foods.length > 0 &&
          foods.map((food) => (
            <Grid item md={3} sm={6} xs={12}>
              <img className="product-photo" src={food.img_url} alt="" />
              <div className="description">
                <p className="food-name">{food.name}</p>
                <p className="container-buttons">
                  <span className="price">$ {food.price_sale}</span>
                  <span className="price-tacched">$ {food.price}</span>
                  <ButtonForProduct food = {food}/>
                  <ProductDetail food={food}/>
                </p>
              </div>
            </Grid>
          ))}
      </Grid>
    </Container>
    </>
  );
};

export default Popular;