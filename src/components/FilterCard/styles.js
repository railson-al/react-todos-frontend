import styled from "styled-components";


const mainBlue = '#20295f';
const mainOrange = '#EE6B26';
const lightGray = '#707070';
const mainGray = '#d0d0d0'

export const Container = styled.div`
    max-width: 220px;
    min-width: 20px;
    width: 20vw;
    height: 60px;
    border-radius: 7px;
    background: ${props => props.actived ? mainOrange : mainBlue};
    padding: 10px;
    cursor: pointer;
    
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    color: #fff;

    filter: drop-shadow(2px 2px 2px ${mainGray});

    img {
        height: 25px;
        width: 25px;

    };

    span {
        font-weight: bold;
        align-self: flex-end;

    };

    &:hover {
        background: ${mainOrange};
        transition: ease-in-out, 130ms;
    }
`;
