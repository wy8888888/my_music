import React, { ReactNode, memo } from 'react';

interface PropType {
    children?: ReactNode;
}

const Friend: React.FC<PropType> = () => {
    return <div>Friend</div>;
};

export default memo(Friend);
