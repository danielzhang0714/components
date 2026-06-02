import Gallery from './components/Gallery';
import lynaeDance from './assets/lynae-dance.gif';
import deniaDance from './assets/denia-dance.gif';
import pheobi from './assets/pheobi.gif';
import phlorova from './assets/phlorova.gif';
import Header from './components/Header';
import Banner from './components/Banner';

function App() {
  let bannerTitle = 'Welcome to Good Gallery';
  let bannerText = 'Good gallery only good people can understand.';
  const galleryLinks = [
    {index: 0, name: 'Gallery1', url: lynaeDance},
    {index: 1, name: 'Gallery2', url: deniaDance},
    {index: 2, name: 'Gallery3', url: pheobi},
    {index: 3, name: 'Gallery4', url: phlorova}
  ]
  const navLinks = [
    {index: 0, name: 'About', url: '#'},
    {index: 1, name: 'Gallery', url: '#'},
    {index: 2, name: 'Artists', url: '#'},
    {index: 3, name: 'Contact', url: '#'}
  ]
  return (
    <>
    <Header navLinks={navLinks} />
    <Banner bannerTitle={bannerTitle} bannerText={bannerText} />
      <div className="container">
        <Gallery className="gallery" galleryLinks={galleryLinks} />
      </div>
    </>
  );
}



export default App;
