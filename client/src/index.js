import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.js';
import VideoList from './components/Videos.js';


const App = () => {

  const [vids, setVids] = useState([]);




    const refresh = (term) => {
    $.ajax({
      type: 'GET',
      url: 'http://localhost:1128/vids',
      data: { term: term },
      success: (data) => {
        setVids(data);
      },
      error: (err) => {
        console.log('Failed try again')
      }
    })
  };

  useEffect(() => {
    refresh();
  }, []);

  const search = (term) => {
    $.ajax({
      type: 'POST',
      url: '/vids',
      data: { topic: term.toLowerCase() },
      success: (data) => {
        refresh(term.toLowerCase());
      },
      error: (err) => {
        console.log('Failed try again')
      }
    })

  }

  return (
    <div>
      <h1>Learn Something</h1>
      <div id='search'><Search onSearch={search}/></div>
      <div id='list'><VideoList vids={vids}/></div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));