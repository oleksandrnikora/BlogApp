import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LangSwitcher.module.scss'
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Theme } from 'app/providers/ThemeProvider';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ua' : 'en')
  }


  return (
    
      <Button 
        className={classNames(cls.LangSwitcher, {}, [className])}
        theme={ThemeButton.CLEAR} 
        onClick={toggleLang}
      >
          {t('Language')}
      </Button>

  )
}

