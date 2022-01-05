import styled from "styled-components";

const mainBlue = '#20295f';
const mainOrange = '#EE6B26';
const lightGray = '#707070';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Form = styled.div`
    width: 50%;
    margin-bottom: 50px;
`;

export const TypeIcon = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    transiotion: ease-in-out, 400ms;
    margin 10px 0;

    .unselected {
        filter: opacity(0.3);
    };

    button {
        background: none;
        border: none;
    };
    
    img {
        width: 50px;
        cursor: pointer;

    &:hover {
        filter: opacity(0.5);
        transiotion: ease-in-out, 400ms;
        transform: scale(1.1);

        };
    };
`;

export const Input = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 10px 0;

    span {
        color: ${lightGray};
        font-size: 18px;
    };

    input {
        font-size: 16px;
        padding: 10px;
        color: #282828;
        border: none;
        border-bottom: 1px solid ${mainOrange}
    };

    img {
        width: 20px;
        position: relative;
        left: 95%;
        bottom: 30px;
    }
`;

export const TextArea = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 20px 0;
    
    span {
        color: ${lightGray};
        font-size: 18px;
    };

    textarea {
        font-size: 16px;
        padding: 10px;
        color: #282828;
        border: 1px solid ${mainOrange};
        border-radius: 3px;
    }
`;

export const Options = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 20px 0;

    div {
        display: flex;
        align-items: center;
        color: ${mainBlue};
        font-size: 18px;
        font-weight: bold;
    }
    
    span {
        padding: 0px 10px;
    };

    button {
        font-weight: bold;
        background: none;
        border: none;

        font-size: 18px;
        color: #f43c3c;
        cursor: pointer;

        &:hover {
            color: red;
            transition: ease-out, 200ms;
        }
    };
`;

export const Save = styled.div`
    width: 100%;

    
    button {
        width: 100%;
        background: ${mainOrange};
        border: none;
        border-radius: 10px;
        font-size: 20px;
        color: white;
        font-weight: bold;

        padding: 12px;
        cursor: pointer;

        &:hover {
            background: #EE5B26;
            transition: ease-in-out, 200ms;
        }
    }
`;

    