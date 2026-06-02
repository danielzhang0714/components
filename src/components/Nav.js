function Nav(props){
    return(
        <nav>
            <ul className="flex">
                {props.navLinks.map(link => (
                    <li key={link.index}>
                        <a href={link.url}>{link.name}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
};

export default Nav;