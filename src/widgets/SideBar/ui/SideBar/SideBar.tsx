import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { Button, ButtonSize, ThemeButton } from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import { useTranslation } from 'react-i18next';
import cls from './SideBar.module.scss';

interface SideBarProps {
    className?: string;
}

export const SideBar = ({ className }: SideBarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(
                cls.SideBar,
                { [cls.collapsed]: collapsed },
                [className],
            )}
        >
            <Button
                data-testid="sidebar-toggle"
                type="button"
                onClick={onToggle}
                className={cls.collapsedBtn}
                theme={ThemeButton.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.items}>
                <AppLink
                    className={cls.item}
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.main}
                >
                    <MainIcon className={cls.icon} />
                    <span className={cls.link}>
                        {t('Main')}
                    </span>
                </AppLink>

                <AppLink
                    className={cls.item}
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.about}
                >
                    <AboutIcon className={cls.icon} />
                    <span className={cls.link}>
                        {t('About site')}
                    </span>
                </AppLink>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={cls.lang} />
            </div>
        </div>
    );
};
