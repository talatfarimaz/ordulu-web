import {useTranslation} from "react-i18next";
import {CardActionArea, Grid, Link, Typography} from "@material-ui/core";
import React from "react";
import BlogStyle from "../../Styles/BlogStyle";
import kazim2 from "../../assets/images/kazım2.png"
import nizamReportage from "../../assets/images/nizamReportage.png"

function BlogSectionTwo() {
    const {t} = useTranslation();
    const classes = BlogStyle();

    return (
        <div className={classes.sectionTwoDiv}>
            <Grid container className={classes.reportageGrid} spacing={2} direction="row"
                  justifyContent="center"
                  alignItems="center">
                <Grid item sm={12} xs={12} id="reportage1">
                    <Typography className={classes.reportageTitle}>
                        {t('Reportage')}
                    </Typography>
                </Grid>
                <Grid item sm={7} xs={12}>
                    <Grid container spacing={8}>
                        <Grid item xs={12}>
                            <Typography className={classes.questionTitle}>
                                {t('QuestionTitle')}
                            </Typography>
                            <Typography className={classes.question}>
                                {t('Question1')}
                            </Typography>
                            <Typography className={classes.answer}>
                                {t('Answer1')}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} className={classes.reportageGridMargin}>
                            <Typography className={classes.questionTitle}>
                                {t('QuestionTitle')}
                            </Typography>
                            <Typography className={classes.question}>
                                {t('Question2')}
                            </Typography>
                            <Typography className={classes.answer}>
                                {t('Answer2')}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sm={5} xs={12}>
                    <Grid container>
                        <Grid item xs={12}>
                            <img src={kazim2} alt={""} width={"100%"}/>
                        </Grid>
                        <Grid item xs={12} className={classes.userNameArea}>
                            <Typography className={classes.userName}>
                                {t('User')}
                            </Typography>
                            <Typography className={classes.developer}>
                                {t('Developer')}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} id="reportage2">
                    <Grid container className={classes.podcastGrid}>
                        <Grid item md={3} sm={3} xs={12}/>
                        <Grid item md={6} sm={6} xs={12}>
                            <CardActionArea>
                            <img src={nizamReportage} width={"100%"} alt={""}/>
                            </CardActionArea>
                        </Grid>
                        <Grid item md={3} sm={3} xs={12}/>
                        <Grid item md={2} sm={3} xs={12}/>
                        <Grid item md={8} sm={6} xs={12} className={classes.podcastText}>
                            <Typography className={classes.questionTitle}>
                                {t('Podcast1')}
                            </Typography>
                            <Typography className={classes.questionTitle2}>
                                {t('Podcast2')}
                            </Typography>
                            <Typography className={classes.questionTitle}>
                                {t('Podcast3')}
                            </Typography>
                        </Grid>
                        <Grid item md={2} sm={3} xs={12}/>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default BlogSectionTwo