/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const ContainerFlex = styled.div`
    height:calc(100vh - 95px);
    background-color:var(--black);

    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    h1{
        color:#2A7Aa4;
        font-weight:800;
        font-size:50px;
        position:relative;

        img{
            height:50px;
            margin-left:7px;
            position:absolute;
            bottom:12px;
        }
    }

    a{
        cursor:pointer;
        color:var(--white);
        text-decoration:none;
        font-weight:600;
        font-size:28px;

        transition: 450ms;

        &:hover{
            transform:translateY(-.3rem);
            text-decoration: underline;
            color:#ccc;
            font-size:29px;
        }
    }

`;
