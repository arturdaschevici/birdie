import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
const store = configureStore();
import './scss/style.scss';
import DataContainer from './containers/DataContainer';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <DataContainer />
      </div>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
