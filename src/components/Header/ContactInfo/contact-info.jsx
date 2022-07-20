import * as S from "./contact-info.styles";
import * as CommunS from "../../../styles/shared.styles"
import {string} from "prop-types";

const ContactInfo = ({name, email}) => {

    return (
        <CommunS.Wrapper w={'100%'} align={'flex-start'}  direction={'column'} >
            <S.Title>
            YOUR FEEFO SUPPORT CONTACT
            </S.Title>
            <CommunS.Wrapper align={'flex-start'} >
                <CommunS.WrapperItem w={'15%'} align={'flex-start'}>
                    <S.Avatar>
                        S
                    </S.Avatar>
                </CommunS.WrapperItem>
                <CommunS.WrapperItem w={'85%'} align={'flex-start'} justify={'space-between'} direction='column'>
                    <S.BoldDetails>
                        {name}
                    </S.BoldDetails>
                    <CommunS.WrapperItem>
                        <S.Details>
                            {email}
                        </S.Details>
                        <S.Details margin={'0 0 0 10px'}>
                            020 3362 4208
                        </S.Details>
                    </CommunS.WrapperItem>
                </CommunS.WrapperItem>
            </CommunS.Wrapper>
        </CommunS.Wrapper>
    )
}

ContactInfo.propTypes = {
    name: string,
    email: string,
};

ContactInfo.defaultProps = {
    name: '',
    email: '',
}

export default ContactInfo
