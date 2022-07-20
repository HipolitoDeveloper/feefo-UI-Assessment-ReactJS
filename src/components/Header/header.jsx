import * as CommunS from "../../styles/shared.styles"
import * as S from "./header.styles";

import {string} from "prop-types";
import ContactInfo from "./ContactInfo";

const Header = (props) => {
    return (
        <CommunS.Wrapper align={'flex-start'} h={'5%'} bgColor='#F4F4F4' margin={'45px 0'}>
            <CommunS.WrapperItem w={'100%'} align={'center'}>
                <S.Title>
                    Account Overview
                </S.Title>
            </CommunS.WrapperItem>
            <CommunS.WrapperItem w={'100%'} align={'flex-start'}>
                <ContactInfo {...props } />
            </CommunS.WrapperItem>
        </CommunS.Wrapper>
    )
}

export default Header;


Header.propTypes = {
    name: string,
    email: string,
};

Header.defaultProps = {
    name: '',
    email: '',
}

