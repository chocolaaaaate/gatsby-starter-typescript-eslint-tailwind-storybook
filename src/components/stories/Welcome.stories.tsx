import React from 'react';
import { IMessage } from '../../model/IMessage';
import Welcome from '../Welcome';

export default {
  title: 'Components/Welcome',
  component: Welcome,
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    footnote: { control: 'text' },
  },
};

export const Template = (message: IMessage) => <Welcome message={message} />;

Template.args = {
  title: 'Welcome 🌴',
  description:
    'This Gatsby starter is set up with TypeScript, ESLint, Tailwind CSS, and Storybook.',
  footnote: 'Sumedh Kanade',
};
