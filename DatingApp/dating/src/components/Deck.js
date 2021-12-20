import React, { useState } from "react";
// import { useSprings } from "react-spring/hooks";
import { useSprings } from "react-spring";
// import { useSprings } from "eslint-plugin-react-hooks";
import { useGesture } from "react-with-gesture";
import Card from "./Card";
// import { Component } from 'react';
import "../styles/Deck.css";
import axios from "axios";
// import MyNavSwipe from "./NavbarSwipe";
import MyNavDash from './Navbar';
import { useEffect } from "react";
import SkeletonInput from "antd/lib/skeleton/Input";

function sendData(pk)
{
  const formData = new FormData();
  
    formData.append("swipedUser",pk);
  axios({
    method: "post",
    url: "http://127.0.0.1:8000/sendSwipe/",
    data: formData,
    headers: { "Content-Type": "application/json" ,
    Authorization: "Token "+localStorage.getItem('token')},
  })
    .then(function (response) {
      //handle success
      console.log("sent..."+response);
    })
    .catch(function (response) {
      //handle error
      console.log(response);
    });
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
  //console.log("Result obtained"+ result[1].pics);
  var leng=localStorage.getItem('userlen');
    
  const [props, set] = useSprings(localStorage.getItem('userlen'), i => ({
    ...to(i),
    from: from(i)
  }));

  const bind =useGesture(
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
         if(isGone && xDelta>0 ){
          sendData(result[i].pk);   
         console.log("i is:"+i+"result[i]: "+result[i].pk);
         
        }
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
        //console.log("down: "+down+" "+gone.size+" "+leng);
      if (!down && gone.size == leng){
        console.log("down: "+down+" "+gone.size+" "+leng);
        

      }
        
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
