import Image from 'next/image';
import styles from './Icon.module.scss';
import classnames from 'classnames';
import { Fragment } from 'react';

export const Icon = ({ icon, iconOff, active }) => {
	return (
		<Fragment>
			{active ? (
				<Image className={styles.icon} src={icon} />
			) : (
				<Image className={styles.icon} src={iconOff} />
			)}
		</Fragment>
	);
};
