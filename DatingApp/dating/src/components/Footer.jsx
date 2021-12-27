import SimpleReactFooter from "simple-react-footer";
import React from 'react';
import { Component } from 'react';
import "../styles/Footer.css";

// export default function Footer() {
//     return (
//         <div>
            
//         </div>
//     )
// }

class Footer extends Component {
render(){
    const description = "If you have been searching for your soulmate, no need to stress anymore, this website is designed to help you. Give it a try!";
    const title = "Soulmates";
    
    // var firstColStyle = { textAlign: 'right' }
    const columns = [
      {
          title: "About",
          resources: [
              {
                  name: "About",
                  link: "/"
              },
              {
                  name: "Contact",
                  link: "/contactus"
              },
            //   {
            //       name: "Admin",
            //       link: "/admin"
            //   }
          ]
      },
    //   {
    //       title: "Legal",
    //       resources: [
    //           {
    //               name: "Privacy",
    //               link: "/privacy"
    //           },
    //           {
    //               name: "Terms",
    //               link: "/terms"
    //           }
    //       ]
    //   },
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
      copyright="Soulmates"
      iconColor="white"
      backgroundColor= "rgb(0,0,0,0.5)"
      fontColor="white"
      copyrightColor="darkgrey"
   />;
  };
}

export default Footer;






// import React from "react";
// import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
// import "../styles/Footer.css"
// const Footer = () => {
//   return (
//     <MDBFooter color="blue" className="font-small pt-4 mt-4">
//       <MDBContainer fluid className="text-center text-md-left">
//         <MDBRow>
//           <MDBCol md="6">
//             <h5 className="title">Footer Content</h5>
//             <p>
//               Here you can use rows and columns here to organize your footer
//               content.
//             </p>
//           </MDBCol>
//           <MDBCol md="6">
//             <h5 className="title">Links</h5>
//             <ul>
//               <li className="list-unstyled">
//                 <a href="#!">Link 1</a>
//               </li>
//               <li className="list-unstyled">
//                 <a href="#!">Link 2</a>
//               </li>
//               <li className="list-unstyled">
//                 <a href="#!">Link 3</a>
//               </li>
//               <li className="list-unstyled">
//                 <a href="#!">Link 4</a>
//               </li>
//             </ul>
//           </MDBCol>
//         </MDBRow>
//       </MDBContainer>
//       <div className="footer-copyright text-center py-3">
//         <MDBContainer fluid>
//           &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
//         </MDBContainer>
//       </div>
//     </MDBFooter>
//   );
// }

// export default Footer;




// import React from "react";
// import {
// Box,
// Container,
// Row,
// Column,
// FooterLink,
// Heading,
// } from "./FooterStyles";
// import "../styles/Footer.css"

// const Footer = () => {
// return (
// 	<Box>
// 	<h3 style={{ color: "white",
// 				textAlign: "center",
// 				marginTop: "-50px" }}>
// 		Soulmates: A perfect to find your partner.
// 	</h3>
// 	<Container>
// 		<Row>
// 		<Column>
// 			<Heading>About Us</Heading>
// 			<FooterLink href="#">Aim</FooterLink>
// 			<FooterLink href="#">Vision</FooterLink>
// 			{/* <FooterLink href="#">Testimonials</FooterLink> */}
// 		</Column>
// 		{/* <Column>
// 			<Heading>Services</Heading>
// 			<FooterLink href="#">Writing</FooterLink>
// 			<FooterLink href="#">Internships</FooterLink>
// 			<FooterLink href="#">Coding</FooterLink>
// 			<FooterLink href="#">Teaching</FooterLink>
// 		</Column> */}
// 		<Column>
// 			<Heading>Contact Us</Heading>
// 			<FooterLink href="#">Uttar Pradesh</FooterLink>
// 			<FooterLink href="#">Ahemdabad</FooterLink>
// 			{/* <FooterLink href="#">Indore</FooterLink>
// 			<FooterLink href="#">Mumbai</FooterLink> */}
// 		</Column>
//         <Column>
//         </Column>
//         <Column>
//         </Column>
//         <Column>
//         </Column>
//         <Column>
//         </Column>
//         <Column>
//         </Column>
//         <Column>
//         </Column>
        
        
//         <div className="social">
// 		<Column>
// 			<Heading>Social Media</Heading>
// 			<FooterLink href="#">
// 			<i className="fab fa-facebook-f">
// 				<span style={{ marginLeft: "10px" }}>
// 				Facebook
// 				</span>
// 			</i>
// 			</FooterLink>
// 			<FooterLink href="#">
// 			<i className="fab fa-instagram">
// 				<span style={{ marginLeft: "10px" }}>
// 				Instagram
// 				</span>
// 			</i>
// 			</FooterLink>
// 			<FooterLink href="#">
// 			<i className="fab fa-twitter">
// 				<span style={{ marginLeft: "10px" }}>
// 				Twitter
// 				</span>
// 			</i>
// 			</FooterLink>
// 			<FooterLink href="#">
// 			<i className="fab fa-youtube">
// 				<span style={{ marginLeft: "10px" }}>
// 				Youtube
// 				</span>
// 			</i>
// 			</FooterLink>
// 		</Column>
//         </div>
// 		</Row>
// 	</Container>
// 	</Box>
// );
// };
// export default Footer;

