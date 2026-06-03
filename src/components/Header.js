import Nav from "./Nav";

function Header(props){
    return(
        <header>
      <div className="container">
        <h1>Good Gallery</h1>

        <nav>
          <ul>
            {props.navLinks.map(link => (
              <li key={link.index}>
                <a href={link.url}>{link.name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
    )
};

export default Header;