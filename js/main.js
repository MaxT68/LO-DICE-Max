document.addEventListener('DOMContentLoaded', function() {
    // Contatore esclusive
    let exclusiveCount = 42;
    const updateExclusiveCounter = () => {
        document.querySelector('.exclusive-tag').textContent = `🚨 ${exclusiveCount} Exclusive`;
        exclusiveCount++;
    };
    
    // Aggiorna ogni 24 ore (86400000 ms) - per demo ogni 5 secondi
    setInterval(updateExclusiveCounter, 5000);
    
    // Animazione progress bar
    const progressBar = document.querySelector('.progress');
    let progress = 65;
    const animateProgress = () => {
        let width = 65;
        const interval = setInterval(() => {
            if (width <= progress) {
                progressBar.style.width = `${width}%`;
                document.querySelector('.progress-text').textContent = `${width}% completato`;
                width++;
            } else {
                clearInterval(interval);
            }
        }, 30);
    };
    
    // Avvia l'animazione dopo 1 secondo
    setTimeout(animateProgress, 1000);
    
    // Effetti hover nav
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'translateY(-3px)';
        });
        
        link.addEventListener('mouseleave', () => {
            link.style.transform = 'translateY(0)';
        });
    });
    
    // Animazione pallone
    const animateBall = () => {
        const ball = document.querySelector('.x-special::before');
        if (ball) {
            ball.style.animation = 'none';
            setTimeout(() => {
                ball.style.animation = 'bounce 2s infinite';
            }, 10);
        }
    };
    
    setInterval(animateBall, 4000);
    
    // Messaggio in console
    console.log('%c🚧 LO dice MAx - Pagina in costruzione 🚧', 
        'color: #D72638; font-size: 16px; font-weight: bold; background: #F7F7F7; padding: 5px;');
    console.log('%c👋 Ciao Max! La tua pagina sarà pronta a breve!', 
        'color: #0A2463; font-size: 14px;');
});
