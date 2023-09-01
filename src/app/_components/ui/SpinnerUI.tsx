'use client';

import { CSSProperties } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

interface ISpinnerUIProps {
	loading: boolean;
	color?: string;
}

const override: CSSProperties = {
	display: 'block',
	margin: '0 auto',
	borderColor: 'red',
};

const SpinnerUI = ({ loading, color = '#ffffff' }: ISpinnerUIProps) => {
	return (
		<div className='sweet-loading'>
			<ClipLoader
				color={color}
				loading={loading}
				cssOverride={override}
				size={150}
				aria-label='Loading Spinner'
				data-testid='loader'
			/>
		</div>
	);
};

export default SpinnerUI;
