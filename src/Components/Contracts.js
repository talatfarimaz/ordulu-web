import React from "react";
import {Button, Divider, Grid, Hidden, List, ListItem, ListItemText, Paper} from "@material-ui/core";
import ContractsStyle from "../Styles/ContractsStyle";
import {useTranslation} from "react-i18next";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import {useParams} from "react-router-dom";

function Contracts(props) {
    const classes = ContractsStyle();
    const {t} = useTranslation();
    const {code} = useParams();
    const [selectedCode, setSelectedCode] = React.useState("");
    React.useEffect(() => {
        setSelectedCode(code)
        setSelectedDetail(t(code)) //TODO detayı getir
    }, [])
    const [openMenu, setOpenMenu] = React.useState(false);
    const [selectedDetail, setSelectedDetail] = React.useState("");
    const contracts = [{Code: "kvkk", Detail: t('KVKKText')}, {
        Code: "contact",
        Detail: t('ContactText')
    }, {Code: "press", Detail: t('PressText')}, {Code: "society", Detail: t('SocietyText')}];

    const handleGetWeb = () => {
        return (
            <Grid
                key={selectedCode}
                container
                spacing={2}
                className={classes.mainGrid}
            >
                <Grid
                    item
                    className={classes.emptyGrid}
                    lg={2}
                    md={2}
                    sm={1}
                    xs={1}
                />
                <Grid item lg={3} md={3} sm={4} xs={12}>
                    <Paper>
                        <List component="nav" className={classes.menuItem}>
                            {
                                contracts.map((contract) => {
                                    return (
                                        <>
                                            <ListItem
                                                key={contract.ID}
                                                button
                                                selected={
                                                    selectedCode.toString() ===
                                                    contract.Code.toString()
                                                }
                                                onClick={() => {
                                                    setSelectedCode(contract.Code);
                                                    setSelectedDetail(contract.Detail);
                                                }
                                                }
                                            >
                                                <ListItemText
                                                    primary={t(contract.Code)}
                                                    classes={{primary: classes.primary}}
                                                />
                                            </ListItem>
                                            <Divider variant={"fullWidth"}/>
                                        </>
                                    );
                                })}
                        </List>
                    </Paper>
                </Grid>
                <Grid item lg={5} md={5} sm={8} xs={12}>
                    <Paper>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: selectedDetail,
                            }}
                            className={classes.contractTextPaper}
                        />
                    </Paper>
                </Grid>
                <Grid
                    item
                    className={classes.emptyGrid}
                    lg={2}
                    md={2}
                    sm={1}
                    xs={1}
                />
            </Grid>
        )

    }
    const handleGetMobile = () => {
        return (
            <Grid
                key={selectedCode}
                container
                spacing={2}
                className={classes.mainGrid}
            >
                <Grid
                    item
                    className={classes.emptyGrid}
                    lg={2}
                    md={2}
                    sm={1}
                    xs={1}
                />
                <Grid item lg={3} md={3} sm={4} xs={12}>
                    <Paper style={{textAlign: "center"}}>
                        <Button
                            aria-controls="fade-menu"
                            aria-haspopup="true"
                            className={classes.selectButton}
                            onClick={() => {
                                setOpenMenu(!openMenu);
                            }}
                        >
                            {t(selectedCode)}
                        </Button>
                        {openMenu ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
                        {openMenu && (
                            <Paper>
                                <List component="nav" className={classes.menuItem}>
                                    {contracts.map((contract) => {
                                        return (
                                            <>
                                                <ListItem
                                                    key={contract.ID}
                                                    button
                                                    selected={
                                                        selectedCode.toString() ===
                                                        contract.Code.toString()
                                                    }
                                                    onClick={() => {
                                                        setSelectedCode(contract.Code);
                                                        setSelectedDetail(contract.Detail);
                                                    }
                                                    }
                                                >
                                                    <ListItemText
                                                        primary={t(contract.Code)}
                                                        classes={{primary: classes.primary}}
                                                    />
                                                </ListItem>
                                                <Divider variant={"fullWidth"}/>
                                            </>
                                        );
                                    })}
                                </List>
                            </Paper>
                        )}
                    </Paper>
                </Grid>
                <Grid item lg={5} md={5} sm={8} xs={12}>
                    <Paper>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: selectedDetail,
                            }}
                            className={classes.contractTextPaper}
                        />
                    </Paper>
                </Grid>
                <Grid
                    item
                    className={classes.emptyGrid}
                    lg={2}
                    md={2}
                    sm={1}
                    xs={1}
                />
            </Grid>
        )
    }

    return (
        <div className={classes.bodyDivStyle}>
            <Hidden xsDown>
                {handleGetWeb()}
            </Hidden>
            <Hidden smUp>
                {handleGetMobile()}
            </Hidden>
        </div>
    );
}

export default Contracts;