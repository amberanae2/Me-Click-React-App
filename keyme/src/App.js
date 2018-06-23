import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";


class App extends Component {
  state = {
      message: "Click an image to begin!",
      topScore: 0,
      curScore: 0,
      friends: friends,
      unselectedFriends: friends
  }

  componentDidMount() {
  }

  shuffleArray = array => {
      for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
  }

  selectFriends = friends => {
      const findfriend = this.state.friends.find(item => item.friends === friends);

      if(findfriend === undefined) {
          this.setState({ 
              message: "Sorry Try Again!!",
              topScore: (this.state.curScore > this.state.topScore) ? this.state.curScore : this.state.topScore,
              curScore: 0,
              friends: friends,
              unselectedFriends: friends
          });
      }
      else {
          const newFriends = this.state.unselectedFriends.filter(item => item.friends!== friends);
          
          this.setState({ 
              message: "Sorry Try Again!",
              curScore: this.state.curScore + 1,
              friends: friends,
              unselectedFriends: newFriends
          });
      }

      this.shuffleArray(friends);
  };

  render() {
      return (
        <Wrapper>
        <Title>Keeping Up With The CARDashians!</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
          />
        ))}
      </Wrapper>
      );
  }
}

export default App;
