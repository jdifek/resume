import Link from 'next/link';
import { Icon } from './Icon';
import styles from './MenuButton.module.scss';
import classNames from 'classnames';

export const MenuButton = ({ active, text, icon, iconOff, link }) => {
	return (
		<Link href={link} className={styles.menuButton}>
			<Icon active={active} icon={icon} iconOff={iconOff} />
			<h6
				className={classNames(styles.textWrapper, {
					[styles['active']]: active,
				})}
			>
				{text}
			</h6>
		</Link>
	);
};
