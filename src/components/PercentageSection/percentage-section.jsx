import * as S from "./percentage-section.styles";
import * as CommunS from "../../styles/shared.styles"

import {number, shape, string} from "prop-types";
import React from "react";


const PercentageSection = ({percentage, description, styleProps}) => {

    return (
        <CommunS.Wrapper direction='column' justify={'center'} padding='0 20px' {...styleProps}>
            <S.Percentage>
                {percentage}%
            </S.Percentage>
            <S.Description>
                {description}
            </S.Description>

        </CommunS.Wrapper>
    )

}

PercentageSection.propTypes = {
    styleProps: shape({
        h: string,
        margin: string,
        bgColor: string
    }),
    percentageNumber: number,
    description: string

};

PercentageSection.defaultProps = {
    styleProps: shape({
        h: '100px',
        margin: '0',
        bgColor: 'white'
    }),
    percentageNumber: 0,
    description: string

}


export default PercentageSection
