import { ReactNode } from 'react';

interface IProps {
	children: ReactNode;
}

function Navbar({ children }: IProps) {
	return <div className="flex justify-center">{children}</div>;
}

export default Navbar;
