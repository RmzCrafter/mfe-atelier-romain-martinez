import React from 'react';

const Header = React.lazy(() => import('header/Header'));

const App = () => {
  return (
    <div>
      <React.Suspense fallback="Loading Header...">
        <Header />
      </React.Suspense>
      <h1>Shell Application</h1>
    </div>
  );
};

export default App; 