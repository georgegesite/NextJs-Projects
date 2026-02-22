function Wrapper({ children }) {
  return (
    <div className="wrapper" style={{border: "2px solid black", padding: "20px"}}>
      {children}
    </div>
  )
}

export default Wrapper;