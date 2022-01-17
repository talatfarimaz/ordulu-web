import {useTranslation} from "react-i18next";
import {Button, Divider, Grid, Link, Typography} from "@material-ui/core";
import React from "react";
import AppFooterStyle from "../Styles/AppFooterStyle";
import ordulu from '../assets/images/ordulu.png';
import enetki from '../assets/images/enetki.png';
import linkedin from '../assets/images/linkedin.png';
import youtube from '../assets/images/youtube.png';
import twitter from '../assets/images/twitter.png';
import DefaultTheme from "../Themes/DefaultTheme";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import HomeIcon from '@material-ui/icons/Home';
import classNames from "classnames";
import Contracts from "./Contracts";


function AppFooter() {
    const {t} = useTranslation();
    const classes = AppFooterStyle();

    const handleSendEmail = () => {
        window.location = "mailto:" + t('MailTo');
    }
    return (
        <div className={classes.footerBackground}>
            <Grid container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
            >
                <Grid item sm={4} xs={12} className={classNames(classes.subGrids, classes.grid1)}>
                    <Typography className={classes.groupCompany}>
                        {t('GroupCompany')}
                    </Typography>
                    <img src={enetki} alt="" width={"130px"} height={"27px"}/>
                </Grid>
                <Grid item sm={4} xs={12} className={classNames(classes.subGrids, classes.grid2)}>
                    <Grid container direction="row"
                          justifyContent="center"
                          alignItems="center">
                        <Grid item xs={12}>
                            <img src={twitter} alt="" className={classes.footerIcons}/>
                            <img src={linkedin} alt="" className={classes.footerIcons}/>
                            <img src={youtube} alt="" className={classes.footerIcons}/>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography className={classes.copyRight}>
                                {t('CopyRight')}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sm={4} xs={12} className={classNames(classes.subGrids, classes.grid3)}>
                    <img src={ordulu} alt="" width={"132px"} height={"43px"}/>
                </Grid>
                <Grid item xs={12} className={classes.dividerGrid}>
                    <Divider variant={"fullWidth"} light={true} classes={{
                        root: classes.dividerColor
                    }}/>
                </Grid>
                <Grid item sm={4} xs={12} className={classNames(classes.subGrids, classes.grid4)}>
                    <Button startIcon={<MailOutlineIcon style={{color: DefaultTheme.palette.inherit.main}}/>}
                            onClick={() => {
                                handleSendEmail()
                            }}>
                        <Typography className={classes.mailTo}>
                            {t('MailTo')}
                        </Typography>
                    </Button>
                </Grid>
                <Grid item sm={4} xs={12} className={classNames(classes.subGrids, classes.grid5)}>
                    <Grid spacing={1} container
                          justifyContent="space-evenly"
                          alignItems="center"
                    >
                        <Grid item md={3} sm={6} xs={12}>
                            <Link
                                underline={"none"}
                                href={'/contracts?code=kvkk'}
                            >
                                <Typography className={classes.mailTo}>
                                    {t('KVKK')}
                                </Typography>
                            </Link>
                        </Grid>
                        <Grid item md={3} sm={6} xs={12}>
                            <Link
                                underline={"none"}
                                href={'/contracts?code=society'}
                            >
                                <Typography className={classes.mailTo}>
                                    {t('InfoFooter')}
                                </Typography>
                            </Link>
                        </Grid>
                        <Grid item md={3} sm={6} xs={12}>
                            <Link
                                underline={"none"}
                                href={'/contracts?code=press'}
                            >
                                <Typography className={classes.mailTo}>
                                    {t('InfoFooter2')}
                                </Typography>
                            </Link>
                        </Grid>
                        <Grid item md={3} sm={6} xs={12}>
                            <Link
                                underline={"none"}
                                href={'/contracts?code=contact'}
                            >
                                <Typography className={classes.mailTo}>
                                    {t('Contact')}
                                </Typography>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sm={4} xs={12} className={classNames(classes.subGrids, classes.grid6)}>
                    <Button disabled={true} startIcon={<HomeIcon style={{color: DefaultTheme.palette.inherit.main}}/>}>
                        <Typography className={classes.mailTo}>
                            {t('Address')}
                        </Typography>
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default AppFooter