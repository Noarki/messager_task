import React from 'react';
import style from './btn.module.scss';

interface IProps {
    children?: string;
    onClick?: () => void;
    className?: string;
}

const Button: React.FC<IProps> = ({ children, onClick, className }) => {
    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
