# Curso Full Stack: React + Python (Flask) + MySQL

Material completo para aprender **desenvolvimento web full stack** do zero, **na ordem**, inclusive por quem
estudar sozinho: 31 aulas em slides (`.pptx` e `.pdf`, no padrão visual SENAI) e todos os projetos de código,
testados e prontos para rodar.

> Baseado nas aulas do **Prof. Nivaldo Araújo** (SENAI). Este repositório reorganiza a sequência, corrige erros do
> material original e **acrescenta as aulas que faltavam** (veja [docs/analise-do-material.md](docs/analise-do-material.md)).

## Como estudar

1. Siga as aulas **na ordem numérica** (00 a 30). Cada aula tem: slides, código de apoio e questões no final.
2. Rode o código de cada aula e **altere** para ver o que acontece. Só ler não basta.
3. Faça as questões do último slide de cada aula antes de passar para a próxima.
4. Se travar, compare com o projeto de referência da aula (`parte-*/aula-XX`) ou com os *checkpoints* do projeto Filmes.

As **partes 1 (React) e 2 (Python)** são independentes entre si: pode-se fazer uma antes da outra. A **parte 3**
precisa das duas prontas.

## Roteiro das aulas

| Aula | Tema | Slides | Código |
| --- | --- | --- | --- |
| **Parte 0 – Preparação** | | | |
| 00 | Ambiente de desenvolvimento (Python, Node, VS Code, MySQL, Git) | [pptx/pdf](material-slides/Parte%200%20-%20Preparacao) | — |
| 01 | Como a web funciona: HTTP, JSON e APIs | [pptx/pdf](material-slides/Parte%200%20-%20Preparacao) | — |
| 02 | HTML e CSS essenciais | [pptx/pdf](material-slides/Parte%200%20-%20Preparacao) | — |
| 03 | JavaScript essencial para React | [pptx/pdf](material-slides/Parte%200%20-%20Preparacao) | [aula-03](parte-0-preparacao/aula-03-javascript-essencial) |
| **Parte 1 – React** | | | |
| 04 | React: introdução (Vite, componentes, JSX) | [slides](material-slides/Parte%201%20-%20React) | [aula-04](parte-1-react/aula-04-introducao) |
| 05 | React: Bootstrap | [slides](material-slides/Parte%201%20-%20React) | [aula-05](parte-1-react/aula-05-bootstrap) |
| 06 | Componentização: Header e Formulário | [slides](material-slides/Parte%201%20-%20React) | [aula-06](parte-1-react/aula-06-header-formulario) |
| 07 | State e props (com modal) | [slides](material-slides/Parte%201%20-%20React) | [aula-07](parte-1-react/aula-07-state-props) |
| 08 | Consumindo uma API com useEffect | [slides](material-slides/Parte%201%20-%20React) | [aula-08](parte-1-react/aula-08-consumindo-api) |
| 09 | Rotas e CRUD em memória | [slides](material-slides/Parte%201%20-%20React) | [aula-09](parte-1-react/aula-09-rotas-crud) |
| **Parte 2 – Python e Flask** | | | |
| 10 | Python: primeiros passos | [slides](material-slides/Parte%202%20-%20Python%20e%20Flask) | [aula-10](parte-2-python-flask/aula-10-primeiros-passos) |
| 11 | Operadores, tipos de dados e entrada | [slides](material-slides/Parte%202%20-%20Python%20e%20Flask) | [aula-11](parte-2-python-flask/aula-11-operadores-entrada) |
| 12 | Estruturas de controle | [slides](material-slides/Parte%202%20-%20Python%20e%20Flask) | [aula-12](parte-2-python-flask/aula-12-estruturas-controle) |
| 13 | Exercícios de estruturas de controle | [slides](material-slides/Parte%202%20-%20Python%20e%20Flask) | [aula-13](parte-2-python-flask/aula-13-exercicios) |
| 14 | Listas e funções | [slides](material-slides/Parte%202%20-%20Python%20e%20Flask) | [aula-14](parte-2-python-flask/aula-14-listas-funcoes) |
| 15 | Dicionários e JSON | [slides](material-slides/Parte%202%20-%20Python%20e%20Flask) | [aula-15](parte-2-python-flask/aula-15-dicionarios-json) |
| 16 | Programação orientada a objetos | [slides](material-slides/Parte%202%20-%20Python%20e%20Flask) | [aula-16](parte-2-python-flask/aula-16-poo) |
| 17 | Bibliotecas, pip, venv e primeiro Flask | [slides](material-slides/Parte%202%20-%20Python%20e%20Flask) | [aula-17](parte-2-python-flask/aula-17-bibliotecas-venv) |
| 18 | Flask: primeira API (GET) | [slides](material-slides/Parte%202%20-%20Python%20e%20Flask) | [aula-18](parte-2-python-flask/aula-18-api-get) |
| 19 | Flask: GET por id e POST | [slides](material-slides/Parte%202%20-%20Python%20e%20Flask) | [aula-19](parte-2-python-flask/aula-19-api-post) |
| 20 | Flask: PUT e DELETE | [slides](material-slides/Parte%202%20-%20Python%20e%20Flask) | [aula-20](parte-2-python-flask/aula-20-api-crud) |
| 21 | Flask: API com MySQL e SQLAlchemy | [slides](material-slides/Parte%202%20-%20Python%20e%20Flask) | [aula-21](parte-2-python-flask/aula-21-api-mysql) |
| **Parte 3 – Full Stack (projeto Filmes)** | | | |
| 22 | Formulário | [slides](material-slides/Parte%203%20-%20Full%20Stack) | [checkpoint](parte-3-fullstack-filmes/checkpoints/aula-23-header-e-gerenciamento) |
| 23 | Header e gerenciamento | [slides](material-slides/Parte%203%20-%20Full%20Stack) | [checkpoint](parte-3-fullstack-filmes/checkpoints/aula-23-header-e-gerenciamento) |
| 24 | Alterações e modal | [slides](material-slides/Parte%203%20-%20Full%20Stack) | — |
| 25 | Backend com Flask | [slides](material-slides/Parte%203%20-%20Full%20Stack) | [backend](parte-3-fullstack-filmes/projeto-filmes/backend) |
| 26 | Axios e CORS | [slides](material-slides/Parte%203%20-%20Full%20Stack) | — |
| 27 | Consumindo a API (GET e POST) | [slides](material-slides/Parte%203%20-%20Full%20Stack) | [checkpoint](parte-3-fullstack-filmes/checkpoints/aula-27-consumindo-api) |
| 28 | PUT, DELETE e detalhes | [slides](material-slides/Parte%203%20-%20Full%20Stack) | [projeto final](parte-3-fullstack-filmes/projeto-filmes) |
| 29 | Barra de pesquisa | [slides](material-slides/Parte%203%20-%20Full%20Stack) | [projeto final](parte-3-fullstack-filmes/projeto-filmes) |
| 30 | Boas práticas e publicação no GitHub | [slides](material-slides/Parte%203%20-%20Full%20Stack) | [projeto final](parte-3-fullstack-filmes/projeto-filmes) |

Aulas marcadas como **novas** (não existiam no material original): **00, 01, 02, 03, 15 e 30**. As demais foram
revisadas e corrigidas (veja a análise).

## Pré-requisitos

Veja a **aula 00** para o passo a passo. Resumo:

- **Python 3.12+** e **pip**;
- **Node.js 18+** (LTS) e **npm**;
- **VS Code**;
- **MySQL 8 + Workbench** (opcional: sem ele, o projeto usa SQLite automaticamente);
- **Git**.

## Como rodar os projetos

**Exemplos de Python** (aulas 10 a 17): rode cada arquivo dentro da pasta da aula, por exemplo
`python lacos.py`.

**APIs Flask** (aulas 18 a 21 e projeto Filmes):

```bash
cd parte-3-fullstack-filmes/projeto-filmes/backend
python -m venv .venv
.venv\Scripts\activate          # macOS/Linux: source .venv/bin/activate
pip install -r requirements.txt
python main.py                  # sobe em http://localhost:5000 (usa SQLite se não houver .env)
pytest                          # testes automáticos
```

Para usar MySQL, copie `.env.example` para `.env`, ajuste a senha e crie o banco (`CREATE DATABASE api_fullstack;`).

**Projetos React** (aulas 04 a 09 e frontend do projeto Filmes):

```bash
cd parte-3-fullstack-filmes/projeto-filmes/frontend
npm install
npm run dev                     # abre em http://localhost:5173
```

O frontend do projeto Filmes precisa do backend ligado. Use **dois terminais**.

## Estrutura do repositório

```text
material-slides/            Slides (.pptx e .pdf) das 31 aulas, por parte
parte-0-preparacao/         Exemplos de JavaScript (aula 03)
parte-1-react/              Projetos Vite + React das aulas 04 a 09
parte-2-python-flask/       Scripts e APIs das aulas 10 a 21
parte-3-fullstack-filmes/
  projeto-filmes/           Projeto final (backend Flask + frontend React)
  checkpoints/              Estados intermediários do projeto (aulas 23 e 27)
docs/analise-do-material.md Diagnóstico da sequência e das lacunas do material original
```

## Fontes dos slides

Os `.pptx` usam as fontes **Lato Light** (títulos) e **Nunito Sans** (texto) do modelo SENAI. Instale-as para ver os
arquivos exatamente como nos PDFs, que já trazem as fontes embutidas.

## Qualidade

- Backend: `pytest` (5 testes de CRUD, validação e pesquisa);
- Os 6 projetos React da pasta `parte-1-react`, o projeto final e os checkpoints compilam com `npm run build`;
- Todos os scripts Python e as 4 APIs de exemplo foram executados.
