import type { Locale } from './site';

const sharedEvents = {
  es: [
    { number: '01', name: 'Moros y Cristianos', short: 'Nuestra especialidad', text: 'Entradas, pasacalles, dianas y jornadas de convivencia con repertorio festero y energía hasta el último compás.', color: 'cyan' },
    { number: '02', name: 'Despedidas', short: 'La sorpresa que nadie olvida', text: 'Apariciones sorpresa, pasacalles y canciones para convertir el plan del grupo en una historia que contar.', color: 'pink' },
    { number: '03', name: 'Bodas', short: 'Del cóctel al baile', text: 'Recibimiento, cóctel, entrada o fiesta. Diseñamos el momento para que invitados de todas las edades entren en acción.', color: 'yellow' },
    { number: '04', name: 'Fallas', short: 'Música entre pólvora y calle', text: 'Pasacalles, despertàs y ambiente de casal con una formación que entiende el ritmo y los tiempos de la fiesta.', color: 'coral' },
    { number: '05', name: 'Hogueras', short: 'Alacant en modo fiesta', text: 'Racós, desfiles y recorridos por la calle con repertorio popular y una conexión constante con el público.', color: 'cyan' },
    { number: '06', name: 'Eventos privados', short: 'Tu celebración, a tu manera', text: 'Cumpleaños, empresas, asociaciones y cualquier buena excusa. Adaptamos duración, recorrido y repertorio.', color: 'pink' },
  ],
  va: [
    { number: '01', name: 'Moros i Cristians', short: 'La nostra especialitat', text: 'Entrades, passacarrers, dianes i jornades de convivència amb repertori fester i energia fins a l’últim compàs.', color: 'cyan' },
    { number: '02', name: 'Comiats', short: 'La sorpresa que ningú oblida', text: 'Aparicions sorpresa, passacarrers i cançons per a convertir el pla del grup en una història que contar.', color: 'pink' },
    { number: '03', name: 'Bodes', short: 'Del còctel al ball', text: 'Rebuda, còctel, entrada o festa. Dissenyem el moment perquè convidats de totes les edats entren en acció.', color: 'yellow' },
    { number: '04', name: 'Falles', short: 'Música entre pólvora i carrer', text: 'Passacarrers, despertades i ambient de casal amb una formació que entén el ritme i els temps de la festa.', color: 'coral' },
    { number: '05', name: 'Fogueres', short: 'Alacant en mode festa', text: 'Racós, desfilades i recorreguts pel carrer amb repertori popular i una connexió constant amb el públic.', color: 'cyan' },
    { number: '06', name: 'Esdeveniments privats', short: 'La teua celebració, a la teua manera', text: 'Aniversaris, empreses, associacions i qualsevol bona excusa. Adaptem duració, recorregut i repertori.', color: 'pink' },
  ],
} as const;

export const content = {
  es: {
    lang: 'es', locale: 'es_ES', path: '/', alternatePath: '/va/', languageName: 'Castellano',
    seo: {
      title: 'Charanga La Clandestina | Moros y Cristianos y eventos',
      description: 'Charanga especializada en Moros y Cristianos, bodas, despedidas, Fallas, Hogueras y eventos privados. Pide presupuesto por WhatsApp.',
    },
    nav: { start: 'Inicio', specialty: 'Especialidad', events: 'Eventos', gallery: 'En acción', contact: 'Contacto', budget: 'Pedir presupuesto', open: 'Abrir menú', close: 'Cerrar menú' },
    hero: {
      eyebrow: 'Charanga en directo · Comunitat Valenciana',
      titleStart: 'Donde aparece', titleAccent: 'La Clandestina,', titleEnd: 'empieza la fiesta.',
      text: 'Música en la calle, conexión con la gente y una energía que no se ensaya. Especialistas en Moros y Cristianos y preparados para cualquier celebración.',
      cta: 'Cuéntanos tu evento', secondary: 'Ver cómo suena', mediaLabel: 'En plena fiesta', mediaCaption: 'La calle es nuestro escenario', photoAlt: 'La Clandestina actuando en directo',
      ticker: ['Moros y Cristianos', 'Bodas', 'Despedidas', 'Fallas', 'Hogueras', 'Eventos privados'],
    },
    about: {
      eyebrow: 'Esto es La Clandestina', title: 'No tocamos delante del público. Tocamos con él.',
      lead: 'Somos una charanga festiva, versátil y profesional. Sabemos cuándo hay que desatar la calle y cuándo toca cumplir cada minuto del programa.',
      text: 'Llegamos preparados, coordinamos cada detalle y adaptamos el repertorio al momento. Porque una actuación memorable empieza mucho antes de la primera nota.',
      stamp: 'Directo · Calle · Fiesta',
    },
    specialty: {
      eyebrow: 'Nuestra especialidad', title: 'Moros y Cristianos se viven desde dentro.',
      text: 'Conocemos el pulso de la fiesta: la emoción de una entrada, el ambiente de la filà y esas horas en las que la música hace que todo el mundo avance unido. Nos adaptamos al acto, al recorrido y a cada comparsa con respeto por la tradición y actitud de sobra.',
      points: ['Entradas y pasacalles', 'Dianas y acompañamientos', 'Filaes, comparsas y cuartelillos'],
      cta: 'Consultar disponibilidad', photoAlt: 'La Clandestina actuando en Moros y Cristianos',
    },
    eventsIntro: { eyebrow: 'Dónde nos liamos', title: 'Una charanga. Seis maneras de cambiar el plan.', text: 'Cada evento pide una intensidad distinta. Nosotros ponemos la música, el ritmo y la forma de entrar en escena.' },
    events: sharedEvents.es,
    sound: {
      eyebrow: 'Nuestro sonido', title: 'Tradición en los metales. El presente en cada versión.',
      text: 'Pasodobles, marchas, mambo, pop, rock, música latina y los temas que están sonando ahora. Mezclamos generaciones para que nadie se quede mirando desde la barra.',
      tags: ['Pasodobles', 'Mambo', 'Pop', 'Rock', 'Latino', 'Éxitos actuales'], cta: 'Pídenos una canción',
    },
    gallery: { eyebrow: 'En acción', title: 'No te contamos la fiesta. Te la enseñamos.', text: 'Fotos y vídeos reales serán siempre nuestra mejor carta de presentación.', reel: 'Ver showreel', close: 'Cerrar galería', previous: 'Anterior', next: 'Siguiente' },
    trust: {
      eyebrow: 'Fiesta, pero bien organizada', title: 'Buen rollo en la calle. Seriedad antes de llegar.',
      items: [
        { title: 'Puntuales', text: 'Coordinamos horarios y llegamos con margen para que el programa siga su curso.' },
        { title: 'Adaptables', text: 'Ajustamos repertorio, recorrido y duración a las necesidades reales del evento.' },
        { title: 'Trato directo', text: 'Hablas con nosotros, sin intermediarios ni respuestas que dan vueltas.' },
      ],
    },
    contact: {
      eyebrow: 'Hablemos', title: 'Tu fecha puede ser nuestra próxima fiesta.', text: 'Completa los datos básicos y abriremos WhatsApp con el mensaje preparado. Sin formularios eternos ni esperas innecesarias.',
      name: 'Nombre', namePlaceholder: '¿Cómo te llamas?', date: 'Fecha del evento', location: 'Localidad', locationPlaceholder: '¿Dónde será?', event: 'Tipo de evento', choose: 'Selecciona una opción', duration: 'Duración aproximada', durationPlaceholder: 'Ej. 2 horas', message: 'Cuéntanos un poco más', messagePlaceholder: 'Horario, recorrido, número de personas o cualquier detalle útil...', submit: 'Pedir presupuesto por WhatsApp', required: 'Campo obligatorio', direct: '¿Prefieres ir al grano?', directCta: 'Abrir WhatsApp directamente', privacy: 'Los datos se utilizan únicamente para preparar tu consulta en WhatsApp.', greeting: 'Hola, soy', request: 'Quiero pedir presupuesto para La Clandestina.', noDate: 'Fecha por confirmar', noDuration: 'Duración por confirmar',
      eventTypes: ['Moros y Cristianos', 'Despedida', 'Boda', 'Fallas', 'Hogueras', 'Evento privado', 'Otro'],
    },
    footer: { line: 'Música en directo para fiestas que se recuerdan.', nav: 'Navegación', language: 'Idioma', contact: 'Contacto', rights: 'Todos los derechos reservados.', back: 'Volver arriba' },
  },
  va: {
    lang: 'ca', locale: 'ca_ES', path: '/va/', alternatePath: '/', languageName: 'Valencià',
    seo: {
      title: 'Xaranga La Clandestina | Moros i Cristians i esdeveniments',
      description: 'Xaranga especialitzada en Moros i Cristians, bodes, comiats, Falles, Fogueres i esdeveniments privats. Demana pressupost per WhatsApp.',
    },
    nav: { start: 'Inici', specialty: 'Especialitat', events: 'Esdeveniments', gallery: 'En acció', contact: 'Contacte', budget: 'Demanar pressupost', open: 'Obrir menú', close: 'Tancar menú' },
    hero: {
      eyebrow: 'Xaranga en directe · Comunitat Valenciana',
      titleStart: 'On apareix', titleAccent: 'La Clandestina,', titleEnd: 'comença la festa.',
      text: 'Música al carrer, connexió amb la gent i una energia que no s’assaja. Especialistes en Moros i Cristians i preparats per a qualsevol celebració.',
      cta: 'Conta’ns el teu esdeveniment', secondary: 'Vore com sona', mediaLabel: 'En plena festa', mediaCaption: 'El carrer és el nostre escenari', photoAlt: 'La Clandestina actuant en directe',
      ticker: ['Moros i Cristians', 'Bodes', 'Comiats', 'Falles', 'Fogueres', 'Esdeveniments privats'],
    },
    about: {
      eyebrow: 'Açò és La Clandestina', title: 'No toquem davant del públic. Toquem amb ell.',
      lead: 'Som una xaranga festiva, versàtil i professional. Sabem quan cal desfermar el carrer i quan toca complir cada minut del programa.',
      text: 'Arribem preparats, coordinem cada detall i adaptem el repertori al moment. Perquè una actuació memorable comença molt abans de la primera nota.',
      stamp: 'Directe · Carrer · Festa',
    },
    specialty: {
      eyebrow: 'La nostra especialitat', title: 'Els Moros i Cristians es viuen des de dins.',
      text: 'Coneixem el pols de la festa: l’emoció d’una entrada, l’ambient de la filà i eixes hores en què la música fa que tot el món avance unit. Ens adaptem a l’acte, al recorregut i a cada comparsa amb respecte per la tradició i actitud de sobra.',
      points: ['Entrades i passacarrers', 'Dianes i acompanyaments', 'Filaes, comparses i casernes'],
      cta: 'Consultar disponibilitat', photoAlt: 'La Clandestina actuant en Moros i Cristians',
    },
    eventsIntro: { eyebrow: 'On la muntem', title: 'Una xaranga. Sis maneres de canviar el pla.', text: 'Cada esdeveniment demana una intensitat diferent. Nosaltres posem la música, el ritme i la manera d’entrar en escena.' },
    events: sharedEvents.va,
    sound: {
      eyebrow: 'El nostre so', title: 'Tradició en els metalls. El present en cada versió.',
      text: 'Pasdobles, marxes, mambo, pop, rock, música llatina i els temes que sonen ara. Mesclem generacions perquè ningú es quede mirant des de la barra.',
      tags: ['Pasdobles', 'Mambo', 'Pop', 'Rock', 'Llatí', 'Èxits actuals'], cta: 'Demana’ns una cançó',
    },
    gallery: { eyebrow: 'En acció', title: 'No et contem la festa. Te l’ensenyem.', text: 'Les fotos i els vídeos reals seran sempre la nostra millor carta de presentació.', reel: 'Vore showreel', close: 'Tancar galeria', previous: 'Anterior', next: 'Següent' },
    trust: {
      eyebrow: 'Festa, però ben organitzada', title: 'Bon rotllo al carrer. Serietat abans d’arribar.',
      items: [
        { title: 'Puntuals', text: 'Coordinem horaris i arribem amb marge perquè el programa seguisca el seu curs.' },
        { title: 'Adaptables', text: 'Ajustem repertori, recorregut i duració a les necessitats reals de l’esdeveniment.' },
        { title: 'Tracte directe', text: 'Parles amb nosaltres, sense intermediaris ni respostes que donen voltes.' },
      ],
    },
    contact: {
      eyebrow: 'Parlem', title: 'La teua data pot ser la nostra pròxima festa.', text: 'Completa les dades bàsiques i obrirem WhatsApp amb el missatge preparat. Sense formularis eterns ni esperes innecessàries.',
      name: 'Nom', namePlaceholder: 'Com et dius?', date: 'Data de l’esdeveniment', location: 'Localitat', locationPlaceholder: 'On serà?', event: 'Tipus d’esdeveniment', choose: 'Selecciona una opció', duration: 'Duració aproximada', durationPlaceholder: 'Ex. 2 hores', message: 'Conta’ns un poc més', messagePlaceholder: 'Horari, recorregut, nombre de persones o qualsevol detall útil...', submit: 'Demanar pressupost per WhatsApp', required: 'Camp obligatori', direct: 'Preferixes anar al gra?', directCta: 'Obrir WhatsApp directament', privacy: 'Les dades s’utilitzen únicament per a preparar la teua consulta en WhatsApp.', greeting: 'Hola, soc', request: 'Vull demanar pressupost per a La Clandestina.', noDate: 'Data per confirmar', noDuration: 'Duració per confirmar',
      eventTypes: ['Moros i Cristians', 'Comiat', 'Boda', 'Falles', 'Fogueres', 'Esdeveniment privat', 'Altre'],
    },
    footer: { line: 'Música en directe per a festes que es recorden.', nav: 'Navegació', language: 'Idioma', contact: 'Contacte', rights: 'Tots els drets reservats.', back: 'Tornar a dalt' },
  },
} as const satisfies Record<Locale, object>;

export type SiteContent = typeof content.es | typeof content.va;
