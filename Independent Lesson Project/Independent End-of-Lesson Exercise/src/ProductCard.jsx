import React ,{ useState, useEffect } from "react";
import ProductDescription from "./ProductDescription";
import FavoriteButton from './FavoriteButton';

const defaultText = 'הוסף לעגלה   ';
const addText = 'המוצר נוסף לעגלה בהצלחה';

function ProductCard({ product }) {
    const [quantity, setQuantity] = useState(1);
    const [textToButtonAdd, setTextToButtonAdd] = useState(true);

    function handleAdd() {
        setQuantity(quantity + 1);
    }
    function handleremove() {
        if (quantity > 0)
            setQuantity(quantity - 1);
    }

    // כשהטקסט עובר ל"נוסף לעגלה" – אחרי 2 שניות הוא חוזר אוטומטית לברירת המחדל
    useEffect(() => {
        if (textToButtonAdd) return;
        const timer = setTimeout(() => setTextToButtonAdd(true), 2000);
        return () => clearTimeout(timer);
    }, [textToButtonAdd]);


    return (
        <article className="productCard">
            <FavoriteButton productName={product.name} />

            <div className="productCardTop">
                <h2 className="productName">{product.name}</h2>
                <span className="productPrice">{product.price} ₪</span>
            </div>

            <ProductDescription description={product.description} moreDescription={product.features} />

            <div className="productFooter">
                <div className="quantityControl">
                    <button className="qtyBtn" onClick={handleremove} disabled={quantity === 0} aria-label="הפחתת כמות">−</button>
                    <span className="qtyValue">{quantity}</span>
                    <button className="qtyBtn" onClick={handleAdd} aria-label="הוספת כמות">+</button>
                </div>
                <p className="totalPrice">סה"כ: <strong>{quantity * product.price} ₪</strong></p>
            </div>

            <div className="cardActions">
                <button className="addToCartBtn" name="addToShoppingCart" disabled={quantity === 0}
                    onClick={() => setTextToButtonAdd(!textToButtonAdd)}>
                    {textToButtonAdd ? defaultText : addText}
                </button>
            </div>
        </article>
    )
}
export default ProductCard;
