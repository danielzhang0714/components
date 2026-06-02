import Nav from "./Nav";

function Header(props){
    return(
        <>
        <h1>Good Gallery</h1>
        <Nav navLinks={props.navLinks} />
        </>
    )
};

export default Header;