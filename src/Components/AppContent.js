import {withTranslation} from "react-i18next";
import React from "react";
import MainPageSectionOne from "./MainPageSectionOne";
import AppContentStyle from "../Styles/AppContentStyle";
import MainPageSectionTwo from "./MainPageSectionTwo";
import MainPageSectionThree from "./MainPageSectionThree";
import MainPageSectionFour from "./MainPageSectionFour";
import MainPageSectionFive from "./MainPageSectionFive";


function AppContent(props) {
    const classes = AppContentStyle();
    return (
        <div className={classes.bodyDivStyle}>
            <MainPageSectionOne/>
            <MainPageSectionTwo/>
            <MainPageSectionThree/>
            <MainPageSectionFour/>
            <MainPageSectionFive/>
        </div>
    );
}

export default withTranslation()(AppContent)
