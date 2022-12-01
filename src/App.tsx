import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PageHeader from './Common/PageHeader';
import PokeCardList from './List/PokeCardList';
import PokeDetail from './Detail/PokeDetail';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <PageHeader />
        <Routes>
          <Route path='/' element={<PokeCardList />} />
          <Route path='/pokemon/:name' element={<PokeDetail />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
