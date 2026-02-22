function Props({ name, action }) {

    const result = action(2,3); // function call with props
    return (
        <div className="Props">
            Props Component: {name} 
            <br />
            Result of action(2,3): {result}
        </div>
    )
}

export default Props;