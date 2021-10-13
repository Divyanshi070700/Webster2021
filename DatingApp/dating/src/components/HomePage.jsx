import { Navbar } from "react-bootstrap";
import MyNavbar from "./Navbar";
import React from 'react'
import { Card, Button} from "react-bootstrap";
import { Component } from "react";
import bg from './bg.jpg';
class HomePage extends React.Component {
render(){
    return (
        <div>
        <MyNavbar/>
        <Card className="text-center" style={{ display:'flex', justifyContent:'center'}}>
    <Card.Img variant="top" src={bg} />
    <Card.Body>
    <Card.Title>Start Something Epic!</Card.Title>
    <Card.Text>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a mauris at enim commodo dictum sit amet sed nulla. Nam pharetra blandit rhoncus. Duis venenatis quam nec nisi rutrum aliquam. Sed fringilla lorem et pulvinar blandit. Nullam at metus arcu. Sed placerat magna dui, et porttitor nibh molestie ut. Mauris auctor neque ac justo dictum, in aliquet mauris dictum. Nullam urna arcu, placerat sed arcu et, finibus tincidunt urna. Sed ultricies ex risus, non efficitur mauris gravida non. Morbi nec tellus malesuada, egestas leo id, condimentum nibh. Mauris cursus luctus nisi eu venenatis. Ut interdum diam nec justo varius tincidunt. Mauris rutrum, ipsum porta facilisis efficitur, metus nisi lobortis odio, sed semper lacus dolor ac dolor. Donec eget volutpat orci. Quisque dapibus, diam et accumsan cursus, nunc odio vehicula est, mattis scelerisque enim lacus sed justo.
    
    Pellentesque blandit pretium purus ac elementum. Maecenas viverra dictum mauris, ac tincidunt nulla tempus eu. Cras ut purus elementum, ornare enim sit amet, condimentum ex. Aenean quis faucibus orci, in vulputate felis. Vivamus sagittis magna in interdum viverra. Sed nec gravida ante. Proin quis gravida nisi. Fusce quis pretium quam, at euismod tortor. Vestibulum pulvinar dictum neque. Suspendisse dignissim at mauris in feugiat. Aenean nec leo pulvinar nisl tincidunt facilisis. Integer turpis nunc, viverra at tincidunt sit amet, bibendum in turpis. Proin fermentum porta metus. Nam tristique sed ex id condimentum. Integer id sem vel odio luctus pretium.
    
    Donec sed felis nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam ac risus massa. Praesent ullamcorper interdum massa sit amet placerat. Aenean condimentum dui leo, eu hendrerit diam rhoncus in. Proin vulputate non eros ac suscipit. Proin sed eros vel est rhoncus interdum sed ac lorem. Etiam lectus velit, varius at velit in, egestas aliquet odio. Duis in venenatis mauris. Vivamus eu risus eu nibh gravida pretium nec vitae velit. Aenean placerat, risus ac mattis interdum, risus neque commodo lacus, convallis sollicitudin ipsum turpis vitae massa. Nam efficitur scelerisque felis, in posuere tortor feugiat et. Sed posuere velit vitae elit porta aliquet.
    </Card.Text>
    <Button variant="primary">CREATE ACCOUNT</Button>
    </Card.Body>
    </Card>
    </div>
    );
    }
}
export default HomePage;