import { pendingMarkers } from './pending';
import type { Locale } from './site';

export const landingIds = ['moros', 'zone'] as const;
export type LandingId = (typeof landingIds)[number];

export interface LandingCopy {
  seo: { title: string; description: string };
  /** Queries this URL is written for. Not printed as a meta keywords tag. */
  keywords: readonly string[];
  h1: { titleStart: string; titleAccent: string; titleEnd: string };
  eyebrow: string;
  intro: string;
  kicker: string;
  caption: string;
  photoAlt: string;
  crumb: string;
  about: { eyebrow: string; title: string; paragraphs: readonly string[] };
  list: {
    eyebrow: string;
    title: string;
    text: string;
    rows: readonly { number: string; name: string; text: string; color: 'cyan' | 'pink' | 'yellow' | 'coral' }[];
  };
  notes: readonly string[];
  aside: { eyebrow: string; title: string; paragraphs: readonly string[]; linkLabel: string };
  faqs: readonly { question: string; answer: string }[];
}

const morosEs: LandingCopy = {
  seo: {
    title: 'Charanga para Moros y Cristianos | Xaranga de Alcoy',
    description:
      'Xaranga y charanga La Clandestina, de Alcoy, para entradas, pasacalles y dianas de Moros y Cristianos en Alicante y en el sur de Valencia. Web informativa.',
  },
  keywords: [
    'xaranga moros y cristianos',
    'charanga moros y cristianos',
    'charanga fiestas moros y cristianos Alicante',
    'moros y cristianos Alcoy',
    'xaranga Alcoy',
  ],
  h1: {
    titleStart: 'Charanga para',
    titleAccent: 'Moros y Cristianos,',
    titleEnd: 'desde Alcoy.',
  },
  eyebrow: 'Especialidad · Alcoy',
  intro:
    'La Clandestina es la xaranga de Alcoy (Alcoi). Los Moros y Cristianos son su especialidad: la emoción de una entrada, el ambiente de la filà y las horas en las que la música hace que todo el mundo avance unido. Esta página explica la fiesta y el encaje del grupo. No es una tienda ni admite reservas en línea.',
  kicker: 'M&C',
  caption: 'Entradas, pasacalles y dianas',
  photoAlt: 'La Clandestina actuando en Moros y Cristianos',
  crumb: 'Moros y Cristianos',
  about: {
    eyebrow: 'La fiesta, acto a acto',
    title: 'Entrada, pasacalle y diana.',
    paragraphs: [
      'En los Moros y Cristianos la calle se ordena por actos. La entrada es el desfile grande, con bando cristiano y bando moro. El pasacalle mueve a la filà entre el cuartelillo y la calle. La diana abre la mañana. Hay filaes, comparsas y cuartelillos, y cada comparsa lleva su ritmo.',
      'La web de La Clandestina ya lo resume así: el grupo se adapta al acto, al recorrido y a cada comparsa, con respeto por la tradición. El repertorio festero que publica son pasodobles y marchas, junto al resto de su sonido de charanga.',
      'Quien busca una xaranga de Moros y Cristianos, una charanga de Moros y Cristianos o una charanga para las fiestas de Moros y Cristianos de Alicante está buscando ese papel: música de calle, en directo, al paso de la fiesta. La Clandestina es de Alcoy, la ciudad que marca el modelo de estas fiestas en la comarca.',
    ],
  },
  list: {
    eyebrow: 'Alcoy y otros pueblos',
    title: 'Dónde se celebra la fiesta.',
    text: 'Alcoy es la casa del grupo. La misma tradición se vive en otros pueblos de la provincia de Alicante y del sur de Valencia. La lista describe la fiesta. No es una agenda de actuaciones de La Clandestina.',
    rows: [
      {
        number: '01',
        name: 'Alcoy',
        text: 'Sede de La Clandestina. Fiestas de Moros y Cristianos en honor a Sant Jordi, declaradas de Interés Turístico Internacional. La trilogía gira en torno al 23 de abril: entradas, el día del patrón y el alardo.',
        color: 'cyan',
      },
      {
        number: '02',
        name: 'Cocentaina',
        text: 'La galería de esta web muestra una entrada festera de La Clandestina en Cocentaina. El pueblo, en el Comtat, celebra sus Moros y Cristianos en agosto.',
        color: 'pink',
      },
      {
        number: '03',
        name: 'Banyeres, Muro e Ibi',
        text: 'Banyeres de Mariola, Muro de Alcoy e Ibi son pueblos vecinos, del Alcoià y el Comtat, con fiesta propia de filaes y entradas. Están en el mapa de la fiesta, no en una lista de bolos.',
        color: 'yellow',
      },
      {
        number: '04',
        name: 'Villena, Elda y Petrer',
        text: 'En el Vinalopó las fiestas son de las más conocidas de la provincia de Alicante. La música de calle acompaña a los bandos. La Clandestina no publica aquí en cuáles ha estado.',
        color: 'coral',
      },
      {
        number: '05',
        name: 'La Vila y Crevillent',
        text: 'Villajoyosa y Crevillent son otras citas conocidas de la provincia, cada una con su manera de sacar los bandos a la calle. Sirven para entender el mapa, no como historial del grupo.',
        color: 'cyan',
      },
      {
        number: '06',
        name: 'El sur de Valencia',
        text: 'Ontinyent, Bocairent y l’Olleria, al sur de la provincia de Valencia, también viven la fiesta con filà, entrada y pasacalle. Bocairent y Ontinyent son de las más antiguas de esa zona.',
        color: 'pink',
      },
    ],
  },
  notes: [pendingMarkers.playedTowns],
  aside: {
    eyebrow: 'También en la provincia',
    title: 'De Alcoy hacia Alicante y Valencia.',
    paragraphs: [
      'La charanga sale de Alcoy. La zona que la web describe es Alcoi, la Comunitat Valenciana y alrededores: la provincia de Alicante, la de Valencia y lo que haya justo alrededor.',
      'Hogueras, Fallas, bodas y despedidas se nombran en la portada. No tienen página propia. El eje de La Clandestina, el que esta página desarrolla, son los Moros y Cristianos.',
    ],
    linkLabel: 'Charanga en Alicante y Valencia',
  },
  faqs: [
    {
      question: '¿De dónde es la xaranga La Clandestina?',
      answer: 'De Alcoy (Alcoi), en la provincia de Alicante. En valenciano el nombre del grupo y de la ciudad se escriben igual: xaranga d’Alcoi.',
    },
    {
      question: '¿Qué actos de Moros y Cristianos recoge la web?',
      answer:
        'Entradas, pasacalles, dianas y el acompañamiento de filaes, comparsas y cuartelillos. Es el texto de la propia especialidad del grupo, no un programa cerrado de un año concreto.',
    },
    {
      question: '¿En qué pueblos ha tocado?',
      answer:
        'La sede es Alcoy y la galería muestra una entrada festera en Cocentaina. El resto de pueblos y comparsas no está publicado: hay un marcador visible en esta página.',
    },
    {
      question: '¿Es una banda de música o una charanga?',
      answer:
        'La web la llama charanga y xaranga: metales y percusión en la calle, con pasodobles, marchas y otros estilos. Quien busca una banda de música para estas fiestas suele referirse a ese papel, no a una banda sinfónica de atril.',
    },
    {
      question: '¿Cómo se pide información?',
      answer:
        'El teléfono, WhatsApp e Instagram están juntos en el bloque de contacto de esta página. La web es informativa: no hay compra ni reserva en línea.',
    },
  ],
};

const morosVa: LandingCopy = {
  seo: {
    title: 'Xaranga per a Moros i Cristians | La Clandestina d’Alcoi',
    description:
      'Xaranga La Clandestina, d’Alcoi, per a entrades, passacarrers i dianes de Moros i Cristians a Alacant i al sud de València. Web informativa.',
  },
  keywords: [
    'xaranga moros i cristians',
    'charanga moros y cristianos',
    'xaranga en Alcoi',
    'moros i cristians Alcoi',
    'festa de moros i cristians Alacant',
  ],
  h1: {
    titleStart: 'Xaranga per a',
    titleAccent: 'Moros i Cristians,',
    titleEnd: 'des d’Alcoi.',
  },
  eyebrow: 'Especialitat · Alcoi',
  intro:
    'La Clandestina és la xaranga d’Alcoi. Els Moros i Cristians són la seua especialitat: l’emoció d’una entrada, l’ambient de la filà i eixes hores en què la música fa que tot el món avance unit. Aquesta pàgina explica la festa i l’encaix del grup. No és una botiga ni admet reserves en línia.',
  kicker: 'M&C',
  caption: 'Entrades, passacarrers i dianes',
  photoAlt: 'La Clandestina actuant en Moros i Cristians',
  crumb: 'Moros i Cristians',
  about: {
    eyebrow: 'La festa, acte a acte',
    title: 'Entrada, passacarrer i diana.',
    paragraphs: [
      'En els Moros i Cristians el carrer s’ordena per actes. L’entrada és la desfilada gran, amb bàndol cristià i bàndol moro. El passacarrer mou la filà entre la caserna i el carrer. La diana obri el matí. Hi ha filaes, comparses i casernes, i cada comparsa porta el seu ritme.',
      'La web de La Clandestina ja ho resumeix així: el grup s’adapta a l’acte, al recorregut i a cada comparsa, amb respecte per la tradició. El repertori fester que publica són pasdobles i marxes, junt amb la resta del seu so de xaranga.',
      'Qui busca una xaranga de Moros i Cristians, o una charanga per a les festes de Moros i Cristians d’Alacant, busca eixe paper: música de carrer, en directe, al pas de la festa. La Clandestina és d’Alcoi, la ciutat que marca el model d’estes festes a la comarca.',
    ],
  },
  list: {
    eyebrow: 'Alcoi i altres pobles',
    title: 'On se celebra la festa.',
    text: 'Alcoi és la casa del grup. La mateixa tradició es viu en altres pobles de la província d’Alacant i del sud de València. La llista descriu la festa. No és una agenda d’actuacions de La Clandestina.',
    rows: [
      {
        number: '01',
        name: 'Alcoi',
        text: 'Seu de La Clandestina. Festes de Moros i Cristians en honor a Sant Jordi, declarades d’Interès Turístic Internacional. La trilogia gira al voltant del 23 d’abril: entrades, el dia del patró i l’alardo.',
        color: 'cyan',
      },
      {
        number: '02',
        name: 'Cocentaina',
        text: 'La galeria d’esta web mostra una entrada festera de La Clandestina a Cocentaina. El poble, al Comtat, celebra els seus Moros i Cristians a l’agost.',
        color: 'pink',
      },
      {
        number: '03',
        name: 'Banyeres, Muro i Ibi',
        text: 'Banyeres de Mariola, Muro d’Alcoi i Ibi són pobles veïns, de l’Alcoià i el Comtat, amb festa pròpia de filaes i entrades. Estan al mapa de la festa, no en una llista de bolos.',
        color: 'yellow',
      },
      {
        number: '04',
        name: 'Villena, Elda i Petrer',
        text: 'Al Vinalopó les festes són de les més conegudes de la província d’Alacant. La música de carrer acompanya els bàndols. La Clandestina no publica ací en quines ha estat.',
        color: 'coral',
      },
      {
        number: '05',
        name: 'La Vila i Crevillent',
        text: 'La Vila Joiosa i Crevillent són altres cites conegudes de la província, cadascuna amb la seua manera de traure els bàndols al carrer. Servixen per a entendre el mapa, no com a historial del grup.',
        color: 'cyan',
      },
      {
        number: '06',
        name: 'El sud de València',
        text: 'Ontinyent, Bocairent i l’Olleria, al sud de la província de València, també viuen la festa amb filà, entrada i passacarrer. Bocairent i Ontinyent són de les més antigues d’eixa zona.',
        color: 'pink',
      },
    ],
  },
  notes: [pendingMarkers.playedTowns],
  aside: {
    eyebrow: 'També a la província',
    title: 'D’Alcoi cap a Alacant i València.',
    paragraphs: [
      'La xaranga ix d’Alcoi. La zona que la web descriu és Alcoi, la Comunitat Valenciana i voltants: la província d’Alacant, la de València i el que hi haja just al voltant.',
      'Fogueres, Falles, bodes i comiats s’anomenen a la portada. No tenen pàgina pròpia. L’eix de La Clandestina, el que esta pàgina desenvolupa, són els Moros i Cristians.',
    ],
    linkLabel: 'Xaranga a Alacant i València',
  },
  faqs: [
    {
      question: 'D’on és la xaranga La Clandestina?',
      answer: 'D’Alcoi, a la província d’Alacant. El nom del grup i el de la ciutat es diuen igual: xaranga d’Alcoi.',
    },
    {
      question: 'Quins actes de Moros i Cristians recull la web?',
      answer:
        'Entrades, passacarrers, dianes i l’acompanyament de filaes, comparses i casernes. És el text de la pròpia especialitat del grup, no un programa tancat d’un any concret.',
    },
    {
      question: 'En quins pobles ha tocat?',
      answer:
        'La seu és Alcoi i la galeria mostra una entrada festera a Cocentaina. La resta de pobles i comparses no està publicada: hi ha un marcador visible en esta pàgina.',
    },
    {
      question: 'És una banda de música o una xaranga?',
      answer:
        'La web l’anomena charanga i xaranga: metalls i percussió al carrer, amb pasdobles, marxes i altres estils. Qui busca una banda de música per a estes festes sol referir-se a eixe paper, no a una banda simfònica de faristol.',
    },
    {
      question: 'Com es demana informació?',
      answer:
        'El telèfon, WhatsApp i Instagram estan junts al bloc de contacte d’esta pàgina. La web és informativa: no hi ha compra ni reserva en línia.',
    },
  ],
};

const zoneEs: LandingCopy = {
  seo: {
    title: 'Charanga Alicante y Valencia | Banda de música de Alcoy',
    description:
      'La Clandestina es la xaranga de Alcoy. Charanga y banda de música de calle para las provincias de Alicante y Valencia, y alrededores. Web informativa.',
  },
  keywords: [
    'banda de música Alicante',
    'banda de música Valencia',
    'charanga Alicante',
    'charanga Valencia',
    'xaranga Alicante',
    'xaranga Valencia',
    'charanga Alcoy',
  ],
  h1: {
    titleStart: 'Charanga y banda de música',
    titleAccent: 'de Alcoy,',
    titleEnd: 'en Alicante y Valencia.',
  },
  eyebrow: 'Zona de actuación · desde Alcoy',
  intro:
    'La Clandestina sale de Alcoy (Alcoi). En la web, la zona se resume como Alcoi, la Comunitat Valenciana y alrededores. Esta página separa la provincia de Alicante y la de Valencia, y aclara qué es el grupo para quien busca una charanga o una banda de música. No hay tienda ni reservas en línea.',
  kicker: 'Calle',
  caption: 'De Alcoy a las dos provincias',
  photoAlt: 'La Clandestina actuando en directo',
  crumb: 'Alicante y Valencia',
  about: {
    eyebrow: 'Charanga, xaranga, banda',
    title: 'No es una banda de atril.',
    paragraphs: [
      'Una banda de música de concierto y una charanga no son lo mismo. La Clandestina se presenta como charanga y xaranga: música en la calle, metales, percusión, pasodobles, marchas, mambo, pop, rock, latino y los temas que están sonando. Llega preparada, coordina el detalle y adapta el repertorio al momento.',
      'Muchas búsquedas de «banda de música Alicante» o «banda de música Valencia» piden exactamente ese papel festero, no una formación sentada. Esta página está escrita para esa búsqueda. No afirma que el grupo sea una banda sinfónica.',
      'Tampoco es un grupo con sede en la ciudad de Valencia ni en la de Alicante. Es de Alcoy, en el interior de la provincia de Alicante, y la zona publicada es la Comunitat Valenciana y alrededores.',
    ],
  },
  list: {
    eyebrow: 'Dos provincias',
    title: 'Alicante, Valencia y alrededores.',
    text: 'Cada bloque dice solo lo que la web ya sostiene, o marca el hueco cuando el dato no está. Hogueras y Fallas siguen en la portada, en segundo plano, sin página propia.',
    rows: [
      {
        number: '01',
        name: 'Provincia de Alicante',
        text: 'Es la provincia de casa. Alcoy está en el interior. La especialidad —Moros y Cristianos— se celebra en Alcoy y en otros pueblos de Alicante y del sur de Valencia. Charanga Alicante, en esta web, significa la xaranga de Alcoy que se mueve por esa provincia.',
        color: 'cyan',
      },
      {
        number: '02',
        name: 'Provincia de Valencia',
        text: 'Valencia no es la sede. El grupo es de Alcoy y la frase de zona incluye la Comunitat Valenciana, así que la provincia entra en esa descripción. No hay una lista de actuaciones en la ciudad de València. Charanga Valencia, aquí, es un desplazamiento, no una xaranga local de Fallas.',
        color: 'coral',
      },
      {
        number: '03',
        name: 'Alrededores',
        text: 'La frase original de la web añade «y alrededores» y no nombra municipios de fuera de Alicante y Valencia. Hasta que ese límite esté escrito, no se inventa una tercera provincia.',
        color: 'yellow',
      },
    ],
  },
  notes: [pendingMarkers.valenciaReach, pendingMarkers.surroundings],
  aside: {
    eyebrow: 'La especialidad',
    title: 'Moros y Cristianos, el centro.',
    paragraphs: [
      'Dentro de esta zona, lo que la portada trata como especialidad son los Moros y Cristianos: entradas, pasacalles, dianas, filaes, comparsas y cuartelillos. La página de esa fiesta recorre Alcoy y otros pueblos donde se celebra, sin convertirlos en un palmarés.',
      'Bodas, despedidas, eventos privados, Fallas y Hogueras siguen explicados en la portada. Esta URL no los duplica.',
    ],
    linkLabel: 'Charanga para Moros y Cristianos',
  },
  faqs: [
    {
      question: '¿La Clandestina es de Alicante o de Valencia?',
      answer:
        'De Alcoy, en la provincia de Alicante. No es un grupo con sede en la ciudad de Valencia ni en la ciudad de Alicante.',
    },
    {
      question: '¿Qué significa «banda de música» en esta página?',
      answer:
        'La forma en que mucha gente busca una charanga para la calle en Alicante o en Valencia. La Clandestina es una xaranga. No se presenta como banda sinfónica.',
    },
    {
      question: '¿Tocáis en la ciudad de Valencia?',
      answer:
        'La web dice que la zona es la Comunitat Valenciana y alrededores. No publica actuaciones en la ciudad de València ni el radio de desplazamiento: el hueco está marcado en esta página.',
    },
    {
      question: '¿Qué hay de las comarcas de alrededor?',
      answer:
        '«Alrededores» está en la frase de zona y no detalla pueblos de fuera de las dos provincias. Tampoco se inventan aquí.',
    },
    {
      question: '¿Dónde está el contacto?',
      answer:
        'El teléfono, WhatsApp e Instagram están en el único bloque de contacto de esta página. La web informa; no vende ni reserva en línea.',
    },
  ],
};

const zoneVa: LandingCopy = {
  seo: {
    title: 'Xaranga Alacant i València | Banda de música d’Alcoi',
    description:
      'La Clandestina és la xaranga d’Alcoi. Charanga i banda de música de carrer per a les províncies d’Alacant i València, i voltants. Web informativa.',
  },
  keywords: [
    'banda de música Alacant',
    'banda de música València',
    'xaranga Alacant',
    'xaranga València',
    'charanga Alicante',
    'charanga Valencia',
    'xaranga en Alcoi',
  ],
  h1: {
    titleStart: 'Xaranga i banda de música',
    titleAccent: 'd’Alcoi,',
    titleEnd: 'a Alacant i València.',
  },
  eyebrow: 'Zona d’actuació · des d’Alcoi',
  intro:
    'La Clandestina ix d’Alcoi. A la web, la zona es resumeix com Alcoi, la Comunitat Valenciana i voltants. Aquesta pàgina separa la província d’Alacant i la de València, i aclareix què és el grup per a qui busca una xaranga, una charanga o una banda de música. No hi ha botiga ni reserves en línia.',
  kicker: 'Carrer',
  caption: 'D’Alcoi a les dues províncies',
  photoAlt: 'La Clandestina actuant en directe',
  crumb: 'Alacant i València',
  about: {
    eyebrow: 'Xaranga, charanga, banda',
    title: 'No és una banda de faristol.',
    paragraphs: [
      'Una banda de música de concert i una xaranga no són el mateix. La Clandestina es presenta com a charanga i xaranga: música al carrer, metalls, percussió, pasdobles, marxes, mambo, pop, rock, llatí i els temes que sonen ara. Arriba preparada, coordina el detall i adapta el repertori al moment.',
      'Moltes cerques de «banda de música Alacant» o «banda de música València» demanen exactament eixe paper fester, no una formació asseguda. Aquesta pàgina està escrita per a eixa cerca. No afirma que el grup siga una banda simfònica.',
      'Tampoc és un grup amb seu a la ciutat de València ni a la d’Alacant. És d’Alcoi, a l’interior de la província d’Alacant, i la zona publicada és la Comunitat Valenciana i voltants.',
    ],
  },
  list: {
    eyebrow: 'Dues províncies',
    title: 'Alacant, València i voltants.',
    text: 'Cada bloc diu només el que la web ja sosté, o marca el buit quan la dada no hi és. Fogueres i Falles continuen a la portada, en segon pla, sense pàgina pròpia.',
    rows: [
      {
        number: '01',
        name: 'Província d’Alacant',
        text: 'És la província de casa. Alcoi és a l’interior. L’especialitat —Moros i Cristians— se celebra a Alcoi i en altres pobles d’Alacant i del sud de València. Xaranga a Alacant, en esta web, vol dir la xaranga d’Alcoi que es mou per eixa província.',
        color: 'cyan',
      },
      {
        number: '02',
        name: 'Província de València',
        text: 'València no és la seu. El grup és d’Alcoi i la frase de zona inclou la Comunitat Valenciana, així que la província entra en eixa descripció. No hi ha una llista d’actuacions a la ciutat de València. Xaranga a València, ací, és un desplaçament, no una xaranga local de Falles.',
        color: 'coral',
      },
      {
        number: '03',
        name: 'Voltants',
        text: 'La frase original de la web afig «i voltants» i no anomena municipis de fora d’Alacant i València. Fins que eixe límit estiga escrit, no s’inventa una tercera província.',
        color: 'yellow',
      },
    ],
  },
  notes: [pendingMarkers.valenciaReach, pendingMarkers.surroundings],
  aside: {
    eyebrow: 'L’especialitat',
    title: 'Moros i Cristians, el centre.',
    paragraphs: [
      'Dins d’esta zona, el que la portada tracta com a especialitat són els Moros i Cristians: entrades, passacarrers, dianes, filaes, comparses i casernes. La pàgina d’eixa festa recorre Alcoi i altres pobles on se celebra, sense convertir-los en un palmarés.',
      'Bodes, comiats, esdeveniments privats, Falles i Fogueres continuen explicats a la portada. Esta URL no els duplica.',
    ],
    linkLabel: 'Xaranga per a Moros i Cristians',
  },
  faqs: [
    {
      question: 'La Clandestina és d’Alacant o de València?',
      answer:
        'D’Alcoi, a la província d’Alacant. No és un grup amb seu a la ciutat de València ni a la ciutat d’Alacant.',
    },
    {
      question: 'Què vol dir «banda de música» en esta pàgina?',
      answer:
        'La forma en què molta gent busca una xaranga per al carrer a Alacant o a València. La Clandestina és una xaranga. No es presenta com a banda simfònica.',
    },
    {
      question: 'Toqueu a la ciutat de València?',
      answer:
        'La web diu que la zona és la Comunitat Valenciana i voltants. No publica actuacions a la ciutat de València ni el radi de desplaçament: el buit està marcat en esta pàgina.',
    },
    {
      question: 'Què hi ha de les comarques del voltant?',
      answer:
        '«Voltants» està a la frase de zona i no detalla pobles de fora de les dues províncies. Tampoc s’inventen ací.',
    },
    {
      question: 'On està el contacte?',
      answer:
        'El telèfon, WhatsApp i Instagram estan a l’únic bloc de contacte d’esta pàgina. La web informa; no ven ni reserva en línia.',
    },
  ],
};

export const landings: Record<LandingId, Record<Locale, LandingCopy>> = {
  moros: { es: morosEs, va: morosVa },
  zone: { es: zoneEs, va: zoneVa },
};

export const landingH1 = (copy: LandingCopy) =>
  `${copy.h1.titleStart} ${copy.h1.titleAccent} ${copy.h1.titleEnd}`.replace(/\s+/g, ' ').trim();

export const landingPlainText = (copy: LandingCopy) =>
  [
    copy.seo.title,
    copy.seo.description,
    landingH1(copy),
    copy.intro,
    copy.about.title,
    ...copy.about.paragraphs,
    copy.list.title,
    copy.list.text,
    ...copy.list.rows.flatMap((row) => [row.name, row.text]),
    ...copy.notes,
    copy.aside.title,
    ...copy.aside.paragraphs,
    ...copy.faqs.flatMap((faq) => [faq.question, faq.answer]),
  ].join('\n');
