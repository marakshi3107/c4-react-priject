import React from 'react';

const MainContent = ({MainContent}) => {
    return (
        <main>
        <h2>About This page</h2>
        <p>
          This is a {MainContent} page
        </p>
        <h2>My Projects</h2>
        <ul>
          <li>Project 1</li>
          <li>Project 2</li>
          <li>Project 3</li>
        </ul>
      </main>
    );
}

export default MainContent;
