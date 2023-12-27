import React, { ReactNode, memo } from 'react';
import { HeaderWrap, Title, More } from './styledComponent';

interface PropType {
    title: string;
    url: string;

    children?: ReactNode;
}

const HotHeader: React.FC<PropType> = (props) => {
    const { title, url } = props;
    return (
        <HeaderWrap>
            <Title href={url}>{title}</Title>
            <More>
                <a href={url}></a>
                <i className="index"></i>
            </More>
        </HeaderWrap>
    );
};

export default memo(HotHeader);
