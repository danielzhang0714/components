function Gallery(props) {
    return(
        <div className="gallery">
            {props.galleryLinks.map(link => (
                <ul>
                    <li key={link.index}>
                        <img src={link.url} alt={link.name} />
                    </li>
                </ul>
            ))}
         </div>
    )
};

export default Gallery;