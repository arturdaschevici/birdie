import React from 'react';

const DataForm = ({ handleChange, columns, variable }) => {
  const renderOptions = (column, index) => {
    return (
      <option value={column.column_name} key={index}>{column.column_name}</option>
    );
  };

  return (
    <div className="field">
      <label htmlFor="variable" className="label">Variable</label>
      <div className="select">
        <select name="variable" id="variable" onChange={handleChange} className="is-capitalized" value={variable}>
          <option value="" disabled>Select...</option>
          {columns.map(renderOptions)}
        </select>
      </div>
    </div>
  );
};

export default DataForm;
