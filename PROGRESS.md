# 🪨 PROGRESS — Minrock (Doca de Desenvolvimento)

> **Versão:** v0.2.2 | **Status:** 🟢 Produção & Homologação | **Lighthouse:** 100/100  
> **Autor:** Renato Rezende ([@rnt-rez](https://github.com/rnt-rez)) | **Harness:** `..\estaleiro`

---

## 🎯 Foco Atual & Entregas Consolidadas
* **Astro 7 SSG:** Tipografia calibrada, 4 temas (White, Cream, Slate, Midnight), zero bloat.
* **Acessibilidade Universal:** Voice reader acessível, navegação por teclado, WCAG 2.1/2.2 AA.
* **Obsidian CMS:** Suporte nativo a Markdown com imagens locais e visualizador PhotoSwipe.
* **Governança Estaleiro:** `AGENTS.md` ativo, Lifecycle Gates, suíte de auditoria (`npm run qa`).

---

## 📋 Sequência de Etapas

### 🟢 Etapa 1: Scaffolding & Design System (Concluída — v0.1.0)
- [x] Base Astro 7, TypeScript, paletas CSS calibradas e validação QA zerada.

### 🟢 Etapa 2: Recursos, Inclusão e Conteúdo (Concluída — v0.2.0)
- [x] Busca instantânea Lunr, paginação inferior simplificada e tags com micro-interações.
- [x] Integração ScatterLeaf v0.4.0 (GitHub App, escopo limpo read:user, buscador estilo Minrock neon e reações independentes).
- [x] Artigos sobre Obsidian, Domínio próprio, Personalização e Acessibilidade/Valores.
- [x] RSS Feed 2.0 com auto-discovery `<link rel="alternate">` e botão acessível no rodapé.
- [x] Auditoria de Acessibilidade, Boas Práticas e SEO com **100/100 no Lighthouse** e 0 erros WCAG.

### 🟢 Etapa 2.1: Blindagem OSINT-Proof, Parametrização e Purga de Git (Concluída — v0.2.2)
- [x] Isolamento de contatos: botões de redes sociais e email parametrizados com fallback neutro (`https://example.com/`), mantendo no GitHub apenas o repositório público do projeto.
- [x] Sanitização completa de dados privados, caminhos absolutos e URLs de desenvolvimento.
- [x] Componentes de interface (`Footer.astro` e `SocialDropdown.astro`) calibrados para abertura segura de links web.
- [x] Domínio de produção padronizado em todo o ecossistema: `https://minrock.vercel.app`.
- [x] Sincronização do bundle do ScatterLeaf v0.5.2 (`public/scatterleaf.js`) 100% expurgado de dados nominais.
- [x] Exclusão integral da pasta `.git` local para subida do repositório do zero limpo e desvinculado.
- [x] Conexão OSINT-Proof do Broker via Variável de Ambiente: Leitura dinâmica de `PUBLIC_SCATTERLEAF_BROKER` no `src/config/site.ts`, permitindo deploy em produção na Vercel com comentários ao vivo sem expor subdomínios pessoais no GitHub.
- [x] Resolução de Título & Persistência de Discussões: Passagem explícita de `term={title}` em `Comments.astro` e atualização do bundle, garantindo que discussões reais no GitHub persistam e recarreguem perfeitamente no F5 e entre navegadores.
- [x] Homologação ScatterLeaf v0.5.4 & Suporte a Imagens URL (24/09/2026):
  - Propagação do bundle compilado v0.5.4 (`public/scatterleaf.js`), adição de `images?: boolean` em `comments.features` no `src/config/site.ts`, passagem de `enable-images` no `Comments.astro` e cache buster `v=0.5.4`.
  - Suporte completo aos novos modais dedicados de GIF e Imagem via HTTPS, botão "Salvar na coleção", confirmação inline ao limpar histórico e atalhos diretos na toolbar do composer.
  - Correção cirúrgica de isolamento de atalhos globais de teclado no `SearchModal.astro` inspecionando `e.composedPath()` para prevenir abertura acidental da busca ao digitar `/` em inputs do Shadow DOM do ScatterLeaf.
- [x] Sincronização ScatterLeaf v0.5.5 — Toolbar Despoluída & Botão Primário Reforçado (24/09/2026):
  - Atualização do bundle `public/scatterleaf.js` com a barra do composer minimalista (mantendo unicamente o seletor `[ 😀 ]`, com as ações de GIF e Imagem encapsuladas no menu de emojis).
  - Botão de envio primário (`.sl-btn-primary` / `[ 🍃 Post note ]`) recalibrado em Azul Royal profundo (`#1f6feb` / hover `#388bfd`) com sutil sombra projetada no logo `🍃`, garantindo alta legibilidade e contraste WCAG AA no dark mode.
- [x] Sincronização ScatterLeaf v0.5.8 — Painel de Moderação Recolhível & Bordas Suaves 6px (24/09/2026):
  - Propagação do bundle compilado `public/scatterleaf.js` v0.5.8 no Minrock.
  - Painel de moderação de autor KV retrátil com subcards compactos, botões com cantos suavizados (`border-radius: 6px`) alinhados ao visual dos botões do Minrock, e cabeçalho recolhível com chevron animado `▼`/`▲` (espelhando a ergonomia do `AudioPlayer.astro`) com persistência em `localStorage`.
  - Homologação visual e funcional do cardápio preventivo de ergonomia (onboarding de gaveta vazia, auto-fechamento inteligente ao desbanir e confirmação defensiva prévia no menu de moderação).
- [x] Modal Completo de Compartilhamento Estilo Notion (24/09/2026):
  - Substituição do botão estático 'Copy link' no `ShareBar.astro` pelo modal interativo acionado por `[ ⎋ Share ]`.
  - Mini Preview Card estilo Notion contendo brand badge (`🪨 Minrock`), título do artigo e resumo da postagem.
  - Barra de URL canônica com botão `[ 🔗 Copy URL ]` e transição de feedback visual instantâneo para `[ ✓ Copied! ]` em verde esmeralda (`#10b981`).
  - Fileira de 6 botões de compartilhamento social calibrados no design system do Minrock (quadrados com `border-radius: 6px`, sem circularidade excessiva): LinkedIn, X, WhatsApp, Telegram (posicionado cirurgicamente entre WhatsApp e Facebook), Facebook e Email.
  - Acessibilidade aprimorada (`role="dialog"`, `aria-modal="true"`, foco automático no input, fechamento via ESC ou clique no backdrop e resiliência a View Transitions com `astro:after-swap`).
- [x] Homologação ScatterLeaf v0.5.9 — Mini-Lightbox Nativo com Zoom & Pan (24/09/2026):
  - Propagação do bundle compilado `public/scatterleaf.js` v0.5.9 no Minrock.
  - Eliminação de saltos externos para abas do `camo.githubusercontent.com` em imagens postadas nos comentários.
  - Lightbox 100% nativo no Shadow DOM com zoom progressivo (0.5x a 4.0x), navegação livre arrastável (pan com mouse e touch), duplo-clique, roda do mouse e fechamento intuitivo (ESC, clique no backdrop ou botão X).
  - Validação completa no `npm run qa` do Minrock (0 erros, 55 rotas estáticas compiladas com sucesso em 1.01s).

### ⚪ Etapa 3: Homologação no Catálogo Astro Themes
- [x] Auditoria WCAG 2.1/2.2 AA e performance máxima em produção.
- [ ] Submissão ao diretório oficial `astro.build/themes`.

### 🟢 Etapa 4: Sistema de Feature Flags ("Completo por padrão, minimalista sob demanda") (Concluída — 24/09/2026)
- [x] Criar interface `SiteFeatures` e objeto `features` no `siteConfig` (`src/config/site.ts`) para controle granular de componentes.
- [x] Habilitar todos os 10 recursos por padrão (Experiência Completa / Efeito UAU imediato).
- [x] Permitir desativação seletiva para puristas do minimalismo (Obsidian style) com zero overhead de bundle no SSG:
  - [x] `search`: Modal e atalhos de busca Lunr (desktop e mobile no `Header.astro` e `SearchModal.astro`).
  - [x] `tableOfContents`: Sumário lateral com scroll-spy e layout adaptativo no blog post (quando desativado, o grid expande para coluna única centrada de 780px via `.no-sidebar`).
  - [x] `readingTime`: Badge de tempo estimado de leitura ("X min read") no meta do artigo.
  - [x] `audioPlayer`: Voice reader TTS acessível (`AudioPlayer.astro`) em posts e projetos.
  - [x] `tags`: Exibição de chips e nuvem de tópicos em artigos (`ArticleCard.astro`), índice do blog e home.
  - [x] `socialShare`: Barra e modal estilo Notion de compartilhamento social (`ShareBar.astro`).
  - [x] `themeSwitcher`: Alternador de paletas (`ThemeToggle.astro`) no header.
  - [x] `backToTop`: Botão flutuante de retorno ao topo (`BackToTop.astro`).
  - [x] `imageZoom`: Visualizador Medium-style / PhotoSwipe com zoom em imagens (`ImageZoom.astro`).
  - [x] `comments`: Discussões nativas sem iframe via ScatterLeaf (`Comments.astro`).
- [x] Garantir zero overhead de bundle no SSG: componentes desativados não são compilados no HTML final pelo Astro.

---

## 🛠️ Comandos Rápidos
```bash
npm run dev             # Dev local (http://localhost:4321)
npm run qa              # Checagem completa de tipos + build estático
npm run audit:google    # SERP Preview, Schema.org e Googlebot
npm run audit:wcag      # Conformidade semântica e Acessibilidade WCAG
npm run audit:security  # Varredura DevSecOps Sentinel
```
