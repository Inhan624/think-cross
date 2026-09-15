import styled from "styled-components";

const Input = ({ label, type, placeholder }) => {
    return (
        <>
            <label>{label}</label>

            <InputBox type={type}
                placeholder={placeholder} />
        </>
    )
}

const InputBox = styled.input`
    width: 100%;
    height: 48px;
    padding: 10px 12px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background: white;
    color: #222;
    font-size: 14px;

    &:focus {
        outline: none;
        border-color: #2563eb;
    }

`


export default Input;