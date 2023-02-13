import React, { useState} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

const Search = ({ onSearch}) => {

  const[term, setTerm] = useState('')

  const onChange = (e) => {
    setTerm(e.target.value);
  }

  const search = () => {
     onSearch(term);

  }

  return (
    <div>
      Search: <input value={term} onChange={onChange}/>
      <button onClick={search}> Search </button>
    </div>
  );
}

export default Search;