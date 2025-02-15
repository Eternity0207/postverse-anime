import './PosterPage.css';
import React from 'react';
import img1 from '../../assets/image1.png';
import img2 from '../../assets/image2.png';
import img3 from '../../assets/image3.png';
import img4 from '../../assets/image4.png';
import img5 from '../../assets/image5.png';
import img6 from '../../assets/image6.png';
import img7 from '../../assets/image7.png';
import img8 from '../../assets/image8.png';
import img9 from '../../assets/image9.png';
import img10 from '../../assets/image10.png';
import img11 from '../../assets/image11.png';
import img12 from '../../assets/image12.png';
import img13 from '../../assets/image13.png';
import img14 from '../../assets/image14.png';
import img15 from '../../assets/image15.png';
import img16 from '../../assets/image16.png';
import img17 from '../../assets/image17.png';
import img18 from '../../assets/image18.png';
import img19 from '../../assets/image19.png';
import img20 from '../../assets/image20.png';
import img21 from '../../assets/image21.png';
import img22 from '../../assets/image22.png';
import img23 from '../../assets/image23.png';
import img24 from '../../assets/image24.png';
import img25 from '../../assets/image25.png';
import img26 from '../../assets/image26.png';
import img27 from '../../assets/image27.png';
import img28 from '../../assets/image28.png';
import img29 from '../../assets/image29.png';
import img30 from '../../assets/image30.png';
import img31 from '../../assets/image31.png';
import img32 from '../../assets/image32.png';
import img33 from '../../assets/image33.png';
import img34 from '../../assets/image34.png';
import img35 from '../../assets/image35.png';
import img36 from '../../assets/image36.png';
import img37 from '../../assets/image37.png';
import img38 from '../../assets/image38.png';
import img39 from '../../assets/image39.png';
import img40 from '../../assets/image40.png';
import img41 from '../../assets/image41.png';
import img42 from '../../assets/image42.png';
import img43 from '../../assets/image43.png';
import img44 from '../../assets/image44.png';
import img45 from '../../assets/image45.png';
import img46 from '../../assets/image46.png';
import img47 from '../../assets/image47.png';
import img48 from '../../assets/image48.png';
import img49 from '../../assets/image49.png';
import img50 from '../../assets/image50.png';
import img51 from '../../assets/image51.png';
import img52 from '../../assets/image52.png';
import img53 from '../../assets/image53.png';
import img54 from '../../assets/image54.png';
import img55 from '../../assets/image55.png';
import img56 from '../../assets/image56.png';
import img57 from '../../assets/image57.png';
import img58 from '../../assets/image58.png';
import img59 from '../../assets/image59.png';
import img60 from '../../assets/image60.png';
import img61 from '../../assets/image61.png';
import img62 from '../../assets/image62.png';
import img63 from '../../assets/image63.png';
import img64 from '../../assets/image64.png';
import img65 from '../../assets/image65.png';
import img66 from '../../assets/image66.png';
import img67 from '../../assets/image67.png';
import img68 from '../../assets/image68.png';
import img69 from '../../assets/image69.png';
import img70 from '../../assets/image70.png';
import img71 from '../../assets/image71.png';
import img72 from '../../assets/image72.png';
import img73 from '../../assets/image73.png';
import img74 from '../../assets/image74.png';
import img75 from '../../assets/image75.png';
import img76 from '../../assets/image76.png';
import img77 from '../../assets/image77.png';
import img78 from '../../assets/image78.png';
import img79 from '../../assets/image79.png';
import img80 from '../../assets/image80.png';
import img81 from '../../assets/image81.png';
import img82 from '../../assets/image82.png';
import img83 from '../../assets/image83.png';
import img84 from '../../assets/image84.png';
import img85 from '../../assets/image85.png';
import img86 from '../../assets/image86.png';
import img87 from '../../assets/image87.png';

const posters = [
  {
    id: 1,
    image: img1,
    description: 'Poster 1',
  },
  {
    id: 2,
    image: img2,
    description: 'Poster 2',
  },
  {
    id: 3,
    image: img3,
    description: 'Poster 3',
  },
  {
    id: 4,
    image: img4,
    description: 'Poster 4',
  },
  {
    id: 5,
    image: img5,
    description: 'Poster 5',
  },
  {
    id: 6,
    image: img6,
    description: 'Poster 6',
  },
  {
    id: 7,
    image: img7,
    description: 'Poster 7',
  },
  {
    id: 8,
    image: img8,
    description: 'Poster 8',
  },
  {
    id: 9,
    image: img9,
    description: 'Poster 9',
  },
  {
    id: 10,
    image: img10,
    description: 'Poster 10',
  },
  {
    id: 11,
    image: img11,
    description: 'Poster 11',
  },
  {
    id: 12,
    image: img12,
    description: 'Poster 12',
  },
  {
    id: 13,
    image: img13,
    description: 'Poster 13',
  },
  {
    id: 14,
    image: img14,
    description: 'Poster 14',
  },
  {
    id: 15,
    image: img15,
    description: 'Poster 15',
  },
  {
    id: 16,
    image: img16,
    description: 'Poster 16',
  },
  {
    id: 17,
    image: img17,
    description: 'Poster 17',
  },
  {
    id: 18,
    image: img18,
    description: 'Poster 18',
  },
  {
    id: 19,
    image: img19,
    description: 'Poster 19',
  },
  {
    id: 20,
    image: img20,
    description: 'Poster 20',
  },
  {
    id: 21,
    image: img21,
    description: 'Poster 21',
  },
  {
    id: 22,
    image: img22,
    description: 'Poster 22',
  },
  {
    id: 23,
    image: img23,
    description: 'Poster 23',
  },
  {
    id: 24,
    image: img24,
    description: 'Poster 24',
  },
  {
    id: 25,
    image: img25,
    description: 'Poster 25',
  },
  {
    id: 26,
    image: img26,
    description: 'Poster 26',
  },
  {
    id: 27,
    image: img27,
    description: 'Poster 27',
  },
  {
    id: 28,
    image: img28,
    description: 'Poster 28',
  },
  {
    id: 29,
    image: img29,
    description: 'Poster 29',
  },
  {
    id: 30,
    image: img30,
    description: 'Poster 30',
  },
  {
    id: 31,
    image: img31,
    description: 'Poster 31',
  },
  {
    id: 32,
    image: img32,
    description: 'Poster 32',
  },
  {
    id: 33,
    image: img33,
    description: 'Poster 33',
  },
  {
    id: 34,
    image: img34,
    description: 'Poster 34',
  },
  {
    id: 35,
    image: img35,
    description: 'Poster 35',
  },
  {
    id: 36,
    image: img36,
    description: 'Poster 36',
  },
  {
    id: 37,
    image: img37,
    description: 'Poster 37',
  },
  {
    id: 38,
    image: img38,
    description: 'Poster 38',
  },
  {
    id: 39,
    image: img39,
    description: 'Poster 39',
  },
  {
    id: 40,
    image: img40,
    description: 'Poster 40',
  },
  {
    id: 41,
    image: img41,
    description: 'Poster 41',
  },
  {
    id: 42,
    image: img42,
    description: 'Poster 42',
  },
  {
    id: 43,
    image: img43,
    description: 'Poster 43',
  },
  {
    id: 44,
    image: img44,
    description: 'Poster 44',
  },
  {
    id: 45,
    image: img45,
    description: 'Poster 45',
  },
  {
    id: 46,
    image: img46,
    description: 'Poster 46',
  },
  {
    id: 47,
    image: img47,
    description: 'Poster 47',
  },
  {
    id: 48,
    image: img48,
    description: 'Poster 48',
  },
  {
    id: 49,
    image: img49,
    description: 'Poster 49',
  },
  {
    id: 50,
    image: img50,
    description: 'Poster 50',
  },
  {
    id: 51,
    image: img51,
    description: 'Poster 51',
  },
  {
    id: 52,
    image: img52,
    description: 'Poster 52',
  },
  {
    id: 53,
    image: img53,
    description: 'Poster 53',
  },
  {
    id: 54,
    image: img54,
    description: 'Poster 54',
  },
  {
    id: 55,
    image: img55,
    description: 'Poster 55',
  },
  {
    id: 56,
    image: img56,
    description: 'Poster 56',
  },
  {
    id: 57,
    image: img57,
    description: 'Poster 57',
  },
  {
    id: 58,
    image: img58,
    description: 'Poster 58',
  },
  {
    id: 59,
    image: img59,
    description: 'Poster 59',
  },
  {
    id: 60,
    image: img60,
    description: 'Poster 60',
  },
  {
    id: 61,
    image: img61,
    description: 'Poster 61',
  },
  {
    id: 62,
    image: img62,
    description: 'Poster 62',
  },
  {
    id: 63,
    image: img63,
    description: 'Poster 63',
  },
  {
    id: 64,
    image: img64,
    description: 'Poster 64',
  },
  {
    id: 65,
    image: img65,
    description: 'Poster 65',
  },
  {
    id: 66,
    image: img66,
    description: 'Poster 66',
  },
  {
    id: 67,
    image: img67,
    description: 'Poster 67',
  },
  {
    id: 68,
    image: img68,
    description: 'Poster 68',
  },
  {
    id: 69,
    image: img69,
    description: 'Poster 69',
  },
  {
    id: 70,
    image: img70,
    description: 'Poster 70',
  },
  {
    id: 71,
    image: img71,
    description: 'Poster 71',
  },
  {
    id: 72,
    image: img72,
    description: 'Poster 72',
  },
  {
    id: 73,
    image: img73,
    description: 'Poster 73',
  },
  {
    id: 74,
    image: img74,
    description: 'Poster 74',
  },
  {
    id: 75,
    image: img75,
    description: 'Poster 75',
  },
  {
    id: 76,
    image: img76,
    description: 'Poster 76',
  },
  {
    id: 77,
    image: img77,
    description: 'Poster 77',
  },
  {
    id: 78,
    image: img78,
    description: 'Poster 78',
  },
  {
    id: 79,
    image: img79,
    description: 'Poster 79',
  },
  {
    id: 80,
    image: img80,
    description: 'Poster 80',
  },
  {
    id: 81,
    image: img81,
    description: 'Poster 81',
  },
  {
    id: 82,
    image: img82,
    description: 'Poster 82',
  },
  {
    id: 83,
    image: img83,
    description: 'Poster 83',
  },
  {
    id: 84,
    image: img84,
    description: 'Poster 84',
  },
  {
    id: 85,
    image: img85,
    description: 'Poster 85',
  },
  {
    id: 86,
    image: img86,
    description: 'Poster 86',
  },
  {
    id: 87,
    image: img87,
    description: 'Poster 87',
  },
];

export default function PosterPage() {
  return (
    <div className="poster-page">
      {posters.map((poster) => (
        <div key={poster.id} className="poster-card">
          <img src={poster.image} alt={`Poster ${poster.id}`} className="poster-image" />
          <div className="poster-text">
            <p>{poster.id}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
