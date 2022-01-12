import {useTranslation} from "react-i18next";
import {Grid, Paper, Typography} from "@material-ui/core";
import React from "react";
import CareerAndLifeStyle from "../../Styles/CareerAndLifeStyle";
import adv1 from "../../assets/images/adv1.png";
import adv2 from "../../assets/images/adv2.png";
import adv3 from "../../assets/images/adv3.png";
import adv4 from "../../assets/images/adv4.png";


function CareerAndLifeSectionFive() {
    const {t} = useTranslation();
    const classes = CareerAndLifeStyle();
    return (
        <div className={classes.sectionFive}>
        </div>
    )
}

export default CareerAndLifeSectionFive