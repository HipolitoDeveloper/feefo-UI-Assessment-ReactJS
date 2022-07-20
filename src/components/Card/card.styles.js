import styled from 'styled-components';

export const CardWrapper = styled.div`
  width: 100%;
  height: ${(props) => props.h ?? '100%'};
  background-color: ${(props) => props.bgColor ?? 'inherit'};
`

