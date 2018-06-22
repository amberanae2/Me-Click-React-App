import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
      <a onClick={() => props.selectFriend(props.friends)} 
                className={props.curScore === 0 ? "style_prevu_kit style_prevu_kit_ex" : "style_prevu_kit"}
            >
                <img alt={props.friends} src={props.image} />
            </a>
    </div>
  </div>
);

export default FriendCard;
