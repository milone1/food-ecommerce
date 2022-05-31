import { useState } from "react";
import { Button, Dialog, DialogContent, Grid, Chip, Box, Rating } from "@mui/material";
import "../components/productDetail.css";
import MopedIcon from '@mui/icons-material/Moped';
import MoreRoundedIcon from '@mui/icons-material/MoreRounded';

const ProductDetail = ({ food  }) => {
    const [abrir, setAbrir] = useState(false);

    const handleOpenDialog = async () => {
        if (!abrir) {
            console.log("abierto");
        }
        setAbrir(!abrir);
    };

    return (
        <div>
            <Button onClick={handleOpenDialog} variant="text" color="primary">
                <MoreRoundedIcon />
            </Button>
            <Dialog open={abrir} onClose={handleOpenDialog} fullWidth={"md"} maxWidth={"md"} >
                <DialogContent>
                    <center>
                        <h1>{food.name}</h1>
                    </center>
                    <grid className="container-modal">
                        <img src={food.img_url} alt="/" className="img-modalDetail"/>
                        <Grid item padding={4}>
                            <div className="container-rate">
                                <Box sx={{ '& > legend': { mt: 2 }, }}>
                                    <Rating name="read-only" value={food.rate} readOnly />
                                </Box>
                                <h3>{food.rate}/5</h3>
                            </div>
                            <Chip label={food.ingredients_one } color="primary" sx={{ marginRight: 2 }}/>
                            <Chip label={food.ingredients_two} color="primary" sx={{ marginRight: 2 }}/>
                            <Chip label={food.ingredients_three} color="primary" sx={{ marginRight: 2 }}/>
                            <Grid className="container-delivery">
                                <h3>{food.delivery}</h3>
                                <MopedIcon />
                            </Grid>
                        </Grid>
                    </grid>
                    <Button onClick={handleOpenDialog}>Cerrar</Button>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default ProductDetail;