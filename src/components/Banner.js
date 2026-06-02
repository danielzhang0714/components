import Button from "./Button";

function Banner(props){
    const buttonText = [
        {index: 0, Text: "Learn More", className: "primary"},
        {index: 1, Text: "Good Try", className: "secondary"}
    ]
    return(
        <div className="banner flex">
            <h1>{props.bannerTitle}</h1>
            <p>{props.bannerText}</p>
            <Button className={buttonText[0].className} buttonText={buttonText[0].Text} />
            <Button className={buttonText[1].className} buttonText={buttonText[1].Text} />
        </div>
    )
};

export default Banner;