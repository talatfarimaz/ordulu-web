import {makeStyles} from "@material-ui/core/styles";
import DefaultTheme from "../Themes/DefaultTheme";
import akinci1 from '../assets/images/akinci1.png';
import akinci2 from '../assets/images/akinci2.png';
import ulak from '../assets/images/ulak.png';
import arz from '../assets/images/arz.png';
import sahin from '../assets/images/sahin.png';
import kuzgun from '../assets/images/kuzgun.png';
import gam from '../assets/images/gam.png';
import section2img from '../assets/images/section2img.png';
import mainpageThreeImg from '../assets/images/mainpageThreeImg.png';


const AppContentStyle = makeStyles(theme => ({
    imageAnimation: {
        backgroundColor: DefaultTheme.palette.primary.main
    },
    bodyDivStyle: {
        marginTop: "80px"
    },
    mainImgStyle: {
        width: "100%",
        display: "block"
    },
    mainText: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    },
    mainTextStyle: {
        fontSize: "100px",
        color: DefaultTheme.palette.secondary.contrastText,
        fontWeight: "bold"
    },
    mediaIcons: {
        position: "absolute",
        top: "85%",
        left: "5%",
        [theme.breakpoints.only('xs')]: {
            top: "75%",
        }
    },
    mediaIconStyle: {
        color: DefaultTheme.palette.secondary.contrastText,
        fontSize: "40px",
        [theme.breakpoints.down('md')]: {
            fontSize: "30px",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "20px",
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: "15px",
        },
    },
    akinci2: {
        width: "3%",
        height: "3%",
        backgroundImage: `url(${akinci2})`,
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        position: "absolute",
        top: "25%",
        left: "50%",
    },
    akinci1: {
        width: "5%",
        height: "5%",
        backgroundImage: `url(${akinci1})`,
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        position: "absolute",
        top: "20%",
        left: "60%",
    },
    ulak: {
        width: "9%",
        height: "9%",
        backgroundImage: `url(${ulak})`,
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        position: "absolute",
        top: "44%",
        left: "88%",
    },
    gam: {
        width: "7%",
        height: "7%",
        backgroundImage: `url(${gam})`,
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        position: "absolute",
        top: "56%",
        left: "28%",
    },
    kuzgun: {
        width: "7%",
        height: "7%",
        backgroundImage: `url(${kuzgun})`,
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        position: "absolute",
        top: "45%",
        left: "8%",
    }
    ,
    sahin: {
        width: "10%",
        height: "10%",
        backgroundImage: `url(${sahin})`,
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        position: "absolute",
        top: "73%",
        left: "58%",
    }
    ,
    arz: {
        width: "9%",
        height: "9%",
        backgroundImage: `url(${arz})`,
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        position: "absolute",
        top: "52%",
        left: "47%",
    },
    infoIcons: {
        color: DefaultTheme.palette.secondary.contrastText,
        fontSize: "50px",
        [theme.breakpoints.down('lg')]: {
            fontSize: "40px",
        },
        [theme.breakpoints.down('md')]: {
            fontSize: "30px",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "25px",
        },
    },
    infoArea: {
        backgroundColor: DefaultTheme.palette.primary.main,
        width: "80%",
        margin: "auto",
        paddingTop: "20px",
        paddingBottom: "20px",
        [theme.breakpoints.down('sm')]: {
            width: "90%",
        },
        [theme.breakpoints.only('sm')]: {
            width: "100%",
        },
    },
    infoText: {
        color: DefaultTheme.palette.secondary.contrastText,
        fontSize: "18px",
        marginTop: "10px",
        [theme.breakpoints.down('lg')]: {
            fontSize: "15px",
        },
        [theme.breakpoints.down('md')]: {
            fontSize: "13px",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "9px",
        },
    },
    iconText: {
        textAlign: "center"
    },
    sectionTwoBackground: {
        backgroundImage: `url(${section2img})`,
    },
    orduluInfo: {
        color: DefaultTheme.palette.secondary.contrastText,
        fontSize: "60px",
        fontWeight: "bold",
        textAlign: "right",
        [theme.breakpoints.down('lg')]: {
            fontSize: "50px",
        },
        [theme.breakpoints.down('md')]: {
            fontSize: "40px",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "30px",
            textAlign: "center",
        },
    },
    infoMargin: {
        margin: "auto",
    },
    alignRight: {
        float: "right",
        [theme.breakpoints.down('sm')]: {
            float: "unset",
        },

    },
    sectionTwoPadding: {
        paddingTop: "80px",
        paddingBottom: "80px",
        width: "90%",
        margin: "auto",
        textAlign: "center",
        [theme.breakpoints.down('sm')]: {
            width: "100%",
        },
    },
    sectionTwoImg: {
        maxWidth: "100%"
    },
    sectionThreeBackground: {
        backgroundColor: DefaultTheme.palette.primary.main,
        height: "60vw",
        position: "relative",
        [theme.breakpoints.only('sm')]: {
            height: "60vw",
        },
        [theme.breakpoints.only('xs')]: {
            height: "110vw",
        },
    },
    aboutOneImg: {
        float: "right",
        position: "absolute",
        width: "100%",
        display: "block",
        margin: "auto",
        top:0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    aboutOneMobileImg: {
        float: "right",
        position: "absolute",
        width: "100%",
        display: "block",
        margin: "auto",
        top:0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    aboutOneImg2: {
        position: "absolute",
        top: "21%",
        left: "20%",
        maxWidth: "100%",
    },
    referanceArea: {
        textAlign: "center",
        backgroundColor: DefaultTheme.palette.primary.main
    },
    referanceImg: {

    }

}));

export default AppContentStyle;