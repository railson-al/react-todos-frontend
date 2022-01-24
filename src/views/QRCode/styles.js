import styled from "styled-components";

const mainBlue = '#20295f';
const mainOrange = '#EE6B26';
const lightGray = '#707070';

export const Container = styled.div`
    width: 100%;
`;

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 45px;

    h3 {
        color: ${mainOrange};
    }
    
    p {
        color: ${mainBlue};
    }
`;

export const QRCodeArea = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px;
`;

export const Validation = styled.div`
    margin 10px;
    display flex;
    align-items: center;
    flex-direction: column;
    gap: 7px;

    input {
        border-radius: 3px;
        border: 1px solid #c2c2c2;
        padding 4px;
        transition: ease-in-out, 160ms;
        color: #232323;
        text-align: center;

        &:focus {
            transform: scale(1.2);
            transition: ease-in-out, 160ms;
            background-color: #dddddd;
           
        }
    }

    button {
        background-color: ${mainOrange};
        color: #fff;
        border: none;
        border-radius: 4px;
        padding: 5px 20px;
        transition: ease-in-out, 200ms;

        &:hover {
            background-color: #d66022;
            cursor: pointer;
            transition: ease-in-out, 200ms;
        }
    }
`;