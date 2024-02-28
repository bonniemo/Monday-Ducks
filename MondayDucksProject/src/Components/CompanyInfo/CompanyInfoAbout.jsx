const CompanyInfoAbout = ({company, story, pastProjects}) => {
    return (
        <>
        <section className="about">
            <h2>{company.name}</h2>
            <h3>{company.home_town}</h3>
            <p>Our story: {story}</p>
            <ul>
                Past projects:
               {pastProjects.map((project) => (
                    <li key={project.name}>
                    <h4>{project.name}</h4>
                    <p>{project.description}</p>
                </li>
               ))}
            </ul>
        </section>
        </>
    )
}
export default CompanyInfoAbout;