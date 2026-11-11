const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.main-nav');

if (menuButton && menu) {
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(open));
    menu.classList.toggle('is-open', open);
  });

  menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menu.classList.remove('is-open');
  }));
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const form = document.getElementById('contact-form');
const feedback = document.getElementById('form-feedback');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const fields = new FormData(form);
    const subject = `Contato pelo site — ${fields.get('subject')}`;
    const body = [
      `Nome: ${fields.get('name')}`,
      `E-mail: ${fields.get('email')}`,
      `Assunto: ${fields.get('subject')}`,
      '',
      'Mensagem:',
      fields.get('message') || '(não informada)',
    ].join('\n');

    window.location.href = `mailto:fojeda@adv.oabsp.org.br?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    if (feedback) feedback.textContent = 'Seu aplicativo de e-mail foi aberto. Revise e envie a mensagem por lá.';
  });
}
