import ContactStyle from "../Styles/ContactStyle";
import ContactSectionOne from "./Contact/ContactSectionOne";


function Contact() {
    const classes = ContactStyle();
    return (
        <div className={classes.bodyDivStyle}>
            <ContactSectionOne/>
        </div>
    );
}

export default Contact;