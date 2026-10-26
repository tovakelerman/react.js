import { useState } from 'react';

function ProductDescription() {
    const [moreText, setMoreTExt] = useState(false);
    const shortText = 'סט שישיית כוסות קריסטל';

    const fullText = 'כוסות איכותיות מיחדות ועמידות לא שביר אחריות חודש בצרוף חשבונית';

    return (<div>
        <p>{moreText?fullText:shortText}</p>

        <button onClick={()=>setMoreTExt(!moreText)}>{moreText?'הצג פחות':'קרא עוד'}</button>
    </div>
    )

}

export default ProductDescription;