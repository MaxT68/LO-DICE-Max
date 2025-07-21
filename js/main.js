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

// Dopo 14 giorni sposta in archivio
document.querySelectorAll('.news-card').forEach(card => {
    const postDate = new Date(card.dataset.date); // Aggiungi data come data-date="2025-06-20"
    const daysOld = (new Date() - postDate) / (1000 * 60 * 60 * 24);
    
    if(daysOld > 14) {
        card.classList.add('archived');
        document.querySelector('.archive-grid').appendChild(card.cloneNode(true));
        card.remove();
    }
});
