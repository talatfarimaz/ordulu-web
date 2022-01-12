import {useTranslation} from "react-i18next";
import {CardActionArea, Grid, Typography} from "@material-ui/core";
import React from "react";
import CareerAndLifeStyle from "../../Styles/CareerAndLifeStyle";
import intern from "../../assets/images/intern.png";
import job from "../../assets/images/job.png";

function CareerAndLifeSectionThree() {
    const {t} = useTranslation();
    const classes = CareerAndLifeStyle();
    const handleChangeColorImage = (event) => {
        if (event.target.id !== "" && event.target.id !== null) {
            var element = document.getElementById(event.target.id);
            element.style.opacity = 1;
        } else {
            var element = document.getElementById(event.target.parentNode.id);
            element.style.opacity = 1;
        }

    }
    const handleResetColorImage = (event) => {
        if (event.target.id !== "" && event.target.id !== null) {
            var element = document.getElementById(event.target.id);
            element.style.opacity = 0.2;
        } else {
            var element = document.getElementById(event.target.parentNode.id);
            element.style.opacity = 0.2;
        }
    }
    return (
        <div style={{justifyContent: "center", display: "flex"}}>
            <Grid container spacing={2} className={classes.imagesDiv} direction="row"
                  justifyContent="center"
                  alignItems="center">
                <Grid item sm={12} xs={12}>
                    <Typography className={classes.lifeText}>
                        {t('CareerText')}
                    </Typography>
                </Grid>
                <Grid item sm={5} xs={12} style={{position: "relative"}}>
                    <CardActionArea className={classes.cardAction1}
                    >
                        <img src={job} id="job" alt="" width={"100%"} className={classes.jobGradient}
                             onMouseEnter={(event) => {
                                 handleChangeColorImage(event)
                             }}
                             onMouseLeave={(event) => {
                                 handleResetColorImage(event)
                             }}/>
                    </CardActionArea>
                    <Typography className={classes.imgJob}>
                        {t('Job')}
                    </Typography>
                </Grid>
                <Grid item sm={2} xs={12}/>
                <Grid item sm={5} xs={12} style={{position: "relative"}}>
                    <CardActionArea className={classes.cardAction2}>
                        <img src={intern} id="intern" alt="" width={"100%"} className={classes.internGradient}
                             onMouseEnter={(event) => {
                                 handleChangeColorImage(event)
                             }}
                             onMouseLeave={(event) => {
                                 handleResetColorImage(event)
                             }}/>
                    </CardActionArea>
                    <Typography className={classes.imgJob}>
                        {t('Intern')}
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default CareerAndLifeSectionThree