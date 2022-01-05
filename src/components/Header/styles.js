import styled from "styled-components";


const mainBlue = '#20295f';
const mainOrange = '#EE6B26';
const lightGray = '#707070';
const mainGray = '#d0d0d0'

export const Container = styled.div`
    width: 100%;
    height: 60px;
    background: ${mainBlue};
    border-bottom: 1px solid ${mainGray};

    display: flex;
`;

export const LeftSide = styled.div`
    width: 50%;
    height: 60px;

    display: flex;
    align-items: center;
    padding-left: 10px;

    img {
        width: 80px;
    }

`;

export const RightSide = styled.div`
    width: 50%;
    height: 60px;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    a {
        text-decoration: none;
        color: #fff;
        padding 0 5px;
        margin: 0 5px;
        cursor: pointer;

        &:hover {
            color: ${mainGray};
            transition: ease-in-out, 100ms;
        }


    };
    
    #notification {
        img {
            width: 20px;
        };
        
        span {
            background: #f2f2f2;
            color: ${mainBlue};
            padding: 1px 6px;
            border-radius: 50%;
            position: relative;
            top: -15px;
            right: 10px;
            filter: drop-shadow(-1px 1px 3px #640d8a);
        }

        &:hover {
            filter: drop-shadow(2px 2px 4px #640d8a);
            transition: ease-in-out;
        }
    }

`;

