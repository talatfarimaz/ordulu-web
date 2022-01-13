import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {useTranslation, withTranslation} from 'react-i18next';
import i18n from '../i18n/i18n';
import AppNavbarStyle from "../Styles/AppNavbarStyle";
import {Avatar, Divider, Grid, Link, Typography} from "@material-ui/core";
import logo from '../assets/images/logo.png'
import DefaultTheme from "../Themes/DefaultTheme";
import LanguagesEnum from "../i18n/LanguagesEnum";


function AppNavbar(props) {
    const {t} = useTranslation();
    const classes = AppNavbarStyle();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const [anchorElMenu, setAnchorElMenu] = React.useState(null);
    const [activeLanguage, setActiveLanguage] = React.useState(i18n.language);
    const changeLanguageSelection = (lng) => {
        i18n.changeLanguage(lng);
        setActiveLanguage(lng);
    };

    const handleClickLanguage = (event) => {
        setAnchorElMenu(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorElMenu(null);
    };

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };


    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            id={menuId}
            keepMounted
            transformOrigin={{vertical: 'top', horizontal: 'right'}}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{vertical: 'top', horizontal: 'right'}}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <MailIcon/>
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton aria-label="show 11 new notifications" color="inherit">
                    <Badge badgeContent={11} color="secondary">
                        <NotificationsIcon/>
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle/>
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    return (
        <div className={classes.grow}>
            <AppBar position="fixed" color={"default"} className={classes.appBarMain}>
                <Toolbar className={classes.toolBarMain}>
                    <Grid container>
                        <Grid item lg={2} md={1} sm={2} xs={2} style={{margin: "auto"}}>
                            <Avatar className={classes.mainLogo} src={logo}/>
                        </Grid>
                        <Grid item lg={1} md={0} sm={1} xs={2}/>
                        <Grid item lg={7} md={9} sm={8} xs={6} className={classes.tabGrid}>
                            <Grid container className={classes.tabButtons}>
                                <Grid ite xs={2}/>
                                <Grid item xs={2} style={{margin: "auto"}}>
                                    <Link
                                        underline={"none"}
                                        className={classes.tabStyle}
                                        onMouseEnter={(__Event) => {
                                            __Event.target.style.color = DefaultTheme.palette.secondary.main
                                        }}
                                        onMouseOut={(__Event) => {
                                            __Event.target.style.color = DefaultTheme.palette.success.contrastText
                                        }}
                                        href={'/'}
                                    >
                                        <Typography className={classes.tabFont}>
                                            {t('MainPage')}
                                        </Typography>
                                    </Link>
                                </Grid>
                                <Grid item xs={2} style={{margin: "auto"}}>
                                    <Link
                                        underline={"none"}
                                        className={classes.tabStyle}
                                        onMouseEnter={(__Event) => {
                                            __Event.target.style.color = DefaultTheme.palette.secondary.main
                                        }}
                                        onMouseOut={(__Event) => {
                                            __Event.target.style.color = DefaultTheme.palette.success.contrastText
                                        }}
                                    >
                                        <Typography className={classes.tabFont}>
                                            {t('Products')}
                                        </Typography>
                                    </Link>
                                </Grid>
                                <Grid item xs={2} style={{margin: "auto"}}>
                                    <Link
                                        underline={"none"}
                                        className={classes.tabStyle}
                                        onMouseEnter={(__Event) => {
                                            __Event.target.style.color = DefaultTheme.palette.secondary.main
                                        }}
                                        onMouseOut={(__Event) => {
                                            __Event.target.style.color = DefaultTheme.palette.success.contrastText
                                        }}
                                        href={'/careerandlife'}
                                    >
                                        <Typography className={classes.tabFont}>
                                            {t('CareerLife')}
                                        </Typography>
                                    </Link>
                                </Grid>
                                <Grid item xs={2} style={{margin: "auto"}}>
                                    <Link
                                        underline={"none"}
                                        className={classes.tabStyle}
                                        onMouseEnter={(__Event) => {
                                            __Event.target.style.color = DefaultTheme.palette.secondary.main
                                        }}
                                        onMouseOut={(__Event) => {
                                            __Event.target.style.color = DefaultTheme.palette.success.contrastText
                                        }}
                                    >
                                        <Typography className={classes.tabFont}>
                                            {t('Blog')}
                                        </Typography>
                                    </Link>
                                </Grid>
                                <Grid item xs={2} style={{margin: "auto"}}>
                                    <Link
                                        underline={"none"}
                                        className={classes.tabStyle}
                                        onMouseEnter={(__Event) => {
                                            __Event.target.style.color = DefaultTheme.palette.secondary.main
                                        }}
                                        onMouseOut={(__Event) => {
                                            __Event.target.style.color = DefaultTheme.palette.success.contrastText
                                        }}
                                        href={'/contact'}
                                    >
                                        <Typography className={classes.tabFont}>
                                            {t('Contact')}
                                        </Typography>
                                    </Link>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item lg={1} md={1} sm={0} xs={1}>
                                <Grid container>
                                    <Grid item xs={3}>
                                        <Divider orientation={"vertical"} classes={{
                                            vertical: classes.dividerVertical,
                                            root: classes.dividerColor
                                        }}/>
                                    </Grid>
                                    <Grid item xs={9}>
                                        <IconButton color="primary" onClick={handleClickLanguage}
                                                    className={classes.languageButton}>
                                            <Typography className={classes.tabFont}>{activeLanguage}</Typography>
                                        </IconButton>
                                        <Menu
                                            id="simple-menu"
                                            anchorEl={anchorElMenu}
                                            keepMounted
                                            open={Boolean(anchorElMenu)}
                                            onClose={handleClose}
                                        >
                                            <MenuItem onClick={() => {
                                                changeLanguageSelection(LanguagesEnum.English);
                                                handleClose()
                                            }}>
                                                <Typography>
                                                    {LanguagesEnum.English}
                                                </Typography>
                                            </MenuItem>
                                            <MenuItem onClick={() => {
                                                changeLanguageSelection(LanguagesEnum.Turkish);
                                                handleClose()
                                            }}>
                                                <Typography>
                                                    {LanguagesEnum.Turkish}
                                                </Typography>
                                            </MenuItem>
                                        </Menu>
                                    </Grid>
                            </Grid>

                        </Grid>
                        <Grid item lg={1} md={1} sm={1} xs={1}/>
                    </Grid>
                </Toolbar>
            </AppBar>
            {/*
            {renderMobileMenu}
*/}
            {renderMenu}
        </div>
    );
}

export default withTranslation()(AppNavbar)