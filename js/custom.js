document.addEventListener("DOMContentLoaded", () => {
  const searchParams = new URLSearchParams(window.location.search);
  const links = document.querySelectorAll("a");

  // Получаем значение gclid из URL
  const gclidValue = searchParams.get("gclid");

  // Проверяем, есть ли gclid и добавляем его как g_clid
  if (gclidValue) {
    searchParams.set("g_clid", gclidValue);
  }

  // Получаем все параметры из URL
  let params = '';
  searchParams.forEach((value, key) => {
    if (params !== '') {
      params += '&';
    }
    params += `${key}=${value}`;
  });

  // Получаем домен из текущего URL
  const currentUrl = new URL(window.location.href);
  const param_domain = currentUrl.hostname;

  // Добавляем параметр домена к остальным параметрам
  params += `&d=${param_domain}`;

  Array.from(links).forEach((link) => {
    console.log("before", link.href);
    const url = link.href;
    // Проверяем, есть ли уже параметры в URL
    const separator = url.includes('?') ? '&' : '?';
    const newUrl = `${url}${separator}${params}`; // Добавляем параметры к URL
    link.setAttribute("href", newUrl);
    console.log("after", link.href);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("cookie-popup");
  const btnAccept = document.getElementById("accept");
  const btnReject = document.getElementById("reject");

  // Якщо користувач ще не зробив вибір — показати попап
  if (!localStorage.getItem("cookieAccepted")) {
    popup.style.display = "block"; // або "flex" — залежно від CSS
  }

  btnAccept.addEventListener("click", function (e) {
    e.preventDefault();
    localStorage.setItem("cookieAccepted", "true");
    popup.style.display = "none";
  });

  btnReject.addEventListener("click", function (e) {
    e.preventDefault();
    localStorage.setItem("cookieAccepted", "false");
    popup.style.display = "none";
  });
});

// MODAL

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('age-modal');
  const btnYes = document.getElementById('btn-yes');
  const btnNo = document.getElementById('btn-no');

  // Перевіряємо, чи користувач вже підтвердив повноліття
  const isAdult = localStorage.getItem('ageConfirmed');

  if (isAdult === 'true') {
    // Якщо вже підтверджено — не показуємо попап
    modal.style.display = 'none';
  } else {
    // Інакше — показуємо модальне вікно
    modal.style.display = 'flex';
  }

  // Якщо натиснуто "Так" — зберігаємо відповідь і ховаємо попап
  btnYes.addEventListener('click', () => {
    localStorage.setItem('ageConfirmed', 'true');
    modal.style.display = 'none';
  });

  // Якщо натиснуто "Ні" — редірект на зовнішній сайт (наприклад, Google)
  btnNo.addEventListener('click', () => {
    window.location.href = 'https://www.google.com';
  });
});
localStorage.clear()

  const contactLink = document.querySelector('.logosDiv a[href="responsible_page.html"]');
  const modal = document.getElementById('contact-modal');
  const closeBtn = document.getElementById('close-modal');

  contactLink.addEventListener('click', (e) => {
    e.preventDefault(); // скасовує перехід
    modal.style.display = 'flex';
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Якщо хочеш зберігати форму або надіслати її — оброби submit:
  document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Formulário enviado com sucesso!');
    modal.style.display = 'none';
  });