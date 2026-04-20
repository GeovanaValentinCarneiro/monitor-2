const BIOMES = {
    amazonia: { name: 'Amazônia', emoji: '🌳', producao: 'Castanha, açaí e manejo sustentável.', conservacao: 'Monitoramento e bioinsumos.', sustentabilidade: 92 },
    cerrado: { name: 'Cerrado', emoji: '🌾', producao: 'Grãos e integração lavoura-pecuária.', conservacao: 'Preservação de nascentes.', sustentabilidade: 85 },
    pantanal: { name: 'Pantanal', emoji: '🐊', producao: 'Pecuária orgânica e turismo.', conservacao: 'Controle de cheias e fauna.', sustentabilidade: 88 },
    caatinga: { name: 'Caatinga', emoji: '🌵', producao: 'Frutas e mel de abelhas nativas.', conservacao: 'Tecnologias hídricas.', sustentabilidade: 70 },
    mata_atlantica: { name: 'Mata Atlântica', emoji: '🦜', producao: 'Café especial e silvicultura.', conservacao: 'Corredores ecológicos.', sustentabilidade: 78 },
    pampa: { name: 'Pampa', emoji: '🐴', producao: 'Gado de corte e vitivinicultura.', conservacao: 'Manejo de campos nativos.', sustentabilidade: 75 }
};

document.addEventListener('DOMContentLoaded', () => {
    // Contador de Visitas
    let v = parseInt(localStorage.getItem('visitas') || '0') + 1;
    localStorage.setItem('visitas', v);
    document.getElementById('visitBadge').innerText = `${v}ª Visita`;

    // Lógica do Mapa
    document.querySelectorAll('.biome-path').forEach(path => {
        path.addEventListener('click', () => {
            const info = BIOMES[path.dataset.biome];
            if (!info) return;

            document.querySelectorAll('.biome-path').forEach(p => p.classList.remove('active'));
            path.classList.add('active');

            document.getElementById('detailSection').classList.remove('hidden');
            document.getElementById('biomeName').innerText = info.name;
            document.getElementById('biomeEmoji').innerText = info.emoji;
            document.getElementById('bioProducao').innerText = info.producao;
            document.getElementById('bioConservacao').innerText = info.conservacao;
            document.getElementById('susValue').innerText = info.sustentabilidade + '%';
            
            const fill = document.getElementById('susFill');
            fill.style.width = '0%';
            setTimeout(() => { fill.style.width = info.sustentabilidade + '%'; }, 100);
        });
    });

    // BOTÃO MODO ESCURO (CORRIGIDO)
    const darkToggle = document.getElementById('darkToggle');
    darkToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        
        const icon = darkToggle.querySelector('i');
        if (document.body.classList.contains('light-mode')) {
            icon.setAttribute('data-lucide', 'sun');
        } else {
            icon.setAttribute('data-lucide', 'moon');
        }
        lucide.createIcons(); // Isso faz o ícone mudar na tela!
    });

    lucide.createIcons();
});