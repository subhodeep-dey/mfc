function Cards(props) {
    return (
        <>
            <li className="concept">
                <img src={props.url} alt="TODO: TITLE" />
                <h2>{props.header}</h2>
                <p>{props.desc}</p>
                <button style={props.style}>Read More</button>
            </li>
        </>
    )
}

export default Cards;