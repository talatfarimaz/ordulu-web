import {useTranslation} from "react-i18next";
import {Button, Divider, Grid, Typography} from "@material-ui/core";
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
                  alignItems="flex-end"
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
                <Grid item sm={4} xs={12} className={classes.subGrids}>
                    <Button startIcon={<MailOutlineIcon style={{color: DefaultTheme.palette.inherit.main}}/>}
                            onClick={() => {
                                handleSendEmail()
                            }}>
                        <Typography className={classes.mailTo}>
                            {t('MailTo')}
                        </Typography>
                    </Button>
                </Grid>
                <Grid item sm={4} xs={12} className={classes.subGrids}>
                    <Grid container direction="row"
                          justifyContent="center"
                          alignItems="center">
                                <Grid item xs={5} style={{textAlign: "right"}}>
                                    <Button>
                                        <Typography className={classes.mailTo}>
                                            {t('KVKK')}
                                        </Typography>
                                    </Button>
                                </Grid>
                                <Grid item xs={2} className={classes.footerDivider} >
                                    <Divider orientation={"vertical"} light={true} classes={{
                                        root: classes.dividerColor
                                    }}/>
                                </Grid>
                                <Grid item xs={5} style={{textAlign: "left"}}>
                                    <Button>
                                        <Typography className={classes.mailTo}>
                                            {t('Contact')}
                                        </Typography>
                                    </Button>
                                </Grid>
                    </Grid>
                </Grid>
                <Grid item sm={4} xs={12} className={classes.subGrids}>
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