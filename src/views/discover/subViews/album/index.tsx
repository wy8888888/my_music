import React, { ReactNode, memo } from 'react';

interface PropType {
    children?: ReactNode;
}

const Album: React.FC<PropType> = () => {
    return <div>Album</div>;
};

export default memo(Album);
