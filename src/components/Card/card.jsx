import * as S from "./card.styles";
import {func, shape, string} from "prop-types";
import React from "react";


const Card = ({ children, styleProps}) => {

    return(
        <S.CardWrapper {...styleProps}>
            {children}
        </S.CardWrapper>
    )

}

Card.propTypes = {
    styleProps: shape({
        h: string,
        bgColor: string
    }),
    children: () => {}
};

Card.defaultProps = {
    styleProps: shape({
        h: '100px',
        bgColor: 'white'
    }),
    children: func
}


export default Card
