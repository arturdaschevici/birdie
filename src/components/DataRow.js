import React from 'react';

const DataRow = ({ row, variable, index }) => {
  return (
    <tr>
      <td>{index}</td>
      <td>{row[variable]}</td>
      <td>{row.count}</td>
    </tr>
  );
};

export default DataRow;
