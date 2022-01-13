import {useTranslation} from "react-i18next";
import React from "react";
import {Button, Checkbox, FormControl, Grid, Hidden, Input, Link, Typography} from "@material-ui/core";
import ContactStyle from "../../Styles/ContactStyle";
import contact from "../../assets/images/contact.png";
import contact2 from "../../assets/images/contact2.png";
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import DefaultTheme from "../../Themes/DefaultTheme";
import MaskedInput from "react-text-mask";

function TextMaskCustom(props) {
    const {inputRef, ...other} = props;
    return (
        <MaskedInput
            {...other}
            ref={(ref) => {
                inputRef(ref ? ref.inputElement : null)
            }}
            guide={false} mask={["(", /[1-9]/, /\d/, /\d/, ")", " ", /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/,]}
            placeholderChar={"\u2000"}
            showMask
        />
    );
}

function ContactSectionOne() {
    const {t} = useTranslation();
    const classes = ContactStyle();
    const [nameSurname, setNameSurname] = React.useState(null);
    const [email, setEmail] = React.useState(null);
    const [phone, setPhone] = React.useState(null);
    const [subject, setSubject] = React.useState(null);
    const [message, setMessage] = React.useState(null);
    const [checked, setChecked] = React.useState(false);

    return (
        <div className={classes.sectionOneBackground}>
            <Hidden smUp>
                <img src={contact2} alt="" className={classes.mainImgStyle}/>
            </Hidden>
            <Hidden only={"xs"}>
                <img src={contact} alt="" className={classes.mainImgStyle}/>
            </Hidden>
            <div className={classes.formGrid}>
                <Grid container spacing={6} direction="row"
                      justifyContent="center"
                      alignItems="flex-start"
                      className={classes.mainGrid}
                >
                    <Grid item md={4} sm={6} xs={12}>
                        <Typography className={classes.mainText}>
                            {t('Hello')}
                        </Typography>
                        <Typography className={classes.mainText2}>
                            {t('FormText')}
                        </Typography>
                    </Grid>
                    <Grid item md={4} sm={6} xs={12}>
                        <Grid container>
                            <Grid item xs={12}>
                                <Typography className={classes.formElemetText}>
                                    {t('NameSurname')}
                                </Typography>
                                <FormControl className={classes.formElement}>
                                    <Input
                                        fullWidth
                                        value={nameSurname}
                                        id="1"
                                        type={"text"}
                                        name={"nameSurname"}
                                        placeholder={t('NameSurname')}
                                        inputProps={{
                                            className: classes.input,
                                        }}
                                        classes={{
                                            underline: classes.underline,
                                            root: classes.inputRoot
                                        }}
                                        onChange={e => setNameSurname(e.target.value)}
                                    />
                                </FormControl>

                            </Grid>
                            <Grid item xs={12}>
                                <Typography className={classes.formElemetText}>
                                    {t('EMail')}
                                </Typography>
                                <FormControl className={classes.formElement}>
                                    <Input
                                        value={email}
                                        placeholder={t('EMail')}
                                        fullWidth
                                        id="3"
                                        type={"email"}
                                        name={"email"}
                                        inputProps={{
                                            className: classes.input,
                                        }}
                                        classes={{
                                            underline: classes.underline,
                                            root: classes.inputRoot
                                        }}
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                </FormControl>

                            </Grid>
                            <Grid item xs={12}>
                                <Typography className={classes.formElemetText}>
                                    {t('Phone')}
                                </Typography>
                                <FormControl className={classes.formElement}>
                                    <Input
                                        value={phone}
                                        placeholder={t('Phone')}
                                        fullWidth
                                        type={"text"}
                                        name={"phone"}
                                        id="confirmPasswordValue"
                                        inputProps={{
                                            className: classes.input,
                                        }}
                                        classes={{
                                            underline: classes.underline,
                                            root: classes.inputRoot
                                        }}
                                        inputComponent={TextMaskCustom}
                                        onChange={e => setPhone(e.target.value)}
                                    />
                                </FormControl>

                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={12} sm={6} xs={12} className={classes.displayGrid}/>
                    <Grid item md={4} sm={6} xs={12} className={classes.subGrid}>
                        <Grid container>
                            <Grid item xs={12}>
                                <Typography className={classes.formElemetText}>
                                    {t('Subject')}
                                </Typography>
                                <FormControl className={classes.formElement}>
                                    <Input
                                        value={subject}
                                        placeholder={t('Subject')}
                                        fullWidth
                                        id="2"
                                        type={"text"}
                                        name={"subject"}
                                        inputProps={{
                                            className: classes.input,
                                        }}
                                        classes={{
                                            underline: classes.underline,
                                            root: classes.inputRoot
                                        }}
                                        onChange={e => setSubject(e.target.value)}
                                    />
                                </FormControl>

                            </Grid>
                            <Grid item xs={12}>
                                <Typography className={classes.formElemetText}>
                                    {t('YourMessage')}
                                </Typography>
                                <FormControl className={classes.formElement}>
                                    <Input
                                        value={message}
                                        placeholder={t('YourMessage')}
                                        fullWidth
                                        type={"text"}
                                        name={"message"}
                                        id="passwordValue"
                                        inputProps={{
                                            className: classes.input,
                                        }}
                                        classes={{
                                            underline: classes.underline,
                                            root: classes.inputRoot
                                        }}
                                        onChange={e => setMessage(e.target.value)}
                                    />
                                </FormControl>

                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={4} sm={6} xs={12}/>
                    <Grid item md={4} sm={6} xs={12}>
                        <div className={classes.sendButton}>
                            <Button variant={"contained"} color={"secondary"} endIcon={<SendOutlinedIcon/>}>
                                <Typography className={classes.buttonText}>
                                    {t('SenMessage')}
                                </Typography>
                            </Button>
                        </div>
                        <div className={classes.kvkk}>
                            <Link
                                underline={"none"}
                                onMouseEnter={(__Event) => {
                                    __Event.target.style.color = DefaultTheme.palette.secondary.main
                                }}
                                onMouseOut={(__Event) => {
                                    __Event.target.style.color = DefaultTheme.palette.success.contrastText
                                }}
                            ><Typography className={classes.checkBoxText}><Checkbox
                                style={{color: DefaultTheme.palette.secondary.contrastText}}
                                className={classes.checkBoxStyle}
                            />{t('KVKK2')}{t('Acceptance')}
                            </Typography></Link>
                        </div>
                    </Grid>
                    <Grid item md={4} sm={6} xs={12}/>
                </Grid>
            </div>
        </div>
    )
}

export default ContactSectionOne