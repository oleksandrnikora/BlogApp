import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { memo, useCallback } from 'react';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const {
        className,
        value,
        onChange,
        readonly,
    } = props;
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);

    const options = [
        { value: Currency.USD, content: Currency.USD },
        { value: Currency.EUR, content: Currency.EUR },
        { value: Currency.UAH, content: Currency.UAH },
    ];

    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('Choose currency')}
            options={options}
            value={value}
            readonly={readonly}
            onChange={onChangeHandler}
        />

    );
});
