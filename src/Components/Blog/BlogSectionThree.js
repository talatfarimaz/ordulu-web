import {useTranslation} from "react-i18next";
import {CardActionArea, Grid, Typography} from "@material-ui/core";
import React from "react";
import BlogStyle from "../../Styles/BlogStyle";
import haber1 from "../../assets/images/haber1.png"
import haber2 from "../../assets/images/haber2.png"
import haber3 from "../../assets/images/haber3.png"

function BlogSectionThree() {
    const {t} = useTranslation();
    const classes = BlogStyle();
    const [isHover, setIsHover] = React.useState(false);

    const handleSetHover = (event) => {
        setIsHover(true);
    }
    const handleResetHover = (event) => {
        setIsHover(false);
    }
    return (
        <div className={classes.sectionTwoDiv}>
            <Grid container className={classes.reportageGrid} spacing={2} direction="row"
                  justifyContent="center"
                  alignItems="center">
                <Grid item xs={12} style={{textAlign: "right"}}>
                    <Typography className={classes.reportageTitle}>
                        {t('NewsTitle')}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={8}>
                        <Grid item md={4} sm={6} xs={12}>
                            <CardActionArea id={"news1"}>
                                <img src={haber1} alt={""} width={"100%"}/>
                                <Typography className={classes.newsDate}>
                                    {t('Date1')}
                                </Typography>
                                <Typography className={classes.newsText}>
                                    {t('News1')}
                                </Typography>
                            </CardActionArea>
                        </Grid>
                        <Grid item md={4} sm={6} xs={12}>
                            <CardActionArea id={"news2"}>
                                <img src={haber2} alt={""} width={"100%"}/>
                                <Typography className={classes.newsDate}>
                                    {t('Date2')}
                                </Typography>
                                <Typography className={classes.newsText}>
                                    {t('News2')}
                                </Typography>
                            </CardActionArea>
                        </Grid>
                        <Grid item md={4} sm={6} xs={12}>
                            <CardActionArea id={"news3"}
                                            onMouseEnter={(event) => {
                                                handleSetHover(event)
                                            }}
                                            onMouseLeave={(event) => {
                                                handleResetHover(event)
                                            }}>
                                <img src={haber3} alt={""} width={"100%"}/>
                                <Typography className={classes.newsDate}>
                                    {t('Date3')}
                                </Typography>
                                <Typography className={classes.newsText}>
                                    {t('News3')}
                                </Typography>
                            </CardActionArea>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default BlogSectionThree