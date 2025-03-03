import('header/Header').then(createHeader => {
    const app = document.getElementById('app');
    app.appendChild(createHeader.default());
}).catch(err => console.error('Erreur lors de l’import du Header:', err));
