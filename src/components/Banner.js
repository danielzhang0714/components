import Button from "./Button";

function Banner(props){
    const buttonText = [
        {index: 0, Text: "Learn More", className: "primary"},
        {index: 1, Text: "Good Try", className: "secondary"}
    ]
    return(
        <div className="banner">
            <h1>{props.bannerTitle}</h1>
            <p>{props.bannerText}</p>
            <Button buttonText={buttonText[0].Text} />
            <Button buttonText={buttonText[1].Text} />
        </div>
    )
};

export default Banner;