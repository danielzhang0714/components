import Gallery from './components/Gallery';
import lynaeDance from './assets/lynae-dance.gif';
import deniaDance from './assets/denia-dance.gif';
import pheobi from './assets/pheobi.gif';
import phlorova from './assets/phlorova.gif';
import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';

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
  const buttonText = [
        {index: 0, Text: "Learn More", className: "primary"},
        {index: 1, Text: "Good Try", className: "secondary"},
        {index: 2, Text: "Subscribe!", className: "footerbutton"}
    ]
  return (
    <>
    <Header navLinks={navLinks} />
    <main>
      <Banner bannerTitle={bannerTitle} bannerText={bannerText} buttonText={buttonText}/>
        <div className="container">
          <Gallery className="gallery" galleryLinks={galleryLinks} />
        </div>
    </main>
    <Footer buttonText={buttonText} />
    </>
  );
}



export default App;
