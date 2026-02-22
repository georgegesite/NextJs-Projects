function EventHandling() {  
    function handleSubmit(event) {
        event.preventDefault();
        alert("Form submitted!");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input />
            <button>Submit</button>
        </form>
    )
}

export default EventHandling;