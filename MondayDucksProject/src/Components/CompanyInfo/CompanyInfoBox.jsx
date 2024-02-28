import data from './CompanyInfo.json';
import CompanyInfoAbout from './CompanyInfoAbout';
import CompanyInfoChooseBuilders from "./CompanyInfoChooseBuilder";

const CompanyInfoBox = () => {
    
    return (
    <>
        <article className="CompanyInfoBox">
            <CompanyInfoAbout company={data.construction_company} story={data.backstory} pastProjects={data.past_projects}/>
            <CompanyInfoChooseBuilders buildersData={data.construction_workers}/>
        </article>
    </>
    )
}

export default CompanyInfoBox;