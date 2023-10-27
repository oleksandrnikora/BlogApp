import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Title lorem ipsum',
    text: 'Description Description Description',
};

export const Error = Template.bind({});
Error.args = {
    title: 'Title lorem ipsum',
    text: 'Description Description Description',
    theme: TextTheme.ERROR,
};

export const onlyWithTitle = Template.bind({});
onlyWithTitle.args = {
    title: 'Title lorem ipsum',
};

export const onlyWithText = Template.bind({});
onlyWithText.args = {
    text: 'Description Description Description',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Title lorem ipsum',
    text: 'Description Description Description',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyWithTitleDark = Template.bind({});
onlyWithTitleDark.args = {
    title: 'Title lorem ipsum',
};
onlyWithTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyWithTextDark = Template.bind({});
onlyWithTextDark.args = {
    text: 'Description Description Description',
};
onlyWithTextDark.decorators = [ThemeDecorator(Theme.DARK)];
