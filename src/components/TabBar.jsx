import { MenuButton } from './MenuButton';
import styles from './TabBar.module.scss';
import homeButtonIcon from '../images/svg/home.svg';
import homeButtonIconOff from '../images/svg/home-off.svg';
import templateButtonIcon from '../images/svg/template.svg';
import templateButtonIconOff from '../images/svg/template-off.svg';
import settingsButtonIcon from '../images/svg/settings.svg';
import settingsButtonIconOff from '../images/svg/settings-off.svg';

const TabBar = () => {
	return (
		<footer className={styles.tabBar}>
			<ul className={styles.list}>
				<li className={styles.listItem}>
					<MenuButton
						icon={homeButtonIcon}
						iconOff={homeButtonIconOff}
						active={true}
						text='Home'
						link='/'
					/>
				</li>
				<li className={styles.listItem}>
					<MenuButton
						icon={templateButtonIcon}
						iconOff={templateButtonIconOff}
						active={false}
						text='Template'
						link='/template'
					/>
				</li>
				<li className={styles.listItem}>
					<MenuButton
						icon={settingsButtonIcon}
						iconOff={settingsButtonIconOff}
						active={false}
						text='Settings'
						link='/settings'
					/>
				</li>
			</ul>
		</footer>
	);
};

export default TabBar;
