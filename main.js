
function showContent(id, element) {
   
    document.querySelectorAll('.content').forEach(box => box.classList.remove('active'));

   
    document.getElementById(id).classList.add('active');

   
    document.querySelectorAll('.box2 p').forEach(p => p.classList.remove('active'));

   
    element.classList.add('active');
  } 
  
 function changeLanguage(lang) {
  // Главный заголовок
  const h1 = document.querySelector(".box1 h1");
  const h5 = document.querySelector(".box1 h5");

  // Меню навигации
  const navItems = document.querySelectorAll(".box2 p");

  // Контент "Обо мне"
  const aboutTitle = document.querySelector("#box3 h2");
  const aboutText = document.querySelector("#box3 p");

  // Контент "Навыки"
  const skillsTitle = document.querySelector("#box4 h2");
  const skillsList = document.querySelectorAll("#box4 li");

  // Контент "Факты"
  const factsTitle = document.querySelector("#box5 h1");
  const factsList = document.querySelectorAll("#box5 li");

  // Контент "Контакты"
  const contactTitle = document.querySelector("#box6 h1");
  const contactEmail = document.querySelector("#box6 h5:nth-of-type(1)");
  const contactPhone = document.querySelector("#box6 h5:nth-of-type(2)");
  const contactinstagram = document.querySelector("#box6 h5:nth-of-type(3)");


  if (lang === "de") {
    h1.textContent = "Hallo, ich bin Jahongir";
    h5.textContent = "Wilkommen auf meiner Seite!";

    navItems[0].textContent = "Über mich";
    navItems[1].textContent = "Meine Fähigkeiten";
    navItems[2].textContent = "Interessante Fakten";
    navItems[3].textContent = "Kontakte";

    aboutTitle.textContent = "Über mich";
    aboutText.textContent =
      "Ich heiße Jahongir und komme aus Tadschikistan. Technologie begeistert mich – besonders IT und Webentwicklung. Mein Ziel ist es, in der Zukunft als IT-Spezialist zu arbeiten und digitale Lösungen zu gestalten. Ich bin kreativ, lernbereit und motiviert, Neues zu entdecken und umzusetzen.";

    skillsTitle.textContent = "Meine Fähigkeiten";
    skillsList[0].textContent = "HTML, CSS";
    skillsList[1].textContent = "JavaScript";
    skillsList[2].textContent = "GitHub";

    factsTitle.textContent = "Interessante Fakten";
    factsList[0].textContent = "Ich liebe es, neue Sprachen zu lernen.";
    factsList[1].textContent = "Ich interessiere mich für Computerspiele und Videobearbeitung.";
    factsList[2].textContent = "Ich liebe es, neuen Code zu lernen.";

    contactTitle.textContent = "Kontakte";
    contactEmail.innerHTML = 'Meine Email: <a href="">Jakhongir.1206@gamil.com</a>';
    contactPhone.innerHTML = 'Meine Nummer: <a href="">+4915731268980</a>';
    contactinstagram.innerHTML = 'Mein Instagram: <a href="https://www.instagram.com/jakhongir_84?igsh=cjNmeTB6Y2ptNzQw">jakhongir_84</a>';
  } else if (lang === "en") {
    h1.textContent = "Hello, I'm Jahongir";
    h5.textContent = "Welcome to my page!";

    navItems[0].textContent = "About Me";
    navItems[1].textContent = "My Skills";
    navItems[2].textContent = "Interesting Facts";
    navItems[3].textContent = "Contacts";

    aboutTitle.textContent = "About Me";
    aboutText.textContent =
      "My name is Jahongir and I'm from Tajikistan. I'm passionate about technology – especially IT and web development. My goal is to become an IT specialist and create digital solutions. I'm creative, eager to learn, and motivated to explore and implement new ideas.";

    skillsTitle.textContent = "My Skills";
    skillsList[0].textContent = "HTML, CSS";
    skillsList[1].textContent = "JavaScript";
    skillsList[2].textContent = "GitHub";

    factsTitle.textContent = "Interesting Facts";
    factsList[0].textContent = "I love learning new languages.";
    factsList[1].textContent = "I'm interested in video games and video editing.";
    factsList[2].textContent = "I enjoy learning new code.";

    contactTitle.textContent = "Contacts";
    contactEmail.innerHTML = 'My Email: <a href="">Jakhongir.1206@gamil.com</a>';
    contactPhone.innerHTML = 'My Number: <a href="">+4915731268980</a>';
    contactinstagram.innerHTML = 'My Instagram: <a href="https://www.instagram.com/jakhongir_84?igsh=cjNmeTB6Y2ptNzQw">jakhongir_84</a>';
  } else if (lang === "ru") {
    h1.textContent = "Привет, я Джахонгир";
    h5.textContent = "Добро пожаловать на мою страницу!";

    navItems[0].textContent = "Обо мне";
    navItems[1].textContent = "Мои навыки";
    navItems[2].textContent = "Интересные факты";
    navItems[3].textContent = "Контакты";

    aboutTitle.textContent = "Обо мне";
    aboutText.textContent =
      "Меня зовут Джахонгир, я из Таджикистана. Меня вдохновляют технологии — особенно IT и веб-разработка. Моя цель — стать IT-специалистом и создавать цифровые решения. Я креативный, любознательный и мотивированный человек, стремящийся к новым знаниям.";

    skillsTitle.textContent = "Мои навыки";
    skillsList[0].textContent = "HTML, CSS";
    skillsList[1].textContent = "JavaScript";
    skillsList[2].textContent = "GitHub";

    factsTitle.textContent = "Интересные факты";
    factsList[0].textContent = "Я люблю изучать новые языки.";
    factsList[1].textContent = "Мне интересны видеоигры и видеомонтаж.";
    factsList[2].textContent = "Мне нравится изучать новый код.";

    contactTitle.textContent = "Контакты";
    contactEmail.innerHTML = 'Моя почта: <a href="">Jakhongir.1206@gamil.com</a>';
    contactPhone.innerHTML = 'Мой номер: <a href="">+4915731268980</a>';
    contactinstagram.innerHTML = 'Мой Instagram: <a href="https://www.instagram.com/jakhongir_84?igsh=cjNmeTB6Y2ptNzQw">jakhongir_84</a>';
  }
}