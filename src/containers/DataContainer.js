import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData, fetchColumns } from '../actions';

import DataForm from '../components/DataForm';
import DataList from '../components/DataList';
import Loader from '../components/Loader';
import Error from '../components/Error';

class DataContainer extends Component {
  state = {
    variable: ''
  }

  componentDidMount = () => {
    this.props.fetchColumns();
  }

  handleChange = ({ target: { value } }) => {
    this.setState({ variable: value });
    this.props.fetchData(value);
  }

  render() {
    const { loading, errors, columns, data } = this.props;
    const { variable } = this.state;

    return (
      <div className="section">
        <h1 className="title is-1">Birdie Test</h1>
        <h3 className="subtitle is-4">Emily Isacke</h3>

        {errors.global && <Error message={errors.global} />}

        <DataForm columns={columns} handleChange={this.handleChange} variable={variable}/>
        <DataList data={data} variable={variable}/>

        {loading && <Loader />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { data, loading, errors, columns } = state.apiStore;
  return {
    data,
    loading,
    errors,
    columns
  };
};

export default connect(
  mapStateToProps, {
    fetchData,
    fetchColumns
  }
)(DataContainer);
