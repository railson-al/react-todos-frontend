import styled from "styled-components";

const mainBlue = '#20295f';
const mainOrange = '#EE6B26';
const lightGray = '#707070';

export const Container = styled.div`
    width: 100%;
`;
export const FilterArea = styled.div`
    max-width: 100%;
    display: flex;
    padding: 15px 5px;
    justify-content: space-around;


    button {
       background: none;
       border: none;
    }
`;

export const Content = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;
    margin-bottom: 60px;

    a {
        padding: 5px;
        text-decoration: none;
        color: ${mainBlue};
    }
     
    p {
        padding: 15px 5px;
    }
`;

export const Title = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    color: ${mainBlue};
    border-bottom: 1px solid ${mainBlue};
    margin-bottom: 30px;

    h3 {
        color ${mainBlue};
        position: relative;
        top: 10px;  
        background: #fff;
        padding: 0 10px;
    }

`;
