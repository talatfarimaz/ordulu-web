import {useTranslation} from "react-i18next";
import React from "react";
import ProductsStyle from "../../Styles/ProductsStyle";
import {Button, Grid} from "@material-ui/core";
import kuzgun from "../../assets/images/products/kuzgunBack.png";
import gam from "../../assets/images/products/gamBack.png";
import sahin from "../../assets/images/products/sahinBack.png";
import arz from "../../assets/images/products/arzBack.png";
import ulak from "../../assets/images/products/ulakBack.png";
import axios from "axios";


function ProductsSectionTwo() {
    const {t} = useTranslation();
    const classes = ProductsStyle();

    return (
        <div className={classes.imgDivProduct}>
            <Grid container spacing={8} className={classes.productImages}>
                <Grid item xs={12}>
                    <img src={kuzgun} width={"100%"} alt={""}/>
                    <div className={classes.mainDiv}>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <img src={gam} width={"100%"} alt={""}/>
                    <div className={classes.mainDiv}>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <img src={sahin} width={"100%"} alt={""}/>
                    <div className={classes.mainDiv}>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <img src={arz} width={"100%"} alt={""}/>
                    <div className={classes.mainDiv}>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <img src={ulak} width={"100%"} alt={""}/>
                    <div className={classes.mainDiv}>
                    </div>
                </Grid>
            </Grid>

        </div>
    )
}

export default ProductsSectionTwo