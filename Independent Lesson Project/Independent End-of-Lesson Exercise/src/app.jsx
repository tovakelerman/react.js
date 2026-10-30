
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import ContactForm from './ContactForm';

function App() {
    const products = [

        {
            "id": 1,
            "name": "סט כוסות",
            "price": 25,
            "description": "סט של שישה כוסות זכוכית עמידות.",
            "features": ["זכוכית עמידה", "מתאימות למדיח", "שישה בסט"]
        },

        {
            "id": 2,
            "name": " סיר סולתם",
            "price": 120,
            "description": "סיר שחור חזק ועמיד ",
            "features": [" מתאים למדיח כילים", " ציפוי שאינו מתקלף ", "אחריות כל החיים "]
        },

        {
            "id": 3,
            "name": "סט צלחות  ",
            "price": 250,
            "description": "צלחות חזקות ועמידות מפורצלן",
            "features": [" עיצוב עדין ויוקרתי", " מתאים ל8 סועדים ", " מתאימות לכל ארוח וארוע"]
        },

        {
            "id": 4,
            "name": "מזוודת סכום ",
            "price": 300,
            "description": "מזוודתם סכום כל הסוגים ",
            "features": [" מתאים ל10 סועדים ", "מיצר מחומר חזק ואיכותי ", "שמירה טובה מאוד לסכום "]
        },
        {
            id: 2, name: 'מגש הגשה', price: 40, description: 'מגש עץ גדול להגשה.',
            features: ['עץ אורן', 'ידיות נוחות', '40 ס״מ']
        }
    ]
    const [darkmode, setDarkMode] = useState(false);
    return (
        <div className={darkmode ? 'backgroundAppDark' : 'backgroundApp'}>
            <header className="siteHeader">
                <h1> החנות שלי </h1>
                <button className="themeToggle" onClick={() => setDarkMode(!darkmode)}>
                    {darkmode ? '☀️ מצב בהיר' : '🌙 מצב כהה'}
                </button>
            </header>
            <main>
                <section className="productGrid">
                    {products.map((p) =>
                        <ProductCard key={p.id} product={p}></ProductCard>
                    )}
                </section>
                <section className="contactSection">
                    <h2>פנייה אלינו</h2>
                    <ContactForm />
                </section>
            </main>
        </div>
    );
}
export default App;
