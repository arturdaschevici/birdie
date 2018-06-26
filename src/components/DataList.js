import React from 'react';
import DataRow from './DataRow';

const DataList = ({ data, variable }) => {
  return (
    <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
      <thead>
        <tr>
          <th>#</th>
          <th className="is-capitalized">{variable || 'variable'}</th>
          <th>Count</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <DataRow row={row} key={index} variable={variable} index={index} />
        ))}
      </tbody>
    </table>
  );
};

export default DataList;
