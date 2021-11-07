import SimpleReactFooter from "simple-react-footer";
import React from 'react';
import { Component } from 'react';

// export default function Footer() {
//     return (
//         <div>
            
//         </div>
//     )
// }

class Footer extends Component {
render(){
    const description = "According to wikipedia, the cat (Felis catus) is a domestic species of small carnivorous mammal. It is the only domesticated species in the family Felidae and is often referred to as the domestic cat to distinguish it from the wild members of the family. A cat can either be a house cat, a farm cat or a feral cat; the latter ranges freely and avoids human contact.";
    const title = "Finder";
    
    // var firstColStyle = { textAlign: 'right' }
    const columns = [
      {
          title: "Resources",
          resources: [
              {
                  name: "About",
                  link: "/about"
              },
              {
                  name: "Careers",
                  link: "/careers"
              },
              {
                  name: "Contact",
                  link: "/contact"
              },
              {
                  name: "Admin",
                  link: "/admin"
              }
          ]
      },
      {
          title: "Legal",
          resources: [
              {
                  name: "Privacy",
                  link: "/privacy"
              },
              {
                  name: "Terms",
                  link: "/terms"
              }
          ]
      },
      {
          title: "Visit",
          resources: [
              {
                  name: "Locations",
                  link: "/locations"
              },
              {
                  name: "Culture",
                  link: "/culture"
              }
          ]
      }
   ];
   return <SimpleReactFooter className="Footer" 
    
      description={description} 
      title={title}
      columns={columns}
      linkedin="fluffy_cat_on_linkedin"
      facebook="fluffy_cat_on_fb"
      twitter="fluffy_cat_on_twitter"
      instagram="fluffy_cat_live"
      youtube="UCFt6TSF464J8K82xeA?"
      pinterest="fluffy_cats_collections"
      copyright="white"
      iconColor="white"
      backgroundColor= "black"
      fontColor="white"
      copyrightColor="darkgrey"
   />;
  };
}

export default Footer;