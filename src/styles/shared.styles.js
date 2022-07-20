import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: ${(props) => props.align ?? 'flex-start'};
  width: ${(props) => props.w ?? '100%'};
  height: ${(props) => props.h ?? '100%'};
  flex-direction: ${(props) => props.direction ?? 'row'};
  background-color: ${(props) => props.bgColor ?? 'inherit'};
  margin:  ${(props) => props.margin ?? '0'};
  justify-content: ${(props) => props.justify ?? 'flex-start'};
  padding:  ${(props) => props.padding ?? '0'};

`

export const WrapperItem = styled.div`
  display: flex;
  align-items: ${(props) => props.align ?? 'flex-start'};
  width: ${(props) => props.w ?? '100%'};
  height: ${(props) => props.h ?? '100%'};
  flex-direction: ${(props) => props.direction ?? 'row'};
  background-color: ${(props) => props.bgColor ?? 'inherit'};
  margin:  ${(props) => props.margin ?? '0'};
  justify-content: ${(props) => props.justify ?? 'flex-start'};
  padding:  ${(props) => props.padding ?? '0'};

`

export const Bold = styled.b`
  font-size: ${(props) => props.fontSize ?? '1.3vmax'};

`

export const Icon = styled.i`
  margin: 0 10px;
  color: ${(props) => props.color ?? 'inherit'};
  font-size: ${(props) => props.fontSize ?? '16px'};


`
