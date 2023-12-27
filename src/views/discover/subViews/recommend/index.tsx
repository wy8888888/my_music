import React, { ReactNode, memo } from 'react';
import Banner from '@/compponents/banner';
import { DiscoverModule, LeftBox, RightBox, LeftWrap } from './styledComponent';
interface PropType {
    children?: ReactNode;
}

const Recommend: React.FC<PropType> = () => {
    return (
        <>
            <Banner />
            <DiscoverModule>
                <LeftBox>
                    <LeftWrap></LeftWrap>
                </LeftBox>
                <RightBox>right</RightBox>
            </DiscoverModule>
        </>
    );
};

export default memo(Recommend);
