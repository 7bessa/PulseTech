import './index.css';

const themeRoot = document.documentElement;
const themeButton = document.querySelector<HTMLButtonElement>('[data-theme-toggle]');

function updateThemeButton(theme: string) {
  if (!themeButton) return;
  themeButton.setAttribute('aria-label', theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro');
  themeButton.setAttribute('title', theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro');
  themeButton.setAttribute('aria-pressed', String(theme === 'light'));
}

updateThemeButton(themeRoot.dataset.theme ?? 'dark');
themeButton?.addEventListener('click', () => {
  const nextTheme = themeRoot.dataset.theme === 'dark' ? 'light' : 'dark';
  themeRoot.dataset.theme = nextTheme;
  updateThemeButton(nextTheme);
  try {
    window.localStorage.setItem('pulsetech-theme', nextTheme);
  } catch {
    // The theme still changes for this visit when storage is unavailable.
  }
});

const contactForm = document.querySelector<HTMLFormElement>('[data-contact-form]');
contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!contactForm.reportValidity()) return;

  const values = new FormData(contactForm);
  const body = `Nome: ${values.get('nome')}\nE-mail: ${values.get('email')}\n\n${values.get('mensagem')}`;
  window.location.href = `mailto:pulsetech7@outlook.com?subject=${encodeURIComponent('Contato pelo site')}&body=${encodeURIComponent(body)}`;
});
