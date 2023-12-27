import React, { ReactNode, memo } from 'react';
import {
    MyBanner,
    MyBannerWrap,
    BannerBox,
    DownloadBox
} from './styledComponent';

interface PropType {
    children?: ReactNode;
}

const Banner: React.FC<PropType> = () => {
    return (
        <MyBanner>
            <MyBannerWrap>
                <BannerBox>banner</BannerBox>
                <DownloadBox>download</DownloadBox>
            </MyBannerWrap>
        </MyBanner>
    );
};

export default memo(Banner);
