import React from 'react';
import css from './App.module.css';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';

export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      images: [
        {
          id: '1',
          src: 'https://img.freepik.com/free-photo/photo-stone-texture-pattern_58702-12225.jpg?t=st=1721142306~exp=1721145906~hmac=c942ff26baffeb41b5e6087ac3246929592225357ec1c2d9199f00cfae3b53e5&w=996',
          alt: 'Image 1',
        },
        {
          id: '2',
          src: 'https://img.freepik.com/free-photo/abstract-colorful-splash-3d-background-generative-ai-background_60438-2503.jpg?t=st=1721141905~exp=1721145505~hmac=54de16a1ffcaa0a51814f119dc9c52e4c4015c9d111532318b0278a05eeb5a5e&w=1060',
          alt: 'Image 2',
        },
      ],
    };
  }
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
        <ImageGallery items={this.state.images} />
      </div>
    );
  }
}
