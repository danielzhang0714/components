import Button from "./Button";

function Banner(props){

    return(
        <div className="banner flex">
            <h1>{props.bannerTitle}</h1>
            <p>{props.bannerText}</p>
            <Button className={props.buttonText[0].className} buttonText={props.buttonText[0].Text} />
            <Button className={props.buttonText[1].className} buttonText={props.buttonText[1].Text} />
        </div>
    )
};

export default Banner;