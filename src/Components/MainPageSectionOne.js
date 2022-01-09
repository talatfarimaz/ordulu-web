import React from "react";
import {useTranslation} from "react-i18next";
import AppContentStyle from "../Styles/AppContentStyle";
import {Grid, Typography} from "@material-ui/core";
import mainImg from '../assets/images/mainImg.png';
import mainImg2 from '../assets/images/mainImg2.png';
import IconButton from "@material-ui/core/IconButton";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';

function MainPageSectionOne() {
    const {t} = useTranslation();
    const classes = AppContentStyle();
    const [changeImg, setChangeImg] = React.useState(false);

    const handleGetImg = () => {
        if (changeImg) {
            return (
                <div>
                    <img src={mainImg2} alt="" className={classes.mainImgStyle}/>
                </div>
            )
        } else {
            return (
                <div>
                    <img src={mainImg} alt="" className={classes.mainImgStyle}/>
                    <div className={classes.mainText}>
                        <Typography className={classes.mainTextStyle}>
                            O R D U L U
                        </Typography>
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
                 onMouseOut={(event) => {
                     setChangeImg(false)
                 }}>
                {handleGetImg()}
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
                    {/*
                    <Grid item xs={9}/>
*/}
                </Grid>
            </div>
        </div>
    )
}

export default MainPageSectionOne