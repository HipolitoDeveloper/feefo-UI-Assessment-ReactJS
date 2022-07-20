import styled from 'styled-components';



export const Avatar = styled.div`
  width: 2vmax;
  height: 2vmax;
  background-color: #F9CF03 ;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-radius: 5px;
  font-size: 1vmax;
`

export const Title = styled.b`
  color: #A19F9F;
  font-size: 1.2vmax;

`


export const BoldDetails = styled.span`
  font-weight: bold;
  font-size: 1vmax;

`

export const Details = styled.span`
  font-size: 1vmax;
  margin: ${(props) => props.margin ?? '0'};
  text-overflow: ellipsis;
  white-space: nowrap;
`


