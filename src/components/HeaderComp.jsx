function HeaderComp(props) {

    // console.log(props.age);

    return (
        <>
            <h2>Header Component</h2>
            <p>{props.name}</p>
            <p>{props.age}</p>
        </>
    )
}

export default HeaderComp;