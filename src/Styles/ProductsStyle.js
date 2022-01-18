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
        width: "60%",
    },
    gamDiv: {
        paddingLeft: "6.5vw"
    },
    sahinDiv: {
        paddingLeft: "6.5vw"

    }
}));

export default ProductsStyle;