document.addEventListener('DOMContentLoaded', function() {
    // Contatore esclusive
    let exclusiveCount = 42;
    const exclusiveElement = document.querySelector('.exclusive-tag');
    
    setInterval(() => {
        exclusiveCount++;
        exclusiveElement.textContent = `🚨 ${exclusiveCount} Exclusive`;
    }, 5000);
    
    // Effetti hover card notizie
    document.querySelectorAll('.news-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.querySelector('img').style.transform = 'scale(1.05)';
            this.querySelector('.news-title').style.color = 'var(--rosso)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.querySelector('img').style.transform = 'scale(1)';
            this.querySelector('.news-title').style.color = 'var(--blu)';
        });
    });
    
    // Animazione pulsante CTA
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('mouseenter', () => {
            ctaButton.innerHTML = 'LEGGI L\'ULTIMO AGGIORNAMENTO <i class="fas fa-arrow-right"></i>';
        });
        
        ctaButton.addEventListener('mouseleave', () => {
            ctaButton.innerHTML = 'LEGGI L\'ULTIMO AGGIORNAMENTO →';
        });
    }
    
    // Effetti hover nav
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'translateY(-3px)';
        });
        
        link.addEventListener('mouseleave', () => {
            link.style.transform = 'translateY(0)';
        });
    });
    
    // Messaggio in console
    console.log('%c🚧 LO dice MAx - Pagina in costruzione 🚧', 
        'color: #D72638; font-size: 16px; font-weight: bold; background: #F7F7F7; padding: 5px;');
});



document.addEventListener('DOMContentLoaded', function() {
    // ...altri script...

    // ARCHIVIAZIONE AUTOMATICA
    document.querySelectorAll('.news-card').forEach(card => {
        const dataAttr = card.dataset.date;
        if (!dataAttr) return;

        const postDate = new Date(dataAttr);
        const today = new Date();
        const daysOld = (today - postDate) / (1000 * 60 * 60 * 24);

        if (daysOld > 14) {
            card.classList.add('archived');
            const archiveGrid = document.querySelector('.archive-grid');
            if (archiveGrid) {
                archiveGrid.appendChild(card.cloneNode(true));
            }
            card.remove();
        }
    });
});
// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const navList = document.querySelector('.nav-list');
  
  menuBtn.addEventListener('click', function() {
    navList.classList.toggle('active');
    this.innerHTML = navList.classList.contains('active') ? 
      '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
  });
  
  // Smooth scrolling for anchor links
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
        
        // Close mobile menu if open
        if (navList.classList.contains('active')) {
          navList.classList.remove('active');
          menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        }
      }
    });
  });
  
  // Add animation class when elements are in viewport
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.animate__animated');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementPosition < windowHeight - 100) {
        const animationClass = element.classList[1];
        element.classList.add(animationClass);
      }
    });
  };
  
  // Run on load and scroll
  animateOnScroll();
  window.addEventListener('scroll', animateOnScroll);
  
  // Social share functionality
  document.querySelectorAll('.social-share a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const url = encodeURIComponent(window.location.href);
      const title = encodeURIComponent(document.title);
      
      if (this.classList.contains('fa-facebook-f')) {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, 'facebook-share-dialog', 'width=626,height=436');
      } else if (this.classList.contains('fa-twitter')) {
        window.open(`https://twitter.com/intent/tweet?text=${title}&url=${url}`, 'twitter-share', 'width=550,height=235');
      } else if (this.classList.contains('fa-whatsapp')) {
        window.open(`https://wa.me/?text=${title} ${url}`, 'whatsapp-share');
      }
    });
  });
});
