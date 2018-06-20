import React, { Component } from "react";
import Click from "./components/Click";
import wrapper from "./components/wrapper";
import Title from "./components/Title";
import click from "./click.json";
import "./App.css";

///const IMAGES = ["cat", "cat", "dog", "dog", "horse", "horse", "pig",
  ///"pig", "snake", "snake", "fish", "fish"];

  class App extends Component {
    // Setting this.state.friends to the friends json array
    state = {
      click
    };
  
    removeFriend = id => {
      // Filter this.state.friends for friends with an id not equal to the id being removed
      const friends = this.state.friends.filter(friend => friend.id !== id);
      // Set this.state.friends equal to the new friends array
      this.setState({ friends });
    };
  
    // Map over this.state.friends and render a FriendCard component for each friend object
    render() {
      return (
        <wrapper>
          <Title>Friends List</Title>
          {this.state.friends.map(friend => (
            <Click
              removeFriend={this.removeFriend}
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
              occupation={friend.occupation}
              location={friend.location}
            />
          ))}
        </wrapper>
      );
    }
  }
  
  export default App;
  