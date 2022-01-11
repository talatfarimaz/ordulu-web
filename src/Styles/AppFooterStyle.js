import {makeStyles} from "@material-ui/core/styles";
import DefaultTheme from "../Themes/DefaultTheme";

const AppFooterStyle = makeStyles(theme => ({
    footerBackground: {
        paddingTop: "100px",
        paddingBottom: "100px",
        backgroundColor: DefaultTheme.palette.primary.main
    }
    ,
    groupCompany: {
        fontWeight: "bolder",
        fontSize: "18px",
        paddingBottom: "20px",
        color: DefaultTheme.palette.secondary.contrastText,
    },
    subGrids: {
        textAlign: "center"
    },
    footerIcons: {
        padding: "10px"
    },
    copyRight: {
        paddingTop: "10px",
        color: DefaultTheme.palette.secondary.contrastText,
        fontSize: "10px"
    },
    dividerGrid: {
        paddingTop: "20px",
        paddingBottom: "20px"
    },
    dividerColor: {
        backgroundColor: DefaultTheme.palette.primary.light + " !important"
    },
    mailTo: {
        color: DefaultTheme.palette.secondary.contrastText,
        fontSize: "11px"
    },
    footerDivider: {
        height: "15px",
        textAlign: "center",
        display: "flex",
        justifyContent: "center"
    },
    grid1: {
        [theme.breakpoints.only('xs')]: {
            order: 2
        },
    },
    grid2: {
        [theme.breakpoints.only('xs')]: {
            order: 3
        },
    },
    grid3: {
        [theme.breakpoints.only('xs')]: {
            order: 1
        },
    },

}));

export default AppFooterStyle;