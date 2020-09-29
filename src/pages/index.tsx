import React from 'react';
import Welcome from '../components/Welcome';

function IndexPage() {
  return (
    <div className="bg-gray-200 h-screen w-full flex items-center justify-center">
      <Welcome
        message={{
          title: 'Welcome 🌴',
          description:
            'This Gatsby starter is set up with TypeScript, ESLint, Tailwind CSS, and Storybook.',
          footnote: 'Sumedh Kanade',
        }}
      />
    </div>
  );
}

export default IndexPage;
