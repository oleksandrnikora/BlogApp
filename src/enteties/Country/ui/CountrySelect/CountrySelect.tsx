import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { memo, useCallback } from 'react';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

export const CountrySelect = memo((props: CountrySelectProps) => {
    const {
        className,
        value,
        onChange,
        readonly,
    } = props;
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    const options = [
        { value: Country.Canada, content: Country.Canada },
        { value: Country.USA, content: Country.USA },
        { value: Country.Ukraine, content: Country.Ukraine },
        { value: Country.Germany, content: Country.Germany },
        { value: Country.Poland, content: Country.Poland },
    ];

    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('Choose country')}
            options={options}
            value={value}
            readonly={readonly}
            onChange={onChangeHandler}
        />

    );
});
