import {useTranslation} from "react-i18next";
import AppContentStyle from "../Styles/AppContentStyle";
import React from "react";
import mainpageThreeImg from '../assets/images/mainpageThreeImg.png';
import aboutMobile from '../assets/images/aboutMobile.png';
import {Box, Grid, Hidden} from "@material-ui/core";
import cumhur from '../assets/images/cumhur.png';
import fors from '../assets/images/fors.png';
import katar from '../assets/images/katar.png';
import jandarma from '../assets/images/jandarma.png';
import kara from '../assets/images/kara.png';
import deniz from '../assets/images/deniz.png';
import baykar from '../assets/images/baykar.png';
import azer from '../assets/images/azer.png';
import orman from '../assets/images/orman.png';


function MainPageSectionFour() {
    const {t} = useTranslation();
    const classes = AppContentStyle();

    return (
        <div className={classes.referanceArea}>
            <Grid container spacing={2}   direction="row"
                  justifyContent="center"
                  alignItems="center">
                <Grid item md={2} sm={4} xs={6}>
                    <img src={cumhur} alt=""/>
                </Grid>
                <Grid item md={2} sm={4} xs={6}>
                    <img src={fors} alt=""/>

                </Grid>
                <Grid item md={2} sm={4} xs={6}>
                    <img src={katar} alt=""/>

                </Grid>
                <Grid item md={2} sm={4} xs={6}>
                    <img src={jandarma} alt=""/>

                </Grid>
                <Grid item md={2} sm={4} xs={6}>
                    <img src={kara} alt=""/>

                </Grid>
                <Grid item md={2} sm={4} xs={6}>
                    <img src={deniz} alt=""/>

                </Grid>
                <Grid item md={2} sm={4} xs={6}>
                    <img src={baykar} alt=""/>

                </Grid>
                <Grid item md={2} sm={4} xs={6}>
                    <img src={azer} alt=""/>

                </Grid>
                <Grid item md={2} sm={4} xs={6}>
                    <img src={orman} alt=""/>

                </Grid>
            </Grid>
        </div>
    )
}

export default MainPageSectionFour