import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('with additional class', () => {
        // eslint-disable-next-line max-len
        expect(classNames('class', {}, ['class1', 'class2'])).toBe('class class1 class2');
    });

    test('with mods', () => {
        const expected = 'class class1 class2 hovered scrolled';
        // eslint-disable-next-line max-len
        expect(classNames('class', { hovered: true, scrolled: true }, ['class1', 'class2'])).toBe(expected);
    });

    test('with false mode', () => {
        const expected = 'class class1 class2 scrolled';
        // eslint-disable-next-line max-len
        expect(classNames('class', { hovered: false, scrolled: true }, ['class1', 'class2'])).toBe(expected);
    });

    test('with mode undefined', () => {
        const expected = 'class class1 class2 hovered';
        // eslint-disable-next-line max-len
        expect(classNames('class', { hovered: true, scrolled: undefined }, ['class1', 'class2'])).toBe(expected);
    });
});
