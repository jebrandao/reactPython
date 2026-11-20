# Análise do material original: sequência, lacunas e correções

Material analisado: 25 apresentações (6 de React, 11 de Python, 8 de Full Stack) e 5 projetos de código da pasta
*TI - Full Stack Python React*. Objetivo: permitir que um aluno que **faltou a uma aula** consiga acompanhar sozinho.

## 1. Mapa: material original → nova sequência

| Original | Nova aula | Situação |
| --- | --- | --- |
| — | 00 Ambiente de desenvolvimento | **Nova** |
| — | 01 Como a web funciona: HTTP, JSON e APIs | **Nova** |
| — | 02 HTML e CSS essenciais | **Nova** |
| — | 03 JavaScript essencial para React | **Nova** |
| REACT 1 – introdução | 04 | Reescrita, com pré-requisitos e exemplos |
| REACT 2 – bootstrap | 05 | Revisada |
| REACT 3 – header e formulário | 06 | Corrigida (modal removido; passa à aula 07) |
| REACT 4 – state e props | 07 | Ampliada (props com exemplo, ciclo de redesenho) |
| REACT 5 – useEffect | 08 | Ampliada (async/await, tratamento de erro) |
| REACT 6 – "métodos HTTP" | 09 Rotas e CRUD em memória | Renomeada e corrigida |
| PYTHON 1 – introdução | 10 | Revisada |
| PYTHON 2 – operadores | 11 | Corrigida (`prompt` → `input`), + conversão de tipos e f-strings |
| PYTHON 3 + exercícios | 12 e 13 | Exercícios agora com dicas, soluções e desafios |
| PYTHON 4 – listas e funções | 14 | Ampliada (`for` em listas, `in`, `enumerate`) |
| — | 15 Dicionários e JSON | **Nova** |
| PYTHON 5 – POO | 16 | Revisada |
| PYTHON 6 – bibliotecas | 17 | Ampliada (pip, `requirements.txt`, ambiente virtual) |
| PYTHON 7 – API | 18 | Revisada |
| PYTHON 8 – API pt. 2 | 19 | Revisada |
| PYTHON 9 – API pt. 3 | 20 | Revisada |
| PYTHON 10 – API + MySQL | 21 | Modernizada (PyMySQL, `.env`, hash de senha) |
| FULLSTACK 1 a 8 | 22 a 29 | Revisadas; nomes de campos padronizados desde a aula 22 |
| — | 30 Boas práticas e publicação no GitHub | **Nova** |

## 2. Lacunas de conteúdo (o que faltava e foi acrescentado)

| # | Lacuna | Por que atrapalha | Solução |
| --- | --- | --- | --- |
| 1 | Nenhuma aula de **instalação** de Node, MySQL, Git e cliente HTTP (só um link) | O aluno que faltou não sabe configurar o ambiente | **Aula 00** com passo a passo, testes e tabela de problemas comuns |
| 2 | **HTTP, JSON, API REST, status e CORS** nunca eram explicados antes de serem usados | A aula de React 5 (fetch) já dependia disso | **Aula 01**, antes do React |
| 3 | O React começava direto em JSX, sem pré-requisito de **JavaScript** (arrow functions, `map`, desestruturação, spread, módulos, `async/await`) | Quem não conhecia JS não entendia o código | **Aula 03** com exemplos executáveis |
| 4 | **HTML/CSS** presumidos (classes, `div`, flexbox, diferenças do JSX) | O Bootstrap só faz sentido com essa base | **Aula 02** |
| 5 | **Dicionários** não existiam, mas toda a API (`bd.py`, `update`, JSON) depende deles | A aula 7 de Python usava `{"id": 1}` sem explicar | **Aula 15** |
| 6 | `for` sobre lista, `in`, conversão de tipos e **f-strings** | Usados nos exercícios e nas APIs sem terem sido ensinados | Incluídos nas aulas 11 e 14 |
| 7 | Nada sobre **pip, `requirements.txt` e ambiente virtual** | Instalações globais; projeto não reproduzível | Aula 17 |
| 8 | Sem **tratamento de erros**, validação nem estados de carregamento | Qualquer falha deixava o site "mudo" ou gerava erro 500 | Aula 08 e **aula 30** |
| 9 | Sem **variáveis de ambiente**, `.gitignore`, README, testes ou Git/GitHub | O aluno não conseguia publicar o projeto com segurança | **Aula 30** |
| 10 | Exercícios apenas na aula 3 de Python, **sem respostas** | Estudo sozinho sem feedback | Questões em todas as aulas e soluções comentadas (aulas 13 e repositório) |

## 3. Problemas de sequência e correções

| # | Problema encontrado | Correção |
| --- | --- | --- |
| 1 | REACT 3 prometia um modal "ao enviar o formulário", mas o código do projeto importava `./Modal`, **arquivo inexistente** e criava o modal de forma incorreta (`<ModalSucesso />` dentro de uma função) | O modal passou para a aula 07, onde `state` e `props` já foram ensinados |
| 2 | REACT 6 se chamava "métodos HTTP", mas não fazia nenhuma requisição (CRUD só em memória) | Renomeada "Rotas e CRUD em memória" e deixou claro que o HTTP real vem nas aulas 18+ |
| 3 | REACT 5 consumia uma API antes de a API ser explicada | Aula 01 vem antes |
| 4 | Três nomes diferentes para o mesmo arquivo (`Services.jsx`, `Service.jsx`, `Data.jsx`) | Padronizado como `Service.js` |
| 5 | Introdução ao Python e ao Flask repetida (aulas 1 e 6) | Flask apresentado uma vez, na aula 17, depois de bibliotecas e pip |
| 6 | **Tkinter** (interface gráfica) sem relação com o curso, ocupando a aula de bibliotecas | Mantido como curiosidade curta |
| 7 | FULLSTACK 1 criava o frontend em uma pasta só e a aula 4 mandava "mover tudo para `frontend`" | Pasta `frontend/` criada desde a aula 22 |
| 8 | Nomes de campos **inconsistentes** (`anoLancamento`/`imagemUrl` no frontend × `ano_lancamento`/`url_imagem` na API), corrigidos "depois" por um aviso na aula 6 | O frontend já usa os nomes da API desde a aula 22 |
| 9 | `ModalEditar` criado na raiz de `src/`; no projeto aparecia em `components/` | Sempre em `components/` |
| 10 | Placeholders de edição liam `infosEditar.anoLancamento` e `imagemUrl` (campos que não existem) | Corrigido para `ano_lancamento` e `url_imagem` |
| 11 | Página de pesquisa recebia os resultados por `state` da navegação: ao recarregar a página (F5) a lista sumia | A pesquisa vai na URL (`?query=`), lida por `useSearchParams` |
| 12 | Editar/excluir recarregavam a página inteira sem avisar | Mantido (é simples), mas a aula 28 aponta a alternativa de atualizar o state |

## 4. Erros técnicos corrigidos

| Onde | Erro | Correção |
| --- | --- | --- |
| Python 2 | `prompt()` (que é do JavaScript) para entrada de dados | `input()` |
| Python 10 e Fullstack 4 | `mysqlclient`: exige compilador C e costuma falhar no Windows | `PyMySQL` |
| Python 10 e Fullstack | `Model.query.get(id)`, API legada do SQLAlchemy | `db.session.get(Model, id)` |
| Python 10 | Senha salva e **devolvida em texto puro** pelo GET | Hash com `generate_password_hash`; a senha nunca é devolvida |
| Fullstack 4 e 5 | **Senha real do MySQL gravada no código** dos projetos de exemplo | Variável de ambiente (`.env`) + `.env.example`. **Se essa senha ainda é usada em algum lugar, troque-a.** |
| Fullstack 4 | POST sem validação: campo faltando gerava erro 500 | Validação com resposta 400 |
| Fullstack 8 | A busca dependia do comportamento do banco para maiúsculas/minúsculas (`.lower()` só no texto digitado) | `ilike`, que funciona igual no MySQL e no SQLite |
| Fullstack | `Form.Control as="select"` (forma antiga) | `Form.Select` |
| Projetos React | Dependências desatualizadas e `defaultProps` (descontinuado no React 18.3) | Valores padrão por parâmetro; versões fixadas e testadas |

## 5. O que foi mantido do material original

A estrutura didática do professor, os exemplos (carro, Vanessa/Maria, JSONPlaceholder, Dog CEO, catálogo de
filmes), a ordem React → Python → Full Stack e as capturas de tela do Insomnia, do Workbench e do navegador. As
explicações foram reescritas em slides mais curtos, com o código em texto (copiável) em vez de imagem.

## 6. Verificação

- `pytest` no backend do projeto Filmes: 5 testes passando (CRUD, validação, 404, pesquisa);
- as 4 APIs de exemplo (aulas 18 a 21) exercitadas com o cliente de testes do Flask;
- todos os scripts Python das aulas executados;
- os 6 projetos React, os 2 checkpoints e o projeto final compilam com `vite build`;
- o projeto Filmes foi executado de ponta a ponta no navegador (lista, formulário, edição em modal, detalhes e pesquisa).
