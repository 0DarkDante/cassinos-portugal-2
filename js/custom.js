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
