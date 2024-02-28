
const CompanyInfoBuilders = ({ builder }) => {
    const { firstname, lastname, pant_color, favorite_food, favorite_tool, pet, hobby } = builder;
    return (
        <>
            <section className="card">
                <h2>{firstname} {lastname}</h2>
                <p>First name: {firstname}</p>
                <p>Last name: {lastname}</p>
                <p>Pant Color: {pant_color}</p>
                <p>Favorite Food: {favorite_food.join(", ")}</p>
                <p>Favorite Tool: {favorite_tool}</p>
                <p>Pet: {pet}</p>
                <p>Hobby: {hobby.join(", ")}</p>
            </section>
        </>
    )
}

export default CompanyInfoBuilders;