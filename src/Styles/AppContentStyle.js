import {makeStyles} from "@material-ui/core/styles";
import logo from '../assets/images/mainImg.png'
import DefaultTheme from "../Themes/DefaultTheme";

const AppContentStyle = makeStyles(theme => ({
    imageAnimation: {
     /*   backgroundImage: `url(${logo})`,
        objectFit: "cover",
        width: "100%",
        height: "100%",*/
    },
    bodyDivStyle: {
        marginTop: "80px"
    },
    mainImgStyle: {
        width: "100%"
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
        bottom: "60px",
        left: "16px",
    },
    mediaIconStyle: {
        color: DefaultTheme.palette.secondary.contrastText,
        fontSize: "40px"
    }
}));

export default AppContentStyle;