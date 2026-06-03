function Gallery(props) {
  return (
    <div className="gallery">
      <ul className="flex">
        {props.galleryLinks.map(link => (
          <li key={link.index}>
            <img src={link.url} alt={link.name} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Gallery;