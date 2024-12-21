import { Icon } from './Icon';
import userIcon from '../images/svg/profile-circle-off.svg';
import notificatonIcon from '../images/svg/notification-off.svg';
import styles from './Header.module.scss';
import Link from 'next/link';

const Header = () => {
	return (
		<header className={styles.header}>
			<Link className={styles.link} href='/profile'>
				<Icon className={styles.icon} iconOff={userIcon} active={false} />
			</Link>
			<h1>Resume</h1>
			<Link className={styles.link} href='/notifications'>
				<Icon
					className={styles.icon}
					iconOff={notificatonIcon}
					active={false}
				/>
			</Link>
		</header>
	);
};

export default Header;
