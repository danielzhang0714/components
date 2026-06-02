function Gallery(props) {
    return(
        <div className="gallery">
            {props.galleryLinks.map(link => (
                <ul className="flex">
                    <li key={link.index}>
                        <img src={link.url} alt={link.name} />
                    </li>
                </ul>
            ))}
         </div>
    )
};

export default Gallery;