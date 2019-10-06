const switcherPOL = document.querySelector('#pol');
const switcherENG = document.querySelector('#eng');
const language = {
    pol: {
        navAbout: 'O mnie',
        navProjects: 'Projekty',
        navGallery: 'Galeria',
        navContact: 'Kontakt',
        heroTitle: 'frontend developer',
        heroTitle2: 'junior',
        hereDescription: `Mam na imię Damian i zajmuje się
        tworzeniem aplikacji webowych.
        Weekendami studiuje w Krakowie Informatykę i Ekonometrię na 3 roku.
        Obecnie poszukuje pracy.`,
        heroButton: 'Poznaj mnie',
        stackTitle: 'STACK <br> TECHNOLOGICZNY',
        stackDescription: `Na co dzień głównie skupiam się na pisaniu aplikacji przy pomocy
        Angulara 6+.
        W przyszłości chciałbym dołączyć do zespołu,
        który pozwoli mi w pełni rozwinąć skrzydła w tej technologii.
        Jako backend w swoich projektach korzystam z usług jakie oferuje Firebase. Jestem otwarty na
        inne technologie typu React lub Vue.`,
        stackButton: 'Zobacz projekty',
        projectsTitle: 'MOJE PROJEKTY',
        projectsDescription: `Projekty są przedstawione w kolejności od najnowszego po najstarszy.
        Większość z nich to landing page z wyjątkiem sklepu internetowego, który napisałem przy pomocy
        Angulara + Firebase. Zdecydowałem zbudować coś większego stąd, na chwilę obecną tylko jeden projekt
        w tej technologii.`,
        projectsGithubButton: 'Zobacz na Github',
        projectsLivebButton: 'Zobacz na żywo',
        designTitle: 'UMIEJĘTNOŚCI <br> PROJEKTOWE',
        designDescription: `Dawniej zajmowałem się projektowaniem interfejsów gier mobilnych
        czysto hobbystycznie co z czasem przerodziło się w pracę zdalną nad dużym tytułem desktopowym.
        Był to nasz pierwszy poważny kontrakt, nad którym wspólnie z moim kolegą spędziliśmy ponad rok.
        Obecnie nie zajmuje się już tematyką gier ale umiejętności zdobyte wtedy wykorzystuje do
        projektowania aplikacji webowych.`,
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
        contactDescription: `Zaintersowane osoby proszę o kontakt na wskazany adres email. Cv wraz z listami referencyjnymi będę
        przesyłał w korespondencji prywatnej.`
    },
    eng: {
        navAbout: 'About',
        navProjects: 'Projects',
        navGallery: 'Gallery',
        navContact: 'Contact',
        heroTitle: 'frontend developer',
        heroTitle2: 'junior',
        hereDescription: `My name is Damian and I deal with
        creating web applications.
        On weekends I am studying Computer Science and Econometrics in Krakow for 3 years.
        I am currently looking for a job.`,
        heroButton: 'About me',
        stackTitle: 'TECHNOLOGICAL <br> STACK',
        stackDescription: `
        Every day, I mainly focus on writing applications with
                Angulara 6+.
                In the future I would like to join the team
                which will allow me to fully spread my wings in this technology.
                As a backend in my projects I use the services offered by Firebase. I am open to
                other React or Vue technologies.`,
        stackButton: 'See projects',
        projectsTitle: 'MY PROJECTS',
        projectsDescription: `The designs are presented in order from newest to oldest.
        Most of them are landing pages except for the online store which I wrote with the help of
        Angulara + Firebase. I decided to build something bigger from here, at the moment only one project
        in this technology.`,
        projectsGithubButton: 'See on Github',
        projectsLivebButton: 'See live',
        designTitle: 'DESIGN <br> SKILLS',
        designDescription: `
        I used to design mobile game interfaces purely as a hobby, which eventually turned into a remote work on a large desktop title.
        It was our first major contract that we spent over a year with my colleague. I am not dealing with games anymore but I use the skills acquired then to design web applications.`,
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
        contactDescription: `Interested persons please contact me at the email address provided. I will send my CV and reference letters in private correspondence.`
    }
}
const sockets = document.querySelectorAll('[data-text]');
console.log(sockets);

const translate = (lang) => {
    const selectedLanguage = language[lang];
    sockets.forEach(s => {
        s.innerHTML = selectedLanguage[s.dataset.text]
    })
}

switcherPOL.addEventListener('change', (e) => {
    translate(e.target.id);
})

switcherENG.addEventListener('change', (e) => {
    translate(e.target.id);
})