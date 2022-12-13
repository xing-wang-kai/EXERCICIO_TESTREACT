import React from 'react';
import Comp from './card.styled';


const Card: React.FC = ({ children }) => {
    return (
        // eslint-disable-next-line react/jsx-pascal-case
        <Comp.div>
            {children}
        </Comp.div>
    )
}

export default Card