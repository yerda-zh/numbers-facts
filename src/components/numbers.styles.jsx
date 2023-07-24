import { styled } from "styled-components";

export const NumbersContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background:  linear-gradient(37deg, #364F6B 0%, #4B6D98 100%);

    h1 {
        font-size: 2.5rem;
        color: #3FC1C9;
        text-transform: capitalize;
        text-align: center;
    }

    form {
        display: flex;
        flex-direction: column;

        input {
            font-size: 1.5rem;
            background-color: rgba(245, 245, 245, 0.3);
            border: none;
            transition: 0.2s ease-in-out;
            padding: 0.7rem 1rem;
            color: #F5F5F5;
            border-radius: 7px;
            margin-bottom: 1.5rem;
            &::placeholder {
                color: #F5F5F5;
                text-align: center;
            }

            &:focus{
                background-color: rgba(245, 245, 245, 1);
                color: #364F6B;
            }
        }

        label {
            color: #F5F5F5;
            font-size: 1.5rem;
            font-weight: 500;
            align-self: center;
            margin-bottom: 1rem;
        }

        select {
            font-size: 1.3rem;
            background-color: rgba(106, 241, 248, 0.2);
            border: none;
            transition: 0.2s ease-in-out;
            padding: 0.5rem 1rem;
            border-radius: 10px;
            color: #F5F5F5;
            margin-bottom: 1.5rem;

            option {
                color: #1b2836;
            }
        }

        button {
            background-color: #3FC1C9;
            border: none;
            font-weight: 600;
            font-size: 1.3rem;
            padding: 0.7rem 3rem;
            width: max-content;
            align-self: center;
            transition: 0.2s ease-in-out;
            border-radius: 50px;
            color: #F5F5F5;
            transition: .3s ease-in-out;

            &:hover {
                background-color: #f1fdfd;
                color: #3FC1C9;
            }
            &:active {
                transform: scale(0.95);
                transition: .1s ease;
            }
        }
    }
    h4 {
        font-size: 1.3rem;
        color: #F5F5F5;
        width: 80%;
        text-align: center;
    }
`