import CompanyInfoBuilders from "./CompanyInfoBuilders";
import data from './CompanyInfo.json';


const CompanyInfoBox = () => {
    return (
        <>
        <article className="CompanyInfoBox">
            <label htmlFor="names">Choose a builder:</label>
            <select name="names" id="">
                <option value="">Name:</option>
                {data.map((builder, index) => (
                    <option key={index} value={builder.firstname}>
                        {builder.firstname} {builder.lastname}
                    </option>
                ))}
            </select>
        </article>
        </>
    )
}

export default CompanyInfoBox;