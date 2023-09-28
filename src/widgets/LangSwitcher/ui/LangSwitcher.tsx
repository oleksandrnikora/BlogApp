import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher = ({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggleLang = async () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ua' : 'en');
    };

    return (

        <Button
            className={classNames('', {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggleLang}
        >
            {t(short ? 'Short lang' : 'Language')}
        </Button>

    );
};
