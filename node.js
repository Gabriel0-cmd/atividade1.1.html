// Menu responsivo
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            menu.classList.toggle('active');
        });
    }
    
    // Fechar menu ao clicar em um link
    const menuLinks = document.querySelectorAll('.menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            menu.classList.remove('active');
        });
    });
    
    // Contador regressivo para a estreia
    function atualizarContador() {
        // Data de estreia: 15 de dezembro de 2024
        const dataEstreia = new Date('December 15, 2024 00:00:00').getTime();
        const agora = new Date().getTime();
        const diferenca = dataEstreia - agora;
        
        // Cálculos para dias, horas, minutos e segundos
        const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);
        
        // Atualizar elementos HTML
        document.getElementById('dias').textContent = dias.toString().padStart(2, '0');
        document.getElementById('horas').textContent = horas.toString().padStart(2, '0');
        document.getElementById('minutos').textContent = minutos.toString().padStart(2, '0');
        document.getElementById('segundos').textContent = segundos.toString().padStart(2, '0');
        
        // Se a data já passou
        if (diferenca < 0) {
            clearInterval(contadorInterval);
            document.querySelector('.contador-tempo').innerHTML = '<p style="font-size: 24px;">O filme já está em cartaz!</p>';
        }
    }
    
    // Atualizar contador a cada segundo
    atualizarContador();
    const contadorInterval = setInterval(atualizarContador, 1000);
    
    // Formulário de reserva de ingressos
    const formIngresso = document.getElementById('form-ingresso');
    if (formIngresso) {
        formIngresso.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Coletar dados do formulário
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const cinema = document.getElementById('cinema').value;
            const data = document.getElementById('data').value;
            
            // Validação simples
            if (!nome || !email || !cinema || !data) {
                alert('Por favor, preencha todos os campos do formulário.');
                return;
            }
            
            // Simular envio do formulário
            alert(`Obrigado, ${nome}! Sua reserva foi registrada. 
            Você receberá um e-mail de confirmação no endereço ${email} 
            com os detalhes da sua reserva para o cinema selecionado na data ${data}.`);
            
            // Limpar formulário
            formIngresso.reset();
        });
    }
    
    // Efeito de rolagem suave para links âncora
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
            }
        });
    });
    
    // Efeito no botão de play do trailer
    const playButton = document.querySelector('.play-button');
    if (playButton) {
        playButton.addEventListener('click', function() {
            alert('Trailer em breve! Enquanto isso, confira as outras seções do site.');
        });
    }
    
    // Adicionar classe ativa ao menu conforme rolagem
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const menuItems = document.querySelectorAll('.menu a');
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });
        
        menuItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });
});