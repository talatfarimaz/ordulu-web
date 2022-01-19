import {useTranslation} from "react-i18next";
import React from "react";
import ProductsStyle from "../../Styles/ProductsStyle";
import {Grid, Typography} from "@material-ui/core";
import kuzgun from "../../assets/images/products/kuzgunBack.png";
import gam from "../../assets/images/products/gamBack.png";
import sahin from "../../assets/images/products/sahinBack.png";
import arz from "../../assets/images/products/arzBack.png";
import ulak from "../../assets/images/products/ulakBack.png";
import kuzgunMain from "../../assets/images/products/kuzgun1.png";
import kuzgun1 from "../../assets/images/products/icons1/1.png";
import kuzgun2 from "../../assets/images/products/icons1/2.png";
import kuzgun3 from "../../assets/images/products/icons1/3.png";
import kuzgun4 from "../../assets/images/products/icons1/4.png";
import kuzgun5 from "../../assets/images/products/icons1/5.png";
import kuzgun6 from "../../assets/images/products/icons1/6.png";
import line from "../../assets/images/products/Line.png";


function ProductsSectionTwo() {
    const {t} = useTranslation();
    const classes = ProductsStyle();
    const kuzgunIconAndText = [{icon: kuzgun1, text: t('KuzgunText1')}, {icon: kuzgun2, text: t('KuzgunText2')},
        {icon: kuzgun3, text: t('KuzgunText3')}, {icon: kuzgun4, text: t('KuzgunText4')}, {
            icon: kuzgun5,
            text: t('KuzgunText5')
        }, {icon: kuzgun6, text: t('KuzgunText6')}]

    return (
        <div className={classes.imgDivProduct}>
            <Grid container spacing={8} className={classes.productImages}>
                <Grid item xs={12} style={{position: "relative"}}>
                    <img src={kuzgun} width={"100%"} alt={""}/>
                    <div className={classes.mainDiv2}>
                        <Grid container direction="column"
                              justifyContent="flex-end"
                              alignItems="flex-end"
                        >
                            <Grid item md={12} sm={12} xs={12} className={classes.mainLogoGrid}>
                                <img src={kuzgunMain} className={classes.mainIcon} alt={""}/>
                            </Grid>
                            <Grid item md={12} sm={12} xs={12} className={classes.iconsGrid}>
                                <Grid container spacing={1}>
                                    {kuzgunIconAndText.map((kuzgun) => {
                                        return (
                                            <Grid item xs={2} className={classes.iconGrid}>
                                                <img src={kuzgun.icon} alt={""} className={classes.miniIcons}/>
                                                <Typography className={classes.iconText}>
                                                    {kuzgun.text}
                                                </Typography>
                                            </Grid>
                                        )
                                    })}
                                </Grid>
                            </Grid>
                            <Grid item md={12} sm={12} xs={12}>
                                <Grid container
                                      direction="row"
                                      justifyContent="flex-end"
                                      alignItems="center">
                                    <Grid item md={5} sm={2} xs={2} className={classes.emptyGrid}>
                                    </Grid>
                                    <Grid item md={7} sm={12} xs={12} className={classes.mainTextGrid}>
                                        <Grid container  direction="row"
                                              justifyContent="flex-end"
                                              alignItems="center">
                                            <Grid item md={11} sm={11} xs={12}> //TODO marginRight: -111
                                                <Typography className={classes.iconText2}>
                                                    {t('KuzgunMainText')}
                                                </Typography>
                                            </Grid>
                                            <Grid item md={1} sm={1} xs={12} className={classes.lineStyle}>
                                                <img src={line} alt={""} width={"3px"} />
                                            </Grid>
                                        </Grid>


                                    </Grid>
                               {/*     <Grid item md={1} sm={1} xs={1} >
                                        <img src={line} alt={""}/>
                                    </Grid>*/}
                                </Grid>
                            </Grid>

                            </Grid>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <img src={gam} width={"100%"} alt={""}/>
                    <div className={classes.mainDiv2}>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <img src={sahin} width={"100%"} alt={""}/>
                    <div className={classes.mainDiv2}>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <img src={arz} width={"100%"} alt={""}/>
                    <div className={classes.mainDiv2}>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <img src={ulak} width={"100%"} alt={""}/>
                    <div className={classes.mainDiv2}>
                    </div>
                </Grid>
            </Grid>

        </div>
    )
}

export default ProductsSectionTwo