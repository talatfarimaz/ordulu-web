import {withTranslation} from "react-i18next";
import React from "react";
import MainPageSectionOne from "./MainPageSectionOne";

function AppContent(props) {


    return (
        <div>
            <MainPageSectionOne/>
        </div>
    );
}

export default withTranslation()(AppContent)
