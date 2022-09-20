import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './Main';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>

  );
}
