import styled from "styled-components";


const mainOrange = '#EE6B26';
const lightGray = '#707070';

export const Container = styled.div`
    width: 270px;
    height: 170px;
    border-radius: 7px;
    margin: 20px;
    cursor: pointer;
    border: 1px solid ${mainOrange};

    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    opacity: ${props => props.done ? 0.5 : 1};

    -webkit-box-shadow: 10px 10px 8px -14px rgba(0,0,0,1);
    -moz-box-shadow: 10px 10px 8px -14px rgba(0,0,0,1);
    box-shadow: 10px 10px 8px -14px rgba(0,0,0,1);

    &:hover {
        transition: ease-in-out, 120ms;
        transform: scale(1.1);
    }
`;

export const TopCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img {
        height: 70px;
    }
`;

export const BottomCard = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 14px;

    strong {
        color: ${mainOrange};
        font-weight: bold;
    };

    span {
        color: ${lightGray}
    }
`;
