import React, { ReactNode, memo } from 'react';
import { GFooter, GFooterWrap, FooterUl, FooterLi } from './styledComponent';
import footerData from '@/assets/data/footer.json';

interface PropType {
    children?: ReactNode;
}

const Footer: React.FC<PropType> = () => {
    const list = footerData.footer;
    return (
        <GFooter>
            <GFooterWrap>
                <FooterUl>
                    {list.map((item) => {
                        return (
                            <FooterLi key={item.href}>
                                <a></a>
                                <span>{item.name}</span>
                            </FooterLi>
                        );
                    })}
                </FooterUl>
            </GFooterWrap>
        </GFooter>
    );
};

export default memo(Footer);
