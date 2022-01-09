import React from "react";
import {useTranslation} from "react-i18next";
import AppContentStyle from "../Styles/AppContentStyle";
import {Grid, Typography} from "@material-ui/core";
import mainImg from '../assets/images/mainImg.png';
import mainImg2 from '../assets/images/mainImg2.png';
import akinci1 from '../assets/images/akinci1.png';
import akinci2 from '../assets/images/akinci2.png';
import ulak from '../assets/images/ulak.png';
import arz from '../assets/images/arz.png';
import sahin from '../assets/images/sahin.png';
import kuzgun from '../assets/images/kuzgun.png';
import gam from '../assets/images/gam.png';
import IconButton from "@material-ui/core/IconButton";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import SettingsInputAntennaIcon from '@material-ui/icons/SettingsInputAntenna';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import SettingsInputComponentIcon from '@material-ui/icons/SettingsInputComponent';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import FormatShapesIcon from '@material-ui/icons/FormatShapes';

function MainPageSectionOne() {
    const {t} = useTranslation();
    const classes = AppContentStyle();
    const [changeImg, setChangeImg] = React.useState(true); //TODO false yap

    const handleChangeWidthAndHeight = (event) => {
        event.stopPropagation();
        event.preventDefault();
        var element = document.getElementById(event.target.id);
        element.style.padding = "20px"
    }

    const handleResetWidthAndHeight = (event) => {
        event.stopPropagation();
        event.preventDefault();
        var element = document.getElementById(event.target.id);
        element.style.padding = "0px"
    }
    const handleGetImg = () => {
        if (changeImg) {
            return (
                <div style={{position: "relative"}}>
                    <img src={mainImg2} alt="" className={classes.mainImgStyle}/>
                    <div id={"akinci2"} className={classes.akinci2}/>
                    <div id={"akinci1"} className={classes.akinci1}/>
                    <div id={"kuzgun"} onMouseEnter={(event) => {
                        handleChangeWidthAndHeight(event)
                    }}
                         onMouseLeave={(event) => {
                             handleResetWidthAndHeight(event)
                         }} className={classes.kuzgun}/>
                    <div id={"gam"} onMouseEnter={(event) => {
                        handleChangeWidthAndHeight(event)
                    }}
                         onMouseLeave={(event) => {
                             handleResetWidthAndHeight(event)
                         }} className={classes.gam}/>
                    <div id={"arz"} onMouseEnter={(event) => {
                        handleChangeWidthAndHeight(event)
                    }}
                         onMouseLeave={(event) => {
                             handleResetWidthAndHeight(event)
                         }} className={classes.arz}/>
                    <div id={"sahin"} onMouseEnter={(event) => {
                        handleChangeWidthAndHeight(event)
                    }}
                         onMouseLeave={(event) => {
                             handleResetWidthAndHeight(event)
                         }} className={classes.sahin}/>
                    <div id={"ulak"} onMouseEnter={(event) => {
                        handleChangeWidthAndHeight(event)
                    }}
                         onMouseLeave={(event) => {
                             handleResetWidthAndHeight(event)
                         }} className={classes.ulak}/>
                    <div className={classes.mediaIcons}>
                        <Grid container spacing={1}>
                            <Grid item xs={4}>
                                <IconButton>
                                    <LinkedInIcon className={classes.mediaIconStyle}/>
                                </IconButton>
                            </Grid>
                            <Grid item xs={4}>
                                <IconButton>
                                    <YouTubeIcon className={classes.mediaIconStyle}/>
                                </IconButton>
                            </Grid>
                            <Grid item xs={4}>
                                <IconButton>
                                    <TwitterIcon className={classes.mediaIconStyle}/>
                                </IconButton>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            )
        } else {
            return (
                <div style={{position: "relative"}}>
                    <img src={mainImg} alt="" className={classes.mainImgStyle}/>
                    <div className={classes.mainText}>
                        <Typography className={classes.mainTextStyle}>
                            O R D U L U
                        </Typography>
                    </div>
                    <div className={classes.mediaIcons}>
                        <Grid container spacing={1}>
                            <Grid item xs={4}>
                                <IconButton>
                                    <LinkedInIcon className={classes.mediaIconStyle}/>
                                </IconButton>
                            </Grid>
                            <Grid item xs={4}>
                                <IconButton>
                                    <YouTubeIcon className={classes.mediaIconStyle}/>
                                </IconButton>
                            </Grid>
                            <Grid item xs={4}>
                                <IconButton>
                                    <TwitterIcon className={classes.mediaIconStyle}/>
                                </IconButton>
                            </Grid>
                        </Grid>
                    </div>

                </div>
            )
        }
    };
    return (
        <div className={classes.imageAnimation}>
            <div onMouseEnter={(event) => {
                setChangeImg(true)
            }}
                 onMouseLeave={(event) => {
                     setChangeImg(false)
                 }}>
                {handleGetImg()}
            </div>
            <div className={classes.infoArea}>
                <Grid container spacing={1}>
                    <Grid item xs={1}/>
                    <Grid item xs={2} className={classes.iconText}>
                        <SettingsInputAntennaIcon className={classes.infoIcons}/>
                        <Typography className={classes.infoText}>
                            {t('Info1')}
                        </Typography>
                    </Grid>
                    <Grid item xs={2} className={classes.iconText}>
                        <LiveTvIcon className={classes.infoIcons}/>
                        <Typography className={classes.infoText}>
                            {t('Info2')}
                        </Typography>
                    </Grid>
                    <Grid item xs={2} className={classes.iconText}>
                        <SettingsInputComponentIcon className={classes.infoIcons}/>
                        <Typography className={classes.infoText}>
                            {t('Info3')}
                        </Typography>
                    </Grid>
                    <Grid item xs={2} className={classes.iconText}>
                        <QuestionAnswerIcon className={classes.infoIcons}/>
                        <Typography className={classes.infoText}>
                            {t('Info4')}
                        </Typography>
                    </Grid>
                    <Grid item xs={2} className={classes.iconText}>
                        <FormatShapesIcon className={classes.infoIcons}/>
                        <Typography className={classes.infoText}>
                            {t('Info5')}
                        </Typography>
                    </Grid>
                    <Grid item xs={1}/>
                </Grid>
            </div>
        </div>
    )
}

export default MainPageSectionOne