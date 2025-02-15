// Функция для работы с модальными окнами
function initModals() {
  const loginBtn = document.querySelector('.login-btn');
  const registerBtn = document.querySelector('.register-btn');
  const modals = document.querySelectorAll('.modal');
  const closeButtons = document.querySelectorAll('.close-modal');

  // Функция открытия модального окна
  function openModal(modalClass) {
    const modal = document.querySelector(modalClass);
    modal.classList.add('show');
  }

  // Функция закрытия модального окна
  function closeModal(modal) {
    modal.classList.remove('show');
  }

  // Обработчики событий для кнопок
  loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openModal('.login-modal');
  });

  registerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openModal('.register-modal');
  });

  // Закрытие при клике на крестик
  closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = button.closest('.modal');
      closeModal(modal);
    });
  });

  // Закрытие при клике вне модального окна
  modals.forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal(modal);
      }
    });
  });

  // Закрытие при нажатии Esc
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modals.forEach(modal => {
        if (modal.classList.contains('show')) {
          closeModal(modal);
        }
      });
    }
  });

  // Обработка отправки форм
  const loginForm = document.querySelector('.login-form');
  const registerForm = document.querySelector('.register-form');

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Здесь будет логика обработки входа
    console.log('Выполняется вход...');
  });

  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Здесь будет логика обработки регистрации
    console.log('Выполняется регистрация...');
  });
}

// Инициализация после загрузки DOM
document.addEventListener('DOMContentLoaded', initModals);
