import React from "react";
import { animated} from "react-spring";
import { to } from "react-spring";
import Carousel from "nuka-carousel";
// import MyNavSwipe from "./NavbarSwipe";
import MyNavSwipe from './Navbar';
class Card extends React.Component {
  
  render() {
   
    const { i, x, y, rot, scale, trans, bind, objs } = this.props;
    // const { name, age, distance, text, pics } = objs[i];
    const d=objs[0].name;
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
              {(objs[i].pics).map(pic => (
                <img className="cardimg" src={pic} alt="profilePicture" />
              ))}
            </Carousel>
            <h2 className="Name">{objs[i].name},</h2>
            <h2 className="Age">{objs[i].age}</h2>
            <h5 className="Distance">{objs[i].distance}</h5>
            <h5 className="text">{objs[i].text}</h5>
            
          </div>
        </animated.div>
      </animated.div>
    );
  }
}

export default Card;
