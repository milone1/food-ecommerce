import { useContext, useState } from "react";
import { Button, Grid, Card, CardContent, TextField } from "@mui/material";
import { UserContext } from "../../Context/UserContext";
import swal from "sweetalert";
import "../login/login.css";

const Login = () => {
  const { storeUser } = useContext(UserContext);

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleClickLogin = () => {
    if (userData.email === "pepe@gmail.com" && userData.password === "123456") {
      const user = {
        nombre: "Pepe",
        apellido: "Zapata",
        correo: userData.email,
        edad: 21,
        trabajo: "Software Developer",
        dni: "12345678",
        cel: "999999",
      };
      storeUser(user);

      window.location.href = "/basket";
    } else {
      swal({
        icon: "error",
        title: "Error",
        text: "Email or Password incorrect",
      });
    }
  };

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="space-around"
      sx={{ height: "100vh", padding: 20, backgroundColor: "#223327" }}
      className="container-login"
    >
      <Grid item md={6}>
        <img  width={600} alt="" />
      </Grid>
      <Grid item md={6}>
        <Card sx={{ width: 500 }}>
          <CardContent>
            <h5>Welcome to</h5>
            <h3>FOOD APP</h3>
            <Grid container spacing={3} mt={5}>
              <Grid item md={12}>
                <TextField label="Email" fullWidth name="email" onChange={handleChangeInput}
                />
              </Grid>
              <Grid item md={12}>
                <TextField label="Password" fullWidth type="password" name="password" onChange={handleChangeInput}/>
              </Grid>
              <Grid item md={12}>
                <Button sx={{ backgroundColor: "#000" }} variant="contained" fullWidth size="large" onClick={handleClickLogin}>
                  Iniciar Session
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Login;