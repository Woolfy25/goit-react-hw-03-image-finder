import React from 'react';
import css from './App.module.css';
import Searchbar from './Searchbar';

export class App extends React.Component {
  handleValue = search => {
    console.log('search', search);
  };
  render() {
    return (
      // <div
      //   style={{
      //     height: '100vh',
      //     display: 'flex',
      //     justifyContent: 'center',
      //     alignItems: 'center',
      //     fontSize: 40,
      //     color: '#010101',
      //   }}
      // >
      //   <Searchbar />
      // </div>
      <div className={css.App}>
        <Searchbar onSubmit={this.handleValue} />
      </div>
    );
  }
}
