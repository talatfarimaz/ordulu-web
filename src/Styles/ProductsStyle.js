import {makeStyles} from "@material-ui/core/styles";
import DefaultTheme from "../Themes/DefaultTheme";

const ProductsStyle = makeStyles(theme => ({
    bodyDivStyle: {
        marginTop: "80px !important",
        [theme.breakpoints.down('md')]: {
            marginTop: "60px !important",
        }
    },
    videoScreen: {
        display: "flex",
        justifyContent: "center",
        paddingTop: theme.spacing(2),
    },
    imgDiv: {
        position: "relative",
        paddingBottom: theme.spacing(8)
    },
    mainDiv: {
        position: "absolute",
        top: "30%",
        left: "0%",
        right: "0%",
        [theme.breakpoints.down('sm')]: {
            top: "20%",
        },
        [theme.breakpoints.only('xs')]: {
            top: "0%",
        },
    },
    mainDiv2: {
        position: "absolute",
        top: "25%",
        left: "15%",
        right: "15%",
        [theme.breakpoints.down('sm')]: {
            top: "25%",
        },
        [theme.breakpoints.only('xs')]: {
            top: "0%",
        },
    },
    mainDiv3: {
        position: "absolute",
        top: "64%",
        left: "13%",
        right: "14%",
        [theme.breakpoints.down('sm')]: {
            top: "25%",
        },
        [theme.breakpoints.only('xs')]: {
            top: "0%",
        },
        textAlign: "right"
    },
    playIcon: {
        color: DefaultTheme.palette.secondary.contrastText,
        fontSize: "6vw",
        [theme.breakpoints.down('sm')]: {
            fontSize: "8vw",
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: "10vw",
        },
    },
    playText: {
        color: DefaultTheme.palette.secondary.contrastText,
        fontWeight: "bolder !important",
        fontSize: "2.5vw",
        [theme.breakpoints.down('sm')]: {
            fontSize: "3vw",
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: "4vw",
        },
    },
    playIconGrid: {
        textAlign: "center"
    },
    playTextGrid: {
        textAlign: "center"
    },
    backdrop: {
        backgroundColor: "rgb(0 0 0 / 80%) !important"
    },
    paper: {},
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    videoScreenArea: {
        width: "50% !importnt",
        height: "50% !important"
    },
    productGrid: {
        paddingTop: theme.spacing(6),
        [theme.breakpoints.down('sm')]: {
            paddingTop: theme.spacing(4),
        },
        [theme.breakpoints.only('xs')]: {
            paddingTop: theme.spacing(2),
        },

    },
    carouselStyle: {
        backgroundColor: "rgb(0 0 0 / 80%)"
    },
    carouselGrid: {
        width: "100% !important",
        margin: "unset !important"
    },
    productGridWeb: {
        width: "100% !important",
        margin: "unset !important"
    },
    imgDivProduct: {
        backgroundColor: DefaultTheme.palette.secondary.contrastText,
        position: "relative",
        paddingBottom: theme.spacing(10),
        paddingTop: theme.spacing(10),
        display: "flex",
        justifyContent: "center"
    },
    productImages: {
        width: "85%",
        [theme.breakpoints.down('md')]: {
            width: "100%",
        },
    },
    gamDiv: {
        paddingLeft: "6.5vw"
    },
    sahinDiv: {
        paddingLeft: "6.5vw"
    },
    iconText: {
        fontSize: "10px !important",
        fontWeight: "bold",
        color: DefaultTheme.palette.secondary.contrastText,
        [theme.breakpoints.down('md')]: {
            fontSize: "9px !important",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "7px !important",
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: "6px !important",
        },
    },
    iconText2: {
        fontSize: "15px !important",
        fontWeight: "bold",
        color: DefaultTheme.palette.secondary.contrastText,
        [theme.breakpoints.down('md')]: {
            fontSize: "13px !important",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "10px !important",
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: "8px !important",
        },
        "@media screen and (max-width: 1600px) and (min-width: 1280px)": {
            fontSize: "14px !important",
        },
    },
    iconGrid: {
        textAlign: "center"
    },
    mainIcon: {
        [theme.breakpoints.up('lg')]: {
            width: "75%"
        },
        [theme.breakpoints.down('md')]: {
            width: "55%"
        },
        [theme.breakpoints.down('sm')]: {
            width: "40%"
        },
        [theme.breakpoints.only('xs')]: {
            width: "80%"
        },
        "@media screen and (max-width: 1600px) and (min-width: 1280px)": {
            width: "65%"
        },
    },
    mainLogoGrid: {
        textAlign: "right"
    },
    miniIcons: {
        [theme.breakpoints.up('lg')]: {
            width: "38px",
            height: "38px"
        },
        [theme.breakpoints.down('md')]: {
            width: "27px",
            height: "27px"
        },
        [theme.breakpoints.down('sm')]: {
            width: "22px",
            height: "22px"
        },
        [theme.breakpoints.only('xs')]: {
            width: "38px",
            height: "38px"
        },
        "@media screen and (max-width: 1600px) and (min-width: 1280px)": {
            width: "30px",
            height: "30px"
        },

    },
    emptyGrid: {
        "@media screen and (max-width: 1600px)": {
            display: "none"
        },
    },
    mainTextGrid: {
        paddingTop: theme.spacing(5),
        textAlign: "right",
        "@media screen and (max-width: 1600px) and (min-width: 960px)": {
            paddingTop: theme.spacing(1),
        },
        [theme.breakpoints.only('sm')]: {
            paddingTop: "1px",
        },
    },
    lineStyle : {
        [theme.breakpoints.down('sm')]: {
            display: "none"
        },
    },
    iconsGrid: {
        "@media screen and (max-width: 620px) and (min-width: 600px)": {
            marginTop: "-12px"
        }
    }
}));

export default ProductsStyle;