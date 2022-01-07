import {alpha, makeStyles} from "@material-ui/core/styles";
import DefaultTheme from "../Themes/DefaultTheme";

const AppNavbarStyle = makeStyles(theme => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.only('xs')]: {
            marginRight: "-5px"
        },
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.primary.main, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.primary.main, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('md')]: {
            marginLeft: theme.spacing(3),
            width: "30%",
        },
        [theme.breakpoints.down('sm')]: {
            marginLeft: theme.spacing(3),
            width: "50%",
        },
        [theme.breakpoints.only('xs')]: {
            marginRight: "0px",
            width: "100%",
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    toolBarMain: {
        height: "80px",
        [theme.breakpoints.only('xs')]: {
            paddingRight: "0px"
        },
    },
    languageSelection: {
        padding: "5px",
        color: DefaultTheme.palette.success.contrastText,
        backgroundColor: DefaultTheme.palette.secondary.main,
        marginLeft: "20px",
        width: "30px",
        height: "30px",
    },
    languageSelectionArea: {
        margin: "auto",
    },
    appBarMain: {
        boxShadow: "unset",
        backgroundColor: DefaultTheme.palette.primary.main
    },
    languageButton: {
        width: "59px",
        height: "59px"

    },
    languageText: {
        fontSize: "1rem",
        color: DefaultTheme.palette.success.contrastText,
    },
    mainLogo: {
        height: "58px",
        width: "55px",
        marginLeft: "auto",
        marginRight: "auto",
        display: "block"
    },
    tabStyle: {
        color: DefaultTheme.palette.success.contrastText,
        textDecoration: "none",
        textAlign: "center"
    },
    tabGrid: {
        margin: "auto"
    },
    dividerColor: {
        backgroundColor: DefaultTheme.palette.success.contrastText,
    },
    dividerVertical: {
        width: "1px",
        height: "50%",
        marginTop: "15px"
    }
}));

export default AppNavbarStyle;