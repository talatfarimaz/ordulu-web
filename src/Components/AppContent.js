import {withTranslation} from "react-i18next";
import React from "react";
import MainPageSectionOne from "./MainPageSectionOne";
import AppContentStyle from "../Styles/AppContentStyle";


function AppContent(props) {
    const classes = AppContentStyle();
    return (
        <div className={classes.bodyDivStyle}>
            <MainPageSectionOne/>
        </div>
    );
}

export default withTranslation()(AppContent)
