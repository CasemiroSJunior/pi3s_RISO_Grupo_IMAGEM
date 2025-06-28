# 🛠️ Diário de Bordo - Projeto Django

Este documento registra as principais alterações e evoluções do projeto, organizadas por semana.

---

## 🗓️ Semana de 10 a 16 de Maio de 2025

- **2025-05-10**
  - Inicializa estrutura do projeto Django com app principal (`core`) e configurações básicas.
  - Implementa funções de MongoDB para gerenciamento de usuários e operações no banco.
  - Adiciona templates de cadastro e login com estilos associados.
  - Adiciona rotas e views para cadastro de clientes e login.
  - Implementa funções de criação e recuperação de clientes com integração ao MongoDB.
  - Adiciona `.gitignore` para ignorar cache do Python e ambientes virtuais.

- **2025-05-15**
  - Adiciona funções de gerenciamento de serviços e veículos com MongoDB.
  - Refatora lógica de criação de cliente e adiciona funções para atualizar, deletar, listar, contar e verificar existência.

---

## 🗓️ Semana de 27 de Maio a 2 de Junho de 2025

- **2025-05-29**
  - Implementa autenticação de usuário com formulário de login e gerenciamento de sessão.
  - Adiciona views e formulários para gerenciamento de clientes.
  - Adiciona templates de autenticação, dashboard e index.
  - Refatora rotas e views para melhorar clareza.
  - Atualiza links de navegação e redirecionamento de logout.
  - Refatora formulário de login e melhora mensagens de validação.
  - Atualiza index e logout com identidade visual "Riso Recuperadora".

- **2025-05-30**
  - Melhora processo de cadastro de cliente com validações e mensagens de erro.
  - Atualiza template de login com caminho correto para assets estáticos.
  - Adiciona scripts para máscara de documentos.
  - Adiciona barra lateral (sidebar) e refatora templates para uso de layout base.
  - Implementa suite de testes para login e banco.
  - Refatora conexão com banco usando classe `MongoDBConnection`.
  - Adiciona `replace_special_characters` e remove definições não usadas de modelos.
  - Atualiza schema do banco (`db.sqlite3`).
  - Adiciona biblioteca de coverage e dependências no `requirements`.

---

## 🗓️ Semana de 3 a 9 de Junho de 2025

- **2025-06-06 a 07**
  - Implementa formulários para cadastro de clientes e serviços.
  - Remove templates antigos e desatualizados.
  - Refatora fluxo de redirecionamento pós-criação de cliente.
  - Atualiza estilo da base e lista de clientes.
  - Melhora visual de títulos e cores no template base.

---

## 🗓️ Semana de 10 a 16 de Junho de 2025

- **2025-06-14**
  - Refatora formulários de cliente e veículo para melhor layout.
  - Adiciona funcionalidades de gerenciamento de serviços (create, edit, list, delete).
  - Corrige erro em template de cadastro de serviço.

---

## 🗓️ Semana de 17 a 23 de Junho de 2025

- **2025-06-17**
  - Adiciona cancelamento e finalização de serviços com templates e views.
  - Refatora páginas de detalhe para cliente, serviço e veículo.
  - Implementa página de detalhe de serviço com layout e botões.
  - Valida campos de cliente para remover caracteres especiais.
  - Refatora barra lateral com botão de abrir/fechar.
  - Corrige URL de login.
  - Melhora consistência nos nomes das funções.
  - Adiciona exibição de serviços cancelados.
  - Atualiza estilo de botões nas views.
  - Adiciona gráficos e KPIs no dashboard.
  - Cria arquivo de dependências (`requirements.txt`).
  - Melhora visibilidade com cores em gráficos e adiciona feedback de erro.

- **2025-06-18**
  - Corrige nomes de variáveis em template de cancelamento.
  - Refatora função de cancelamento para usar método GET.

- **2025-06-23**
  - Corrige padrão de URL para cancelamento de serviços.
  - Refatora views de cadastro e cancelamento.
  - Adiciona accordion para detalhes de serviços.
  - Melhora exibição de veículos.
  - Refatora forms de serviço e parâmetros de URL.

---

## 🗓️ Semana de 24 a 30 de Junho de 2025

- **2025-06-24**
  - Corrige campo de prazo de execução em serviços.
  - Refatora acesso a variáveis de ambiente.
  - Implementa script de seed no banco com dados de teste.
  - Melhora ordenação de clientes, veículos e serviços.
  - Remove arquivos e prints não utilizados.
  - Adiciona e atualiza `requirements.txt` com bibliotecas necessárias.
  - Corrige geração de código de serviço e adiciona logging.
  - Refatora geração de serviços com timestamps.
  - Corrige dashboards de meses anteriores.

- **2025-06-25**
  - Adiciona filtro e paginação padrão nos resultados.

- **2025-06-26**
  - Atualiza `requirements.txt` com novos pacotes.
  - Atualiza arquivo de cobertura (coverage).
  - Adiciona testes com cobertura de 63% (service, db_connection, client_view).
  - Atualiza README com instruções de superusuário e imagem de cobertura.
  - Adiciona documentação e imagens ao projeto.