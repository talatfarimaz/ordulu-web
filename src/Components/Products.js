import ProductsStyle from "../Styles/ProductsStyle";
import ProductsSectionOne from "./Products/ProductsSectionOne";
import ProductsSectionTwo from "./Products/ProductsSectionTwo";


function Products() {
    const classes = ProductsStyle();
    return (
        <div className={classes.bodyDivStyle}>
            <ProductsSectionOne/>
            <ProductsSectionTwo/>
        </div>
    );
}

export default Products;