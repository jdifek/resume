import Image from 'next/image';
import styles from './Icon.module.scss';
import { Fragment } from 'react';
import classNames from 'classnames';

export const Icon = ({ icon, iconOff, active, className }) => {
	return (
		<Fragment>
			{active ? (
				<Image
					className={classNames(styles.icon, className)}
					src={icon}
					alt=''
				/>
			) : (
				<Image
					className={classNames(styles.icon, className)}
					src={iconOff}
					alt=''
				/>
			)}
		</Fragment>
	);
};
