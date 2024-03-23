import { FC, PropsWithChildren } from 'react';
import './styles.scss';

interface CustomBtnProps {
	href: string;
	className?: string;
}

const CustomBtn: FC<PropsWithChildren<CustomBtnProps>> = ({ children, href, className = '' }) => {
	return (
		<a className={`btn ${className}`} href={href} target='_blank'>
			{children}
		</a>
	);
};

export default CustomBtn;
