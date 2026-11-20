# Catálogo de Filmes (projeto full stack)

Aplicação completa das aulas 22 a 30: cadastro, listagem, edição, exclusão, detalhes e pesquisa de filmes.

- **Frontend:** React 18 + Vite + Bootstrap (React-Bootstrap) + React Router + Axios
- **Backend:** Flask + Flask-SQLAlchemy + Flask-CORS
- **Banco de dados:** MySQL (ou SQLite, sem instalar nada)

## Como rodar

São dois servidores, então use **dois terminais**.

### 1) Backend (porta 5000)

```bash
cd backend
python -m venv .venv
.venv\Scripts\activate           # macOS/Linux: source .venv/bin/activate
pip install -r requirements.txt
python main.py
```

Sem configuração, a API usa **SQLite** (arquivo `instance/filmes.db`). Para usar **MySQL**:

1. crie o banco no Workbench: `CREATE DATABASE api_fullstack;`
2. copie `.env.example` para `.env` e troque `SUA_SENHA` pela senha do seu MySQL;
3. rode `python main.py` de novo: a tabela é criada sozinha.

Testes automáticos: `pytest` (usam um banco em memória e não mexem nos seus dados).
Testes manuais: abra `requests.http` no VS Code com a extensão **REST Client**.

### 2) Frontend (porta 5173)

```bash
cd frontend
npm install
npm run dev
```

Abra http://localhost:5173. Se a API estiver em outro endereço, copie `.env.example` para `.env` e ajuste `VITE_API_URL`.

## Rotas da API

| Método | Rota | O que faz | Status |
| --- | --- | --- | --- |
| GET | `/filme` | Lista todos os filmes | 200 |
| GET | `/filme/<id>` | Busca um filme | 200 / 404 |
| POST | `/filme` | Cadastra (todos os 5 campos são obrigatórios) | 201 / 400 |
| PUT | `/filme/<id>` | Edita (só os campos enviados) | 200 / 400 / 404 |
| DELETE | `/filme/<id>` | Exclui | 204 / 404 |
| GET | `/search?query=...` | Filmes cujo nome começa com o texto | 200 |

Campos de um filme: `nome`, `descricao`, `ano_lancamento` (4 dígitos), `url_imagem`, `genero`.

## Páginas do site

| Endereço | Página |
| --- | --- |
| `/formulario` | Cadastro de filme |
| `/gerenciar-filmes` | Catálogo com Editar (modal), Detalhes e Excluir |
| `/filme/:id` | Detalhes de um filme |
| `/filmes-filtrados?query=...` | Resultado da pesquisa |
