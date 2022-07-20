import * as S from "./sales-section.styles";
import {shape, string} from "prop-types";
import React from "react";
import * as CommunS from "../../styles/shared.styles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUpload} from "@fortawesome/free-solid-svg-icons";


const SalesSection = ({uploads, linesAttempted, styleProps}) => {

    return (
        <CommunS.Wrapper direction='column' {...styleProps}>
            <CommunS.WrapperItem h='40%' align='center' >
                <S.Title>
                    <CommunS.Icon color={'#3EB0EB'} fontSize='20px' aria-hidden="true">
                        <FontAwesomeIcon icon={faUpload}/>
                    </CommunS.Icon>
                    Sales
                </S.Title>
            </CommunS.WrapperItem>
            <CommunS.WrapperItem h='50%' align='center' >
                <S.Line>
                    You had {''}
                    <CommunS.Bold id='uploads'>
                        {uploads} uploads
                    </CommunS.Bold>
                    {''} and {''}
                    <CommunS.Bold id='lines'>
                         {linesAttempted}
                    </CommunS.Bold>
                    {''} lines added.
                </S.Line>
            </CommunS.WrapperItem>
        </CommunS.Wrapper>
    )

}

SalesSection.propTypes = {
    styleProps: shape({
        h: string,
        margin: string,
        bgColor: string
    }),
};

SalesSection.defaultProps = {
    styleProps: shape({
        h: '100px',
        margin: '0',
        bgColor: 'white'
    }),
}


export default SalesSection
