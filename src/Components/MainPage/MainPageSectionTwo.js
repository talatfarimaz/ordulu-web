import {useTranslation} from "react-i18next";
import AppContentStyle from "../../Styles/AppContentStyle";
import React from "react";
import kazim from '../../assets/images/kazım.png';
import nizam from '../../assets/images/nizam.png';

import {Button, CardActionArea, Grid, Typography} from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function MainPageSectionTwo() {
    const {t} = useTranslation();
    const classes = AppContentStyle();

    return (
        <div className={classes.sectionTwoBackground}>
            <Grid container className={classes.sectionTwoPadding}
                  spacing={3}
                  direction="row"
                  justifyContent="center"
                  alignItems="center">
                <Grid item md={4} sm={4} xs={12} className={classes.infoMargin}>
                    <Typography className={classes.orduluInfo}>
                        {t('OrduluInfo')}
                    </Typography>
                    <Button color={"secondary"} variant={"contained"} className={classes.alignRight} endIcon={<ArrowForwardIosIcon/>}>
                        <Typography>
                            {t('InspectALl')}
                        </Typography>
                    </Button>
                </Grid>
                <Grid item md={4} sm={4} xs={12}>
                    <CardActionArea>
                    <img src={kazim} alt="" className={classes.sectionTwoImg}/>
                    </CardActionArea>
                </Grid>
                <Grid item md={4} sm={4} xs={12}>
                    <CardActionArea>
                    <img src={nizam} alt="" className={classes.sectionTwoImg}/>
                    </CardActionArea>
                </Grid>
            </Grid>
        </div>
    )
}

export default MainPageSectionTwo