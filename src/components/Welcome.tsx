import React from 'react';
import { IMessage } from '../model/IMessage';

const Welcome = (props: { message: IMessage }) => (
  <div className="flex flex-col items-center text-center p-5 md:p-10 rounded-lg shadow-md hover:shadow-lg bg-white gap-16 lg:w-1/3">
    {/* using custom theme color */}
    <span className="text-5xl font-bold text-custom-green">
      {props.message.title}
    </span>
    <span className="text-2xl text-gray-900">{props.message.description}</span>
    {props.message?.footnote && (
      <span className="text-sm text-gray-600">{props.message?.footnote}</span>
    )}
  </div>
);

export default Welcome;
