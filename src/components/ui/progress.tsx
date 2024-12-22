'use client';

import React from 'react';
import classNames from 'classnames';

type Props = {
	className: string;
	value: number;
};

const Progress: React.FC<Props> = ({ value, className }) => (
	<div
		className={classNames(
			'relative h-2 w-full overflow-hidden rounded-full bg-gray-200',
			className,
		)}
	>
		<div
			className='h-full rounded-full bg-blue-500 transition-all duration-300'
			style={{ width: `${value}%` }}
		></div>
	</div>
);

export { Progress };
