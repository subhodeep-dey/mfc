import CC from './assets/images/CC.png'
import NTF from './assets/images/NFT.png'
import R from './assets/images/R.png'
import Cards from './Cards'
import Head from './Head';

const concepts = [
  {
    title: 'Cloud Computing: A Brief Introduction',
    image: CC,
    description:
      'Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.',
      style: {background: 'rgba(171, 75, 5, 1)'},
  },
  {
    title: 'Playing With Databases With R',
    image: NTF,
    description:
      'State is data that may change over time. As it changes, the UI should be updated to reflect the updated data.',
    style: {background: 'rgba(249, 168, 38, 1)'},
  },
  {
    title: "Everything You Need To Know About NFT's",
    image: R,
    description:
      'Event handlers are added via props to (built-in) components.piece in isolation',
    style: {background: 'rgba(255, 106, 0, 1)'},
  },
];

function App() {
  return (
    <div>
      <Head/>
      <ul id="concepts">
        <Cards url={concepts[0].image} header={concepts[0].title} desc={concepts[0].description} style={concepts[0].style}/>
        <Cards url={concepts[1].image} header={concepts[1].title} desc={concepts[1].description} style={concepts[1].style}/>
        <Cards url={concepts[2].image} header={concepts[2].title} desc={concepts[2].description} style={concepts[2].style}/>
      </ul>
    </div>
  );
}

export default App;
