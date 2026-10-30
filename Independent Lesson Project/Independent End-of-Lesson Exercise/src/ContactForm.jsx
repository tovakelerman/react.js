import { useState } from 'react';


function ContactForm() {
    const [message, setMessage] = useState('');
    const [sent, setSent] = useState(false);
    if (sent) {
        return <p className="successMessage">✅ ההודעה נשלחה, תודה!</p>;
    }


    return (
        <div className="contactForm">
            <textarea id="message" maxLength={100} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="כתבו כאן את פנייתכם..." />
            <p className="charCounter">נשארו {100 - message.length} תווים</p>
            <button
                className="submitBtn"
                disabled={message.length === 0}
                onClick={() => setSent(true)}
            >
                לשליחת הפניה לחץ כאן
            </button>
        </div>
    );


}
export default ContactForm;