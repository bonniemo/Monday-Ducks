const People = ({ firstName, lastName, pantColor, favoriteFood, favoriteTool, pet, hobby }) => {
    return (
        <>
            <section className="card">
                <h2>{firstName} {lastName}</h2>
                <p>First name: {firstName}</p>
                <p>Last name: {lastName}</p>
                <p>Pant Color: {pantColor}</p>
                <p>Favorite Food: {favoriteFood.join(", ")}</p>
                <p>Favorite Tool: {favoriteTool}</p>
                <p>Pet: {pet}</p>
                <p>Hobby: {hobby.join(", ")}</p>
            </section>
        </>
    )
}

export default People;