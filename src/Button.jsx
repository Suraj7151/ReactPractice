

function Button(){

    const handleClick = (e)=>{
        return(e.target.textContent="Hello");
    }
    return (
    <>
        <button onClick={(e) =>handleClick(e)}>Click Me</button>
        </>
        )
}

export default Button