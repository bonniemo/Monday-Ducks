import CompanyInfoBuilders from "./CompanyInfoBuilders";
import data from './CompanyInfo.json';
import { useState } from "react";


const CompanyInfoBox = () => {
    
    const [selectedBuilder, setSelectedBuilder] = useState(null);

    const buildersData = data.construction_workers;

    const handleSelectChange = (e) => {
        const selectedValue = e.target.value;
        const builder = buildersData.find(builder => builder.firstname === selectedValue);
        setSelectedBuilder(builder);
    }
    return (
        <>
        <article className="CompanyInfoBox">
            <label htmlFor="names">Choose a builder:</label>
            <select name="names" onChange={handleSelectChange}>
                <option value="">Name:</option>
                {buildersData.map((builder, index) => (
                    <option key={index} value={builder.firstname}>
                        {builder.firstname} {builder.lastname}
                    </option>
                ))}
            </select>
            {selectedBuilder && (
                <CompanyInfoBuilders 
                builder={selectedBuilder}/>
            )}
        </article>
        </>
    )
}

export default CompanyInfoBox;