import {BoxDescription, BoxInner, BoxTitle, BoxWrapper, Organization, Year} from "./styles";

const Box = ({title, from, to, organization, description}) => (
    <BoxWrapper>
        <BoxInner>
            <Year>{from}{from !== to ? (<><span>-</span>{to === 0 ? "Current" : to}</>) : ""}</Year>
            <BoxTitle>{title}</BoxTitle>
            {/*<YearAndOrganization>*/}
            <Organization>{organization}</Organization>
            {/*</YearAndOrganization>*/}
            <BoxDescription dangerouslySetInnerHTML={{__html: description}}/>
        </BoxInner>
    </BoxWrapper>
)

export default Box;