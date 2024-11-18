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
        {
            "id_vaga": 6,
            "tipo_vaga": "CLT",
            "nome": "Desenvolvedor Acre",
            "localizacao": "Acre",
            "modalidade": "Presencial",
            "salario": 7000.0
        },
        {
            "id_vaga": 7,
            "tipo_vaga": "CLT",
            "nome": "Analista Acre",
            "localizacao": "Acre",
            "modalidade": "Remoto",
            "salario": 6500.0
        },
        {
            "id_vaga": 8,
            "tipo_vaga": "CLT",
            "nome": "Desenvolvedor Alagoas",
            "localizacao": "Alagoas",
            "modalidade": "Presencial",
            "salario": 7000.0
        },
        {
            "id_vaga": 9,
            "tipo_vaga": "CLT",
            "nome": "Analista Alagoas",
            "localizacao": "Alagoas",
            "modalidade": "Remoto",
            "salario": 6500.0
        },
        {
            "id_vaga": 10,
            "tipo_vaga": "CLT",
            "nome": "Desenvolvedor Amapá",
            "localizacao": "Amapá",
            "modalidade": "Presencial",
            "salario": 7000.0
        },
        {
            "id_vaga": 11,
            "tipo_vaga": "CLT",
            "nome": "Analista Amapá",
            "localizacao": "Amapá",
            "modalidade": "Remoto",
            "salario": 6500.0
        },
        {
            "id_vaga": 12,
            "tipo_vaga": "CLT",
            "nome": "Desenvolvedor Amazonas",
            "localizacao": "Amazonas",
            "modalidade": "Presencial",
            "salario": 7000.0
        },
        {
            "id_vaga": 13,
            "tipo_vaga": "CLT",
            "nome": "Analista Amazonas",
            "localizacao": "Amazonas",
            "modalidade": "Remoto",
            "salario": 6500.0
        },
        {
            "id_vaga": 14,
            "tipo_vaga": "CLT",
            "nome": "Desenvolvedor Bahia",
            "localizacao": "Bahia",
            "modalidade": "Presencial",
            "salario": 7000.0
        },
        {
            "id_vaga": 15,
            "tipo_vaga": "CLT",
            "nome": "Analista Bahia",
            "localizacao": "Bahia",
            "modalidade": "Remoto",
            "salario": 6500.0
        },
        {
            "id_vaga": 16,
            "tipo_vaga": "CLT",
            "nome": "Desenvolvedor Ceará",
            "localizacao": "Ceará",
            "modalidade": "Presencial",
            "salario": 7000.0
        },
        {
            "id_vaga": 17,
            "tipo_vaga": "CLT",
            "nome": "Analista Ceará",
            "localizacao": "Ceará",
            "modalidade": "Remoto",
            "salario": 6500.0
        },
        {
            "id_vaga": 18,
            "tipo_vaga": "CLT",
            "nome": "Desenvolvedor Distrito Federal",
            "localizacao": "Distrito Federal",
            "modalidade": "Presencial",
            "salario": 7000.0
        },
        {
            "id_vaga": 19,
            "tipo_vaga": "CLT",
            "nome": "Analista Distrito Federal",
            "localizacao": "Distrito Federal",
            "modalidade": "Remoto",
            "salario": 6500.0
        },
        {
            "id_vaga": 20,
            "tipo_vaga": "CLT",
            "nome": "Desenvolvedor Espírito Santo",
            "localizacao": "Espírito Santo",
            "modalidade": "Presencial",
            "salario": 7000.0
        },
        {
            "id_vaga": 21,
            "tipo_vaga": "CLT",
            "nome": "Analista Espírito Santo",
            "localizacao": "Espírito Santo",
            "modalidade": "Remoto",
            "salario": 6500.0
        },
        {
            "id_vaga": 22,
            "tipo_vaga": "CLT",
            "nome": "Desenvolvedor Goiás",
            "localizacao": "Goiás",
            "modalidade": "Presencial",
            "salario": 7000.0
        },
        {
            "id_vaga": 23,
            "tipo_vaga": "CLT",
            "nome": "Analista Goiás",
            "localizacao": "Goiás",
            "modalidade": "Remoto",
            "salario": 6500.0
        },
        {
            "id_vaga": 24,
            "tipo_vaga": "CLT",
            "nome": "Desenvolvedor Maranhão",
            "localizacao": "Maranhão",
            "modalidade": "Presencial",
            "salario": 7000.0
        },
        {
            "id_vaga": 25,
            "tipo_vaga": "CLT",
            "nome": "Analista Maranhão",
            "localizacao": "Maranhão",
            "modalidade": "Remoto",
            "salario": 6500.0
        },
        {
            "id_vaga": 26,
            "tipo_vaga": "CLT",
            "nome": "Desenvolvedor Mato Grosso",
            "localizacao": "Mato Grosso",
            "modalidade": "Presencial",
            "salario": 7000.0
        },
        {
            "id_vaga": 27,
            "tipo_vaga": "CLT",
            "nome": "Analista Mato Grosso",
            "localizacao": "Mato Grosso",
            "modalidade": "Remoto",
            "salario": 6500.0
        },
        {
            "id_vaga": 28,
            "tipo_vaga": "CLT",
            "nome": "Desenvolvedor Mato Grosso do Sul",
            "localizacao": "Mato Grosso do Sul",
            "modalidade": "Presencial",
            "salario": 7000.0
        },
        {
            "id_vaga": 29,
            "tipo_vaga": "CLT",
            "nome": "Analista Mato Grosso do Sul",
            "localizacao": "Mato Grosso do Sul",
            "modalidade": "Remoto",
            "salario": 6500.0
        },
        {
            "id_vaga": 30,
            "tipo_vaga": "CLT",
            "nome": "Desenvolvedor Minas Gerais",
            "localizacao": "Minas Gerais",
            "modalidade": "Presencial",
            "salario": 7000.0
        },
        {
            "id_vaga": 31,
            "tipo_vaga": "CLT",
            "nome": "Analista Minas Gerais",
            "localizacao": "Minas Gerais",
            "modalidade": "Remoto",
            "salario": 6500.0
        },
        {
            "id_vaga": 32,
            "tipo_vaga": "CLT",
            "nome": "Desenvolvedor Pará",
            "localizacao": "Pará",
            "modalidade": "Presencial",
            "salario": 7000.0
        },
        {
            "id_vaga": 33,
            "tipo_vaga": "CLT",
            "nome": "Analista Pará",
            "localizacao": "Pará",
            "modalidade": "Remoto",
            "salario": 6500.0
        },
        {
            "id_vaga": 34,
            "tipo_vaga": "CLT",
            "nome": "Desenvolvedor Paraíba",
            "localizacao": "Paraíba",
            "modalidade": "Presencial",
            "salario": 7000.0
        },
        {
            "id_vaga": 35,
            "tipo_vaga": "CLT",
            "nome": "Analista Paraíba",
            "localizacao": "Paraíba",
            "modalidade": "Remoto",
            "salario": 6500.0
        },
        {
            "id_vaga": 36,
            "tipo_vaga": "CLT",
            "nome": "Desenvolvedor Paraná",
            "localizacao": "Paraná",
            "modalidade": "Presencial",
            "salario": 7000.0
        },
        {
            "id_vaga": 37,
            "tipo_vaga": "CLT",
            "nome": "Analista Paraná",
            "localizacao": "Paraná",
            "modalidade": "Remoto",
            "salario": 6500.0
        },
        {
            "id_vaga": 38,
            "tipo_vaga": "CLT",
            "nome": "Desenvolvedor Pernambuco",
            "localizacao": "Pernambuco",
            "modalidade": "Presencial",
            "salario": 7000.0
        },
        {
            "id_vaga": 39,
            "tipo_vaga": "CLT",
            "nome": "Analista Pernambuco",
            "localizacao": "Pernambuco",
            "modalidade": "Remoto",
            "salario": 6500.0
        },
        {
            "id_vaga": 40,
            "tipo_vaga": "CLT",
            "nome": "Desenvolvedor Piauí",
            "localizacao": "Piauí",
            "modalidade": "Presencial",
            "salario": 7000.0
        },
        {
            "id_vaga": 41,
            "tipo_vaga": "CLT",
            "nome": "Analista Piauí",
            "localizacao": "Piauí",
            "modalidade": "Remoto",
            "salario": 6500.0
        },
        {
            "id_vaga": 42,
            "tipo_vaga": "CLT",
            "nome": "Desenvolvedor Rio de Janeiro",
            "localizacao": "Rio de Janeiro",
            "modalidade": "Presencial",
            "salario": 7000.0
        },
        {
            "id_vaga": 43,
            "tipo_vaga": "CLT",
            "nome": "Analista Rio de Janeiro",
            "localizacao": "Rio de Janeiro",
            "modalidade": "Remoto",
            "salario": 6500.0
        },
        {
            "id_vaga": 44,
            "tipo_vaga": "CLT",
            "nome": "Desenvolvedor Rio Grande do Norte",
            "localizacao": "Rio Grande do Norte",
            "modalidade": "Presencial",
            "salario": 7000.0
        },
        {
            "id_vaga": 45,
            "tipo_vaga": "CLT",
            "nome": "Analista Rio Grande do Norte",
            "localizacao": "Rio Grande do Norte",
            "modalidade": "Remoto",
            "salario": 6500.0
        },
        {
            "id_vaga": 46,
            "tipo_vaga": "CLT",
            "nome": "Desenvolvedor Rio Grande do Sul",
            "localizacao": "Rio Grande do Sul",
            "modalidade": "Presencial",
            "salario": 7000.0
        },
        {
            "id_vaga": 47,
            "tipo_vaga": "CLT",
            "nome": "Analista Rio Grande do Sul",
            "localizacao": "Rio Grande do Sul",
            "modalidade": "Remoto",
            "salario": 6500.0
        },
        {
            "id_vaga": 48,
            "tipo_vaga": "CLT",
            "nome": "Desenvolvedor Rondônia",
            "localizacao": "Rondônia",
            "modalidade": "Presencial",
            "salario": 7000.0
        },
        {
            "id_vaga": 49,
            "tipo_vaga": "CLT",
            "nome": "Analista Rondônia",
            "localizacao": "Rondônia",
            "modalidade": "Remoto",
            "salario": 6500.0
        },
        {
            "id_vaga": 50,
            "tipo_vaga": "CLT",
            "nome": "Desenvolvedor Roraima",
            "localizacao": "Roraima",
            "modalidade": "Presencial",
            "salario": 7000.0
        },
        {
            "id_vaga": 51,
            "tipo_vaga": "CLT",
            "nome": "Analista Roraima",
            "localizacao": "Roraima",
            "modalidade": "Remoto",
            "salario": 6500.0
        },
        {
            "id_vaga": 52,
            "tipo_vaga": "CLT",
            "nome": "Desenvolvedor Santa Catarina",
            "localizacao": "Santa Catarina",
            "modalidade": "Presencial",
            "salario": 7000.0
        },
        {
            "id_vaga": 53,
            "tipo_vaga": "CLT",
            "nome": "Analista Santa Catarina",
            "localizacao": "Santa Catarina",
            "modalidade": "Remoto",
            "salario": 6500.0
        },
        {
            "id_vaga": 54,
            "tipo_vaga": "CLT",
            "nome": "Desenvolvedor São Paulo",
            "localizacao": "São Paulo",
            "modalidade": "Presencial",
            "salario": 7000.0
        },
        {
            "id_vaga": 55,
            "tipo_vaga": "CLT",
            "nome": "Analista São Paulo",
            "localizacao": "São Paulo",
            "modalidade": "Remoto",
            "salario": 6500.0
        },
        {
            "id_vaga": 56,
            "tipo_vaga": "CLT",
            "nome": "Desenvolvedor Sergipe",
            "localizacao": "Sergipe",
            "modalidade": "Presencial",
            "salario": 7000.0
        },
        {
            "id_vaga": 57,
            "tipo_vaga": "CLT",
            "nome": "Analista Sergipe",
            "localizacao": "Sergipe",
            "modalidade": "Remoto",
            "salario": 6500.0
        },
        {
            "id_vaga": 58,
            "tipo_vaga": "CLT",
            "nome": "Desenvolvedor Tocantins",
            "localizacao": "Tocantins",
            "modalidade": "Presencial",
            "salario": 7000.0
        },
        {
            "id_vaga": 59,
            "tipo_vaga": "CLT",
            "nome": "Analista Tocantins",
            "localizacao": "Tocantins",
            "modalidade": "Remoto",
            "salario": 6500.0
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
