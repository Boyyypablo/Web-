const vagas = [
        // Vagas CLT
        
        {
            id_vaga: 1,
            tipo_vaga: "CLT",
            nome: "Desenvolvedor Full Stack",
            localizacao: "São Paulo",
            modalidade: "Presencial",
            salario: 8000.0
        },
        {
            id_vaga: 2,
            tipo_vaga: "CLT",
            nome: "Analista de Dados",
            localizacao: "Rio de Janeiro",
            modalidade: "Híbrido",
            salario: 6000.0
        },
        {
            id_vaga: 3,
            tipo_vaga: "CLT",
            nome: "Gerente de Projetos",
            localizacao: "Belo Horizonte",
            modalidade: "Presencial",
            salario: 12000.0
        },
        {
            id_vaga: 21,
            tipo_vaga: "CLT",
            nome: "Desenvolvedor Backend",
            localizacao: "São Paulo",
            modalidade: "Híbrido",
            salario: 8500.00
        },
        {
            id_vaga: 22,
            tipo_vaga: "CLT",
            nome: "Analista DevOps",
            localizacao: "São Paulo",
            modalidade: "Remoto",
            salario: 9500.00
        },
        {
            id_vaga: 23,
            tipo_vaga: "CLT",
            nome: "Arquiteto de Cloud",
            localizacao: "Rio de Janeiro",
            modalidade: "Híbrido",
            salario: 11000.00
        },
        {
            id_vaga: 24,
            tipo_vaga: "CLT",
            nome: "Especialista em Dados",
            localizacao: "Rio de Janeiro",
            modalidade: "Presencial",
            salario: 10000.00
        },
        {
            id_vaga: 25,
            tipo_vaga: "CLT",
            nome: "Engenheiro de Testes",
            localizacao: "Salvador",
            modalidade: "Remoto",
            salario: 8000.00
        },
        {
            id_vaga: 26,
            tipo_vaga: "CLT",
            nome: "Administrador de Sistemas",
            localizacao: "Salvador",
            modalidade: "Presencial",
            salario: 7800.00
        },
        {
            id_vaga: 27,
            tipo_vaga: "CLT",
            nome: "Desenvolvedor Frontend",
            localizacao: "Belo Horizonte",
            modalidade: "Presencial",
            salario: 8800.00
        },
        {
            id_vaga: 28,
            tipo_vaga: "CLT",
            nome: "Cientista de Dados",
            localizacao: "Belo Horizonte",
            modalidade: "Híbrido",
            salario: 12000.00
        },
        {
            id_vaga: 29,
            tipo_vaga: "CLT",
            nome: "Engenheiro de Software",
            localizacao: "Porto Alegre",
            modalidade: "Remoto",
            salario: 9000.00
        },
        {
            id_vaga: 30,
            tipo_vaga: "CLT",
            nome: "Especialista em Segurança da Informação",
            localizacao: "Porto Alegre",
            modalidade: "Presencial",
            salario: 11000.00
        },
        {
            id_vaga: 31,
            tipo_vaga: "CLT",
            nome: "Analista de Banco de Dados",
            localizacao: "Fortaleza",
            modalidade: "Híbrido",
            salario: 7500.00
        },
        {
            id_vaga: 32,
            tipo_vaga: "CLT",
            nome: "Desenvolvedor Mobile",
            localizacao: "Fortaleza",
            modalidade: "Presencial",
            salario: 8200.00
        },
        {
            id_vaga: 33,
            tipo_vaga: "CLT",
            nome: "Analista de Infraestrutura",
            localizacao: "Recife",
            modalidade: "Híbrido",
            salario: 8000.00
        },
        {
            id_vaga: 34,
            tipo_vaga: "CLT",
            nome: "Desenvolvedor Full Stack",
            localizacao: "Recife",
            modalidade: "Presencial",
            salario: 9000.00
        },
        {
            id_vaga: 35,
            tipo_vaga: "CLT",
            nome: "Engenheiro de Machine Learning",
            localizacao: "Curitiba",
            modalidade: "Remoto",
            salario: 11000.00
        },
        {
            id_vaga: 36,
            tipo_vaga: "CLT",
            nome: "Analista de Qualidade de Software",
            localizacao: "Curitiba",
            modalidade: "Presencial",
            salario: 8500.00
        },
        {
            id_vaga: 37,
            tipo_vaga: "CLT",
            nome: "Gerente de TI",
            localizacao: "Brasília",
            modalidade: "Híbrido",
            salario: 13000.00
        },
        {
            id_vaga: 38,
            tipo_vaga: "CLT",
            nome: "Engenheiro de Redes",
            localizacao: "Brasília",
            modalidade: "Presencial",
            salario: 9000.00
        },
        {
            id_vaga: 39,
            tipo_vaga: "CLT",
            nome: "Analista de Cybersecurity",
            localizacao: "Manaus",
            modalidade: "Híbrido",
            salario: 9200.00
        },
        {
            id_vaga: 40,
            tipo_vaga: "CLT",
            nome: "Desenvolvedor IoT",
            localizacao: "Manaus",
            modalidade: "Presencial",
            salario: 9500.00
        },
        {
            id_vaga: 4,
            tipo_vaga: "CLT",
            nome: "Engenheiro de Software",
            localizacao: "Florianópolis",
            modalidade: "Remoto",
            salario: 9000.0
        },
        {
            id_vaga: 5,
            tipo_vaga: "CLT",
            nome: "Especialista em Cibersegurança",
            localizacao: "Curitiba",
            modalidade: "Presencial",
            salario: 11000.0
        },
        // Vagas de Estágio
        {
            id_vaga: 6,
            tipo_vaga: "Estágio",
            nome: "Estagiário de Marketing",
            localizacao: "Rio de Janeiro",
            modalidade: "Híbrido",
            salario: 1500.0
        },
        {
            id_vaga: 7,
            tipo_vaga: "Estágio",
            nome: "Assistente de Suporte Técnico",
            localizacao: "São Paulo",
            modalidade: "Remoto",
            salario: 1200.0
        },
        {
            id_vaga: 8,
            tipo_vaga: "Estágio",
            nome: "Estagiário em Recursos Humanos",
            localizacao: "Curitiba",
            modalidade: "Presencial",
            salario: 1300.0
        },
        {
            id_vaga: 9,
            tipo_vaga: "Estágio",
            nome: "Estagiário de Design",
            localizacao: "Porto Alegre",
            modalidade: "Remoto",
            salario: 1400.0
        },
        {
            id_vaga: 10,
            tipo_vaga: "Estágio",
            nome: "Estagiário de TI",
            localizacao: "Brasília",
            modalidade: "Híbrido",
            salario: 1600.0
        },
    
        // Vagas de Freelancer
        {
            id_vaga: 11,
            tipo_vaga: "Free Lancer",
            nome: "Desenvolvedor Mobile",
            localizacao: "Remoto",
            modalidade: "Remoto",
            salario: 5000.0
        },
        {
            id_vaga: 12,
            tipo_vaga: "Free Lancer",
            nome: "Copywriter",
            localizacao: "Remoto",
            modalidade: "Remoto",
            salario: 3000.0
        },
        {
            id_vaga: 13,
            tipo_vaga: "Free Lancer",
            nome: "Fotógrafo",
            localizacao: "São Paulo",
            modalidade: "Presencial",
            salario: 4500.0
        },
        {
            id_vaga: 14,
            tipo_vaga: "Free Lancer",
            nome: "Designer Gráfico",
            localizacao: "Florianópolis",
            modalidade: "Remoto",
            salario: 3500.0
        },
        {
            id_vaga: 15,
            tipo_vaga: "Free Lancer",
            nome: "Consultor de TI",
            localizacao: "Belo Horizonte",
            modalidade: "Híbrido",
            salario: 7000.0
        },
    
        // Mais Vagas CLT
        {
            id_vaga: 16,
            tipo_vaga: "CLT",
            nome: "Analista de Sistemas",
            localizacao: "Porto Alegre",
            modalidade: "Híbrido",
            salario: 6500.0
        },
        {
            id_vaga: 17,
            tipo_vaga: "CLT",
            nome: "Administrador de Redes",
            localizacao: "São Paulo",
            modalidade: "Presencial",
            salario: 7500.0
        },
        {
            id_vaga: 18,
            tipo_vaga: "CLT",
            nome: "Analista de Marketing Digital",
            localizacao: "Curitiba",
            modalidade: "Híbrido",
            salario: 7000.0
        },
        {
            id_vaga: 19,
            tipo_vaga: "CLT",
            nome: "Arquiteto de Soluções",
            localizacao: "Brasília",
            modalidade: "Remoto",
            salario: 10000.0
        },
        {
            id_vaga: 20,
            tipo_vaga: "CLT",
            nome: "Consultor de Estratégia",
            localizacao: "São Paulo",
            modalidade: "Presencial",
            salario: 15000.0
        }
    ];

function filtrarVagas() {
    const termo = document.getElementById('regiao').value.toLowerCase();
    const resultadosContainer = document.getElementById('resultados');

    resultadosContainer.innerHTML = '';

    const resultados = vagas.filter(vaga => 
        vaga.localizacao.toLowerCase().includes(termo) ||
        vaga.tipo_vaga.toLowerCase().includes(termo) ||
        vaga.nome.toLowerCase().includes(termo)
    );

    if (resultados.length > 0) {
        resultados.forEach(vaga => {
            const vagaItem = document.createElement('div');
            vagaItem.classList.add('result-item');
            vagaItem.innerHTML = `
                <h3>${vaga.nome}</h3>
                <p><strong>Tipo:</strong> ${vaga.tipo_vaga}</p>
                <p><strong>Localização:</strong> ${vaga.localizacao}</p>
                <p><strong>Modalidade:</strong> ${vaga.modalidade}</p>
                <p><strong>Salário:</strong> R$ ${vaga.salario.toFixed(2)}</p>
            `;
            resultadosContainer.appendChild(vagaItem);
        });
    } else {
        resultadosContainer.innerHTML = '<p>Nenhum resultado encontrado.</p>';
    }
}
function filtrarVagas() {
    const termo = document.getElementById('regiao').value.toLowerCase();
    const resultadosContainer = document.getElementById('resultados');

    resultadosContainer.innerHTML = '';

    const resultados = vagas.filter(vaga => 
        vaga.localizacao.toLowerCase().includes(termo) ||
        vaga.tipo_vaga.toLowerCase().includes(termo) ||
        vaga.nome.toLowerCase().includes(termo)
    );

    if (resultados.length > 0) {
        resultados.forEach(vaga => {
            const vagaItem = document.createElement('div');
            vagaItem.classList.add('result-item');
            vagaItem.innerHTML = `
                <h3>${vaga.nome}</h3>
                <p><strong>Tipo:</strong> ${vaga.tipo_vaga}</p>
                <p><strong>Localização:</strong> ${vaga.localizacao}</p>
                <p><strong>Modalidade:</strong> ${vaga.modalidade}</p>
                <p><strong>Salário:</strong> R$ ${vaga.salario.toFixed(2)}</p>
                <button onclick="mostrarTexto(${vaga.id_vaga})">Ver mais informações</button>
                <div id="texto-vaga-${vaga.id_vaga}" class="detalhes-texto" style="display: none;"></div>
            `;
            resultadosContainer.appendChild(vagaItem);
        });
    } else {
        resultadosContainer.innerHTML = '<p>Nenhum resultado encontrado.</p>';
    }
}

function mostrarTexto(idVaga) {
    const vaga = vagas.find(v => v.id_vaga === idVaga);
    const textoContainer = document.getElementById(`texto-vaga-${idVaga}`);
    
    // Alterna a visibilidade do texto
    if (textoContainer.style.display === 'none') {
        textoContainer.style.display = 'block';
        textoContainer.innerHTML = `
            <p><strong>Descrição:</strong> Esta vaga é para a posição de ${vaga.nome}, a empresa está localizada em ${vaga.localizacao}. Ela é do tipo ${vaga.tipo_vaga} e possui a modalidade de trabalho ${vaga.modalidade}. O salário para esta vaga é de R$ ${vaga.salario.toFixed(2)}.</p>
        `;
    } else {
        textoContainer.style.display = 'none';
        textoContainer.innerHTML = '';
    }
}
