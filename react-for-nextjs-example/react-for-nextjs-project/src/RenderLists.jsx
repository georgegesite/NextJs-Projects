function RenderLists() {    
    const items = ['Apple', 'Banana', 'Cherry'];

    return (
        <div>
            <h2>Render Lists</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li> // Using index as key for simplicity        
                ))}
            </ul>
        </div>
    )
}

export default RenderLists;