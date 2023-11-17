import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Currency } from 'enteties/Currency';
import { Country } from 'enteties/Country';
import ProfilePage from './ProfilePage';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({
    profile: {
        form: {
            firstName: 'Alex',
            lastName: 'IT',
            age: 33,
            currency: Currency.USD,
            country: Country.Ukraine,
            city: 'Kyiv',
            username: 'admin',
        },
    },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: {
        form: {
            firstName: 'Alex',
            lastName: 'IT',
            age: 33,
            currency: Currency.USD,
            country: Country.Ukraine,
            city: 'Kyiv',
            username: 'admin',
        },
    },
})];
