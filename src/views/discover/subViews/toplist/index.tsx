import React, { ReactNode, memo } from 'react';

interface PropType {
    children?: ReactNode;
}

const TopList: React.FC<PropType> = () => {
    return <div>TopList</div>;
};

export default memo(TopList);
