import React from 'react';

export const ItemCount = ({ count }) => {
  return (
    <div className="item-count">
      <span>{count} {count === 1 ? 'item left' : 'items left'}</span>
    </div>
  );
};

