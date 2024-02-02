// Contact.jsx Är sidan för kontaktformuläret

// Importerar useState dependencies
import { useState } from "react";

// Importerar kontaktformuläret komponenten
import ContactForm from "../components/ContactForm.jsx";

// Importerar formulär meddelandet komponenten
import MessageConfirmation from "../components/MessageConfirmation.jsx";

// SCSS
import "../scss/contact.scss";

function Contact() {

    const [message, updateContacts] = useState([]);


    const addMessage = (messageData) => {
        // Rensar datan i listan och visar den nya datan
        updateContacts([messageData]);
    };

    return (
    <div>

            <div className="row">
                <div className="col-2"></div>
                {/* Kontaktinformation */}
                <div className="col-8">
                    <h1>Kontakt</h1>
                    <h2>Kontaktinformation</h2>
                    <table className="contact-info">
                        <tbody>
                            <tr>Telefon: 2165481</tr>
                            <tr>E-post: epost@epost.se</tr>
                        </tbody>
                    </table>
                </div>
            </div>
        {/* Kontaktformuläret */}
        <ContactForm addMessage={addMessage} />

        {/* Kontaktkonfirmering */}
        <MessageConfirmation message={message} />
    </div>
    );
}

// Exporterar sidan
export default Contact