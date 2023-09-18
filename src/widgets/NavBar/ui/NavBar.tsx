import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './NavBar.module.scss';

interface NavbarProps {
    className?: string;
}

export const NavBar = ({ className }: NavbarProps) => (
    <div className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.links}>
            <AppLink theme={AppLinkTheme.RED} to="/" className={cls.mainLink}>
                Main page
            </AppLink>
            <AppLink
                theme={AppLinkTheme.SECONDARY}
                to="/about"
            >
                About site

            </AppLink>
        </div>
    </div>
);
