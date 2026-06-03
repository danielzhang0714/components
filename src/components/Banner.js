import Button from "./Button";

function Banner(props){

    return(
        <div className="banner">
            <div className="container">
                <h1>{props.bannerTitle}</h1>
                <p>{props.bannerText}</p>
                <div className="banner-buttons">
                    <Button className={props.buttonText[0].className} buttonText={props.buttonText[0].Text} />
                    <Button className={props.buttonText[1].className} buttonText={props.buttonText[1].Text} />
                </div>
            </div>
        </div>
    )
};

export default Banner;