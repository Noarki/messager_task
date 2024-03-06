import React from 'react';
import style from './btn.module.scss';

interface IProps {
    children?: string;
    onClick?: () => void;
    className?: string;
    BtnType?: 'submit' | 'reset' | 'button';
}

const Button: React.FC<IProps> = ({ children, onClick, className, BtnType }) => {
    return (
        <button className={className} onClick={onClick} type={BtnType}>
            {children}
        </button>
    );
};

export default Button;
