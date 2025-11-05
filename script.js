document.getElementById('whatsappForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const nome = document.getElementById('nome').value;
        const mensagem = document.getElementById('mensagem').value;

        const texto = `Olá, meu nome é ${nome}. %0A${mensagem}`;
        const numero = "5541985222889";
        const url = `https://wa.me/${numero}?text=${texto}`;

        window.open(url, "_blank");
    });

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navbar = document.getElementById("navbar");

  menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");

    if (navbar.classList.contains("active")) {
      menuToggle.innerHTML = "&times;";
    } else {
      menuToggle.innerHTML = "&#9776;";
    }
  });

  document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", () => {
      navbar.classList.remove("active");
      menuToggle.innerHTML = "&#9776;";
    });
  });
});

document.querySelectorAll('.toggle-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.card');
    card.classList.toggle('ativo');
  });
});