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

const AppContentStyle = makeStyles(theme => ({
    imageAnimation: {
        backgroundColor: DefaultTheme.palette.primary.main
    },
    bodyDivStyle: {
        marginTop: "80px",
        [theme.breakpoints.down('md')]: {
            marginTop: "60px",
        },
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
        fontWeight: "bold",
        [theme.breakpoints.down('md')]: {
            fontSize: "80px",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "50px",
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: "25px",
        },
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
        width: "11%",
        height: "11%",
        backgroundImage: `url(${ulak})`,
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        position: "absolute",
        top: "42%",
        left: "85%",
    },
    gam: {
        width: "9%",
        height: "9%",
        backgroundImage: `url(${gam})`,
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        position: "absolute",
        top: "56%",
        left: "28%",
    },
    kuzgun: {
        width: "9%",
        height: "9%",
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
        width: "12%",
        height: "12%",
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
        width: "11%",
        height: "11%",
        backgroundImage: `url(${arz})`,
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        position: "absolute",
        top: "50%",
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
        [theme.breakpoints.only('xs')]: {
            fontSize: "7px",
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
        top: 0,
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
        top: 0,
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
        backgroundColor: DefaultTheme.palette.primary.dark
    },
    referanceImg: {
        marginTop: "10px",
        height: "140px"
    },
    referenceText: {
        fontSize: "50px",
        fontWeight: "bolder",
        color: DefaultTheme.palette.primary.light,
        marginTop: "10px",
        marginBottom: "10px",
        [theme.breakpoints.only('sm')]: {
            fontSize: "40px",
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: "30px",
        },
    },
    referenceName: {
        fontSize: "11px",
        color: DefaultTheme.palette.secondary.contrastText,
        fontWeight: "bold",
        margin: "10px"
    },
    referenceImgText: {
        marginTop: "10px",
        marginBottom: "10px",
        height: "200px",
        borderRadius: "4px"
    },
    pageFiveImg1: {
        position: "relative"
    },
    pageFiveImg2: {
        position: "relative",
        marginTop: "20px"
    },
    pageFiveImg3: {
        position: "relative"
    },
    sectionFiveBackground: {
        backgroundColor: DefaultTheme.palette.primary.main,
        display: "flex",
        justifyContent: "center",
        background: "linear-gradient(to bottom, " + DefaultTheme.palette.primary.main + " 50%," + DefaultTheme.palette.secondary.contrastText + " 50%)",
    },
    sectionFiveGrid: {
        paddingTop: "100px",
        paddingBottom: "100px",
        width: "90%",
        [theme.breakpoints.down('sm')]: {
            width: "100%",
        },
    },
    sectionFiveGrid1: {
        height: "50%",
        display: "flex"
    },
    sectionFiveGrid2: {
        height: "50%",
    },
    sectionFiveGrid3: {
        height: "100%",
        [theme.breakpoints.down('sm')]: {
            height: "unset"
        },
    },
    careerAndLife: {
        fontSize: "30px",
        fontWeight: "bold",
        color: DefaultTheme.palette.secondary.contrastText,
        display: "inline-block",
        alignSelf: "flex-end",
        [theme.breakpoints.down('sm')]: {
            color: DefaultTheme.palette.dark.alternative,
        },
    },
    sectionFiveText1: {
        fontSize: "40px",
        fontWeight: "bolder",
        color: DefaultTheme.palette.secondary.main,
        [theme.breakpoints.down('md')]: {
            fontSize: "25px",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "25px",
        },
    },
    sectionFiveText2: {
        fontSize: "40px",
        fontWeight: "bolder",
        color: DefaultTheme.palette.dark.alternative,
        [theme.breakpoints.down('md')]: {
            fontSize: "25px",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "25px",
        },
    },
    sectionFiveText3: {
        fontSize: "20px",
        fontWeight: "bolder",
        color: DefaultTheme.palette.dark.alternative,
        [theme.breakpoints.down('md')]: {
            fontSize: "15px",
        },
    },
    sectionFiveButtons: {
        position: "absolute",
        top: "80%",
        left: "40%",
    },
    sectionFiveButtons2: {
        position: "absolute",
        top: "92%",
        left: "42%",
    },
    sectionFiveButtonText: {
        color: DefaultTheme.palette.secondary.contrastText,
        fontSize: "20px",
        fontWeight: "bolder",
        [theme.breakpoints.only('md')]: {
            fontSize: "15px",
        },
        [theme.breakpoints.only('sm')]: {
            fontSize: "12px",
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: "13px",
        },
    },
    gridHeight: {
        height: "100%",
        [theme.breakpoints.down('sm')]: {
            height: "unset"
        },
        [theme.breakpoints.only('xs')]: {
            paddingLeft: "10px",
        },
    }
}));

export default AppContentStyle;