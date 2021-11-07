import React from "react";
import { animated} from "react-spring";
import { to } from "react-spring";
import Carousel from "nuka-carousel";
import MyNavSwipe from "./NavbarSwipe";
class Card extends React.Component {
  render() {
    const { i, x, y, rot, scale, trans, cards, bind, objs } = this.props;
    const { name, age, distance, text, pics } = objs[i];
    <MyNavSwipe/>
    return (
      
      <animated.div className="swipe1 outerdiv"
        key={i}
        style={{
          transform: to(
            [x, y],
            (x, y) => `translate3d(${x}px,${y}px,0)`
          )
        }}
      >
        <animated.div className="swipe1 swipe2"
          {...bind(i)}
          style={{
            transform: to([rot, scale], trans)
          }}
        >
          <div className="card swipe2">
            <Carousel>
              {pics.map(pic => (
                <img className="cardimg" src={pic} alt="profilePicture" />
              ))}
            </Carousel>
            <h2 className="Name">{name},</h2>
            <h2 className="Age">{age}</h2>
            <h5 className="Distance">{distance}</h5>
            <h5 className="text">{text}</h5>
          </div>
        </animated.div>
      </animated.div>
    );
  }
}

export default Card;
