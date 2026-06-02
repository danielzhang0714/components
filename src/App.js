import Gallery from './components/Gallery';
import lynaeDance from './assets/lynae-dance.gif';
import deniaDance from './assets/denia-dance.gif';
import pheobi from './assets/pheobi.gif';
import phlorova from './assets/phlorova.gif';

function App() {
  const galleryLinks = [
    {index: 0, name: 'Gallery1', url: lynaeDance},
    {index: 1, name: 'Gallery2', url: deniaDance},
    {index: 2, name: 'Gallery3', url: pheobi},
    {index: 3, name: 'Gallery4', url: phlorova}
  ]
  return (
    <div className="container">
      <Gallery galleryLinks={galleryLinks} />
    </div>
  );
}



export default App;
