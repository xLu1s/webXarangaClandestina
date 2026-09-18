import fotoHero from '../images/FotoHero.webp?url';
import morosYCristianos from '../images/MorosYCristianos.webp?url';
import entradaCocentaina from '../videos/EntradaCocentaina.mp4?url';
import entradaMora from '../videos/EntradaMora.mp4?url';
import pasacarrer from '../videos/Pasacarrer.mp4?url';
import percu from '../videos/Percu.mp4?url';
import dinar from '../videos/Dinar.mp4?url';
import despedida from '../videos/Despedida.mp4?url';
import entradaCocentainaPoster from '../images/EntradaCocentainaPoster.webp?url';
import entradaMoraPoster from '../images/EntradaMoraPoster.webp?url';
import pasacarrerPoster from '../images/PasacarrerPoster.webp?url';
import percuPoster from '../images/PercuPoster.webp?url';
import dinarPoster from '../images/DinarPoster.webp?url';
import despedidaPoster from '../images/DespedidaPoster.webp?url';

// Replace these imports or edit paths here to update the featured media.
export const media = {
  hero: { image: fotoHero },
  specialty: morosYCristianos,
  gallery: [
    {
      type: 'video',
      src: entradaCocentaina,
      poster: entradaCocentainaPoster,
      altEs: 'Entrada festera de La Clandestina en Cocentaina',
      altVa: 'Entrada festera de La Clandestina a Cocentaina',
    },
    {
      type: 'video',
      src: pasacarrer,
      poster: pasacarrerPoster,
      altEs: 'La Clandestina tocando durante un pasacalle',
      altVa: 'La Clandestina tocant durant un passacarrer',
    },
    {
      type: 'video',
      src: percu,
      poster: percuPoster,
      altEs: 'Percusión de La Clandestina durante las fiestas',
      altVa: 'Percussió de La Clandestina durant les festes',
    },
    {
      type: 'video',
      src: entradaMora,
      poster: entradaMoraPoster,
      altEs: 'La Clandestina participando en una entrada mora',
      altVa: 'La Clandestina participant en una entrada mora',
    },
    {
      type: 'video',
      src: dinar,
      poster: dinarPoster,
      altEs: 'La Clandestina animando una comida festera',
      altVa: 'La Clandestina animant un dinar fester',
    },
    {
      type: 'video',
      src: despedida,
      poster: despedidaPoster,
      altEs: 'La Clandestina actuando en una despedida',
      altVa: 'La Clandestina actuant en un comiat',
    },
  ],
} as const;
