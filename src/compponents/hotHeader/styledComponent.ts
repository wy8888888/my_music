import styled from 'styled-components';

export const HeaderWrap = styled.div`
    height: 33px;
    padding: 0 10px 0 34px;
    background-position: -225px -156px;
    border-bottom: 2px solid #c10d0c;
`;
export const Title = styled.a`
    float: left;
    font-size: 20px;
    font-weight: normal;
    line-height: 28px;
`;

export const More = styled.div`
    float: right;
    margin-top: 9px;
    a {
        color: #666;
        &:hover {
            text-decoration: underline;
            cursor: pointer;
        }
    }
    i {
        display: inline-block;
        width: 12px;
        height: 12px;
        margin-left: 4px;
        vertical-align: middle;
        background-position: 0 -240px;
    }
`;
