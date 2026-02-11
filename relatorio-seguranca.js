// Criar botão "Voltar ao Topo"
const btnVoltarTopo = document.createElement('button');
btnVoltarTopo.className = 'btn-voltar-topo';
btnVoltarTopo.innerHTML = '↑';
btnVoltarTopo.setAttribute('aria-label', 'Voltar ao topo');
document.body.appendChild(btnVoltarTopo);

// Mostrar/ocultar botão baseado na rolagem
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        btnVoltarTopo.classList.add('show');
    } else {
        btnVoltarTopo.classList.remove('show');
    }
});

// Funcionalidade de voltar ao topo com animação suave
btnVoltarTopo.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Adicionar efeito de destaque nos alertas ao clicar
const alertaBtns = document.querySelectorAll('.alerta-btn');
alertaBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const alertaItem = this.closest('.alerta-item');
        alertaItem.style.backgroundColor = '#fffacd';
        
        setTimeout(() => {
            alertaItem.style.backgroundColor = '';
        }, 1000);
    });
});
