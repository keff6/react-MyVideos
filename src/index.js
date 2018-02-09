import React from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search-bar';

const API_KEY = 'AIzaSyAtKGD8idteCC1sjbVVyUN7bfrnU5e83dE';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDom.render(<App />, document.querySelector('.container'));
