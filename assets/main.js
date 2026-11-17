// Перемикач мов
document.addEventListener('DOMContentLoaded', () => {
  const langButtons = document.querySelectorAll('.lang-btn');

  langButtons.forEach(button => {
    button.addEventListener('click', () => {
      langButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const selectedLang = button.getAttribute('data-lang');
      document.documentElement.setAttribute('lang', selectedLang);
      
      console.log(`Обрано мову: ${selectedLang.toUpperCase()}`);
    });
  });

  // Кнопка наверх
  const scrollTopBtn = document.getElementById('scrollToTopBtn');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});


document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.getElementById('silhouetteWrapper');
    const container = document.getElementById('phrasesContainer');

    if (!wrapper || !container) return;

    const phrases = [
        "успіх", "ти зможеш", "все не так легко", "крок за кроком",
        "йди до мети", "помилки - це досвід", "вір у себе", 
        "розвивайся щодня", "твори своє майбутнє", "натхнення",
        "наполегливість", "дій!", "сміливість", "аналізуй", 
        "фокус", "усвідомленість", "впевненість", "перемагай"
    ];

    const positions = [
        { top: '15%', left: '8%' },
        { top: '28%', left: '2%' },
        { top: '42%', left: '6%' },
        { top: '56%', left: '12%' },
        { top: '70%', left: '8%' },
        { top: '82%', left: '10%' },
        { top: '22%', left: '22%' },
        { top: '48%', left: '18%' },
        { top: '65%', left: '22%' },
        
        { top: '15%', right: '8%' },
        { top: '28%', right: '2%' },
        { top: '42%', right: '6%' },
        { top: '56%', right: '12%' },
        { top: '70%', right: '8%' },
        { top: '82%', right: '15%' },
        { top: '22%', right: '22%' },
        { top: '48%', right: '18%' },
        { top: '65%', right: '22%' }
    ];

    phrases.forEach((text, index) => {
        const span = document.createElement('span');
        span.className = 'floating-phrase';
        span.textContent = text;
        
        const pos = positions[index];
        if (pos.top) span.style.top = pos.top;
        if (pos.left) span.style.left = pos.left;
        if (pos.right) span.style.right = pos.right;

        span.style.transitionDelay = `${index * 0.03}s`;

        container.appendChild(span);
    });
});