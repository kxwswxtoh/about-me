// Translations
const translations = {
  'ru': {
    'nav-home': 'Главная',
    'nav-about': 'Обо мне',
    'nav-projects': 'Проекты',
    'nav-skills': 'Навыки',
    'nav-contact': 'Контакты',
    'main-subtitle': 'Веб-разработчик | Создаю современные и интерактивные веб-приложения',
    'main-contact': 'Связаться',
    'main-projects': 'Мои работы',
    'about-title': 'Обо мне',
    'about-intro': 'Привет! Я профессиональный веб-разработчик с фокусом на создании современных, интуитивно понятных и минималистичных интерфейсов.',
    'about-exp1': 'Имею более 3 лет опыта в веб-разработке, создаю адаптивные и кросс-браузерные веб-приложения.',
    'about-exp2': 'Моя работа охватывает полный цикл разработки — от проектирования архитектуры до финальной реализации и тестирования.',
    'about-exp3': 'Открыт к сотрудничеству и новым вызовам. Если вам нужен ответственный и креативный разработчик — буду рад обсудить ваш проект.',
    'experience-title': 'Опыт работы',
    'present': 'Настоящее время',
    'job1-title': 'Фриланс разработчик',
    'job1-desc': 'Разработка веб-приложений и сайтов для клиентов по всему миру. Специализация на React, Node.js и современных фреймворках.',
    'job2-title': 'Веб-разработчик в Digital Agency',
    'job2-desc': 'Разработка и поддержка клиентских проектов, работа в команде над крупными корпоративными сайтами.',
    'job3-title': 'Junior Frontend Developer',
    'job3-desc': 'Начало карьеры в веб-разработке, изучение основных технологий и участие в коммерческих проектах.',
    'projects-title': 'Мои проекты',
    'projects-subtitle': 'Здесь представлены некоторые из моих последних работ. Каждый проект - это уникальное решение с индивидуальным подходом.',
    'project1-desc': 'Интернет-магазин с современным дизайном и удобной системой управления контентом.',
    'project2-title': 'Портфолио',
    'project2-desc': 'Интерактивное портфолио с анимациями и современным дизайном (этот сайт).',
    'details': 'Подробнее',
    'visit': 'Посетить',
    'skills-title': 'Мои навыки',
    'skills-subtitle': 'Технологии и инструменты, которые я использую в своей работе',
    'frontend': 'Frontend разработка',
    'backend': 'Backend разработка',
    'contact-title': 'Свяжитесь со мной',
    'contact-subtitle': 'Готов обсудить ваш проект или ответить на любые вопросы',
    'write': 'Написать',
    'contact-form-title': 'Форма обратной связи',
    'form-name': 'Ваше имя',
    'form-message': 'Сообщение',
    'form-send': 'Отправить',
    'modal1-desc': 'Многофункциональный Discord бот с современной системой модерации, экономикой, игровыми механиками и развлекательными функциями.',
    'features': 'Особенности:',
    'modal1-feature1': 'Система модерации с логированием и автоматическими наказаниями',
    'modal1-feature2': 'Экономическая система с магазином и аукционами',
    'modal1-feature3': 'Мини-игры и развлекательные команды',
    'modal1-feature4': 'Интеграция с внешними API (Twitch, YouTube)',
    'modal1-feature5': 'Панель управления через веб-интерфейс',
    'visit-server': 'Посетить сервер',
    'modal2-desc': 'Современный интернет-магазин с адаптивным дизайном, системой управления контентом и интеграцией платежных систем.',
    'modal2-feature1': 'Адаптивный дизайн для всех устройств',
    'modal2-feature2': 'Система управления товарами и категориями',
    'modal2-feature3': 'Корзина и оформление заказа',
    'modal2-feature4': 'Интеграция с Stripe для обработки платежей',
    'modal2-feature5': 'Личный кабинет пользователя',
    'visit-site': 'Посетить сайт',
    'close': 'Закрыть',
    'rights': 'Все права защищены'
  },
  'uk': {
    'nav-home': 'Головна',
    'nav-about': 'Про мене',
    'nav-projects': 'Проекти',
    'nav-skills': 'Навички',
    'nav-contact': 'Контакти',
    'main-subtitle': 'Веб-розробник | Створюю сучасні та інтерактивні веб-додатки',
    'main-contact': 'Зв\'язатися',
    'main-projects': 'Мої роботи',
    'about-title': 'Про мене',
    'about-intro': 'Привіт! Я професійний веб-розробник з фокусом на створенні сучасних, інтуїтивно зрозумілих та мінімалістичних інтерфейсів.',
    'about-exp1': 'Маю більше 3 років досвіду у веб-розробці, створюю адаптивні та крос-браузерні веб-додатки.',
    'about-exp2': 'Моя робота охоплює повний цикл розробки — від проектування архітектури до фінальної реалізації та тестування.',
    'about-exp3': 'Відкритий до співпраці та нових викликів. Якщо вам потрібен відповідальний та креативний розробник — буду радий обговорити ваш проект.',
    'experience-title': 'Досвід роботи',
    'present': 'Теперішній час',
    'job1-title': 'Фриланс розробник',
    'job1-desc': 'Розробка веб-додатків та сайтів для клієнтів по всьому світу. Спеціалізація на React, Node.js та сучасних фреймворках.',
    'job2-title': 'Веб-розробник у Digital Agency',
    'job2-desc': 'Розробка та підтримка клієнтських проектів, робота в команді над великими корпоративними сайтами.',
    'job3-title': 'Junior Frontend Developer',
    'job3-desc': 'Початок кар\'єри у веб-розробці, вивчення основних технологій та участь у комерційних проектах.',
    'projects-title': 'Мої проекти',
    'projects-subtitle': 'Тут представлені деякі з моїх останніх робіт. Кожен проект - це унікальне рішення з індивідуальним підходом.',
    'project1-desc': 'Інтернет-магазин з сучасним дизайном та зручною системою управління контентом.',
    'project2-title': 'Портфоліо',
    'project2-desc': 'Інтерактивне портфоліо з анімаціями та сучасним дизайном (цей сайт).',
    'details': 'Детальніше',
    'visit': 'Відвідати',
    'skills-title': 'Мої навички',
    'skills-subtitle': 'Технології та інструменти, які я використовую у своїй роботі',
    'frontend': 'Frontend розробка',
    'backend': 'Backend розробка',
    'contact-title': 'Зв\'яжіться зі мною',
    'contact-subtitle': 'Готовий обговорити ваш проект або відповісти на будь-які питання',
    'write': 'Написати',
    'contact-form-title': 'Форма зворотного зв\'язку',
    'form-name': 'Ваше ім\'я',
    'form-message': 'Повідомлення',
    'form-send': 'Відправити',
    'modal1-desc': 'Багатофункціональний Discord бот з сучасною системою модерації, економікою, ігровими механіками та розважальними функціями.',
    'features': 'Особливості:',
    'modal1-feature1': 'Система модерації з логуванням та автоматичними покараннями',
    'modal1-feature2': 'Економічна система з магазином та аукціонами',
    'modal1-feature3': 'Міні-ігри та розважальні команди',
    'modal1-feature4': 'Інтеграція з зовнішніми API (Twitch, YouTube)',
    'modal1-feature5': 'Панель управління через веб-інтерфейс',
    'visit-server': 'Відвідати сервер',
    'modal2-desc': 'Сучасний інтернет-магазин з адаптивним дизайном, системою управління контентом та інтеграцією платіжних систем.',
    'modal2-feature1': 'Адаптивний дизайн для всіх пристроїв',
    'modal2-feature2': 'Система управління товарами та категоріями',
    'modal2-feature3': 'Кошик та оформлення замовлення',
    'modal2-feature4': 'Інтеграція з Stripe для обробки платежів',
    'modal2-feature5': 'Особистий кабінет користувача',
    'visit-site': 'Відвідати сайт',
    'close': 'Закрити',
    'rights': 'Всі права захищені'
  },
  'en': {
    'nav-home': 'Home',
    'nav-about': 'About',
    'nav-projects': 'Projects',
    'nav-skills': 'Skills',
    'nav-contact': 'Contact',
    'main-subtitle': 'Web Developer | Creating modern and interactive web applications',
    'main-contact': 'Contact',
    'main-projects': 'My Works',
    'about-title': 'About Me',
    'about-intro': 'Hello! I\'m a professional web developer focused on creating modern, intuitive, and minimalist interfaces.',
    'about-exp1': 'I have over 3 years of experience in web development, creating responsive and cross-browser web applications.',
    'about-exp2': 'My work covers the full development cycle — from architecture design to final implementation and testing.',
    'about-exp3': 'Open to collaboration and new challenges. If you need a responsible and creative developer — I\'d be happy to discuss your project.',
    'experience-title': 'Work Experience',
    'present': 'Present',
    'job1-title': 'Freelance Developer',
    'job1-desc': 'Developing web applications and websites for clients worldwide. Specializing in React, Node.js and modern frameworks.',
    'job2-title': 'Web Developer at Digital Agency',
    'job2-desc': 'Development and support of client projects, teamwork on large corporate websites.',
    'job3-title': 'Junior Frontend Developer',
    'job3-desc': 'Career start in web development, learning core technologies and participating in commercial projects.',
    'projects-title': 'My Projects',
    'projects-subtitle': 'Here are some of my latest works. Each project is a unique solution with an individual approach.',
    'project1-desc': 'Online store with modern design and convenient content management system.',
    'project2-title': 'Portfolio',
    'project2-desc': 'Interactive portfolio with animations and modern design (this site).',
    'details': 'Details',
    'visit': 'Visit',
    'skills-title': 'My Skills',
    'skills-subtitle': 'Technologies and tools I use in my work',
    'frontend': 'Frontend Development',
    'backend': 'Backend Development',
    'contact-title': 'Contact Me',
    'contact-subtitle': 'Ready to discuss your project or answer any questions',
    'write': 'Write',
    'contact-form-title': 'Feedback Form',
    'form-name': 'Your Name',
    'form-message': 'Message',
    'form-send': 'Send',
    'modal1-desc': 'Multifunctional Discord bot with modern moderation system, economy, gaming mechanics and entertainment functions.',
    'features': 'Features:',
    'modal1-feature1': 'Moderation system with logging and automatic punishments',
    'modal1-feature2': 'Economic system with shop and auctions',
    'modal1-feature3': 'Mini-games and entertainment commands',
    'modal1-feature4': 'Integration with external APIs (Twitch, YouTube)',
    'modal1-feature5': 'Management panel via web interface',
    'visit-server': 'Visit Server',
    'modal2-desc': 'Modern online store with responsive design, content management system and payment system integration.',
    'modal2-feature1': 'Responsive design for all devices',
    'modal2-feature2': 'Product and category management system',
    'modal2-feature3': 'Shopping cart and order checkout',
    'modal2-feature4': 'Stripe integration for payment processing',
    'modal2-feature5': 'User personal account',
    'visit-site': 'Visit Site',
    'close': 'Close',
    'rights': 'All rights reserved'
  },
  'pl': {
    'nav-home': 'Główna',
    'nav-about': 'O mnie',
    'nav-projects': 'Projekty',
    'nav-skills': 'Umiejętności',
    'nav-contact': 'Kontakt',
    'main-subtitle': 'Web Developer | Tworzę nowoczesne i interaktywne aplikacje internetowe',
    'main-contact': 'Kontakt',
    'main-projects': 'Moje prace',
    'about-title': 'O mnie',
    'about-intro': 'Cześć! Jestem profesjonalnym web developerem skupiającym się na tworzeniu nowoczesnych, intuicyjnych i minimalistycznych interfejsów.',
    'about-exp1': 'Mam ponad 3 lata doświadczenia w tworzeniu stron internetowych, tworzę responsywne i wieloprzeglądarkowe aplikacje internetowe.',
    'about-exp2': 'Moja praca obejmuje pełny cykl rozwoju — od projektowania architektury po końcową realizację i testowanie.',
    'about-exp3': 'Otwarty na współpracę i nowe wyzwania. Jeśli potrzebujesz odpowiedzialnego i kreatywnego developera — chętnie omówię Twój projekt.',
    'experience-title': 'Doświadczenie zawodowe',
    'present': 'Teraz',
    'job1-title': 'Freelance Developer',
    'job1-desc': 'Tworzenie aplikacji internetowych i stron dla klientów na całym świecie. Specjalizacja w React, Node.js i nowoczesnych frameworkach.',
    'job2-title': 'Web Developer w Digital Agency',
    'job2-desc': 'Rozwój i wsparcie projektów klientów, praca zespołowa nad dużymi stronami korporacyjnymi.',
    'job3-title': 'Junior Frontend Developer',
    'job3-desc': 'Początek kariery w web developmencie, nauka podstawowych technologii i udział w projektach komercyjnych.',
    'projects-title': 'Moje projekty',
    'projects-subtitle': 'Tutaj przedstawione są niektóre z moich najnowszych prac. Każdy projekt to unikalne rozwiązanie z indywidualnym podejściem.',
    'project1-desc': 'Sklep internetowy z nowoczesnym designem i wygodnym systemem zarządzania treścią.',
    'project2-title': 'Portfolio',
    'project2-desc': 'Interaktywne portfolio z animacjami i nowoczesnym designem (ta strona).',
    'details': 'Szczegóły',
    'visit': 'Odwiedź',
    'skills-title': 'Moje umiejętności',
    'skills-subtitle': 'Technologie i narzędzia których używam w mojej pracy',
    'frontend': 'Frontend Development',
    'backend': 'Backend Development',
    'contact-title': 'Skontaktuj się ze mną',
    'contact-subtitle': 'Gotowy omówić Twój projekt lub odpowiedzieć na pytania',
    'write': 'Napisz',
    'contact-form-title': 'Formularz kontaktowy',
    'form-name': 'Twoje imię',
    'form-message': 'Wiadomość',
    'form-send': 'Wyślij',
    'modal1-desc': 'Wielofunkcyjny bot Discord z nowoczesnym systemem moderacji, ekonomią, mechanikami gier i funkcjami rozrywkowymi.',
    'features': 'Funkcje:',
    'modal1-feature1': 'System moderacji z logowaniem i automatycznymi karami',
    'modal1-feature2': 'System ekonomiczny ze sklepem i aukcjami',
    'modal1-feature3': 'Mini-gry i komendy rozrywkowe',
    'modal1-feature4': 'Integracja z zewnętrznymi API (Twitch, YouTube)',
    'modal1-feature5': 'Panel zarządzania przez interfejs webowy',
    'visit-server': 'Odwiedź serwer',
    'modal2-desc': 'Nowoczesny sklep internetowy z responsywnym designem, systemem zarządzania treścią i integracją systemów płatności.',
    'modal2-feature1': 'Responsywny design dla wszystkich urządzeń',
    'modal2-feature2': 'System zarządzania produktami i kategoriami',
    'modal2-feature3': 'Koszyk i realizacja zamówienia',
    'modal2-feature4': 'Integracja ze Stripe do przetwarzania płatności',
    'modal2-feature5': 'Konto osobiste użytkownika',
    'visit-site': 'Odwiedź stronę',
    'close': 'Zamknij',
    'rights': 'Wszystkie prawa zastrzeżone'
  },
  'fr': {
    'nav-home': 'Accueil',
    'nav-about': 'À propos',
    'nav-projects': 'Projets',
    'nav-skills': 'Compétences',
    'nav-contact': 'Contact',
    'main-subtitle': 'Développeur Web | Créant des applications web modernes et interactives',
    'main-contact': 'Contact',
    'main-projects': 'Mes travaux',
    'about-title': 'À propos de moi',
    'about-intro': 'Salut! Je suis un développeur web professionnel concentré sur la création d\'interfaces modernes, intuitives et minimalistes.',
    'about-exp1': 'J\'ai plus de 3 ans d\'expérience en développement web, créant des applications web responsives et multi-navigateurs.',
    'about-exp2': 'Mon travail couvre le cycle complet de développement — de la conception d\'architecture à la mise en œuvre finale et aux tests.',
    'about-exp3': 'Ouvert à la collaboration et aux nouveaux défis. Si vous avez besoin d\'un développeur responsable et créatif — je serais heureux de discuter de votre projet.',
    'experience-title': 'Expérience professionnelle',
    'present': 'Présent',
    'job1-title': 'Développeur Freelance',
    'job1-desc': 'Développement d\'applications web et sites pour des clients du monde entier. Spécialisation en React, Node.js et frameworks modernes.',
    'job2-title': 'Développeur Web chez Digital Agency',
    'job2-desc': 'Développement et support de projets clients, travail d\'équipe sur de grands sites corporatifs.',
    'job3-title': 'Développeur Frontend Junior',
    'job3-desc': 'Début de carrière en développement web, apprentissage des technologies de base et participation aux projets commerciaux.',
    'projects-title': 'Mes projets',
    'projects-subtitle': 'Voici quelques-uns de mes derniers travaux. Chaque projet est une solution unique avec une approche individuelle.',
    'project1-desc': 'Boutique en ligne avec design moderne et système de gestion de contenu pratique.',
    'project2-title': 'Portfolio',
    'project2-desc': 'Portfolio interactif avec animations et design moderne (ce site).',
    'details': 'Détails',
    'visit': 'Visiter',
    'skills-title': 'Mes compétences',
    'skills-subtitle': 'Technologies et outils que j\'utilise dans mon travail',
    'frontend': 'Développement Frontend',
    'backend': 'Développement Backend',
    'contact-title': 'Contactez-moi',
    'contact-subtitle': 'Prêt à discuter de votre projet ou répondre à toutes questions',
    'write': 'Écrire',
    'contact-form-title': 'Formulaire de contact',
    'form-name': 'Votre nom',
    'form-message': 'Message',
    'form-send': 'Envoyer',
    'modal1-desc': 'Bot Discord multifonctionnel avec système de modération moderne, économie, mécaniques de jeu et fonctions de divertissement.',
    'features': 'Fonctionnalités:',
    'modal1-feature1': 'Système de modération avec journalisation et punitions automatiques',
    'modal1-feature2': 'Système économique avec boutique et enchères',
    'modal1-feature3': 'Mini-jeux et commandes de divertissement',
    'modal1-feature4': 'Intégration avec APIs externes (Twitch, YouTube)',
    'modal1-feature5': 'Panneau de gestion via interface web',
    'visit-server': 'Visiter le serveur',
    'modal2-desc': 'Boutique en ligne moderne avec design responsive, système de gestion de contenu et intégration de systèmes de paiement.',
    'modal2-feature1': 'Design responsive pour tous les appareils',
    'modal2-feature2': 'Système de gestion de produits et catégories',
    'modal2-feature3': 'Panier et commande',
    'modal2-feature4': 'Intégration Stripe pour le traitement des paiements',
    'modal2-feature5': 'Compte personnel utilisateur',
    'visit-site': 'Visiter le site',
    'close': 'Fermer',
    'rights': 'Tous droits réservés'
  },
  'de': {
    'nav-home': 'Startseite',
    'nav-about': 'Über mich',
    'nav-projects': 'Projekte',
    'nav-skills': 'Fähigkeiten',
    'nav-contact': 'Kontakt',
    'main-subtitle': 'Web-Entwickler | Erstelle moderne und interaktive Webanwendungen',
    'main-contact': 'Kontakt',
    'main-projects': 'Meine Arbeiten',
    'about-title': 'Über mich',
    'about-intro': 'Hallo! Ich bin ein professioneller Web-Entwickler mit Fokus auf die Erstellung moderner, intuitiver und minimalistischer Interfaces.',
    'about-exp1': 'Ich habe über 3 Jahre Erfahrung in der Web-Entwicklung und erstelle responsive und browserübergreifende Webanwendungen.',
    'about-exp2': 'Meine Arbeit umfasst den vollständigen Entwicklungszyklus — von der Architektur-Gestaltung bis zur finalen Umsetzung und Tests.',
    'about-exp3': 'Offen für Zusammenarbeit und neue Herausforderungen. Wenn Sie einen verantwortlichen und kreativen Entwickler brauchen — würde gerne Ihr Projekt besprechen.',
    'experience-title': 'Berufserfahrung',
    'present': 'Gegenwart',
    'job1-title': 'Freelance Entwickler',
    'job1-desc': 'Entwicklung von Webanwendungen und Websites für Kunden weltweit. Spezialisierung auf React, Node.js und moderne Frameworks.',
    'job2-title': 'Web-Entwickler bei Digital Agency',
    'job2-desc': 'Entwicklung und Unterstützung von Kundenprojekten, Teamarbeit an großen Unternehmenswebsites.',
    'job3-title': 'Junior Frontend Entwickler',
    'job3-desc': 'Karrierestart in der Web-Entwicklung, Erlernen von Kerntechnologien und Teilnahme an kommerziellen Projekten.',
    'projects-title': 'Meine Projekte',
    'projects-subtitle': 'Hier sind einige meiner neuesten Arbeiten. Jedes Projekt ist eine einzigartige Lösung mit individuellem Ansatz.',
    'project1-desc': 'Online-Shop mit modernem Design und bequemem Content-Management-System.',
    'project2-title': 'Portfolio',
    'project2-desc': 'Interaktives Portfolio mit Animationen und modernem Design (diese Website).',
    'details': 'Details',
    'visit': 'Besuchen',
    'skills-title': 'Meine Fähigkeiten',
    'skills-subtitle': 'Technologien und Tools, die ich in meiner Arbeit verwende',
    'frontend': 'Frontend Entwicklung',
    'backend': 'Backend Entwicklung',
    'contact-title': 'Kontaktieren Sie mich',
    'contact-subtitle': 'Bereit, Ihr Projekt zu besprechen oder Fragen zu beantworten',
    'write': 'Schreiben',
    'contact-form-title': 'Kontaktformular',
    'form-name': 'Ihr Name',
    'form-message': 'Nachricht',
    'form-send': 'Senden',
    'modal1-desc': 'Multifunktionaler Discord Bot mit modernem Moderationssystem, Wirtschaft, Spielmechaniken und Unterhaltungsfunktionen.',
    'features': 'Funktionen:',
    'modal1-feature1': 'Moderationssystem mit Protokollierung und automatischen Bestrafungen',
    'modal1-feature2': 'Wirtschaftssystem mit Shop und Auktionen',
    'modal1-feature3': 'Mini-Spiele und Unterhaltungskommandos',
    'modal1-feature4': 'Integration mit externen APIs (Twitch, YouTube)',
    'modal1-feature5': 'Verwaltungspanel über Web-Interface',
    'visit-server': 'Server besuchen',
    'modal2-desc': 'Moderner Online-Shop mit responsivem Design, Content-Management-System und Zahlungssystem-Integration.',
    'modal2-feature1': 'Responsives Design für alle Geräte',
    'modal2-feature2': 'Produkt- und Kategorie-Verwaltungssystem',
    'modal2-feature3': 'Warenkorb und Bestellabwicklung',
    'modal2-feature4': 'Stripe Integration für Zahlungsabwicklung',
    'modal2-feature5': 'Benutzerkonto',
    'visit-site': 'Website besuchen',
    'close': 'Schließen',
    'rights': 'Alle Rechte vorbehalten'
  },
  'it': {
    'nav-home': 'Home',
    'nav-about': 'Chi sono',
    'nav-projects': 'Progetti',
    'nav-skills': 'Competenze',
    'nav-contact': 'Contatti',
    'main-subtitle': 'Sviluppatore Web | Creo applicazioni web moderne e interattive',
    'main-contact': 'Contatti',
    'main-projects': 'I miei lavori',
    'about-title': 'Chi sono',
    'about-intro': 'Ciao! Sono uno sviluppatore web professionale focalizzato sulla creazione di interfacce moderne, intuitive e minimaliste.',
    'about-exp1': 'Ho oltre 3 anni di esperienza nello sviluppo web, creo applicazioni web responsive e cross-browser.',
    'about-exp2': 'Il mio lavoro copre l\'intero ciclo di sviluppo — dalla progettazione dell\'architettura all\'implementazione finale e testing.',
    'about-exp3': 'Aperto alla collaborazione e a nuove sfide. Se hai bisogno di uno sviluppatore responsabile e creativo — sarò felice di discutere il tuo progetto.',
    'experience-title': 'Esperienza lavorativa',
    'present': 'Presente',
    'job1-title': 'Sviluppatore Freelance',
    'job1-desc': 'Sviluppo di applicazioni web e siti per clienti in tutto il mondo. Specializzazione in React, Node.js e framework moderni.',
    'job2-title': 'Sviluppatore Web presso Digital Agency',
    'job2-desc': 'Sviluppo e supporto di progetti clienti, lavoro di squadra su grandi siti aziendali.',
    'job3-title': 'Junior Frontend Developer',
    'job3-desc': 'Inizio carriera nello sviluppo web, apprendimento delle tecnologie principali e partecipazione a progetti commerciali.',
    'projects-title': 'I miei progetti',
    'projects-subtitle': 'Qui ci sono alcuni dei miei ultimi lavori. Ogni progetto è una soluzione unica con approccio individuale.',
    'project1-desc': 'Negozio online con design moderno e sistema di gestione contenuti conveniente.',
    'project2-title': 'Portfolio',
    'project2-desc': 'Portfolio interattivo con animazioni e design moderno (questo sito).',
    'details': 'Dettagli',
    'visit': 'Visita',
    'skills-title': 'Le mie competenze',
    'skills-subtitle': 'Tecnologie e strumenti che uso nel mio lavoro',
    'frontend': 'Sviluppo Frontend',
    'backend': 'Sviluppo Backend',
    'contact-title': 'Contattami',
    'contact-subtitle': 'Pronto a discutere il tuo progetto o rispondere a qualsiasi domanda',
    'write': 'Scrivi',
    'contact-form-title': 'Modulo di contatto',
    'form-name': 'Il tuo nome',
    'form-message': 'Messaggio',
    'form-send': 'Invia',
    'modal1-desc': 'Bot Discord multifunzionale con sistema di moderazione moderno, economia, meccaniche di gioco e funzioni di intrattenimento.',
    'features': 'Caratteristiche:',
    'modal1-feature1': 'Sistema di moderazione con logging e punizioni automatiche',
    'modal1-feature2': 'Sistema economico con negozio e aste',
    'modal1-feature3': 'Mini-giochi e comandi di intrattenimento',
    'modal1-feature4': 'Integrazione con API esterne (Twitch, YouTube)',
    'modal1-feature5': 'Pannello di gestione tramite interfaccia web',
    'visit-server': 'Visita il server',
    'modal2-desc': 'Negozio online moderno con design responsive, sistema di gestione contenuti e integrazione sistemi di pagamento.',
    'modal2-feature1': 'Design responsive per tutti i dispositivi',
    'modal2-feature2': 'Sistema di gestione prodotti e categorie',
    'modal2-feature3': 'Carrello e checkout ordine',
    'modal2-feature4': 'Integrazione Stripe per elaborazione pagamenti',
    'modal2-feature5': 'Account personale utente',
    'visit-site': 'Visita il sito',
    'close': 'Chiudi',
    'rights': 'Tutti i diritti riservati'
  },
  'be': {
    'nav-home': 'Галоўная',
    'nav-about': 'Пра мяне',
    'nav-projects': 'Праекты',
    'nav-skills': 'Навыкі',
    'nav-contact': 'Кантакты',
    'main-subtitle': 'Вэб-распрацоўшчык | Ствараю сучасныя і інтэрактыўныя вэб-дадаткі',
    'main-contact': 'Звязацца',
    'main-projects': 'Мае працы',
    'about-title': 'Пра мяне',
    'about-intro': 'Прывітанне! Я прафесійны вэб-распрацоўшчык з фокусам на стварэнні сучасных, інтуітыўна зразумелых і мінімалістычных інтэрфейсаў.',
    'about-exp1': 'Маю больш за 3 гады досведу ў вэб-распрацоўцы, ствараю адаптыўныя і крос-браўзерныя вэб-дадаткі.',
    'about-exp2': 'Мая праца ахоплівае поўны цыкл распрацоўкі — ад праектавання архітэктуры да фінальнай рэалізацыі і тэставання.',
    'about-exp3': 'Адкрыты да супрацоўніцтва і новых выклікаў. Калі вам патрэбен адказны і крэатыўны распрацоўшчык — буду рады абмеркаваць ваш праект.',
    'experience-title': 'Досвед працы',
    'present': 'Цяперашні час',
    'job1-title': 'Фрылансер распрацоўшчык',
    'job1-desc': 'Распрацоўка вэб-дадаткаў і сайтаў для кліентаў па ўсім свеце. Спецыялізацыя на React, Node.js і сучасных фрэймворках.',
    'job2-title': 'Вэб-распрацоўшчык у Digital Agency',
    'job2-desc': 'Распрацоўка і падтрымка кліенцкіх праектаў, праца ў камандзе над вялікімі карпаратыўнымі сайтамі.',
    'job3-title': 'Junior Frontend Developer',
    'job3-desc': 'Пачатак кар\'еры ў вэб-распрацоўцы, вывучэнне асноўных тэхналогій і ўдзел у камерцыйных праектах.',
    'projects-title': 'Мае праекты',
    'projects-subtitle': 'Тут прадстаўлены некаторыя з маіх апошніх прац. Кожны праект - гэта унікальнае рашэнне з індывідуальным падыходам.',
    'project1-desc': 'Інтэрнэт-крама з сучасным дызайнам і зручнай сістэмай кіравання кантэнтам.',
    'project2-title': 'Партфоліа',
    'project2-desc': 'Інтэрактыўнае партфоліа з анімацыямі і сучасным дызайнам (гэты сайт).',
    'details': 'Падрабязней',
    'visit': 'Наведаць',
    'skills-title': 'Мае навыкі',
    'skills-subtitle': 'Тэхналогіі і інструменты, якія я выкарыстоўваю ў сваёй працы',
    'frontend': 'Frontend распрацоўка',
    'backend': 'Backend распрацоўка',
    'contact-title': 'Звяжыцеся са мной',
    'contact-subtitle': 'Гатовы абмеркаваць ваш праект або адказаць на любыя пытанні',
    'write': 'Напісаць',
    'contact-form-title': 'Форма зваротнай сувязі',
    'form-name': 'Ваша імя',
    'form-message': 'Паведамленне',
    'form-send': 'Адправіць',
    'modal1-desc': 'Шматфункцыянальны Discord бот з сучаснай сістэмай мадэрацыі, эканомікай, гульнёвымі механікамі і забаўляльнымі функцыямі.',
    'features': 'Асаблівасці:',
    'modal1-feature1': 'Сістэма мадэрацыі з лагаваннем і аўтаматычнымі пакараннямі',
    'modal1-feature2': 'Эканамічная сістэма з крамай і аўкцыёнамі',
    'modal1-feature3': 'Міні-гульні і забаўляльныя каманды',
    'modal1-feature4': 'Інтэграцыя з знешнімі API (Twitch, YouTube)',
    'modal1-feature5': 'Панэль кіравання праз вэб-інтэрфейс',
    'visit-server': 'Наведаць сервер',
    'modal2-desc': 'Сучасная інтэрнэт-крама з адаптыўным дызайнам, сістэмай кіравання кантэнтам і інтэграцыяй платежных сістэм.',
    'modal2-feature1': 'Адаптыўны дызайн для ўсіх прылад',
    'modal2-feature2': 'Сістэма кіравання таварамі і катэгорыямі',
    'modal2-feature3': 'Кошык і афармленне заказу',
    'modal2-feature4': 'Інтэграцыя з Stripe для апрацоўкі плацяжоў',
    'modal2-feature5': 'Асабісты кабінет карыстальніка',
    'visit-site': 'Наведаць сайт',
    'close': 'Зачыніць',
    'rights': 'Усе правы абароненыя'
  }
};

// Current language
let currentLanguage = 'ru';
const languageNames = {
  'ru': 'Русский',
  'uk': 'Українська',
  'en': 'English',
  'pl': 'Polski',
  'fr': 'Français',
  'de': 'Deutsch',
  'it': 'Italiano',
  'be': 'Беларуская'
};

// Инициализация страницы
document.addEventListener('DOMContentLoaded', function() {
  // Инициализация загрузочного экрана
  initLoadingScreen();

  // Инициализация аудио контроля
  initAudioControl();

  // Инициализация перетаскивания аудио плеера
  initAudioPlayerDrag();

  // Check for saved language preference
  const savedLang = localStorage.getItem('language');
  if (savedLang && translations[savedLang]) {
    currentLanguage = savedLang;
    document.querySelector('.language-current').textContent = languageNames[currentLanguage];
    translatePage();

    // Если язык уже выбран, скрыть загрузочный экран и селектор языка, показать контент
    const loadingScreen = document.getElementById('loadingScreen');
    const languageSelector = document.getElementById('languageSelector');
    if (loadingScreen) {
      loadingScreen.classList.add('hidden');
    }
    if (languageSelector) {
      languageSelector.classList.remove('active');
    }

    // Показать активную страницу только если язык выбран
    showPage('main', document.querySelector('nav a:first-child'));
  } else {
    // Если язык не выбран, показать загрузочный экран, но не показывать контент
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
      loadingScreen.classList.remove('hidden');
    }

    // Скрыть весь контент пока язык не выбран
    document.querySelectorAll('.page').forEach(p => {
      p.style.display = 'none';
    });
    const header = document.querySelector('header');
    if (header) {
      header.style.display = 'none';
    }
  }

  // Инициализация партиклов
  initParticles();

  // Инициализация плавающих элементов
  createFloatingElements();

  // Анимация прогресс-баров при скролле
  animateProgressBars();

  // Инициализация переключателя темы
  initThemeToggle();

  // Создание footer на всех страницах
  createFooter();

  // Обработчик формы
  const feedbackForm = document.getElementById('feedback-form');
  if (feedbackForm) {
    feedbackForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert(currentLanguage === 'ru' ? 'Сообщение отправлено! Я свяжусь с вами в ближайшее время.' :
        currentLanguage === 'uk' ? 'Повідомлення відправлено! Я зв\'яжуся з вами найближчим часом.' :
          currentLanguage === 'en' ? 'Message sent! I will contact you soon.' :
            'Сообщение отправлено! Я свяжусь с вами в ближайшее время.');
      this.reset();
    });
  }

  // Проверка темы в localStorage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    setLightTheme();
  } else {
    setDarkTheme();
  }

  // Инициализация плавного скролла
  initSmoothScroll();

  // Создать footer при полной загрузке страницы
  if (document.readyState === 'complete') {
    setTimeout(() => {
      createFooter();
      translatePage();
    }, 100);
  } else {
    window.addEventListener('load', () => {
      setTimeout(() => {
        createFooter();
        translatePage();
      }, 200);
    });
  }
});

// Инициализация переключателя темы
function initThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      if (document.body.classList.contains('light-theme')) {
        setDarkTheme();
      } else {
        setLightTheme();
      }
    });
  }

  // Проверяем, если темная тема не установлена по умолчанию
  if (!document.body.classList.contains('dark-theme') && !document.body.classList.contains('light-theme')) {
    document.body.classList.add('dark-theme');
  }
}

// Toggle language selector
function toggleLanguageSelector() {
  const languageSelector = document.getElementById('languageSelector');
  if (languageSelector) {
    languageSelector.classList.toggle('active');
  }
}

// Set language
function setLanguage(lang) {
  if (translations[lang]) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    const currentLangSpan = document.querySelector('.language-current');
    if (currentLangSpan) {
      currentLangSpan.textContent = languageNames[lang];
    }
    translatePage();
    toggleLanguageSelector();

    // После выбора языка показать весь контент
    document.querySelectorAll('.page').forEach(p => {
      p.style.display = 'flex';
    });
    const header = document.querySelector('header');
    if (header) {
      header.style.display = 'flex';
    }

    // Показать главную страницу
    showPage('main', document.querySelector('nav a:first-child'));
  }
}

// Translate page
function translatePage() {
  const elements = document.querySelectorAll('[data-translate]');
  elements.forEach(el => {
    const key = el.getAttribute('data-translate');
    if (translations[currentLanguage] && translations[currentLanguage][key]) {
      el.textContent = translations[currentLanguage][key];
    }
  });
}

// Функция показа страницы
function showPage(id, el) {
  // Плавный скролл к верху
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });

  // Скрыть все страницы
  document.querySelectorAll('.page').forEach(p => {
    p.classList.remove('active');
  });

  // Показать выбранную страницу
  const targetPage = document.getElementById(id);
  if (targetPage) {
    targetPage.classList.add('active');
  }

  // Обновить активную кнопку навигации
  document.querySelectorAll('nav a').forEach(a => {
    a.classList.remove('active-category');
  });

  if (el) {
    el.classList.add('active-category');
  }

  // Анимация элементов при загрузке страницы
  animatePageElements();

  // Обеспечить наличие footer на каждой странице
  if (document.body) {
    setTimeout(() => {
      createFooter();
      translatePage(); // Применить переводы к footer
    }, 200);
  }
}

// Переключение модальных окон
function toggleModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.toggle('active');
    document.body.style.overflow = modal.classList.contains('active') ? 'hidden' : '';
  }
}

// Переключение темы
function setLightTheme() {
  document.body.classList.remove('dark-theme');
  document.body.classList.add('light-theme');

  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  }

  localStorage.setItem('theme', 'light');

  // Обновляем CSS переменные для светлой темы
  document.documentElement.style.setProperty('--dark-bg', '#f5f7fa');
  document.documentElement.style.setProperty('--darker-bg', '#e1e5ee');
  document.documentElement.style.setProperty('--text-color', '#2d3748');
  document.documentElement.style.setProperty('--text-secondary', '#4a5568');
  document.documentElement.style.setProperty('--card-bg', 'rgba(255, 255, 255, 0.9)');
}

function setDarkTheme() {
  document.body.classList.remove('light-theme');
  document.body.classList.add('dark-theme');

  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  }

  localStorage.setItem('theme', 'dark');

  // Возвращаем CSS переменные для темной темы
  document.documentElement.style.setProperty('--dark-bg', '#0b0c10');
  document.documentElement.style.setProperty('--darker-bg', '#07090d');
  document.documentElement.style.setProperty('--text-color', '#ffffff');
  document.documentElement.style.setProperty('--text-secondary', '#b8c2d9');
  document.documentElement.style.setProperty('--card-bg', 'rgba(17, 17, 17, 0.85)');
}

// Инициализация партиклов
function initParticles() {
  const canvas = document.querySelector('.particles');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const particleCount = Math.floor(window.innerWidth / 10);

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 3 + 1,
      speedX: Math.random() * 1 - 0.5,
      speedY: Math.random() * 1 - 0.5,
      color: `rgba(74, 144, 226, ${Math.random() * 0.5 + 0.1})`
    });
  }

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      p.x += p.speedX;
      p.y += p.speedY;

      if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
      if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();

      // Соединение точек
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const distance = Math.sqrt(Math.pow(p.x - p2.x, 2) + Math.pow(p.y - p2.y, 2));

        if (distance < 100) {
          ctx.strokeStyle = `rgba(74, 144, 226, ${1 - distance / 100})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animateParticles);
  }

  animateParticles();

  window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}

// Создание плавающих элементов
function createFloatingElements() {
  const container = document.querySelector('.floating-elements');
  if (!container) return;

  const colors = [
    'rgba(100,150,255,0.8)',
    'rgba(110,72,170,0.7)',
    'rgba(0,212,255,0.6)',
    'rgba(255,100,150,0.5)',
    'rgba(100,255,150,0.4)'
  ];

  for (let i = 0; i < 5; i++) {
    const element = document.createElement('div');
    element.className = 'floating-element';

    const size = Math.random() * 200 + 100;
    const color = colors[Math.floor(Math.random() * colors.length)];

    element.style.width = `${size}px`;
    element.style.height = `${size}px`;
    element.style.background = `radial-gradient(circle, ${color} 0%, ${color.replace(/[\d\.]+\)$/, '0)')})`;
    element.style.left = `${Math.random() * 80 + 10}%`;
    element.style.top = `${Math.random() * 80 + 10}%`;
    element.style.animation = `float ${15 + Math.random() * 15}s infinite ease-in-out`;
    element.style.animationDelay = `${Math.random() * 5}s`;

    container.appendChild(element);
  }
}

// Анимация элементов страницы
function animatePageElements() {
  const elements = document.querySelectorAll('.fade-in-up');

  elements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
  });

  setTimeout(() => {
    elements.forEach(el => {
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    });
  }, 100);
}

// Анимация прогресс-баров
function animateProgressBars() {
  const progressBars = document.querySelectorAll('.progress-fill');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const width = entry.target.style.width;
        entry.target.style.width = '0';
        setTimeout(() => {
          entry.target.style.width = width;
        }, 100);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  progressBars.forEach(bar => {
    observer.observe(bar);
  });
}

// Создание footer на всех страницах
function createFooter() {
  // Проверяем готовность DOM и наличие body
  if (!document.body || document.readyState === 'loading') {
    setTimeout(() => createFooter(), 100);
    return;
  }

  // Удаляем существующий динамический footer если есть
  const existingFooter = document.querySelector('footer.dynamic-footer');
  if (existingFooter) {
    try {
      existingFooter.remove();
    } catch (error) {
      console.warn('Ошибка при удалении footer:', error);
    }
  }

  // Проверяем, есть ли уже статический footer
  if (document.querySelector('footer:not(.dynamic-footer)')) {
    return; // Не создаем дублирующий footer
  }

  const footer = document.createElement('footer');
  footer.className = 'dynamic-footer fade-in-up delay-4';
  footer.innerHTML = `
    <div class="container">
      <div class="social-links">
        <a href="https://github.com/kxwswxtoh" target="_blank" class="social-link" title="GitHub"><i class="fab fa-github"></i></a>
        <a href="https://t.me/kxwswxtoh" target="_blank" class="social-link" title="Telegram"><i class="fab fa-telegram"></i></a>
        <a href="https://discord.com/users/1145015548099432548" target="_blank" class="social-link" title="Discord"><i class="fab fa-discord"></i></a>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=kxwswxtoh@gmail.com" target="_blank" class="social-link" title="Gmail">
          <i class="fas fa-envelope"></i>
        </a>
      </div>
      <p class="copyright">© 2025 kxwswxtoh — <span data-translate="rights">Все права защищены</span></p>
    </div>
  `;

  // Безопасное добавление footer
  try {
    if (document.body) {
      document.body.appendChild(footer);
    }
  } catch (error) {
    console.error('Ошибка при добавлении footer:', error);
  }
}

// Инициализация загрузочного экрана
function initLoadingScreen() {
  const loadingScreen = document.getElementById('loadingScreen');

  if (loadingScreen) {
    // Функция для скрытия загрузочного экрана и показа селектора языка
    function hideLoadingAndShowLanguageSelector() {
      loadingScreen.classList.add('hidden');

      // Всегда показать селектор языка после скрытия загрузочного экрана
      setTimeout(() => {
        const languageSelector = document.getElementById('languageSelector');
        if (languageSelector) {
          languageSelector.classList.add('active');
        }
      }, 500);
    }

    // Обработчик для нажатия любой клавиши
    document.addEventListener('keydown', function(e) {
      if (loadingScreen && !loadingScreen.classList.contains('hidden')) {
        hideLoadingAndShowLanguageSelector();
      }
    });

    // Обработчик для клика на загрузочный экран
    loadingScreen.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      hideLoadingAndShowLanguageSelector();
    });

    // Обработчик для касания на мобильных устройствах
    loadingScreen.addEventListener('touchstart', function(e) {
      e.preventDefault();
      e.stopPropagation();
      hideLoadingAndShowLanguageSelector();
    });
  }
}

// Плейлист песен
const playlist = [
  {
    src: '2hug - Сны.mp3',
    title: '2hug - Сны',
    cover: 'attached_assets/artworks-QAQobczQy9MccKsr-52EW7w-t500x500_1752537268446.jpeg'
  },
  {
    src: 'Zhanulka Наколки.mp3',
    title: 'Zhanulka - Наколки',
    cover: 'ab67616d0000b273636adab1214fa22eebf73a01.jfif'
  },
  {
    src: 'Friendly Thug 52 Ngg Sladki Snov Rapper 2.mp3',
    title: 'Friendly Thug 52 Ngg - Sladki Snov Rapper 2',
    cover: '600x600bf-60.jpg'
  },
  {
    src: 'October (Mp3Feel.net).mp3',
    title: 'October',
    cover: 'artworks-RUJzPK7mLZniD6Co-YMZGfQ-t500x500.jpg'
  },
  {
    src: 'Whole Lotta Swag Разница.mp3',
    title: 'Whole Lotta Swag - Разница',
    cover: 'maxresdefault.jpg'
  },
  {
    src: '2hug - В этой комнате.mp3',
    title: '2hug - В этой комнате',
    cover: 'artworks-WL9FBht1VQQ7hOPy-6cmpOA-t500x500.jpg'
  },
  {
    src: 'KRISTIEE - Dirty.mp3',
    title: 'KRISTIEE - Dirty',
    cover: 'KristieeDirty.jfif'
  },
  {
    src: 'GONE.Fludd - Boys Don\'t Cry.mp3',
    title: 'GONE.Fludd - Boys Don\'t Cry',
    cover: 'gone-fludd-boys-don-t-cry.jpg'
  }
];

let currentTrackIndex = 0;
let isShuffleMode = true; // Режим случайного выбора включен по умолчанию

// Инициализация аудио контроля
function initAudioControl() {
  const audioPlayer = document.getElementById('audioPlayer');
  const playPauseBtn = document.getElementById('playPauseBtn');
  const playPauseIcon = document.getElementById('playPauseIcon');
  const volumeSlider = document.getElementById('volumeSlider');
  const volumeIcon = document.getElementById('volumeIcon');
  const progressBar = document.getElementById('progressBar');
  const progressFill = document.getElementById('progressFill');
  const currentTimeDisplay = document.getElementById('currentTime');
  const totalTimeDisplay = document.getElementById('totalTime');
  const backgroundAudio = document.getElementById('backgroundAudio');
  const trackNameElement = document.querySelector('.track-name');
  const albumCoverElement = document.getElementById('albumCover');

  let isPlaying = false;
  let isDragging = false;

  // Проверяем наличие всех необходимых элементов
  if (!backgroundAudio) {
    console.error('Аудио элемент не найден');
    return;
  }

  if (!audioPlayer) {
    console.error('Аудио плеер не найден');
    return;
  }

  if (backgroundAudio && audioPlayer && playPauseBtn && volumeSlider) {
    // Установить начальную громкость
    backgroundAudio.volume = volumeSlider.value / 100;

    // Убираем loop, чтобы треки переключались автоматически
    backgroundAudio.loop = false;

    // Загружаем случайный трек при запуске
    currentTrackIndex = getRandomTrackIndex();
    loadTrack(currentTrackIndex);

    // Функция форматирования времени
    function formatTime(seconds) {
      const mins = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      return `${mins}:${secs.toString().padStart(2, '0')}`;
    }

    // Улучшенная функция автозапуска
    const tryAutoplay = () => {
      if (backgroundAudio.readyState >= 2) { // HAVE_CURRENT_DATA или больше
        // Устанавливаем громкость перед воспроизведением
        backgroundAudio.volume = volumeSlider ? volumeSlider.value / 100 : 0.5;

        backgroundAudio.play().then(() => {
          isPlaying = true;
          if (playPauseIcon) {
            playPauseIcon.className = 'fas fa-pause';
          }
          console.log('Аудио запущено автоматически');
        }).catch(e => {
          console.log('Автовоспроизведение заблокировано браузером:', e);
          if (playPauseIcon) {
            playPauseIcon.className = 'fas fa-play';
          }
        });
      } else {
        // Если аудио еще не загружено, попробуем через 300мс
        setTimeout(tryAutoplay, 300);
      }
    };

    // Принудительная загрузка аудио
    backgroundAudio.load();

    // Автозапуск сразу после загрузки страницы
    console.log('Попытка автозапуска сразу после загрузки...');

    // Попытки автозапуска с разными интервалами
    setTimeout(() => tryAutoplay(), 100);
    setTimeout(() => tryAutoplay(), 500);
    setTimeout(() => tryAutoplay(), 1000);
    setTimeout(() => tryAutoplay(), 2000);
    setTimeout(() => tryAutoplay(), 3000);

    // Дополнительные попытки при различных событиях
    backgroundAudio.addEventListener('loadeddata', () => {
      if (!isPlaying) {
        console.log('Аудио данные загружены, попытка автозапуска...');
        setTimeout(tryAutoplay, 100);
      }
    });

    backgroundAudio.addEventListener('canplay', () => {
      if (!isPlaying) {
        console.log('Аудио готово к воспроизведению, попытка автозапуска...');
        setTimeout(tryAutoplay, 100);
      }
    });

    backgroundAudio.addEventListener('canplaythrough', () => {
      if (!isPlaying) {
        console.log('Аудио полностью загружено, попытка автозапуска...');
        setTimeout(tryAutoplay, 100);
      }
    });

    // Обработчик клика по кнопке воспроизведения/паузы
    if (playPauseBtn) {
      playPauseBtn.addEventListener('mousedown', function() {
        isAudioControlActive = true;
      });

      playPauseBtn.addEventListener('mouseup', function() {
        setTimeout(() => { isAudioControlActive = false; }, 100);
      });

      playPauseBtn.addEventListener('click', function() {
        if (isPlaying) {
          backgroundAudio.pause();
        } else {
          backgroundAudio.play().catch(e => {
            console.log('Не удалось воспроизвести аудио:', e);
          });
        }
      });
    }

    // Обработчик изменения громкости
    if (volumeSlider) {
      volumeSlider.addEventListener('mousedown', function() {
        isAudioControlActive = true;
      });

      volumeSlider.addEventListener('mouseup', function() {
        setTimeout(() => { isAudioControlActive = false; }, 100);
      });

      volumeSlider.addEventListener('input', function() {
        const volume = this.value / 100;
        backgroundAudio.volume = volume;

        // Автоматически обновить иконку громкости при изменении слайдера
        if (volumeIcon) {
          if (volume === 0) {
            volumeIcon.className = 'fas fa-volume-mute';
          } else if (volume < 0.5) {
            volumeIcon.className = 'fas fa-volume-down';
          } else {
            volumeIcon.className = 'fas fa-volume-up';
          }
        }
      });
    }

    // Обработчик клика по иконке громкости (mute/unmute) - только при быстром клике
    if (volumeIcon && volumeSlider) {
      let clickTimeout;

      volumeIcon.addEventListener('click', function(e) {
        // Проверяем, что это был быстрый клик, а не перетаскивание
        if (!isVolumeDragging) {
          clearTimeout(clickTimeout);
          clickTimeout = setTimeout(() => {
            if (backgroundAudio.volume > 0) {
              backgroundAudio.volume = 0;
              volumeSlider.value = 0;
              volumeIcon.className = 'fas fa-volume-mute';
            } else {
              backgroundAudio.volume = 0.5;
              volumeSlider.value = 50;
              volumeIcon.className = 'fas fa-volume-up';
            }
          }, 150);
        }
      });
    }

    // Обработчик прогресс-бара
    if (progressBar) {
      progressBar.addEventListener('mousedown', function() {
        isAudioControlActive = true;
      });

      progressBar.addEventListener('mouseup', function() {
        setTimeout(() => { isAudioControlActive = false; }, 100);
      });

      progressBar.addEventListener('click', function(e) {
        if (backgroundAudio.duration) {
          const rect = progressBar.getBoundingClientRect();
          const clickX = e.clientX - rect.left;
          const clickRatio = clickX / rect.width;
          backgroundAudio.currentTime = clickRatio * backgroundAudio.duration;
        }
      });
    }

    // Обработчики событий аудио
    backgroundAudio.addEventListener('play', function() {
      isPlaying = true;
      if (playPauseIcon) {
        playPauseIcon.className = 'fas fa-pause';
      }
    });

    backgroundAudio.addEventListener('pause', function() {
      isPlaying = false;
      if (playPauseIcon) {
        playPauseIcon.className = 'fas fa-play';
      }
    });

    backgroundAudio.addEventListener('loadedmetadata', function() {
      if (totalTimeDisplay) {
        totalTimeDisplay.textContent = formatTime(this.duration || 0);
      }
      // Сброс прогресс-бара при загрузке нового трека
      if (progressFill) {
        progressFill.style.width = '0%';
      }
      if (currentTimeDisplay) {
        currentTimeDisplay.textContent = '0:00';
      }
      console.log('Аудио файл загружен, продолжительность:', this.duration);
    });

    backgroundAudio.addEventListener('timeupdate', function() {
      if (!isDragging && progressFill && currentTimeDisplay) {
        if (this.duration && !isNaN(this.duration) && this.duration > 0) {
          const progress = (this.currentTime / this.duration) * 100;
          progressFill.style.width = Math.min(100, Math.max(0, progress)) + '%';
          currentTimeDisplay.textContent = formatTime(this.currentTime);
        } else {
          // Если продолжительность не определена, показываем только текущее время
          progressFill.style.width = '0%';
          currentTimeDisplay.textContent = formatTime(this.currentTime);
        }
      }
    });

    // Обработчик окончания трека для автопереключения
    backgroundAudio.addEventListener('ended', function() {
      console.log('Трек закончился, переключаемся на следующий...');
      // В случайном режиме выбираем новый случайный трек
      if (isShuffleMode) {
        currentTrackIndex = getRandomTrackIndex();
        loadTrack(currentTrackIndex);
        setTimeout(() => {
          backgroundAudio.play().then(() => {
            console.log('Новый случайный трек запущен:', playlist[currentTrackIndex].title);
          }).catch(e => {
            console.log('Не удалось запустить новый случайный трек:', e);
          });
        }, 100);
      } else {
        nextTrack();
      }
    });

    backgroundAudio.addEventListener('error', function(e) {
      console.error('Ошибка загрузки аудио:', e);
      // При ошибке загрузки сбрасываем UI
      if (progressFill) {
        progressFill.style.width = '0%';
      }
      if (currentTimeDisplay) {
        currentTimeDisplay.textContent = '0:00';
      }
      if (totalTimeDisplay) {
        totalTimeDisplay.textContent = '0:00';
      }
    });

    // Дополнительный обработчик для обеспечения корректного отображения времени
    backgroundAudio.addEventListener('durationchange', function() {
      if (totalTimeDisplay) {
        totalTimeDisplay.textContent = formatTime(this.duration || 0);
      }
    });

    // Попробовать автозапуск при первом взаимодействии
    const enableAudioOnFirstInteraction = () => {
      if (!isPlaying) {
        console.log('Попытка запуска после взаимодействия пользователя...');
        backgroundAudio.play().then(() => {
          isPlaying = true;
          if (playPauseIcon) {
            playPauseIcon.className = 'fas fa-pause';
          }
          console.log('Аудио запущено после взаимодействия');
        }).catch(e => {
          console.log('Не удалось запустить аудио даже после взаимодействия:', e);
          tryAutoplay();
        });
      }
      // Удаляем обработчики после первого взаимодействия
      document.removeEventListener('click', enableAudioOnFirstInteraction);
      document.removeEventListener('keydown', enableAudioOnFirstInteraction);
      document.removeEventListener('touchstart', enableAudioOnFirstInteraction);
      document.removeEventListener('mousemove', enableAudioOnFirstInteraction);
    };

    // Добавляем обработчики для различных типов взаимодействия
    document.addEventListener('click', enableAudioOnFirstInteraction);
    document.addEventListener('keydown', enableAudioOnFirstInteraction);
    document.addEventListener('touchstart', enableAudioOnFirstInteraction);
    document.addEventListener('mousemove', enableAudioOnFirstInteraction);

    // Попытка автозапуска при фокусе на окне
    window.addEventListener('focus', () => {
      if (!isPlaying) {
        console.log('Окно получило фокус, попытка автозапуска...');
        setTimeout(tryAutoplay, 100);
      }
    });
  }

  // Инициализация регулировки звука перетаскиванием
  initVolumeWheelControl();

  // Инициализация перетаскивания слайдера громкости
  initVolumeSliderDrag();

}

// Функция загрузки трека
function loadTrack(index) {
  const backgroundAudio = document.getElementById('backgroundAudio');
  const trackNameElement = document.querySelector('.track-name');
  const albumCoverElement = document.getElementById('albumCover');
  const progressFill = document.getElementById('progressFill');
  const currentTimeDisplay = document.getElementById('currentTime');
  const totalTimeDisplay = document.getElementById('totalTime');

  if (playlist[index]) {
    const track = playlist[index];

    // Сброс UI элементов перед загрузкой нового трека
    if (progressFill) {
      progressFill.style.width = '0%';
    }
    if (currentTimeDisplay) {
      currentTimeDisplay.textContent = '0:00';
    }
    if (totalTimeDisplay) {
      totalTimeDisplay.textContent = '3:00';
    }

    // Обновляем аудио источник
    backgroundAudio.src = track.src;

    // Обновляем название трека
    if (trackNameElement) {
      trackNameElement.textContent = track.title;
    }

    // Обновляем обложку
    if (albumCoverElement) {
      albumCoverElement.src = track.cover;
      albumCoverElement.alt = track.title;
    }

    // Загружаем новый трек
    backgroundAudio.load();

    console.log('Загружен трек:', track.title);
  }
}

// Функция получения случайного индекса трека
function getRandomTrackIndex() {
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * playlist.length);
  } while (newIndex === currentTrackIndex && playlist.length > 1);
  return newIndex;
}

// Добавляем блокировку перемещения для кнопок управления треками
document.addEventListener('DOMContentLoaded', function() {
  // Добавляем обработчики для всех кнопок управления треками
  const trackButtons = document.querySelectorAll('.track-btn, .play-pause-btn');
  trackButtons.forEach(button => {
    button.addEventListener('mousedown', function() {
      isAudioControlActive = true;
    });

    button.addEventListener('mouseup', function() {
      setTimeout(() => { isAudioControlActive = false; }, 100);
    });

    button.addEventListener('touchstart', function() {
      isAudioControlActive = true;
    });

    button.addEventListener('touchend', function() {
      setTimeout(() => { isAudioControlActive = false; }, 100);
    });
  });
});

// Функция переключения на следующий трек
function nextTrack() {
  if (isShuffleMode) {
    currentTrackIndex = getRandomTrackIndex();
  } else {
    currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
  }
  loadTrack(currentTrackIndex);

  // Автоматически запускаем следующий трек
  setTimeout(() => {
    const backgroundAudio = document.getElementById('backgroundAudio');
    if (backgroundAudio) {
      backgroundAudio.play().then(() => {
        console.log('Следующий трек запущен автоматически:', playlist[currentTrackIndex].title);
      }).catch(e => {
        console.log('Не удалось запустить следующий трек:', e);
      });
    }
  }, 100);
}

// Функция переключения на предыдущий трек
function prevTrack() {
  if (isShuffleMode) {
    currentTrackIndex = getRandomTrackIndex();
  } else {
    currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
  }
  loadTrack(currentTrackIndex);

  setTimeout(() => {
    const backgroundAudio = document.getElementById('backgroundAudio');
    if (backgroundAudio) {
      backgroundAudio.play().then(() => {
        console.log('Предыдущий трек запущен:', playlist[currentTrackIndex].title);
      }).catch(e => {
        console.log('Не удалось запустить предыдущий трек:', e);
      });
    }
  }, 100);
}

// Функция переключения режима shuffle
function toggleShuffle() {
  isShuffleMode = !isShuffleMode;
  const shuffleBtn = document.getElementById('shuffleBtn');
  if (shuffleBtn) {
    if (isShuffleMode) {
      shuffleBtn.style.color = '#4a90e2';
      shuffleBtn.title = 'Случайный порядок (включен)';
    } else {
      shuffleBtn.style.color = '#b8c2d9';
      shuffleBtn.title = 'Случайный порядок (отключен)';
    }
  }
  console.log('Режим shuffle:', isShuffleMode ? 'включен' : 'отключен');
}

// Плавный скролл для якорей
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Инициализация перетаскивания аудио плеера
function initAudioPlayerDrag() {
  const audioPlayer = document.getElementById('audioPlayer');
  const dragHandle = document.getElementById('dragHandle');

  if (!audioPlayer || !dragHandle) return;

  let isDragging = false;
  let currentX;
  let currentY;
  let initialX;
  let initialY;
  let xOffset = 0;
  let yOffset = 0;

  function dragStart(e) {
    // Проверяем, не взаимодействует ли пользователь с элементами управления звуком
    if (isAudioControlActive || isVolumeDragging) {
      return;
    }

    if (e.type === "touchstart") {
      initialX = e.touches[0].clientX - xOffset;
      initialY = e.touches[0].clientY - yOffset;
    } else {
      initialX = e.clientX - xOffset;
      initialY = e.clientY - yOffset;
    }

    if (e.target === dragHandle || dragHandle.contains(e.target)) {
      isDragging = true;
      audioPlayer.classList.add('dragging');
    }
  }

  function dragEnd() {
    initialX = currentX;
    initialY = currentY;
    isDragging = false;
    audioPlayer.classList.remove('dragging');
  }

  function drag(e) {
    if (isDragging) {
      e.preventDefault();

      if (e.type === "touchmove") {
        currentX = e.touches[0].clientX - initialX;
        currentY = e.touches[0].clientY - initialY;
      } else {
        currentX = e.clientX - initialX;
        currentY = e.clientY - initialY;
      }

      xOffset = currentX;
      yOffset = currentY;

      // Ограничиваем перемещение в пределах экрана
      const rect = audioPlayer.getBoundingClientRect();
      const maxX = window.innerWidth - rect.width;
      const maxY = window.innerHeight - rect.height;

      xOffset = Math.min(Math.max(0, xOffset), maxX);
      yOffset = Math.min(Math.max(0, yOffset), maxY);

      audioPlayer.style.left = xOffset + 'px';
      audioPlayer.style.top = yOffset + 'px';
      audioPlayer.style.transform = 'none';
    }
  }

  // События мыши
  dragHandle.addEventListener('mousedown', dragStart);
  document.addEventListener('mousemove', drag);
  document.addEventListener('mouseup', dragEnd);

  // События касания для мобильных устройств
  dragHandle.addEventListener('touchstart', dragStart);
  document.addEventListener('touchmove', drag);
  document.addEventListener('touchend', dragEnd);
}

// Глобальные переменные для отслеживания перетаскивания
let isVolumeDragging = false;
let isAudioControlActive = false;

// Инициализация регулировки звука перетаскиванием иконки
function initVolumeWheelControl() {
  const audioPlayer = document.getElementById('audioPlayer');
  const backgroundAudio = document.getElementById('backgroundAudio');
  const volumeSlider = document.getElementById('volumeSlider');
  const volumeIcon = document.getElementById('volumeIcon');

  if (!audioPlayer || !backgroundAudio || !volumeSlider || !volumeIcon) return;

  // Инициализируем переменную isVolumeDragging если она не определена
  if (typeof isVolumeDragging === 'undefined') {
    window.isVolumeDragging = false;
  }

  let startX = 0;
  let startVolume = 0;

  // Обработчик начала перетаскивания иконки громкости
  volumeIcon.addEventListener('mousedown', function(e) {
    e.preventDefault();
    e.stopPropagation();

    isVolumeDragging = true;
    startX = e.clientX;
    startVolume = parseInt(volumeSlider.value);

    // Меняем курсор
    volumeIcon.style.cursor = 'grabbing';

    // Блокируем перетаскивание аудио плеера
    audioPlayer.style.pointerEvents = 'none';
    const dragHandle = document.getElementById('dragHandle');
    if (dragHandle) {
      dragHandle.style.pointerEvents = 'none';
    }

    // Добавляем обработчики для движения мыши
    document.addEventListener('mousemove', handleVolumeMove);
    document.addEventListener('mouseup', handleVolumeEnd);
  });

  // Обработчик движения мыши при перетаскивании
  function handleVolumeMove(e) {
    if (!isVolumeDragging) return;

    e.preventDefault();

    // Вычисляем разницу по X
    const deltaX = e.clientX - startX;

    // Чувствительность (можно настроить)
    const sensitivity = 0.5;

    // Вычисляем новую громкость
    let newVolume = startVolume + (deltaX * sensitivity);
    newVolume = Math.max(0, Math.min(100, newVolume));

    // Обновляем слайдер и громкость аудио
    volumeSlider.value = newVolume;
    backgroundAudio.volume = newVolume / 100;

    // Иконка изменяется только при ручном перетаскивании самой иконки
    // Здесь только изменяем громкость, без изменения иконки

    // Показываем подсказку
    showVolumeTooltip(Math.round(newVolume));
  }

  // Обработчик окончания перетаскивания
  function handleVolumeEnd(e) {
    if (!isVolumeDragging) return;

    isVolumeDragging = false;
    volumeIcon.style.cursor = 'pointer';

    // Разблокируем перетаскивание аудио плеера
    audioPlayer.style.pointerEvents = 'auto';
    const dragHandle = document.getElementById('dragHandle');
    if (dragHandle) {
      dragHandle.style.pointerEvents = 'auto';
    }

    // Удаляем обработчики
    document.removeEventListener('mousemove', handleVolumeMove);
    document.removeEventListener('mouseup', handleVolumeEnd);
  }

  // Добавляем стили для иконки громкости
  volumeIcon.style.cursor = 'pointer';
  volumeIcon.style.userSelect = 'none';

  // Мобильная поддержка (touch события)
  volumeIcon.addEventListener('touchstart', function(e) {
    e.preventDefault();
    e.stopPropagation();

    isVolumeDragging = true;
    startX = e.touches[0].clientX;
    startVolume = parseInt(volumeSlider.value);

    volumeIcon.style.cursor = 'grabbing';

    // Блокируем перетаскивание аудио плеера
    audioPlayer.style.pointerEvents = 'none';
    const dragHandle = document.getElementById('dragHandle');
    if (dragHandle) {
      dragHandle.style.pointerEvents = 'none';
    }

    document.addEventListener('touchmove', handleVolumeTouchMove);
    document.addEventListener('touchend', handleVolumeTouchEnd);
  });

  function handleVolumeTouchMove(e) {
    if (!isVolumeDragging) return;

    e.preventDefault();

    const deltaX = e.touches[0].clientX - startX;
    const sensitivity = 0.5;

    let newVolume = startVolume + (deltaX * sensitivity);
    newVolume = Math.max(0, Math.min(100, newVolume));

    volumeSlider.value = newVolume;
    backgroundAudio.volume = newVolume / 100;

    // Иконка изменяется только при ручном перетаскивании самой иконки на мобильном
    // Здесь только изменяем громкость, без изменения иконки

    showVolumeTooltip(Math.round(newVolume));
  }

  function handleVolumeTouchEnd(e) {
    if (!isVolumeDragging) return;

    isVolumeDragging = false;
    volumeIcon.style.cursor = 'pointer';

    // Разблокируем перетаскивание аудио плеера
    audioPlayer.style.pointerEvents = 'auto';
    const dragHandle = document.getElementById('dragHandle');
    if (dragHandle) {
      dragHandle.style.pointerEvents = 'auto';
    }

    document.removeEventListener('touchmove', handleVolumeTouchMove);
    document.removeEventListener('touchend', handleVolumeTouchEnd);
  }
}

// Инициализация перетаскивания слайдера громкости
function initVolumeSliderDrag() {
  const volumeSlider = document.getElementById('volumeSlider');
  const backgroundAudio = document.getElementById('backgroundAudio');
  const volumeIcon = document.getElementById('volumeIcon');

  if (!volumeSlider || !backgroundAudio || !volumeIcon) return;

  let isSliderDragging = false;

  // Обработчик начала перетаскивания слайдера
  volumeSlider.addEventListener('mousedown', function(e) {
    isSliderDragging = true;
    updateVolumeFromSlider(e);

    document.addEventListener('mousemove', handleSliderMove);
    document.addEventListener('mouseup', handleSliderEnd);
  });

  // Обработчик движения мыши при перетаскивании слайдера
  function handleSliderMove(e) {
    if (!isSliderDragging) return;
    updateVolumeFromSlider(e);
  }

  // Обработчик окончания перетаскивания слайдера
  function handleSliderEnd(e) {
    isSliderDragging = false;

    document.removeEventListener('mousemove', handleSliderMove);
    document.removeEventListener('mouseup', handleSliderEnd);
  }

  // Функция обновления громкости из позиции мыши на слайдере
  function updateVolumeFromSlider(e) {
    const rect = volumeSlider.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (clickX / rect.width) * 100));

    volumeSlider.value = percentage;
    backgroundAudio.volume = percentage / 100;

    // Автоматически обновляем иконку громкости
    if (volumeIcon) {
      if (percentage === 0) {
        volumeIcon.className = 'fas fa-volume-mute';
      } else if (percentage < 50) {
        volumeIcon.className = 'fas fa-volume-down';
      } else {
        volumeIcon.className = 'fas fa-volume-up';
      }
    }
  }

  // Мобильная поддержка (touch события) для слайдера
  volumeSlider.addEventListener('touchstart', function(e) {
    isSliderDragging = true;
    updateVolumeFromTouch(e);

    document.addEventListener('touchmove', handleSliderTouchMove);
    document.addEventListener('touchend', handleSliderTouchEnd);
  });

  function handleSliderTouchMove(e) {
    if (!isSliderDragging) return;
    e.preventDefault();
    updateVolumeFromTouch(e);
  }

  function handleSliderTouchEnd(e) {
    isSliderDragging = false;

    document.removeEventListener('touchmove', handleSliderTouchMove);
    document.removeEventListener('touchend', handleSliderTouchEnd);
  }

  function updateVolumeFromTouch(e) {
    const rect = volumeSlider.getBoundingClientRect();
    const touchX = e.touches[0].clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (touchX / rect.width) * 100));

    volumeSlider.value = percentage;
    backgroundAudio.volume = percentage / 100;

    // Автоматически обновляем иконку громкости
    if (volumeIcon) {
      if (percentage === 0) {
        volumeIcon.className = 'fas fa-volume-mute';
      } else if (percentage < 50) {
        volumeIcon.className = 'fas fa-volume-down';
      } else {
        volumeIcon.className = 'fas fa-volume-up';
      }
    }
  }
}

// Функция показа подсказки громкости
function showVolumeTooltip(volume) {
  // Удаляем существующую подсказку
  const existingTooltip = document.querySelector('.volume-tooltip');
  if (existingTooltip) {
    existingTooltip.remove();
  }

  // Создаем новую подсказку
  const tooltip = document.createElement('div');
  tooltip.className = 'volume-tooltip';
  tooltip.textContent = 'Громкость изменена';
  tooltip.style.cssText = `
    position: fixed;
    background: rgba(17, 17, 17, 0.9);
    color: white;
    padding: 8px 12px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    z-index: 10000;
    pointer-events: none;
    border: 1px solid rgba(74, 144, 226, 0.3);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(10px);
    transform: translate(-50%, -50%);
  `;

  // Позиционируем рядом с аудио плеером
  const audioPlayer = document.getElementById('audioPlayer');
  const rect = audioPlayer.getBoundingClientRect();
  tooltip.style.left = (rect.left + rect.width / 2) + 'px';
  tooltip.style.top = (rect.top - 50) + 'px';

  document.body.appendChild(tooltip);

  // Удаляем подсказку через 1.5 секунды
  setTimeout(() => {
    if (tooltip && tooltip.parentNode) {
      tooltip.style.opacity = '0';
      tooltip.style.transition = 'opacity 0.3s ease';
      setTimeout(() => {
        if (tooltip.parentNode) {
          tooltip.remove();
        }
      }, 300);
    }
  }, 1500);
}
