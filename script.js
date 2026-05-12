// Scroll suave para o botão "Saiba Mais"
document.getElementById('learnMoreBtn').addEventListener('click', () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});

// Interatividade do formulário
const form = document.getElementById('contactForm');
const response = document.getElementById('responseMessage');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    response.textContent = `Obrigado, ${name}! Sua mensagem foi enviada com sucesso. 🌱`;
    response.style.color = '#388e3c';
    form.reset();
});
