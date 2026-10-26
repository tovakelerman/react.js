import { useState } from 'react';


function ContactForm() {
    const [message, setMessage] = useState('');
    const [sent, setSent] = useState(false);
    if (sent) {
        return <p>ההודעה נשלחה, תודה!</p>;
    }


    return (
        <div>
            <textarea id="message" maxLength={100} value={message} onChange={(e) => setMessage(e.target.value)} />
            <p>נשארו {100 - message.length} תווים</p>
            <button
                disabled={message.length === 0}
                onClick={() => setSent(true)}
            >
                לשליחת הפניה לחץ כאן
            </button>

        </div>
    );


}
export default ContactForm;