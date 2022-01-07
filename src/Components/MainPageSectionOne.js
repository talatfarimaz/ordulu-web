import React from "react";
import {useTranslation} from "react-i18next";
import AppNavbarStyle from "../Styles/AppNavbarStyle";
import AppContentStyle from "../Styles/AppContentStyle";

function MainPageSectionOne() {
    const {t} = useTranslation();
    const classes = AppContentStyle();

    return (
        <div className={classes.imageAnimation}>
        </div>
    )
}

export default MainPageSectionOne