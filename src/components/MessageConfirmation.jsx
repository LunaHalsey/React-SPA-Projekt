// MessageConfirmation.jsx är meddelandet som vias det man fyllt i formuläret och har skickats
function MessageConfirmation({message}) {
    return (

        // Meddelandet som visas när meddelandet skickas
        <section>

            {message.map((message) => (

            <div className="card" key={message.phonenumber}>
                <h2>Meddelandet har skickats.</h2>
                <p className="card-name">{message.name}</p>
                <p>{message.email}</p>
                <p>{message.phonenumber}</p>
                <p>{message.message}</p>
            </div>
            ))}
        </section>
        );
    }

export default MessageConfirmation;