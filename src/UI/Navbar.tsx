import { ReactNode } from 'react';

interface IProps {
	children: ReactNode;
}

function Navbar({ children }: IProps) {
	return <div className="flex flex-col justify-start">{children}</div>;
}

export default Navbar;
