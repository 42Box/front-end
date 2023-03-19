function Box () {
    const onClick = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('urls')
    }
    return (
        <button onClick={onClick}>clear local storage</button>
    );
}

export default Box;