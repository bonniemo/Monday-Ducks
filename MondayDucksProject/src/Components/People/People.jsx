const People = ({ firstName, pantColor, favoriteFood, favoriteTool, pet, hobby }) => {
    return (
        <>
            <p>First name: {firstName}</p>
            <p>Pant Color: {pantColor}</p>
            <p>Favorite Food: {favoriteFood}</p>
            <p>Favorite Tool: {favoriteTool}</p>
            <p>Pet: {pet}</p>
            <p>Hobby: {hobby}</p>
        </>
    )
}

export default People;