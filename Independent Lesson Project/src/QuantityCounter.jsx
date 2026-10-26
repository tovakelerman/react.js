import { useState } from 'react';

function QuantityCounter() {
    const [quantity, setQuantity] = useState(1);

    function handleAdd() {
        setQuantity(quantity + 1);
    }
    function handleremove() {
        if (quantity > 1)
            setQuantity(quantity - 1);
    }

    return (
        <div>
            <p>סט כוסות  25 ₪ ליחידה : {quantity}</p>
            <button onClick={handleAdd}>+</button>
            <span> {quantity} </span>
            <button onClick={handleremove}>-</button>
            <p>סה"כ : {quantity * 25}₪</p>
        </div>
    );
}

export default QuantityCounter;
