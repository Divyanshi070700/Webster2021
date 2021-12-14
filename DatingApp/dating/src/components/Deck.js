import React, { useState } from "react";
// import { useSprings } from "react-spring/hooks";
import { useSprings } from "react-spring";
// import { useSprings } from "eslint-plugin-react-hooks";
import { useGesture } from "react-with-gesture";
import Card from "./Card";
// import { Component } from 'react';
import "../styles/Deck.css";
// import MyNavSwipe from "./NavbarSwipe";
import MyNavDash from './Navbar';

import { useEffect } from "react";

function getobjs(){
      
var objs = [
  {
    pics: [
      "https://images.unsplash.com/photo-1522263842439-347f062b8475?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
    ],
    name:"jenny",
    age: 18,
    distance: "1 mile away",
    text: "The C and the L are silent."
  },
  {
    pics: [
      "https://images.unsplash.com/photo-1535378719329-f0a8b9a42152?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
    ],
    name: "Sarah",
    age: 24,
    distance: "5 miles away",
    text:
      "It's tough being a single mom. Or so I'm told, I wouldn't know; I don't have kids."
  },
  {
    pics: [
      "https://images.unsplash.com/photo-1514924801778-1db0aba75e9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
    ],
    name: "Savannah",
    age: 29,
    distance: "3 miles away",
    text: "A little known fact is that I cover about 40% of Africa."
  },
  {
    pics: [
      "https://images.unsplash.com/photo-1456885284447-7dd4bb8720bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
      "https://images.unsplash.com/photo-1532635270-c09dac425ca9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
    ],
    name: "jenny",
    age: 22,
    distance: "2 miles away",
    text:
      "On the first date I will carve our initials in a tree. It's the most romantic way to let you know I have a knife."
  }
];
objs.push({pics: [
  "https://images.unsplash.com/photo-1456885284447-7dd4bb8720bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
  "https://images.unsplash.com/photo-1532635270-c09dac425ca9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
],
name: "jenny....2",
age: 22,
distance: "2 miles away",
text:
  "On the first date I will carve our initials in a tree. It's the most romantic way to let you know I have a knife."
})
return objs
}


const to = i => ({
  x: 0,
  y: i * -10,
  scale: 1,
 // rot: -10 + Math.random() * 20,
  delay: i * 100
});
const from = i => ({ rot: 0, scale: 1.5, y: -1000 });

const trans = (r, s) =>
  `perspective(1500px) rotateX(30deg) rotateY(${r /
    10}deg) rotateZ(0 deg) scale(${s})`;

    function Deck(result) {
  
      
      //const userList=getobjs(result);
  const [gone] = useState(() => new Set());
  console.log("Result obtained"+ result[0].pics);
    
  const [props, set] = useSprings(localStorage.getItem('userlen'), i => ({
    ...to(i),
    from: from(i)
  }));

  const bind = useGesture(
    ({
      args: [index],
      down,
      delta: [xDelta],
      distance,
      direction: [xDir],
      velocity
    }) => {
      const trigger = velocity > 0.1;

      const dir = xDir < 0 ? -1 : 1;
      console.log("hello"+dir);
      if (!down && trigger) gone.add(index);

      set(i => {
        if (index !== i) return;
        const isGone = gone.has(index);

        const x = isGone ? xDelta * dir*100: down ? xDelta : 0;
        
        //const x = isGone ? 1750 * dir : down ? 1750*dir : 0;
         //console.log("is Gone is: "+isGone);
         if(isGone)
         console.log(i+"objects left");
        //  console.log("\n"+isGone);
          console.log("xDelta"+xDelta);
        //  console.log("velocity"+velocity);
        //const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0);
          
        const scale = down ? 1.1 : 1;
        return {
          x,
         // rot,
          scale,
          delay: undefined,
          config: { friction: 60, tension: down ? 800 : isGone ? 200 : 500 }
        };
      });

      //if (!down && gone.size === cards.length)
        //setTimeout(() => gone.clear() || set(i => to(i)), 600);
    }
  );

  return props.map(({ x, y, rot, scale }, i) => (
    <Card
      i={i}
      x={x}
      y={y}
      rot={rot}
      scale={scale}
      trans={trans}
      
      objs={result}
      bind={bind}
    />
  ));
}

export default Deck;
