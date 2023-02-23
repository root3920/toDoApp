import styled, { css } from "styled-components";

const Container = styled.section`
background: white;
width: 50%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
border-radius: 5px;
margin: 10px;
padding: 0 15px;
font-size: 16px;
min-height: 60px ;
cursor: pointer;

${props => props.formulario && css`
    background: white;
    min-width: 150px;
    justify-content: space-between;
    padding: 0;

  `}

`;
 
export default Container;