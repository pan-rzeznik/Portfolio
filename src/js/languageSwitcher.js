const switcherPOL = document.querySelector('#pol');
const switcherENG = document.querySelector('#eng');
const language = {
  pol: {
    navAbout: 'O mnie',
    navProjects: 'Projekty',
    navGallery: 'Galeria',
    navContact: 'Kontakt',
    switcherDescription: 'Wybierz język:',
    heroTitle: 'frontend developer',
    heroTitle2: 'Angular',
    hereDescription: `Cześć, jestem Damian i zajmuje się projektowanie oraz programowaniem aplikacji webowych. Weekendami studiuję w Krakowie Informatykę i Ekonometrię na kierunku Programowanie aplikacji mobilnych i webowych. Przygotowuję się do pisania pracy inżynierskiej. <br><br>
    Obecnie tworzę cyfrową platformę dla bibliotek o nazwie Bookey, która umili pracę bibliotekarzom oraz ułatwi czytelnikom dostęp do książek.`,
    heroButton: 'Poznaj mnie',
    stackTitle: 'STACK <br> TECHNOLOGICZNY',
    stackDescription: `Na co dzień pracuję jako programista Angulara 8+ w krakowskiej firmie technologicznej. Zajmuje się również utrzymywaniem testów E2E, które piszę w oparciu o Puppeteer. Po pracy tworzę projekty na zlecenie lub na własny użytek. Jako Backend w swoich aplikacjach korzystam z usług jakie oferuje Firebase. <br><br>
    W najbliższym czasie planuję rozpoczęcie nauki NestJS by tworzyć własne Web API.`,
    stackButton: 'Zobacz projekty',
    projectsTitle: 'MOJE PROJEKTY',
    projectsDescription: `Projekty zaprezentowane poniżej powstały w procesie nauki różnych technologii. W każdym kolejnym chciałem wdrożyć nowe narzędzie czy pomysły na rozwiązanie problemu. Projekty są posegregowane chronologicznie od najnowszego po najstarszy, a obecnie skupiam się na rozwijaniu platformy cyfrowej dla bibliotek o nazwie Bookey.`,
    projectsGithubNone: 'Projekt bez możliwości podglądu kodu',
    projectsGithubButton: 'Zobacz na Github',
    projectsLivebButton: 'Zobacz na żywo',
    designTitle: 'UMIEJĘTNOŚCI <br> PROJEKTOWE',
    designDescription: `Dawniej, jeszcze w technikum zajmowałem się czysto hobbystycznie projektowaniem interfejsów gier mobilnych co z czasem przerodziło się w pracę zdalną nad dużym tytułem desktopowym dla firmy zajmującej się wydawnictwem gier. Był to pierwszy poważny kontrakt, nad którym wspólnie z moim kolegą spędziliśmy ponad rok. Obecnie nie zajmujęsię już tematyką gier ale umiejętności zdobyte wtedy wykorzystuje do projektowania aplikacji webowych. Interesuję się zagadnieniami z dziedziny UI/UX, w których się stale rozwijam.`,
    designButton: 'Idź do galerii',
    galleryTitle: 'MOJE PRACE',
    galleryDescription: `Galeria poniżej przedstawia część z moich autorskich projektów jakie
        wykonałem do tej pory na potrzeby naszych aplikacji, które były firmowane logiem Nevadro Apps.
        Cześć z nich nie było wykorzystywane w produktach, a tylko na naszych kanałach społecznościowych
        lub są to prace, które wykonywałem w wolnych chwilach.`,
    galleryCategories: 'Wybierz kategorię:',
    galleryCategoriesDestop: 'Gra desktopowa',
    galleryCategoriesMobile: 'Gry mobilne',
    galleryCategoriesOthers: 'Pozostałe',
    contactTitle: 'Kontakt',
    contactDescription: `Jeżeli jesteś zainteresowany podjęcie współpracy ze mną, chciałbyś o coś zapytać bądź masz propozycję stałej pracy proszę o kontakt na wskazany adres email. Cv wraz z listami referencyjnymi będę
        przesyłał w korespondencji prywatnej.`,
    copyright:
      'Copyright ©. Wszystkie prawa zastrzeżone.  Ostatnia aktualizacja strony: Wrzesień 2020',
  },
  eng: {
    navAbout: 'About',
    navProjects: 'Projects',
    navGallery: 'Gallery',
    navContact: 'Contact',
    switcherDescription: 'Choose language:',
    heroTitle: 'frontend developer',
    heroTitle2: 'Angular',
    hereDescription: `Hi, my name is Damian and I design and develop web applications. During weekends I study Computer Science and Econometrics in Krakow, majoring in Mobile and Web Application Programming. I am preparing to write an engineering thesis. <br> <br>
    I am currently creating a digital platform for libraries called Bookey, which will make the work of librarians more pleasant and make it easier for readers to access books.`,
    heroButton: 'About me',
    stackTitle: 'TECHNOLOGICAL <br> STACK',
    stackDescription: `
    On a daily basis I work as an Angular 8+ programmer in a Krakow technology company. I also maintain the E2E tests which I write based on Puppeteer. After work, I create projects on request or for my own use. As a Backend in my applications, I use the services offered by Firebase. <br> <br>
    In the near future, I plan to start learning NestJS to create my own Web API.`,
    stackButton: 'See projects',
    projectsTitle: 'MY PROJECTS',
    projectsDescription: `The projects presented below were created in the process of learning various technologies. In each of them, I wanted to implement a new tool or ideas for solving the problem. Projects are sorted chronologically from newest to oldest, and I'm currently focusing on developing a digital platform for libraries called Bookey.`,
    projectsGithubNone: 'Project without code preview',
    projectsGithubButton: 'See on Github',
    projectsLivebButton: 'See live',
    designTitle: 'DESIGN <br> SKILLS',
    designDescription: `
    In the past, when I was still in a technical college, I was involved in designing interfaces for mobile games as a hobby, which over time turned into remote work on a large desktop title for a game publishing company. It was the first serious contract that we spent over a year on with my friend. Currently, I do not deal with the subject of games anymore, but the skills gained then are used to design web applications. I am interested in UI / UX issues in which I am constantly developing.`,
    designButton: 'Go to the gallery',
    galleryTitle: 'MY WORKS',
    galleryDescription: `
        The gallery below shows some of my original projects
        I have made so far for the needs of our applications, which were branded with the Nevadro Apps logo.
        Some of them were not used in products, but only on our social channels or these are works that I did in my free time.
        `,
    galleryCategories: 'Choose a category:',
    galleryCategoriesDestop: 'Desktop game',
    galleryCategoriesMobile: 'Mobile games',
    galleryCategoriesOthers: 'Others',
    contactTitle: 'Contact',
    contactDescription: `If you are interested in cooperating with me, would you like to ask something or have a permanent job offer, please contact me at the email address provided. I will send my CV and reference letters in private correspondence.`,
    copyright:
      'Copyright ©. All rights reserved. Page last updated: September 2020',
  },
};
const sockets = document.querySelectorAll('[data-text]');

const translate = lang => {
  const selectedLanguage = language[lang];
  sockets.forEach(s => {
    s.innerHTML = selectedLanguage[s.dataset.text];
  });
};

switcherPOL.addEventListener('change', e => {
  translate(e.target.id);
});

switcherENG.addEventListener('change', e => {
  translate(e.target.id);
});

document.addEventListener('DOMContentLoaded', () => {
  const browserLanguage = window.navigator.language;
  if (browserLanguage !== 'pl-PL') {
    translate('eng');
  }
});
