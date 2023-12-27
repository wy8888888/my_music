import React, { ReactNode, memo } from 'react';

interface PropType {
    children?: ReactNode;
}

const Artist: React.FC<PropType> = () => {
    return <div>Artist</div>;
};

export default memo(Artist);
