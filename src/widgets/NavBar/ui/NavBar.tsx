import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NavBar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

interface NavbarProps {
  className?: string;
}

export const NavBar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.RED} to={'/'} className={cls.mainLink}>
          Main page
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>About site</AppLink>
      </div>
    </div>
  );
};
