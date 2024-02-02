// ContactForm.jsx är kontaktformuläret

// useState
import { useState } from "react";

// SCSS
import "../scss/contact.scss";

function ContactForm({addMessage}) {


    const [contactInfo, setContactInfo] = useState({
        name: "",
        email: "",
        phonenumber: "",
        message: "",
    });

    const [validationErrors, setValidationErrors] = useState({
        name: "",
        email: "",
        message: "",
        phonenumber: "",
    });

    // Validerar det telefonnummer fyllts i formuläret
    const handleChange = (event) => {

        let value = event.target.value;

        // Kontrollerar så det bara är siffror i tel.nr fält
        if (event.target.name === "phonenumber") {
            value = value.replace(/[^0-9]/g, "");
        }


        setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
        setValidationErrors({ ...validationErrors, [event.target.name]: "" });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            addMessage(contactInfo);
            setContactInfo({ name: "", email: "", phonenumber: "", message: "" });
        }
    };

        // Validering av datan i formuläret, om något är fel så visas en felmeddelade kopplats till problemet
    const validateForm = () => {
        let isValid = true;
        const newValidationErrors = { name: "", email: "", message: "", phonenumber: "" };

        // Formulär validering
        if (!contactInfo.name.trim()) {
            newValidationErrors.name = "Namn måste fyllas i!";
            isValid = false;
        }

        if (!contactInfo.email.trim()) {
            newValidationErrors.email = "E-post måste fyllas i!";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(contactInfo.email)) {
            newValidationErrors.email = "Ogiltigt e-postformat!";
            isValid = false;
        }

        if (!contactInfo.message.trim()) {
            newValidationErrors.message = "Meddelande måste fyllas i!";
            isValid = false;
        }

        if (contactInfo.phonenumber && !/^\d+$/.test(contactInfo.phonenumber)) {
            newValidationErrors.phonenumber = "Ogiltigt telefonnummer!";
            isValid = false;
        }

        setValidationErrors(newValidationErrors);
        return isValid;
    };

    return (

        // Skapar kontakt formuläret
        <div className="row">
        <div className="col-2"></div>

        <section className="col-8">
        <div className="form-container">
            <form onSubmit={handleSubmit} className="contact-form">
            <div>
                <h2>Kontakta mig</h2>
            </div>
            <div>
            <label htmlFor="name">Namn<br />
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Namn"
                    autoComplete="name"
                    className="form-small"
                    value={contactInfo.name}
                    onChange={handleChange}
                /><p className="error-message">{validationErrors.name}</p>
            </label>

        </div>

        <div>
            <label htmlFor="email">E-post<br />
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="E-post"
                    autoComplete="email"
                    className="form-small"
                    value={contactInfo.email}
                    onChange={handleChange}
                /><p className="error-message">{validationErrors.email}</p>
            </label>

        </div>

        <div>
            <label htmlFor="phonenumber">Telefonnummer<br />
                <input
                    type="text"
                    id="phonenumber"
                    name="phonenumber"
                    placeholder="Telefonnummer"
                    autoComplete="tel-national"
                    className="form-small"
                    value={contactInfo.phonenumber}
                    onChange={handleChange}
                /><p className="error-message">{validationErrors.phonenumber}</p>
            </label>

        </div>

        <div>
            <label htmlFor="message">Meddelande<br />
                <textarea
                    type="text"
                    id="message"
                    name="message"
                    placeholder="Meddelande"
                    autoComplete="off"
                    className="form-large"
                    value={contactInfo.message}
                    onChange={handleChange}
                /><p className="error-message">{validationErrors.message}</p>
            </label>

            </div>
            <div>
                <button className="send-message">Skicka</button>
            </div>
            </form>
        </div>

        </section>

        </div>

        );



}

// Exporterar komponenten
export default ContactForm;