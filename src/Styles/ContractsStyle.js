import {makeStyles} from "@material-ui/core/styles";

const ContractsStyle = makeStyles(theme => ({
    menuItem: {
        "&:focus": {
            backgroundColor: theme.palette.primary.main,
            "& $primary, & $icon": {
                color: theme.palette.common.white,
            },
        },
        paddingLeft: "unset",
        paddingTop: "unset",
        paddingBottom: "unset"
    },
    primary: {
        [theme.breakpoints.down("xs")]: {
            fontSize: "14px",
        },
        [theme.breakpoints.up("sm")]: {
            fontSize: "12px",
        },
        [theme.breakpoints.up("md")]: {
            fontSize: "14px",
        },
        [theme.breakpoints.up("lg")]: {
            fontSize: "14px",
        },
    },
    icon: {},
    contractTextPaper: {
        [theme.breakpoints.down("xs")]: {
            padding: "3px",
        },
        [theme.breakpoints.up("sm")]: {
            padding: "10px",
        },
        [theme.breakpoints.up("md")]: {
            padding: "15px",
        },
        [theme.breakpoints.up("lg")]: {
            padding: "20px",
        },
    },
    emptyGrid: {
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    },
    mainGrid: {
        overflowX: "hidden",
        overflowY: "hidden",
        overflow: "hidden",
        [theme.breakpoints.down("xs")]: {
            padding: "10px",
            marginBlockStart: "30px",
        },
        [theme.breakpoints.up("sm")]: {
            padding: "20px",
            marginBlockStart: "60px",
            margin: "unset"
        },
        [theme.breakpoints.up("md")]: {
            padding: "30px",
            marginBlockStart: "30px",
            margin: "unset"
        },
        [theme.breakpoints.up("lg")]: {
            padding: "35px",
            margin: "unset"
        },
    },
    selectButton: {
        textTransform: "none",
        fontFamily: "Montserrat",
    },
    listItemTex: {
        fontFamily: "Montserrat",
    }
}));

export default ContractsStyle;