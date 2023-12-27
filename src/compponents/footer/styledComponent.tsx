import styled from 'styled-components';

export const GFooter = styled.div`
    position: relative;
    height: 325px;
    overflow: hidden;
    border-top: 1px solid #d3d3d3;
    background: #f2f2f2;
`;
export const GFooterWrap = styled.div`
    width: 980px;
    margin: 0 auto;
`;

export const FooterUl = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 33px;
`;

export const FooterLi = styled.span`
    width: 45px;
    margin-left: 80px;
    text-align: center;
    color: #666;
    a {
        display: block;
        float: none;
        width: 45px;
        height: 45px;
        margin: 0 auto;
        background-color: gray;
        &:hover {
            background-color: red;
            cursor: pointer;
        }
    }
    span {
        display: inline-block;
        width: 100px;
        margin-top: 10px;
        margin-left: -27.5px;
        font-weight: 400;
        font-size: 12px;
        text-align: center;
        color: rgba(0, 0, 0, 0.5);
    }
`;
