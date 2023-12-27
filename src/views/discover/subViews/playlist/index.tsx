import React, { ReactNode, memo } from 'react';

interface PropType {
    children?: ReactNode;
}

const PlayList: React.FC<PropType> = () => {
    return <div>PlayList</div>;
};

export default memo(PlayList);
