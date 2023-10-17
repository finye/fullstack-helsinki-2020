import React from 'react';

const Filter = ({ searched, onNameSearched }) => {
  return (
    <div>
      filter list by name <input value={searched} onChange={onNameSearched} />
    </div>
  );
};

export default Filter;
