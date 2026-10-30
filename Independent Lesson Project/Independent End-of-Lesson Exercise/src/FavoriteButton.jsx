import React, { useState } from 'react';
function FavoriteButton({ productName }) {
    const [favorite, setfavorite] = useState(false);
    const love = '💖';
    const notlove = '🤍';
    return (
        <div className="favoriteBlock">
            <span className={favorite ? 'favoriteStatus isActive' : 'favoriteStatus'}>
                {favorite ? love + ' במועדפים' : notlove + ' לא במועדפים'}
            </span>
            <button className={favorite ? 'favoriteBtn isFavorite' : 'favoriteBtn'} onClick={() => setfavorite(!favorite)}>
                {favorite ? 'הסרה מהמועדפים' : 'הוספה למועדפים'}
            </button>
        </div>
    );
}

export default FavoriteButton;
