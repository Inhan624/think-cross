import styled from "styled-components";


const Badge = styled.span`
    display: inline-block;
    border-radius: 10px;
    padding: 4px 13px;
    font-size: 13px;
    font-weight: bold;
    color: white;


    ${({$type}) => {
        if ($type === "success") {
            return `
                background: #498c60;
            `;
        }
        if ($type === "warning") {
            return`
                background: #dcbc3b;
            `;
        }
        if ($type === "danger") {
            return`
                background: #ce5050;
            `;
        }
        if ($type === "info") {
            return`
                background:#4782a9;
            `
        }
    }}
`



export default Badge;