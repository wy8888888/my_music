import React, { ReactNode, memo } from 'react';

interface PropType {
    children?: ReactNode;
}

const BackTop: React.FC<PropType> = () => {
    return <div className="m-back">回到顶部</div>;
};

export default memo(BackTop);
