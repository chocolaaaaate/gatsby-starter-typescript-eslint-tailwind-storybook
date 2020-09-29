import React from 'react';

const Welcome = () => (
  <div className="flex flex-col items-center text-center p-5 md:p-10 rounded-lg shadow-md hover:shadow-lg bg-white gap-16 lg:w-1/3">
    {/* using custom theme color */}
    <span className="text-5xl font-bold text-custom-green">Welcome 🌴</span>
    <span className="text-2xl text-gray-900=">
      This Gatsby starter is set up with TypeScript, ESLint, Tailwind CSS, and
      Storybook.
    </span>
    <span className="text-lg text-gray-600">
      Sumedh Kanade (
      <a href="https://github.com/chocolaaaaate/gatsby-starter-typescript-eslint-tailwind-storybook">
        GitHub
      </a>
      )
    </span>
  </div>
);

export default Welcome;
