import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Counter } from './Counter';

describe('Counter', () => {
    test('Test render', () => {
        componentRender(<Counter />, {
            initialState: {
                counter: { value: 10 },
            },
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });

    test('Test with increment button', () => {
        componentRender(<Counter />, {
            initialState: {
                counter: { value: 10 },
            },
        });
        const incrementBtn = screen.getByTestId('increment-button');
        fireEvent.click(incrementBtn);
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });

    test('Test with decrement button', () => {
        componentRender(<Counter />, {
            initialState: {
                counter: { value: 10 },
            },
        });
        const decrementBtn = screen.getByTestId('decrement-button');
        fireEvent.click(decrementBtn);
        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    });
});
