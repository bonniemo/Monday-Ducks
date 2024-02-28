import { useState } from "react";
import CompanyInfoBuilders from "./CompanyInfoBuilders";

const CompanyInfoChooseBuilders = ({buildersData}) => {
    const [selectedBuilder, setSelectedBuilder] = useState(null);    

    const handleSelectChange = (e) => {
        const selectedValue = e.target.value;
        const builder = buildersData.find(builder => builder.firstname === selectedValue);
        setSelectedBuilder(builder);
    }
    return (
        <>
            <section className="Builders">
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
                        builder={selectedBuilder} />
                )}
            </section>
        </>
    )
}

export default CompanyInfoChooseBuilders;