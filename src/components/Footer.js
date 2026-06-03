import Button from "./Button";

function Footer(props) {
    return(
        <div className="footer">
            <p>Copyright 2026 somebody's Gallery</p>
            <p>Designed by somebody</p>
            <Button className={props.buttonText[2].className} buttonText={props.buttonText[2].Text} />
        </div>
    )
};

export default Footer;