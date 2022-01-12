import CareerAndLifeSectionOne from "./CareerAndLife/CareerAndLifeSectionOne";
import CareerAndLifeStyle from "../Styles/CareerAndLifeStyle";
import CareerAndLifeSectionTwo from "./CareerAndLife/CareeAndLifeSectionTwo";
import CareerAndLifeSectionThree from "./CareerAndLife/CareerAndLifeSectionThree";
import CareerAndLifeSectionFour from "./CareerAndLife/CareerAndLifeSectionFour";


function CareerAndLife() {
    const classes = CareerAndLifeStyle();
    return (
        <div className={classes.bodyDivStyle}>
            <CareerAndLifeSectionOne/>
            <CareerAndLifeSectionTwo/>
            <CareerAndLifeSectionThree/>
            <CareerAndLifeSectionFour/>
        </div>
    );
}

export default CareerAndLife;