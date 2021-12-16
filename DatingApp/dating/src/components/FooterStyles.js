import styled from 'styled-components';

export const Box = styled.div`
padding: 50px 40px 30px 40px;
background: black;
position: absolute;
bottom: 0;
width: 100%;


@media (max-width: 1000px) {
	// padding: 70px 30px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 30px;
	/* background: red; */
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
// margin-left: 60px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(100px, 1fr));
grid-gap: 10px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

export const FooterLink = styled.a`
color: #fff;
// margin-bottom: 20px;
font-size: 15px;
text-decoration: none;

&:hover {
	color: white;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 15px;
color: #fff;
// margin-bottom: 40px;
font-weight: bold;
`;
