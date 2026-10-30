import React, { useState } from 'react';

function ProductDescription({ description, moreDescription }) {
    const [moreText, setMoreTExt] = useState(false);
    const addDescription = (
        <ul className="featureList">
            {moreDescription.map((e) => (
                <li key={e}>{e}</li>
            ))}
        </ul>
    )
    return (<div className="descriptionBlock">
        {moreText ? addDescription : <p className="shortDescription">{description}</p>}

        <button className="linkBtn" onClick={() => setMoreTExt(!moreText)}>{moreText ? 'הצג פחות' : 'קרא עוד'}</button>
    </div>
    )

}

export default ProductDescription;