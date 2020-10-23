import React from 'react';

const Filter = (props) => {
  return (
    <div>
      filter list by name{' '}
      <input value={props.searched} onChange={props.onNameSearched} />
    </div>
  );
};

export default Filter;
