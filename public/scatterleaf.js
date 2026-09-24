var ye = Object.defineProperty;
var xe = (C, f, e) => f in C ? ye(C, f, { enumerable: !0, configurable: !0, writable: !0, value: e }) : C[f] = e;
var h = (C, f, e) => xe(C, typeof f != "symbol" ? f + "" : f, e);
const we = `
:host {
  display: block;
  font-family: var(--sl-font, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif);
  color: var(--sl-text);
  line-height: 1.5;
  box-sizing: border-box;
}

*, *::before, *::after {
  box-sizing: inherit;
}

button, input, textarea, select {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

/* Foco Visível para Acessibilidade (A11y) */
:focus-visible {
  outline: 2px solid var(--sl-accent) !important;
  outline-offset: 2px !important;
}

/* Container Principal */
.sl-container {
  background: var(--sl-bg);
  border: 1px solid var(--sl-border);
  border-radius: var(--sl-radius, 12px);
  padding: 1.5rem;
  transition: background 0.25s ease, border-color 0.25s ease, color 0.25s ease;
}

/* Header & Contador */
.sl-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--sl-border);
}

.sl-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0;
  color: var(--sl-text);
}

.sl-badge {
  display: inline-flex;
  align-items: center;
  padding: 0.15rem 0.6rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  background: var(--sl-surface);
  color: var(--sl-accent);
  border: 1px solid var(--sl-border);
}

.sl-header-left {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

/* Barra de Ferramentas e Filtro de Comentários (Toolbar - Estilo Minrock com Efeito Neon) */
.sl-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.25rem;
  margin-bottom: 1.25rem;
  gap: 0.75rem;
  min-height: 36px;
}

.sl-toolbar-actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  height: 36px;
}

.sl-toolbar-count {
  display: inline-flex;
  align-items: center;
  height: 36px;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--sl-text-muted);
  white-space: nowrap;
  letter-spacing: -0.01em;
  user-select: none;
  line-height: 1;
}

.sl-sort-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  background: var(--sl-surface);
  border: 1px solid var(--sl-border);
  border-radius: 6px;
  height: 36px;
  box-sizing: border-box;
  padding: 0 0.75rem;
  font-size: 0.8rem;
  font-weight: 500;
  font-family: inherit;
  color: var(--sl-text-muted);
  cursor: pointer;
  transition: all 0.15s ease;
  white-space: nowrap;
  user-select: none;
  line-height: 1;
}

.sl-sort-btn:hover {
  color: var(--sl-text);
  border-color: var(--sl-accent);
  background: var(--sl-hover, rgba(125, 125, 125, 0.08));
}

.sl-sort-btn:active {
  transform: scale(0.96);
  color: var(--sl-accent);
}

.sl-search-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--sl-surface);
  border: 1px solid var(--sl-border);
  border-radius: 6px;
  padding: 0 0.75rem;
  height: 36px;
  width: 280px;
  max-width: 100%;
  box-sizing: border-box;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03);
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.sl-search-wrapper:hover {
  border-color: var(--sl-accent);
  box-shadow: 0 0 8px var(--sl-accent-glow, rgba(146, 64, 14, 0.2));
}

.sl-search-wrapper:focus-within {
  border-color: var(--sl-accent);
  box-shadow: 0 0 0 1px var(--sl-accent), 0 0 14px var(--sl-accent-glow, rgba(146, 64, 14, 0.35)), 0 2px 4px rgba(0, 0, 0, 0.06);
  background: var(--sl-surface);
}

.sl-search-svg {
  flex-shrink: 0;
  color: var(--sl-text-muted);
  transition: color 0.2s ease;
  user-select: none;
}

.sl-search-wrapper:focus-within .sl-search-svg,
.sl-search-wrapper:hover .sl-search-svg {
  color: var(--sl-accent);
}

.sl-search-input {
  width: 100%;
  height: 100%;
  border: none !important;
  outline: none !important;
  -webkit-appearance: none;
  appearance: none;
  box-shadow: none !important;
  background: transparent !important;
  border-radius: 4px;
  color: var(--sl-text);
  font-family: inherit;
  font-size: 0.84rem;
  box-sizing: border-box;
  padding: 0;
}

.sl-search-input:focus,
.sl-search-input:focus-visible {
  outline: none !important;
  box-shadow: none !important;
  border: none !important;
}

.sl-search-input::placeholder {
  color: var(--sl-text-muted);
  opacity: 0.75;
  font-size: 0.84rem;
}

.sl-search-kbd {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 18px;
  height: 18px;
  padding: 0 4px;
  border: 1px solid var(--sl-border);
  border-radius: 4px;
  background: var(--sl-tab-bg, rgba(0, 0, 0, 0.04));
  color: var(--sl-text-muted);
  font-family: inherit;
  font-size: 0.6875rem;
  font-weight: 500;
  line-height: 1;
  user-select: none;
  pointer-events: none;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.05);
}

.sl-search-clear-btn {
  background: transparent;
  border: none;
  color: var(--sl-text-muted);
  font-size: 0.8125rem;
  cursor: pointer;
  padding: 0.2rem;
  margin-left: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: color 0.15s ease, background 0.15s ease;
  line-height: 1;
}

.sl-search-clear-btn:hover {
  color: var(--sl-text);
  background: var(--sl-card-bg-hover, rgba(0, 0, 0, 0.06));
}

/* Banner de Resultados da Busca */
.sl-search-banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--sl-tab-bg, rgba(0, 0, 0, 0.03));
  border: 1px solid var(--sl-border);
  border-radius: 8px;
  padding: 0.5rem 0.85rem;
  margin-bottom: 1rem;
  font-size: 0.8rem;
  color: var(--sl-text-muted);
}

.sl-search-banner-clear {
  background: transparent;
  border: none;
  color: var(--sl-accent);
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  text-decoration: underline;
  padding: 0;
}

.sl-search-banner-clear:hover {
  color: var(--sl-accent-hover);
}

@media (max-width: 640px) {
  .sl-header {
    flex-wrap: wrap;
    gap: 0.75rem;
  }
  .sl-toolbar {
    width: 100%;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  .sl-search-wrapper {
    flex: 1 1 200px;
    width: auto !important;
  }
  .sl-toolbar-actions {
    margin-left: auto;
    flex-wrap: wrap;
    justify-content: flex-end;
  }
  .sl-toolbar-count {
    font-size: 0.8rem;
  }
}

.sl-brand-tag {
  font-size: 0.75rem;
  color: var(--sl-text-muted);
  display: flex;
  align-items: center;
  gap: 0.35rem;
}

.sl-brand-tag a {
  color: var(--sl-accent);
  text-decoration: none;
  font-weight: 500;
}

.sl-brand-tag a:hover {
  text-decoration: underline;
}

/* Caixa de Escrita de Novo Comentário (Composer) */
.sl-composer {
  background: var(--sl-surface);
  border: 1px solid var(--sl-border);
  border-radius: var(--sl-radius, 10px);
  padding: 0;
  margin-bottom: 1.5rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.04);
  position: relative;
  z-index: 20;
}

/* Abas do Composer: Escreva / Prévia e Controle Tipográfico Aa */
.sl-composer-tabs {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--sl-tab-bg, rgba(0, 0, 0, 0.03));
  border-bottom: 1px solid var(--sl-border);
  border-top-left-radius: calc(var(--sl-radius, 10px) - 1px);
  border-top-right-radius: calc(var(--sl-radius, 10px) - 1px);
  padding: 0.25rem 0.5rem;
}

.sl-tabs-group {
  display: flex;
  gap: 0.25rem;
}

.sl-tab {
  background: transparent;
  border: none;
  padding: 0.4rem 0.75rem;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--sl-text-muted);
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.15s ease;
}

.sl-tab:hover {
  color: var(--sl-text);
}

.sl-tab.sl-tab-active {
  background: var(--sl-surface);
  color: var(--sl-accent);
  font-weight: 600;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
}

.sl-composer-tabs-actions {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  position: relative;
}

.sl-code-menu-wrapper {
  position: relative;
}

.sl-code-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 1px solid transparent;
  border-radius: 6px;
  padding: 0.25rem 0.5rem;
  font-size: 0.8rem;
  font-weight: 700;
  font-family: ui-monospace, SFMono-Regular, "JetBrains Mono", Menlo, Consolas, monospace;
  color: var(--sl-text-muted);
  cursor: pointer;
  transition: all 0.15s ease;
  user-select: none;
}

.sl-code-toggle:hover {
  border-color: var(--sl-border);
  color: var(--sl-text);
  background: var(--sl-surface);
}

.sl-code-toggle.sl-code-toggle-active {
  background: var(--sl-bg);
  border-color: var(--sl-accent);
  color: var(--sl-accent);
}

/* Popover do Seletor de Linguagens */
.sl-code-picker-popover {
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  width: 250px;
  max-width: 90vw;
  background: var(--sl-surface);
  border: 1px solid var(--sl-border);
  border-radius: var(--sl-radius, 8px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);
  padding: 0.5rem;
  z-index: 100;
  animation: sl-fade-in 0.15s ease;
}

.sl-code-picker-title {
  font-size: 0.72rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--sl-text-muted);
  padding: 0.2rem 0.4rem 0.4rem;
  border-bottom: 1px solid var(--sl-border);
  margin-bottom: 0.35rem;
}

.sl-code-lang-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.25rem;
  max-height: 210px;
  overflow-y: auto;
}

.sl-code-lang-btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: transparent;
  border: 1px solid transparent;
  border-radius: 6px;
  padding: 0.3rem 0.45rem;
  cursor: pointer;
  text-align: left;
  transition: all 0.12s ease;
  width: 100%;
}

.sl-code-lang-btn:hover {
  background: var(--sl-bg);
  border-color: var(--sl-border);
}

.sl-code-lang-name {
  font-size: 0.78rem;
  color: var(--sl-text);
  font-weight: 500;
}

.sl-code-lang-tag {
  font-size: 0.68rem;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  color: var(--sl-accent);
  background: var(--sl-tab-bg, rgba(0, 0, 0, 0.05));
  padding: 0.1rem 0.3rem;
  border-radius: 4px;
}

.sl-font-toggle {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  background: transparent;
  border: 1px solid transparent;
  border-radius: 6px;
  padding: 0.25rem 0.5rem;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--sl-text-muted);
  cursor: pointer;
  transition: all 0.15s ease;
}

.sl-font-toggle:hover {
  border-color: var(--sl-border);
  color: var(--sl-text);
}

.sl-font-toggle.sl-mono-active {
  background: var(--sl-bg);
  border-color: var(--sl-accent);
  color: var(--sl-accent);
}

/* Área de Texto com Auto-grow */
.sl-composer-body {
  padding: 0.75rem;
}

.sl-textarea {
  width: 100%;
  min-height: 85px;
  background: transparent;
  border: none;
  color: var(--sl-text);
  font-family: inherit;
  font-size: 0.95rem;
  line-height: 1.5;
  resize: vertical;
  outline: none;
  display: block;
}

.sl-textarea.sl-monospace {
  font-family: ui-monospace, SFMono-Regular, "JetBrains Mono", Menlo, Consolas, monospace !important;
  font-size: 0.9rem;
}

.sl-textarea::placeholder {
  color: var(--sl-text-muted);
}

/* Área de Prévia do Markdown */
.sl-preview-area {
  min-height: 85px;
  padding: 0.5rem;
  color: var(--sl-text);
  font-size: 0.95rem;
  line-height: 1.6;
  word-break: break-word;
}

.sl-preview-area.sl-monospace {
  font-family: ui-monospace, SFMono-Regular, "JetBrains Mono", Menlo, Consolas, monospace !important;
}

.sl-preview-empty {
  color: var(--sl-text-muted);
  font-style: italic;
}

.sl-composer-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0.75rem;
  background: var(--sl-tab-bg, rgba(0, 0, 0, 0.02));
  border-top: 1px solid var(--sl-border);
  border-bottom-left-radius: calc(var(--sl-radius, 10px) - 1px);
  border-bottom-right-radius: calc(var(--sl-radius, 10px) - 1px);
  position: relative;
}

.sl-composer-actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

/* Emoji Picker e Ações Rápidas */
.sl-emoji-wrapper {
  position: relative;
  display: inline-flex;
  align-items: center;
}

.sl-btn-emoji,
.sl-btn-toolbar-media {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  padding: 0;
  background: var(--sl-bg);
  border: 1px solid var(--sl-border);
  border-radius: 6px;
  font-size: 1.15rem;
  cursor: pointer;
  color: var(--sl-text);
  line-height: 1;
  transition: all 0.15s ease;
  box-sizing: border-box;
  flex-shrink: 0;
}

.sl-btn-emoji:hover,
.sl-btn-emoji.sl-btn-emoji-active,
.sl-btn-toolbar-media:hover {
  border-color: var(--sl-accent);
  background: var(--sl-card-bg-hover, rgba(255, 255, 255, 0.08));
  transform: scale(1.05);
}

.sl-emoji-popover {
  position: absolute;
  bottom: calc(100% + 12px);
  right: 0;
  width: 320px;
  max-width: calc(100vw - 36px);
  background: var(--sl-surface, var(--sl-bg));
  border: 1px solid var(--sl-border);
  border-radius: 10px;
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.38), 0 0 0 1px rgba(255, 255, 255, 0.06);
  padding: 0.6rem;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  animation: sl-fade-in 0.15s ease;
}

/* Header com Título e Botões de Navegação (Mobile / Scroll) */
.sl-emoji-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 0.35rem;
  border-bottom: 1px solid var(--sl-border);
}

.sl-emoji-title {
  font-size: 0.74rem;
  font-weight: 600;
  color: var(--sl-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.sl-emoji-nav {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.sl-emoji-nav-btn {
  background: var(--sl-tab-bg, rgba(0, 0, 0, 0.04));
  border: 1px solid var(--sl-border);
  border-radius: 4px;
  padding: 0.22rem 0.45rem;
  font-size: 0.72rem;
  color: var(--sl-text);
  cursor: pointer;
  line-height: 1;
  transition: all 0.12s ease;
}

.sl-emoji-nav-btn:hover {
  background: var(--sl-accent-subtle, rgba(88, 166, 255, 0.2));
  border-color: var(--sl-accent);
  color: var(--sl-accent);
}

.sl-emoji-close-btn:hover {
  background: rgba(248, 81, 73, 0.15);
  border-color: rgba(248, 81, 73, 0.4);
  color: #f85149;
}

/* Seletor de Tom de Pele (Skin Tone / Estilo WhatsApp / Unicode Fitzpatrick) */
.sl-skin-tone-toggle-btn {
  background: var(--sl-tab-bg, rgba(0, 0, 0, 0.04));
  border: 1px solid var(--sl-border);
  border-radius: 4px;
  padding: 0.15rem 0.35rem;
  font-size: 0.88rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  transition: all 0.15s ease;
}

.sl-skin-tone-toggle-btn:hover,
.sl-skin-tone-toggle-btn.sl-tone-active {
  border-color: var(--sl-accent);
  background: var(--sl-accent-subtle, rgba(88, 166, 255, 0.18));
  transform: scale(1.08);
}

.sl-skin-tone-panel {
  background: var(--sl-tab-bg, rgba(0, 0, 0, 0.04));
  border: 1px solid var(--sl-accent);
  border-radius: 8px;
  padding: 0.45rem 0.55rem;
  margin-bottom: 0.45rem;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  animation: sl-fade-in 0.12s ease;
}

.sl-skin-tone-panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.71rem;
  font-weight: 600;
  color: var(--sl-accent);
}

.sl-skin-tone-options {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3px;
}

.sl-tone-btn {
  background: var(--sl-surface, var(--sl-bg));
  border: 1px solid var(--sl-border);
  border-radius: 6px;
  padding: 0.22rem 0.35rem;
  font-size: 1.25rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  transition: transform 0.1s ease, border-color 0.15s ease, background 0.15s ease;
}

.sl-tone-btn:hover {
  transform: scale(1.22);
  border-color: var(--sl-accent);
  background: var(--sl-accent-subtle, rgba(88, 166, 255, 0.2));
}

.sl-tone-btn.sl-tone-selected {
  border-color: var(--sl-accent);
  background: var(--sl-accent-subtle, rgba(88, 166, 255, 0.25));
  box-shadow: 0 0 0 1px var(--sl-accent);
}

/* Área de Rolagem com Barra Visível (Mouse Wheel / Touchpad / Mobile) */
.sl-emoji-scroll {
  max-height: 195px;
  overflow-y: scroll;
  overflow-x: hidden;
  padding-right: 0.35rem;
  scroll-behavior: smooth;
  scrollbar-width: thin;
  scrollbar-color: var(--sl-accent) var(--sl-tab-bg, rgba(0, 0, 0, 0.06));
}

.sl-emoji-scroll::-webkit-scrollbar {
  width: 6px;
}

.sl-emoji-scroll::-webkit-scrollbar-track {
  background: var(--sl-tab-bg, rgba(0, 0, 0, 0.06));
  border-radius: 4px;
}

.sl-emoji-scroll::-webkit-scrollbar-thumb {
  background: var(--sl-accent);
  border-radius: 4px;
}

.sl-emoji-category {
  margin-bottom: 0.55rem;
}

.sl-emoji-category:last-child {
  margin-bottom: 0;
}

.sl-emoji-category-title {
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--sl-text-muted);
  margin-bottom: 0.25rem;
  display: block;
}

.sl-emoji-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 3px;
}

.sl-emoji-item {
  background: transparent;
  border: none;
  font-size: 1.25rem;
  padding: 0.28rem 0;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.1s ease, background 0.1s ease;
}

.sl-emoji-item:hover {
  background: var(--sl-accent-subtle, rgba(88, 166, 255, 0.18));
  transform: scale(1.22);
}

.sl-emoji-gif-btn,
.sl-emoji-img-btn {
  width: 100%;
  margin-top: 2px;
  padding: 0.4rem 0.5rem;
  background: var(--sl-tab-bg, rgba(0, 0, 0, 0.04));
  border: 1px dashed var(--sl-border);
  border-radius: 6px;
  color: var(--sl-text-muted);
  font-size: 0.76rem;
  cursor: pointer;
  text-align: center;
  transition: all 0.15s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
}

.sl-emoji-gif-btn:hover,
.sl-emoji-img-btn:hover {
  color: var(--sl-accent);
  border-color: var(--sl-accent);
  background: var(--sl-card-bg-hover, rgba(255, 255, 255, 0.06));
}

/* Botões */
.sl-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  height: 36px;
  padding: 0 0.95rem;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1;
  cursor: pointer;
  transition: all 0.15s ease;
  border: 1px solid transparent;
  box-sizing: border-box;
  white-space: nowrap;
}

.sl-btn-primary {
  background: var(--sl-btn-primary-bg, var(--sl-accent));
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
  font-weight: 600;
}

.sl-btn-primary:hover {
  background: var(--sl-btn-primary-hover, var(--sl-accent-hover));
}

.sl-btn-primary span:first-child {
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.35));
}

.sl-btn-secondary {
  background: var(--sl-bg);
  color: var(--sl-text);
  border-color: var(--sl-border);
}

.sl-btn-secondary:hover {
  border-color: var(--sl-text-muted);
}

/* Botão Verde de Login do GitHub */
.sl-btn-github {
  background: #238636;
  color: #ffffff;
  border: 1px solid rgba(240, 246, 252, 0.1);
  font-weight: 600;
}

.sl-btn-github:hover {
  background: #2ea043;
}

.sl-btn-github svg {
  fill: currentColor;
}

/* Status do Usuário Logado e Broker */
.sl-user-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.8125rem;
  color: var(--sl-text);
  font-weight: 500;
  line-height: 1;
}

.sl-user-avatar {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 1px solid var(--sl-border);
  object-fit: cover;
  flex-shrink: 0;
}

.sl-user-name {
  display: inline-flex;
  align-items: center;
  line-height: 1;
  color: var(--sl-text);
  font-weight: 500;
}

.sl-btn-logout {
  background: transparent;
  border: 1px solid transparent;
  color: var(--sl-text-muted);
  font-family: inherit;
  font-size: 0.75rem;
  cursor: pointer;
  padding: 0.15rem 0.45rem;
  border-radius: 4px;
  transition: all 0.15s ease;
  display: inline-flex;
  align-items: center;
  line-height: 1;
  vertical-align: middle;
}

.sl-btn-logout:hover {
  color: #ef4444;
  background: rgba(239, 68, 68, 0.1);
  border-color: rgba(239, 68, 68, 0.2);
}

.sl-broker-status {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.75rem;
  color: var(--sl-text-muted);
}

.sl-broker-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #22c55e;
}

.sl-broker-dot.sl-broker-standalone {
  background: #f59e0b;
}

/* Lista de Comentários e Threads */
.sl-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* Card de Comentário */
.sl-card {
  background: var(--sl-surface);
  border: 1px solid var(--sl-border);
  border-radius: var(--sl-radius, 10px);
  padding: 1.1rem;
  box-shadow: 0 1px 2px rgba(0,0,0,0.03);
  position: relative;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.sl-card:hover {
  border-color: var(--sl-accent);
}

/* Destaque pulsante para Deep Linking (#comment-123) */
.sl-card.sl-highlight {
  border-color: var(--sl-accent);
  box-shadow: 0 0 0 3px var(--sl-accent-glow, rgba(146, 64, 14, 0.2));
}

/* Card Fixado pelo Autor */
.sl-card.sl-card-pinned {
  border-color: var(--sl-accent);
  box-shadow: 0 0 14px var(--sl-accent-glow, rgba(56, 189, 248, 0.25)), 0 2px 8px rgba(0, 0, 0, 0.04);
}

.sl-pinned-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0.15rem 0.5rem;
  border-radius: 4px;
  background: rgba(56, 189, 248, 0.12);
  color: var(--sl-accent);
  border: 1px solid var(--sl-accent);
  user-select: none;
}

.sl-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.65rem;
  gap: 0.5rem;
}

.sl-author-info {
  display: flex;
  align-items: center;
  gap: 0.65rem;
}

.sl-avatar {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid var(--sl-border);
  flex-shrink: 0;
}

.sl-author-top-row {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  flex-wrap: wrap;
}

.sl-author-name {
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--sl-text);
  text-decoration: none;
}

.sl-author-name:hover {
  color: var(--sl-accent);
  text-decoration: underline;
}

.sl-author-badge {
  font-size: 0.7rem;
  font-weight: 700;
  padding: 0.15rem 0.45rem;
  border-radius: 4px;
  background: var(--sl-accent);
  color: var(--sl-accent-contrast, #ffffff);
}

.sl-card-meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.sl-date {
  font-size: 0.75rem;
  color: var(--sl-text-muted);
}

.sl-edited-tag {
  font-size: 0.75rem;
  color: var(--sl-text-muted);
  font-style: italic;
}

/* Menu de Três Pontinhos (•••) */
.sl-menu-container {
  position: relative;
}

.sl-menu-btn {
  background: transparent;
  border: none;
  color: var(--sl-text-muted);
  cursor: pointer;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-size: 0.9rem;
  line-height: 1;
  transition: all 0.15s ease;
}

.sl-menu-btn:hover {
  background: var(--sl-bg);
  color: var(--sl-text);
}

.sl-dropdown {
  position: absolute;
  right: 0;
  top: 100%;
  margin-top: 0.25rem;
  background: var(--sl-surface);
  border: 1px solid var(--sl-border);
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 50;
  min-width: 140px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.sl-dropdown-item {
  background: transparent;
  border: none;
  text-align: left;
  padding: 0.5rem 0.75rem;
  font-size: 0.8rem;
  color: var(--sl-text);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: background 0.15s ease;
}

.sl-dropdown-item:hover {
  background: var(--sl-bg);
  color: var(--sl-accent);
}

.sl-dropdown-item.sl-danger:hover {
  color: #ef4444;
}

/* Corpo do Comentário com Markdown */
.sl-body {
  font-size: 0.95rem;
  color: var(--sl-text);
  line-height: 1.6;
  margin-bottom: 0.75rem;
  word-break: break-word;
}

.sl-body p {
  margin: 0 0 0.5rem 0;
}

.sl-body p:last-child {
  margin-bottom: 0;
}

.sl-body code,
.sl-card-body code:not(.sl-code-body),
.sl-preview-area code:not(.sl-code-body),
.sl-inline-code {
  background: var(--sl-bg);
  border: 1px solid var(--sl-border);
  padding: 0.12rem 0.4rem;
  border-radius: 4px;
  font-size: 0.85em;
  font-family: ui-monospace, SFMono-Regular, "JetBrains Mono", Menlo, Consolas, monospace;
  color: var(--sl-accent);
}

/* Modo de Edição In-Place */
.sl-edit-mode {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin: 0.5rem 0 0.75rem 0;
}

.sl-edit-mode .sl-textarea {
  min-height: 90px;
  padding: 0.6rem 0.75rem;
  border: 1px solid var(--sl-border);
  border-radius: var(--sl-radius, 8px);
  background: var(--sl-bg);
  box-sizing: border-box;
}

.sl-edit-mode .sl-textarea:focus {
  border-color: var(--sl-accent);
  box-shadow: 0 0 0 2px var(--sl-mention-bg);
}

.sl-edit-actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
}

.sl-edit-actions .sl-btn {
  padding: 0.4rem 0.9rem;
  font-size: 0.85rem;
  font-weight: 500;
  border-radius: var(--sl-radius, 6px);
  cursor: pointer;
  transition: all 0.15s ease;
}

/* Bloco de Código Técnico Estruturado */
.sl-code-block {
  position: relative;
  background: var(--sl-bg);
  border: 1px solid var(--sl-border);
  border-radius: var(--sl-radius, 8px);
  margin: 0.75rem 0;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.sl-code-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.35rem 0.75rem;
  background: var(--sl-tab-bg, rgba(0, 0, 0, 0.03));
  border-bottom: 1px solid var(--sl-border);
  font-size: 0.75rem;
}

.sl-code-badge {
  font-family: ui-monospace, SFMono-Regular, "JetBrains Mono", Menlo, Consolas, monospace;
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--sl-accent);
  text-transform: lowercase;
  letter-spacing: 0.03em;
}

.sl-code-copy-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  background: transparent;
  border: 1px solid transparent;
  border-radius: 4px;
  padding: 0.2rem 0.45rem;
  font-size: 0.72rem;
  font-weight: 500;
  color: var(--sl-text-muted);
  cursor: pointer;
  transition: all 0.15s ease;
}

.sl-code-copy-btn:hover {
  background: var(--sl-surface);
  border-color: var(--sl-border);
  color: var(--sl-text);
}

.sl-code-copy-btn.sl-copied {
  color: #10b981;
  border-color: rgba(16, 185, 129, 0.3);
  background: rgba(16, 185, 129, 0.08);
}

/* Elemento <pre> do Código */
.sl-code-pre {
  display: block !important;
  box-sizing: border-box !important;
  margin: 0 !important;
  padding: 0.5rem 0 !important;
  background: transparent !important;
  border: none !important;
  border-radius: 0 !important;
  overflow-x: auto !important;
  overflow-y: auto !important;
  scroll-behavior: smooth;
  font-family: ui-monospace, SFMono-Regular, "JetBrains Mono", Menlo, Consolas, monospace !important;
  font-size: 0.78rem !important;
  line-height: 1.35rem !important;
}

/* Quando longo e minimizado (default para > 20 linhas) */
.sl-code-block-long.sl-collapsed .sl-code-pre {
  max-height: 290px !important;
  overflow-y: auto !important;
}

/* Quando expandido */
.sl-code-block-long.sl-expanded .sl-code-pre {
  max-height: none !important;
  overflow-y: visible !important;
}

.sl-code-pre::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}
.sl-code-pre::-webkit-scrollbar-track {
  background: transparent;
}
.sl-code-pre::-webkit-scrollbar-thumb {
  background: var(--sl-border);
  border-radius: 4px;
}
.sl-code-pre::-webkit-scrollbar-thumb:hover {
  background: var(--sl-text-muted);
}

/* Barra inferior de Expandir / Minimizar Código */
.sl-code-expand-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.35rem 0.75rem;
  background: var(--sl-tab-bg, rgba(0, 0, 0, 0.03));
  border-top: 1px solid var(--sl-border);
}

.sl-code-expand-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  background: transparent;
  border: none;
  color: var(--sl-accent);
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  padding: 0.2rem 0.75rem;
  border-radius: 4px;
  transition: all 0.15s ease;
}

.sl-code-expand-btn:hover {
  background: var(--sl-surface);
  color: var(--sl-text);
}

/* Controles Flutuantes de Rolagem de Código (Mobile & Desktop) */
.sl-code-scroll-controls {
  position: absolute;
  bottom: 38px; /* Acima da barra de expandir */
  right: 8px;
  display: flex;
  flex-direction: column;
  gap: 3px;
  background: var(--sl-surface);
  border: 1px solid var(--sl-border);
  border-radius: 6px;
  padding: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);
  backdrop-filter: blur(8px);
  z-index: 5;
  opacity: 0.85;
  transition: opacity 0.15s ease, transform 0.15s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}

.sl-code-block-long.sl-expanded .sl-code-scroll-controls {
  display: none;
}

.sl-code-block:hover .sl-code-scroll-controls,
.sl-code-scroll-controls:hover,
.sl-code-scroll-controls:focus-within {
  opacity: 1;
}

/* Brilho Neon no Container ao interagir com as setas */
.sl-code-scroll-controls:has(.sl-code-scroll-btn:active:not(.sl-disabled)) {
  border-color: var(--sl-accent);
  box-shadow: 0 0 16px rgba(56, 189, 248, 0.45), 0 2px 8px rgba(0, 0, 0, 0.25);
}

.sl-code-scroll-btn {
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  border-radius: 4px;
  color: var(--sl-text);
  cursor: pointer;
  padding: 0;
  transition: background 0.12s ease, color 0.12s ease, opacity 0.12s ease, box-shadow 0.15s ease, transform 0.1s ease;
}

.sl-code-scroll-btn:hover:not(.sl-disabled) {
  background: var(--sl-hover, rgba(125, 125, 125, 0.15));
  color: var(--sl-accent);
  box-shadow: 0 0 8px rgba(56, 189, 248, 0.35);
}

/* Efeito Neon Vibrante ao Clicar / Tocar (:active) */
.sl-code-scroll-btn:active:not(.sl-disabled) {
  color: var(--sl-accent);
  background: rgba(56, 189, 248, 0.2);
  box-shadow: 0 0 14px var(--sl-accent), inset 0 0 6px var(--sl-accent);
  filter: drop-shadow(0 0 6px var(--sl-accent));
  transform: scale(0.9);
}

.sl-code-scroll-btn.sl-disabled {
  opacity: 0.25;
  cursor: not-allowed;
  pointer-events: none;
}

.sl-code-body {
  display: block;
  width: 100%;
}

.sl-code-line {
  display: flex;
  align-items: baseline;
  min-height: 1.35rem;
  line-height: 1.35rem;
  transition: background 0.1s ease;
}

.sl-code-line:hover {
  background: rgba(125, 125, 125, 0.06);
}

.sl-line-num {
  width: 2.8rem;
  min-width: 2.8rem;
  text-align: right;
  padding: 0 0.65rem 0 0.5rem;
  color: var(--sl-text-muted);
  opacity: 0.45;
  user-select: none;
  -webkit-user-select: none;
  font-size: 0.72rem;
  line-height: 1.35rem;
  border-right: 1px solid var(--sl-border);
  flex-shrink: 0;
  box-sizing: border-box;
}

.sl-line-code {
  flex: 1;
  padding-left: 0.65rem;
  padding-right: 0.65rem;
  white-space: pre;
  color: var(--sl-text);
  font-size: 0.78rem;
  line-height: 1.35rem;
  tab-size: 2;
  word-break: normal;
  overflow-wrap: normal;
  box-sizing: border-box;
}

.sl-body pre {
  background: var(--sl-bg);
  border: 1px solid var(--sl-border);
  padding: 0.75rem;
  border-radius: 6px;
  overflow-x: auto;
  font-size: 0.85em;
  margin: 0.5rem 0;
}

.sl-body pre code {
  background: transparent;
  border: none;
  padding: 0;
}

.sl-body blockquote {
  margin: 0.5rem 0;
  padding-left: 0.75rem;
  border-left: 3px solid var(--sl-accent);
  color: var(--sl-text-muted);
}

.sl-card-body a,
.sl-body a {
  color: var(--sl-accent);
  text-decoration: underline;
  text-underline-offset: 2px;
  transition: opacity 0.15s ease;
}

.sl-card-body a:hover,
.sl-body a:hover {
  opacity: 0.85;
}

/* Imagens e GIFs Animados Embutidos (Delimitação e Harmonia) */
.sl-card-body img:not(.sl-emoji-inline),
.sl-preview-area img:not(.sl-emoji-inline),
.sl-body img:not(.sl-emoji-inline) {
  max-width: 100%;
  max-height: 280px;
  min-height: 80px;
  height: auto;
  width: auto;
  object-fit: contain;
  border-radius: var(--sl-radius-md, 8px);
  margin: 0.6rem 0;
  display: block;
  box-shadow: var(--sl-shadow-sm, 0 2px 8px rgba(0, 0, 0, 0.15));
  border: 1px solid var(--sl-border);
  background: rgba(0, 0, 0, 0.05);
}

.sl-card-body img.sl-emoji-inline,
.sl-preview-area img.sl-emoji-inline,
.sl-body img.sl-emoji-inline {
  display: inline-block;
  vertical-align: -0.2em;
  height: 1.3em;
  width: auto;
  margin: 0 0.15em;
  box-shadow: none;
}

/* Menções de Nicknames (@usuario) Estilo Chip / Tag */
.sl-mention {
  color: var(--sl-mention-color, var(--sl-accent)) !important;
  font-weight: 600;
  font-size: 0.88em;
  text-decoration: none !important;
  background: var(--sl-mention-bg, rgba(88, 166, 255, 0.14));
  padding: 0.12rem 0.45rem;
  border-radius: 5px;
  border: 1px solid var(--sl-mention-border, rgba(88, 166, 255, 0.28));
  display: inline-flex;
  align-items: center;
  line-height: 1.3;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transition: background 0.15s ease, border-color 0.15s ease, color 0.15s ease;
}

.sl-mention:hover {
  background: var(--sl-mention-hover, rgba(88, 166, 255, 0.25));
  border-color: var(--sl-accent);
  color: var(--sl-accent-hover, var(--sl-accent)) !important;
}

/* Rodapé do Card (Reações, Responder e Áudio) */
.sl-card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding-top: 0.5rem;
}

.sl-actions-left {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  flex-wrap: wrap;
}

.sl-reaction-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  font-size: 0.8rem;
  background: var(--sl-bg);
  border: 1px solid var(--sl-border);
  color: var(--sl-text-muted);
  cursor: pointer;
  transition: all 0.15s ease;
}

.sl-reaction-btn:hover {
  border-color: var(--sl-accent);
  color: var(--sl-text);
}

.sl-reaction-btn.sl-active,
.sl-reaction-btn.sl-reacted {
  background: var(--sl-accent);
  color: var(--sl-accent-contrast, #ffffff);
  border-color: var(--sl-accent);
  font-weight: 600;
}

/* ========================================================
   REATIVIDADE ESTILO LINKEDIN (FLUTUANTE E SUMMARY)
   ======================================================== */
.sl-reaction-container {
  position: relative;
  display: inline-flex;
  align-items: center;
}

.sl-reaction-trigger-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.25rem 0.55rem;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 500;
  background: var(--sl-bg);
  border: 1px solid var(--sl-border);
  color: var(--sl-text-muted);
  cursor: pointer;
  transition: all 0.15s ease;
  user-select: none;
}

.sl-reaction-trigger-btn:hover {
  border-color: var(--sl-accent);
  color: var(--sl-text);
  background: var(--sl-surface);
}

.sl-reaction-trigger-btn.sl-reacted {
  background: var(--sl-mention-bg, rgba(88, 166, 255, 0.14));
  border-color: var(--sl-accent);
  color: var(--sl-accent);
  font-weight: 600;
}

/* Popover Flutuante LinkedIn */
.sl-reaction-popover {
  position: absolute;
  bottom: calc(100% + 8px);
  left: 0;
  background: var(--sl-surface);
  border: 1px solid var(--sl-border);
  border-radius: 9999px;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.28), 0 4px 10px -2px rgba(0, 0, 0, 0.15);
  display: none;
  align-items: center;
  padding: 4px 8px;
  gap: 6px;
  z-index: 60;
  backdrop-filter: blur(8px);
  animation: sl-popover-in 0.18s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  white-space: nowrap;
}

@keyframes sl-popover-in {
  from {
    opacity: 0;
    transform: translateY(6px) scale(0.92);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Mostrar ao passar o mouse no container ou se estiver ativo (mobile tap) */
.sl-reaction-container:hover .sl-reaction-popover,
.sl-reaction-container.sl-popover-open .sl-reaction-popover {
  display: flex;
}

/* Área de segurança invisível abaixo do popover para o mouse não perder o hover */
.sl-reaction-popover::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -10px;
  height: 10px;
}

/* Botões do Picker com micro-animação */
.sl-reaction-picker-item {
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.35rem;
  line-height: 1;
  padding: 4px 6px;
  border-radius: 50%;
  position: relative;
  transition: transform 0.15s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.12s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.sl-reaction-picker-item:hover {
  transform: translateY(-5px) scale(1.35);
  background: rgba(125, 125, 125, 0.12);
}

.sl-reaction-picker-item:active {
  transform: scale(0.95);
}

/* Tooltip elegante em cada emoji */
.sl-reaction-picker-item::before {
  content: attr(data-tooltip);
  position: absolute;
  bottom: 120%;
  left: 50%;
  transform: translateX(-50%) translateY(4px);
  background: rgba(15, 23, 42, 0.9);
  color: #ffffff;
  font-size: 0.7rem;
  font-weight: 500;
  padding: 2px 7px;
  border-radius: 4px;
  opacity: 0;
  pointer-events: none;
  transition: all 0.15s ease;
  white-space: nowrap;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
}

.sl-reaction-picker-item:hover::before {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}

/* Resumo e Badges de Reações já recebidas */
.sl-reactions-summary {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  flex-wrap: wrap;
}

.sl-reaction-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.2rem 0.45rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  background: var(--sl-bg);
  border: 1px solid var(--sl-border);
  color: var(--sl-text-muted);
  cursor: pointer;
  transition: all 0.15s ease;
  user-select: none;
}

.sl-reaction-badge:hover {
  border-color: var(--sl-accent);
  color: var(--sl-text);
  transform: translateY(-1px);
}

.sl-reaction-badge.sl-reacted {
  background: var(--sl-mention-bg, rgba(88, 166, 255, 0.14));
  border-color: var(--sl-accent);
  color: var(--sl-accent);
  font-weight: 600;
}

/* ========================================================
   MODAL DE INSERÇÃO SEGURA DE MÍDIA (ANTI-NSFW / CONTEÚDO ADULTO)
   ======================================================== */
.sl-modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(4px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  animation: sl-fade-in 0.15s ease-out forwards;
}

.sl-modal-box {
  background: var(--sl-surface);
  border: 1px solid var(--sl-border);
  border-radius: var(--sl-radius, 12px);
  width: 100%;
  max-width: 480px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.35), 0 8px 10px -6px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  animation: sl-scale-up 0.18s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes sl-fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes sl-scale-up {
  from { transform: scale(0.95); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

.sl-modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  border-bottom: 1px solid var(--sl-border);
}

.sl-modal-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--sl-text);
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.sl-modal-close-btn {
  background: transparent;
  border: none;
  color: var(--sl-text-muted);
  cursor: pointer;
  font-size: 1.25rem;
  line-height: 1;
  padding: 0.25rem;
  border-radius: 4px;
}

.sl-modal-close-btn:hover {
  color: var(--sl-text);
}

.sl-modal-body {
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.sl-modal-notice {
  font-size: 0.78rem;
  color: var(--sl-text-muted);
  background: var(--sl-bg);
  border-left: 3px solid #22c55e;
  padding: 0.5rem 0.75rem;
  border-radius: 0 6px 6px 0;
  line-height: 1.4;
}

.sl-modal-input-group {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.sl-modal-label {
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--sl-text);
}

.sl-modal-input {
  width: 100%;
  background: var(--sl-bg);
  border: 1px solid var(--sl-border);
  border-radius: 6px;
  padding: 0.6rem 0.75rem;
  font-size: 0.85rem;
  color: var(--sl-text);
  outline: none;
  transition: border-color 0.15s ease;
}

.sl-modal-input:focus {
  border-color: var(--sl-accent);
}

.sl-modal-input:disabled,
.sl-modal-input.sl-modal-input-disabled {
  opacity: 0.45;
  cursor: not-allowed;
  background: rgba(125, 125, 125, 0.08);
  border-style: dashed;
}

.sl-modal-label-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.25rem;
}

.sl-tag-exclusive-badge {
  font-size: 0.65rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  padding: 0.15rem 0.45rem;
  border-radius: 4px;
  background: rgba(125, 125, 125, 0.14);
  color: var(--sl-text-muted);
}

.sl-modal-error {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.8rem;
  color: #ef4444;
  background: rgba(239, 68, 68, 0.1);
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  border: 1px solid rgba(239, 68, 68, 0.25);
}

/* Linha de Salvamento na Coleção (Modais de Mídia) */
.sl-modal-collection-row {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-top: 0.15rem;
  margin-bottom: 0.2rem;
}

.sl-btn-save-collection {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.35rem 0.75rem;
  font-size: 0.8rem;
  font-weight: 500;
  border-radius: 6px;
  background: var(--sl-bg);
  border: 1px dashed var(--sl-border);
  color: var(--sl-text-primary);
  cursor: pointer;
  transition: all 0.15s ease;
}

.sl-btn-save-collection:hover {
  background: var(--sl-card-bg);
  border-color: var(--sl-accent);
  color: var(--sl-accent);
}

.sl-modal-success-badge {
  font-size: 0.75rem;
  font-weight: 500;
  color: #10b981;
  display: inline-flex;
  align-items: center;
}

.sl-modal-recents {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.sl-modal-recents-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.78rem;
  font-weight: 500;
  color: var(--sl-text-muted);
}

.sl-confirm-clear-box {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: rgba(239, 68, 68, 0.12);
  border: 1px solid rgba(239, 68, 68, 0.35);
  border-radius: 4px;
  padding: 0.15rem 0.45rem;
}

.sl-confirm-clear-text {
  font-size: 0.72rem;
  color: #ef4444;
  font-weight: 600;
}

.sl-confirm-clear-actions {
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.sl-btn-confirm-yes {
  background: #ef4444;
  color: #ffffff;
  border: none;
  font-size: 0.7rem;
  font-weight: 600;
  border-radius: 3px;
  padding: 0.1rem 0.4rem;
  cursor: pointer;
  transition: opacity 0.15s ease;
}

.sl-btn-confirm-yes:hover {
  opacity: 0.85;
}

.sl-btn-confirm-no {
  background: transparent;
  color: var(--sl-text-muted);
  border: 1px solid var(--sl-border);
  font-size: 0.7rem;
  border-radius: 3px;
  padding: 0.1rem 0.35rem;
  cursor: pointer;
  transition: color 0.15s ease;
}

.sl-btn-confirm-no:hover {
  color: var(--sl-text-primary);
}

.sl-btn-clear-recents {
  background: transparent;
  border: none;
  font-size: 0.72rem;
  color: var(--sl-text-muted);
  cursor: pointer;
  padding: 0.1rem 0.35rem;
  border-radius: 4px;
  transition: color 0.15s ease;
}

.sl-modal-recents-actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.sl-btn-manage-recents,
.sl-btn-clear-recents {
  background: transparent;
  border: none;
  font-size: 0.72rem;
  color: var(--sl-text-muted);
  cursor: pointer;
  padding: 0.1rem 0.35rem;
  border-radius: 4px;
  transition: all 0.15s ease;
}

.sl-btn-manage-recents:hover {
  color: var(--sl-accent);
}

.sl-btn-manage-recents.sl-active {
  color: var(--sl-accent);
  font-weight: 600;
}

.sl-btn-clear-recents:hover {
  color: #ef4444;
}

.sl-modal-recents-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.45rem;
  max-height: 175px;
  overflow-y: auto;
  padding-right: 2px;
}

.sl-modal-recents-grid::-webkit-scrollbar {
  width: 4px;
}
.sl-modal-recents-grid::-webkit-scrollbar-track {
  background: transparent;
}
.sl-modal-recents-grid::-webkit-scrollbar-thumb {
  background: var(--sl-border);
  border-radius: 4px;
}

.sl-recent-gif-wrapper {
  position: relative;
  border-radius: 6px;
  overflow: hidden;
}

.sl-recent-gif-item {
  width: 100%;
  aspect-ratio: 16 / 10;
  border-radius: 6px;
  border: 1px solid var(--sl-border);
  overflow: hidden;
  background: var(--sl-bg);
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.12s ease, border-color 0.12s ease, box-shadow 0.12s ease;
}

.sl-recent-gif-item:hover {
  transform: scale(1.03);
  border-color: var(--sl-accent);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.sl-recent-gif-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Botão de Exclusão Individual de Mídia Recente (GIF ou Imagem) */
.sl-btn-delete-recent-gif,
.sl-btn-delete-recent-image {
  position: absolute;
  top: 4px;
  right: 4px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.72);
  backdrop-filter: blur(4px);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  line-height: 1;
  cursor: pointer;
  opacity: 0;
  transform: scale(0.85);
  transition: opacity 0.15s ease, transform 0.15s ease, background 0.15s ease;
  z-index: 2;
  padding: 0;
}

.sl-recent-gif-wrapper:hover .sl-btn-delete-recent-gif,
.sl-recent-gif-wrapper:hover .sl-btn-delete-recent-image,
.sl-recent-gif-wrapper:focus-within .sl-btn-delete-recent-gif,
.sl-recent-gif-wrapper:focus-within .sl-btn-delete-recent-image {
  opacity: 1;
  transform: scale(1);
}

.sl-managing-recents .sl-btn-delete-recent-gif,
.sl-managing-recents .sl-btn-delete-recent-image {
  opacity: 1;
  transform: scale(1);
  background: #ef4444;
  border-color: #ef4444;
}

.sl-btn-delete-recent-gif:hover,
.sl-btn-delete-recent-image:hover {
  background: #dc2626;
  border-color: #dc2626;
  transform: scale(1.1);
}

@media (max-width: 640px) {
  .sl-modal-recents-grid {
    grid-template-columns: repeat(3, 1fr);
    max-height: 160px;
  }
}

/* Novo Card Moderno de Upload e Drag & Drop */
.sl-modal-dropzone {
  border: 2px dashed var(--sl-border);
  border-radius: 10px;
  padding: 1.25rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--sl-bg);
  text-align: center;
  transition: all 0.2s ease;
  user-select: none;
}

.sl-modal-dropzone:hover {
  border-color: var(--sl-accent);
  background: rgba(56, 189, 248, 0.03);
}

.sl-modal-dropzone.sl-drag-over {
  border-color: var(--sl-accent);
  background: rgba(56, 189, 248, 0.12);
  box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.3);
  transform: scale(1.01);
}

.sl-dropzone-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.45rem;
  width: 100%;
}

.sl-dropzone-icon {
  color: var(--sl-accent);
  display: flex;
  align-items: center;
  justify-content: center;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.08));
  transition: transform 0.2s ease;
}

.sl-modal-dropzone:hover .sl-dropzone-icon {
  transform: translateY(-2px);
}

.sl-dropzone-title {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--sl-text);
}

.sl-dropzone-divider {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--sl-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0.15rem 0;
}

.sl-dropzone-divider::before,
.sl-dropzone-divider::after {
  content: '';
  display: block;
  width: 24px;
  height: 1px;
  background: var(--sl-border);
}

.sl-btn-browse {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.45rem 1rem;
  font-size: 0.8rem;
  font-weight: 600;
  border-radius: 6px;
  border: 1px solid var(--sl-border);
  background: var(--sl-accent);
  color: #fff;
  cursor: pointer;
  transition: all 0.15s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.sl-btn-browse:hover {
  filter: brightness(1.1);
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

/* Card do Arquivo Selecionado */
.sl-file-selected-card {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  background: rgba(125, 125, 125, 0.06);
  border: 1px solid var(--sl-accent);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.sl-file-card-preview {
  width: 46px;
  height: 46px;
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid var(--sl-border);
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.sl-file-card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.sl-file-card-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  min-width: 0;
}

.sl-file-card-name {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--sl-text);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.sl-file-card-meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.72rem;
  color: var(--sl-text-muted);
}

.sl-file-card-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.2rem;
  padding: 0.1rem 0.35rem;
  border-radius: 4px;
  background: rgba(34, 197, 94, 0.15);
  color: #22c55e;
  font-weight: 600;
  font-size: 0.7rem;
}

.sl-file-size-warning {
  font-size: 0.72rem;
  color: #f59e0b;
  margin-top: 0.2rem;
  line-height: 1.3;
}

.sl-btn-remove-file {
  background: transparent;
  border: 1px solid var(--sl-border);
  color: var(--sl-text-muted);
  width: 28px;
  height: 28px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  transition: all 0.15s ease;
  flex-shrink: 0;
}

.sl-btn-remove-file:hover {
  background: #ef4444;
  border-color: #ef4444;
  color: #fff;
  transform: scale(1.08);
}

/* Card de Prévia da URL */
.sl-url-preview-card {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.45rem 0.65rem;
  border-radius: 6px;
  background: rgba(125, 125, 125, 0.05);
  border: 1px solid var(--sl-border);
  margin-top: 0.35rem;
}

.sl-url-preview-img {
  width: 40px;
  height: 40px;
  border-radius: 4px;
  object-fit: cover;
  border: 1px solid var(--sl-border);
}

.sl-url-preview-label {
  font-size: 0.75rem;
  color: var(--sl-text-muted);
  font-weight: 500;
}

.sl-modal-preview-box {
  border: 1px dashed var(--sl-border);
  border-radius: 8px;
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 110px;
  background: var(--sl-bg);
  text-align: center;
  transition: border-color 0.15s ease, background 0.15s ease;
}

.sl-modal-preview-box.sl-drag-over {
  border-color: var(--sl-accent);
  background: rgba(56, 189, 248, 0.1);
  box-shadow: 0 0 0 2px var(--sl-accent-glow, rgba(56, 189, 248, 0.3));
}

.sl-modal-preview-img {
  max-width: 100%;
  max-height: 180px;
  object-fit: contain;
  border-radius: 4px;
}

.sl-modal-footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  border-top: 1px solid var(--sl-border);
  background: var(--sl-bg);
}

.sl-blocked-media-notice {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 0.75rem;
  border-radius: 6px;
  background: rgba(239, 68, 68, 0.12);
  border: 1px solid rgba(239, 68, 68, 0.3);
  color: #ef4444;
  font-size: 0.78rem;
  font-weight: 500;
  margin: 0.5rem 0;
}

.sl-embedded-img {
  max-width: min(100%, 520px);
  width: auto;
  max-height: 420px;
  object-fit: contain;
  border-radius: 8px;
  display: block;
  margin: 0.6rem 0;
  border: 1px solid var(--sl-border);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: transform 0.15s ease;
}

.sl-embedded-img:hover {
  border-color: var(--sl-accent);
}

.sl-actions-right {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  margin-left: auto;
  flex-wrap: wrap;
}

/* Botão de Tradução Consolidado (Canto Inferior Direito ao lado de Ouvir) */
.sl-translate-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.25rem 0.55rem;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 500;
  background: transparent;
  border: 1px solid var(--sl-border);
  color: var(--sl-text-muted);
  cursor: pointer;
  transition: all 0.15s ease;
  line-height: 1.3;
  text-decoration: none;
  white-space: nowrap;
}

.sl-translate-btn:hover {
  background: var(--sl-bg);
  border-color: var(--sl-accent);
  color: var(--sl-accent);
}

.sl-translate-btn.sl-translated {
  background: var(--sl-mention-bg, rgba(88, 166, 255, 0.14));
  border-color: var(--sl-mention-border, var(--sl-accent));
  color: var(--sl-mention-color, var(--sl-accent));
  font-weight: 600;
}

/* Botão de Responder (Estilo LinkedIn / Reddit) */
.sl-reply-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.25rem 0.6rem;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 500;
  background: transparent;
  border: 1px solid transparent;
  color: var(--sl-text-muted);
  cursor: pointer;
  transition: all 0.15s ease;
}

.sl-reply-btn:hover {
  background: var(--sl-bg);
  border-color: var(--sl-border);
  color: var(--sl-accent);
}

/* Botão de Áudio (Web Speech API) */
.sl-audio-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  font-size: 0.75rem;
  background: transparent;
  border: 1px solid var(--sl-border);
  color: var(--sl-text-muted);
  cursor: pointer;
  transition: all 0.15s ease;
}

.sl-audio-btn:hover {
  color: var(--sl-accent);
  border-color: var(--sl-accent);
}

.sl-audio-btn.sl-audio-playing {
  background: var(--sl-accent);
  color: var(--sl-accent-contrast, #ffffff);
  border-color: var(--sl-accent);
  animation: sl-pulse 1.5s infinite;
}

@keyframes sl-pulse {
  0% { opacity: 1; }
  50% { opacity: 0.7; }
  100% { opacity: 1; }
}

/* Respostas Aninhadas (Threads Estilo LinkedIn com Linha Guia) */
.sl-thread {
  margin-top: 0.75rem;
  padding-left: 1.5rem;
  border-left: 2px solid var(--sl-border);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.sl-card-reply,
.sl-reply-card {
  background: var(--sl-bg);
  border: 1px solid var(--sl-border);
  border-radius: var(--sl-radius, 8px);
  padding: 0.85rem;
}

.sl-card-reply .sl-avatar,
.sl-reply-card .sl-avatar {
  width: 26px;
  height: 26px;
}

/* Botão de Toggle de Thread (Ver mais respostas / Recolher) */
.sl-thread-toggle-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: transparent;
  border: 1px dashed var(--sl-border);
  border-radius: 6px;
  color: var(--sl-text-muted);
  font-family: inherit;
  font-size: 0.8rem;
  font-weight: 500;
  padding: 0.35rem 0.65rem;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  margin-top: 0.25rem;
  align-self: flex-start;
}

.sl-thread-toggle-btn:hover {
  background: var(--sl-surface);
  border-color: var(--sl-accent);
  color: var(--sl-accent);
  transform: translateY(-1px);
}

/* Caixa de Resposta Inline */
.sl-inline-composer {
  margin-top: 0.75rem;
  padding: 0.75rem;
  background: var(--sl-bg);
  border: 1px solid var(--sl-border);
  border-radius: 8px;
}

.sl-inline-composer textarea {
  width: 100%;
  min-height: 60px;
  background: var(--sl-surface);
  border: 1px solid var(--sl-border);
  border-radius: 6px;
  padding: 0.5rem;
  color: var(--sl-text);
  font-family: inherit;
  font-size: 0.85rem;
  resize: vertical;
  outline: none;
  display: block;
}

.sl-inline-footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

/* ========================================================
   PAGINAÇÃO INTELIGENTE & ROLAGEM SUAVE
   ======================================================== */
.sl-list {
  scrollbar-width: thin;
  scrollbar-color: var(--sl-border) transparent;
}

.sl-list::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

.sl-list::-webkit-scrollbar-track {
  background: transparent;
}

.sl-list::-webkit-scrollbar-thumb {
  background: var(--sl-border);
  border-radius: 9999px;
}

.sl-list::-webkit-scrollbar-thumb:hover {
  background: var(--sl-accent);
}

.sl-pagination {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px dashed var(--sl-border);
}

.sl-pagination-controls {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  flex-wrap: wrap;
  justify-content: center;
}

.sl-page-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  height: 32px;
  padding: 0 0.5rem;
  border-radius: 6px;
  border: 1px solid var(--sl-border);
  background: var(--sl-surface);
  color: var(--sl-text);
  font-family: inherit;
  font-size: 0.82rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  user-select: none;
}

.sl-page-btn:hover:not(:disabled) {
  background: var(--sl-bg);
  border-color: var(--sl-accent);
  color: var(--sl-accent);
  transform: translateY(-1px);
}

.sl-page-btn.sl-page-active {
  background: var(--sl-accent);
  border-color: var(--sl-accent);
  color: var(--sl-accent-contrast, #ffffff);
  font-weight: 600;
  box-shadow: 0 2px 8px var(--sl-accent-glow, rgba(0, 0, 0, 0.15));
}

.sl-page-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  border-color: var(--sl-border);
  color: var(--sl-text-muted);
}

.sl-page-nav-btn {
  padding: 0 0.65rem;
  font-size: 0.8rem;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
}

.sl-pagination-info {
  font-size: 0.78rem;
  color: var(--sl-text-muted);
  user-select: none;
}

/* ========================================================
   DEFINIÇÕES DE TEMAS
   ======================================================== */

/* 0. Auto / Camaleão (Herda ou Auto-computa do Blog) */
:host([theme="auto"]),
:host(:not([theme])) {
  --sl-bg: var(--page-bg, var(--color-bg, #ffffff));
  --sl-surface: var(--page-card-bg, var(--color-surface, #ffffff));
  --sl-tab-bg: var(--page-tab-bg, rgba(0, 0, 0, 0.03));
  --sl-text: var(--page-text, var(--color-text, #1c1917));
  --sl-text-muted: var(--page-text-muted, #78716c);
  --sl-border: var(--page-border, var(--color-border, #e7e5e4));
  --sl-accent: var(--page-accent, var(--color-accent, #92400e));
  --sl-accent-hover: var(--page-accent-hover, var(--color-accent-hover, #b45309));
  --sl-accent-contrast: #ffffff;
  --sl-accent-glow: rgba(146, 64, 14, 0.25);
  --sl-mention-color: var(--page-accent, var(--color-accent, #92400e));
  --sl-mention-bg: rgba(146, 64, 14, 0.12);
  --sl-mention-border: rgba(146, 64, 14, 0.25);
}

/* 1. Cream (Warm Paper / Marginalia) */
:host([theme="cream"]) {
  --sl-bg: #f7f4ea;
  --sl-surface: #ffffff;
  --sl-tab-bg: #f0ebe0;
  --sl-text: #2c2724;
  --sl-text-muted: #78716c;
  --sl-border: #ded7c6;
  --sl-accent: #92400e;
  --sl-accent-hover: #b45309;
  --sl-accent-contrast: #ffffff;
  --sl-accent-glow: rgba(146, 64, 14, 0.25);
  --sl-mention-color: #92400e;
  --sl-mention-bg: rgba(146, 64, 14, 0.1);
  --sl-mention-border: rgba(146, 64, 14, 0.25);
}

/* 2. Midnight (Dark OLED) */
:host([theme="midnight"]) {
  --sl-bg: #0d1117;
  --sl-surface: #161b22;
  --sl-tab-bg: #090d13;
  --sl-text: #e6edf3;
  --sl-text-muted: #8b949e;
  --sl-border: #30363d;
  --sl-accent: #58a6ff;
  --sl-accent-hover: #79c0ff;
  --sl-accent-contrast: #0d1117;
  --sl-accent-glow: rgba(88, 166, 255, 0.25);
  --sl-mention-color: #79c0ff;
  --sl-mention-bg: rgba(56, 139, 253, 0.16);
  --sl-mention-border: rgba(56, 139, 253, 0.35);
  --sl-btn-primary-bg: #1f6feb;
  --sl-btn-primary-hover: #388bfd;
}

/* 3. Slate (Ardósia Naval / Vercel-style) */
:host([theme="slate"]) {
  --sl-bg: #0f172a;
  --sl-surface: #1e293b;
  --sl-tab-bg: #0b1120;
  --sl-text: #f8fafc;
  --sl-text-muted: #94a3b8;
  --sl-border: #334155;
  --sl-accent: #38bdf8;
  --sl-accent-hover: #0ea5e9;
  --sl-accent-contrast: #0f172a;
  --sl-accent-glow: rgba(56, 189, 248, 0.25);
  --sl-mention-color: #7dd3fc;
  --sl-mention-bg: rgba(56, 189, 248, 0.16);
  --sl-mention-border: rgba(56, 189, 248, 0.35);
  --sl-btn-primary-bg: #0284c7;
  --sl-btn-primary-hover: #0369a1;
}

/* 4. Clean White (Minimalista) */
:host([theme="clean-white"]) {
  --sl-bg: #ffffff;
  --sl-surface: #f8fafc;
  --sl-tab-bg: #f1f5f9;
  --sl-text: #0f172a;
  --sl-text-muted: #64748b;
  --sl-border: #e2e8f0;
  --sl-accent: #2563eb;
  --sl-accent-hover: #1d4ed8;
  --sl-accent-contrast: #ffffff;
  --sl-accent-glow: rgba(37, 99, 235, 0.2);
  --sl-mention-color: #1d4ed8;
  --sl-mention-bg: rgba(37, 99, 235, 0.1);
  --sl-mention-border: rgba(37, 99, 235, 0.25);
}

/* 5. Terminal (Monospace CRT) */
:host([theme="terminal"]) {
  --sl-bg: #0a0e14;
  --sl-surface: #010409;
  --sl-tab-bg: #000000;
  --sl-text: #00ff66;
  --sl-text-muted: #009933;
  --sl-border: #00ff6633;
  --sl-accent: #00ff66;
  --sl-accent-hover: #33ff88;
  --sl-accent-contrast: #000000;
  --sl-accent-glow: rgba(0, 255, 102, 0.3);
  --sl-mention-color: #33ff88;
  --sl-mention-bg: rgba(0, 255, 102, 0.16);
  --sl-mention-border: rgba(0, 255, 102, 0.35);
  --sl-font: ui-monospace, SFMono-Regular, "JetBrains Mono", Menlo, monospace;
}

/* 6. High Contrast (Acessibilidade Visual Máxima) */
:host([theme="high-contrast"]) {
  --sl-bg: #000000;
  --sl-surface: #0a0a0a;
  --sl-tab-bg: #141414;
  --sl-text: #ffffff;
  --sl-text-muted: #cccccc;
  --sl-border: #ffffff;
  --sl-accent: #ffff00;
  --sl-accent-hover: #ffff66;
  --sl-accent-contrast: #000000;
  --sl-accent-glow: rgba(255, 255, 0, 0.5);
  --sl-mention-color: #ffff00;
  --sl-mention-bg: rgba(255, 255, 0, 0.2);
  --sl-mention-border: rgba(255, 255, 0, 0.5);
}

/* 7. Protanopia & Deuteranopia (Daltonismo Calibrado) */
:host([theme="protanopia"]) {
  --sl-bg: #0e1726;
  --sl-surface: #1b263b;
  --sl-tab-bg: #0d1b2a;
  --sl-text: #e0e1dd;
  --sl-text-muted: #a0abbd;
  --sl-border: #415a77;
  --sl-accent: #f4d03f;
  --sl-accent-hover: #f7dc6f;
  --sl-accent-contrast: #0e1726;
  --sl-accent-glow: rgba(244, 208, 63, 0.3);
  --sl-mention-color: #f7dc6f;
  --sl-mention-bg: rgba(244, 208, 63, 0.16);
  --sl-mention-border: rgba(244, 208, 63, 0.35);
}

/* Respeito a Preferência de Redução de Movimento */
@media (prefers-reduced-motion: reduce) {
  * {
    transition: none !important;
    animation: none !important;
  }
}

/* 8. Barra de Gestão e Moderação (Cloudflare KV) */
.sl-moderation-bar {
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  background: var(--sl-surface);
  border: 1px dashed var(--sl-border);
  border-left: 3px solid var(--sl-accent);
  border-radius: 8px;
  padding: 0.75rem 1rem;
  margin-bottom: 1.25rem;
  font-size: 0.82rem;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
}

.sl-mod-bar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  font-weight: 600;
  color: var(--sl-text);
}

.sl-mod-bar-title {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.sl-mod-bar-actions {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.sl-mod-refresh-btn {
  background: transparent;
  border: 1px solid var(--sl-border);
  border-radius: 4px;
  padding: 0.2rem 0.5rem;
  font-size: 0.75rem;
  color: var(--sl-text-muted);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  transition: all 0.15s ease;
}

.sl-mod-refresh-btn:hover {
  color: var(--sl-text);
  border-color: var(--sl-accent);
  background: var(--sl-hover, rgba(125, 125, 125, 0.08));
}

.sl-mod-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  align-items: center;
}

.sl-mod-empty-text {
  font-size: 0.78rem;
  color: var(--sl-text-muted);
  font-style: italic;
}

.sl-mod-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.2rem 0.55rem;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 500;
}

.sl-mod-chip-ban {
  background: rgba(239, 68, 68, 0.12);
  color: #ef4444;
  border: 1px solid rgba(239, 68, 68, 0.25);
}

.sl-mod-chip-media {
  background: rgba(245, 158, 11, 0.12);
  color: #d97706;
  border: 1px solid rgba(245, 158, 11, 0.25);
}

.sl-mod-chip-remove {
  background: transparent;
  border: none;
  color: inherit;
  font-size: 0.8rem;
  cursor: pointer;
  padding: 0 0.15rem;
  line-height: 1;
  opacity: 0.7;
  transition: opacity 0.15s ease;
}

.sl-mod-chip-remove:hover {
  opacity: 1;
}
`;
class he extends Error {
  constructor(f = "Sessão expirada ou credenciais inválidas. Faça login novamente.") {
    super(f), this.name = "ScatterAuthError";
  }
}
class ke {
  constructor(f, e) {
    h(this, "baseUrl");
    h(this, "getToken");
    this.baseUrl = f.replace(/\/+$/, ""), this.getToken = e;
  }
  getAuthHeaders() {
    const f = this.getToken(), e = {
      "Content-Type": "application/json"
    };
    return f && (e.Authorization = `Bearer ${f}`), e;
  }
  async handleResponseError(f, e) {
    const t = await f.json().catch(() => ({})), r = t.error || t.error_description || `${e}: HTTP ${f.status}`;
    throw f.status === 401 || typeof r == "string" && /bad credentials|unauthorized|sessão expirada/i.test(r) ? new he(r) : new Error(r);
  }
  /**
   * Auto-Discovery de IDs do repositório e categoria no GitHub
   */
  async discover(f, e = "General") {
    const t = await fetch(
      `${this.baseUrl}/api/discovery?repo=${encodeURIComponent(f)}&category=${encodeURIComponent(e)}`
    );
    if (!t.ok) {
      const r = await t.json().catch(() => ({}));
      throw new Error(r.error || `Falha no Auto-Discovery: HTTP ${t.status}`);
    }
    return await t.json();
  }
  /**
   * Leitura de discussões e comentários com cache de borda
   */
  async fetchDiscussions(f, e) {
    const r = this.getToken() ? `&_t=${Date.now()}` : "", o = await fetch(
      `${this.baseUrl}/api/discussions?repo=${encodeURIComponent(f)}&term=${encodeURIComponent(e)}${r}`,
      {
        headers: this.getAuthHeaders()
      }
    );
    return o.ok || await this.handleResponseError(o, "Falha ao carregar discussões"), await o.json();
  }
  /**
   * Troca segura de código OAuth por token de acesso
   */
  async exchangeOAuthCode(f, e) {
    const t = await fetch(`${this.baseUrl}/api/oauth/access_token`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code: f, redirect_uri: e })
    });
    if (!t.ok) {
      const o = await t.json().catch(() => ({}));
      throw new Error(o.error_description || o.error || `Erro ao trocar código: HTTP ${t.status}`);
    }
    const r = await t.json();
    if (!r.access_token)
      throw new Error(r.error_description || r.error || "Token de acesso não retornado.");
    return r.access_token;
  }
  /**
   * Busca perfil do usuário logado diretamente da API do GitHub usando o Bearer token
   */
  async fetchGitHubUserProfile(f) {
    const e = await fetch("https://api.github.com/user", {
      headers: {
        Authorization: `Bearer ${f}`,
        Accept: "application/vnd.github.v3+json"
      }
    });
    if (!e.ok)
      throw e.status === 401 ? new he("Credenciais inválidas ao carregar perfil do GitHub.") : new Error(`Falha ao obter perfil do usuário: HTTP ${e.status}`);
    const t = await e.json();
    return {
      login: t.login,
      avatarUrl: t.avatar_url,
      name: t.name,
      url: t.html_url
    };
  }
  /**
   * Criação de nova discussão no GitHub
   */
  async createDiscussion(f, e, t, r) {
    const o = await fetch(`${this.baseUrl}/api/discussions`, {
      method: "POST",
      headers: this.getAuthHeaders(),
      body: JSON.stringify({ repositoryId: f, categoryId: e, title: t, body: r })
    });
    return o.ok || await this.handleResponseError(o, "Erro ao criar discussão"), await o.json();
  }
  /**
   * Envio de comentário ou réplica
   */
  async addComment(f, e, t, r) {
    const o = await fetch(`${this.baseUrl}/api/comments`, {
      method: "POST",
      headers: this.getAuthHeaders(),
      body: JSON.stringify({ discussionId: f, body: e, replyToId: t, repo: r })
    });
    return o.ok || await this.handleResponseError(o, "Erro ao enviar comentário"), await o.json();
  }
  /**
   * Edição in-place de comentário
   */
  async updateComment(f, e, t) {
    const r = await fetch(`${this.baseUrl}/api/comments`, {
      method: "PATCH",
      headers: this.getAuthHeaders(),
      body: JSON.stringify({ commentId: f, body: e, repo: t })
    });
    return r.ok || await this.handleResponseError(r, "Erro ao editar comentário"), await r.json();
  }
  /**
   * Exclusão in-place de comentário
   */
  async deleteComment(f) {
    const e = await fetch(`${this.baseUrl}/api/comments?id=${encodeURIComponent(f)}`, {
      method: "DELETE",
      headers: this.getAuthHeaders()
    });
    return e.ok || await this.handleResponseError(e, "Erro ao excluir comentário"), await e.json();
  }
  /**
   * Consulta lista de moderação do repositório
   */
  async getModerationList(f) {
    const e = await fetch(`${this.baseUrl}/api/moderation?repo=${encodeURIComponent(f)}`, {
      headers: this.getAuthHeaders()
    });
    return e.ok || await this.handleResponseError(e, "Erro ao carregar moderação"), (await e.json()).moderatedUsers || [];
  }
  /**
   * Aplica restrição a um usuário (ban ou restrict_media)
   */
  async setModeration(f, e, t, r) {
    const o = await fetch(`${this.baseUrl}/api/moderation`, {
      method: "POST",
      headers: this.getAuthHeaders(),
      body: JSON.stringify({ repo: f, username: e, action: t, reason: r })
    });
    o.ok || await this.handleResponseError(o, "Erro ao aplicar moderação");
  }
  /**
   * Remove restrição de um usuário
   */
  async removeModeration(f, e) {
    const t = await fetch(`${this.baseUrl}/api/moderation`, {
      method: "DELETE",
      headers: this.getAuthHeaders(),
      body: JSON.stringify({ repo: f, username: e })
    });
    t.ok || await this.handleResponseError(t, "Erro ao remover moderação");
  }
  /**
   * Adiciona ou remove reação de emoji
   */
  async toggleReaction(f, e, t) {
    const o = {
      "👍": "THUMBS_UP",
      "❤️": "HEART",
      "🚀": "ROCKET",
      "🎉": "HOORAY",
      "😄": "LAUGH",
      "👀": "EYES",
      "👎": "THUMBS_DOWN",
      "😕": "CONFUSED",
      // Aliases retrocompatíveis
      "👏": "HOORAY",
      "💡": "ROCKET",
      "🧙‍♂️": "THUMBS_UP",
      "🧙‍♀️": "THUMBS_UP",
      "🧙": "THUMBS_UP"
    }[e] || e, a = await fetch(`${this.baseUrl}/api/reactions`, {
      method: "POST",
      headers: this.getAuthHeaders(),
      body: JSON.stringify({ subjectId: f, content: o, action: t })
    });
    return a.ok || await this.handleResponseError(a, "Erro ao atualizar reação"), await a.json();
  }
}
const ge = "scatterleaf_skin_tone", _e = [
  { id: "default", namePt: "Padrão (Amarelo)", nameEn: "Default (Yellow)", modifier: "", swatch: "🟡" },
  { id: "light", namePt: "Tom Claro", nameEn: "Light Skin Tone", modifier: "🏻", swatch: "🏻" },
  { id: "medium-light", namePt: "Tom Médio-Claro", nameEn: "Medium-Light Skin Tone", modifier: "🏼", swatch: "🏼" },
  { id: "medium", namePt: "Tom Médio", nameEn: "Medium Skin Tone", modifier: "🏽", swatch: "🏽" },
  { id: "medium-dark", namePt: "Tom Médio-Escuro", nameEn: "Medium-Dark Skin Tone", modifier: "🏾", swatch: "🏾" },
  { id: "dark", namePt: "Tom Escuro", nameEn: "Dark Skin Tone", modifier: "🏿", swatch: "🏿" }
], Ee = /* @__PURE__ */ new Set([
  "👍",
  "👎",
  "👏",
  "🙌",
  "👐",
  "🤝",
  "🙏",
  "✌️",
  "🤘",
  "🤙",
  "👊",
  "✊",
  "🤛",
  "🤜",
  "🤞",
  "🫶",
  "👋",
  "🖐️",
  "✋",
  "🖖",
  "💪",
  "✍️",
  "💅",
  "🤳",
  "👂",
  "👃",
  "👶",
  "🧒",
  "👦",
  "👧",
  "🧑",
  "👨",
  "👩",
  "🧓",
  "👴",
  "👵",
  "🧙",
  "🧙‍♂️",
  "🧙‍♀️"
]);
function ie(C, f) {
  if (!f || f === "default") return C;
  if (C.includes("‍")) {
    const t = C.split("‍");
    return `${t[0].replace(/[\u{1F3FB}-\u{1F3FF}]/gu, "").replace(/\uFE0F/g, "")}${f}‍${t.slice(1).join("‍")}`;
  }
  return C.replace(/[\u{1F3FB}-\u{1F3FF}]/gu, "").replace(/\uFE0F/g, "") + f;
}
const $e = [
  { symbol: "👍", namePt: "Gostei", nameEn: "Like" },
  { symbol: "❤️", namePt: "Amei", nameEn: "Love" },
  { symbol: "🚀", namePt: "Sensacional", nameEn: "Rocket" },
  { symbol: "🎉", namePt: "Parabéns", nameEn: "Celebrate" },
  { symbol: "😄", namePt: "Divertido", nameEn: "Laugh" },
  { symbol: "👀", namePt: "De olho", nameEn: "Eyes" }
], Le = [
  { id: "typescript", name: "TypeScript" },
  { id: "javascript", name: "JavaScript" },
  { id: "python", name: "Python" },
  { id: "bash", name: "Bash / Shell" },
  { id: "html", name: "HTML" },
  { id: "css", name: "CSS" },
  { id: "json", name: "JSON" },
  { id: "sql", name: "SQL" },
  { id: "rust", name: "Rust" },
  { id: "go", name: "Go" }
], ce = "scatterleaf_recent_gifs";
function ne() {
  try {
    const C = localStorage.getItem(ce);
    return C ? JSON.parse(C) : [];
  } catch {
    return [];
  }
}
function me(C, f) {
  try {
    const e = ne().filter((t) => t.url !== C);
    e.unshift({ url: C, alt: f || "", timestamp: Date.now() }), localStorage.setItem(ce, JSON.stringify(e.slice(0, 24)));
  } catch {
  }
}
function Ce(C) {
  try {
    const f = ne().filter((e) => e.url !== C);
    localStorage.setItem(ce, JSON.stringify(f));
  } catch {
  }
}
function Se() {
  try {
    localStorage.removeItem(ce);
  } catch {
  }
}
const de = "scatterleaf_recent_images";
function le() {
  try {
    const C = localStorage.getItem(de);
    return C ? JSON.parse(C) : [];
  } catch {
    return [];
  }
}
function be(C, f) {
  try {
    const e = le().filter((t) => t.url !== C);
    e.unshift({ url: C, alt: f || "", timestamp: Date.now() }), localStorage.setItem(de, JSON.stringify(e.slice(0, 24)));
  } catch {
  }
}
function Me(C) {
  try {
    const f = le().filter((e) => e.url !== C);
    localStorage.setItem(de, JSON.stringify(f));
  } catch {
  }
}
function Te() {
  try {
    localStorage.removeItem(de);
  } catch {
  }
}
const Ae = [
  "pornhub.com",
  "xvideos.com",
  "xnxx.com",
  "redtube.com",
  "youporn.com",
  "chaturbate.com",
  "onlyfans.com",
  "fansly.com",
  "rule34.xxx",
  "gelbooru.com",
  "danbooru.donmai.us",
  "e621.net",
  "hentaihaven.xxx",
  "xhamster.com",
  "tube8.com",
  "beeg.com",
  "spankbang.com",
  "brazzers.com",
  "bangbros.com",
  "fetlife.com",
  "cam4.com",
  "stripchat.com",
  "livejasmin.com",
  "erome.com",
  "heavy-r.com",
  "bestgore.fun",
  "kaotic.com",
  "motherless.com"
], Ie = [
  "porn",
  "xxx",
  "hentai",
  "nsfw",
  "nude",
  "naked",
  "erotic",
  "boobs",
  "pussy",
  "dick",
  "cock",
  "vagina",
  "hardcore",
  "anal",
  "blowjob",
  "creampie",
  "milf",
  "bdsm",
  "fetish",
  "gore",
  "onlyfans",
  "escort",
  "sex"
];
function V(C) {
  if (!C || typeof C != "string")
    return { safe: !1, reason: "URL inválida ou ausente." };
  const f = C.trim();
  if (!f.startsWith("https://"))
    return {
      safe: !1,
      reason: "Por segurança e privacidade, apenas links seguros (HTTPS) são permitidos."
    };
  let e;
  try {
    e = new URL(f);
  } catch {
    return { safe: !1, reason: "Formato de URL inválido." };
  }
  const t = e.hostname.toLowerCase(), r = e.pathname.toLowerCase(), o = e.search.toLowerCase(), a = t + r + o;
  for (const i of Ae)
    if (t === i || t.endsWith("." + i))
      return {
        safe: !1,
        reason: "Domínio bloqueado pelo filtro de conteúdo sensível / adulto."
      };
  for (const i of Ie)
    if (new RegExp(`(^|[-_/.?&=])${i}([-_/.?&=]|$)`, "i").test(a))
      return {
        safe: !1,
        reason: "O link contém termos classificados como potencialmente sensíveis ou adultos."
      };
  return { safe: !0 };
}
class Re extends HTMLElement {
  constructor() {
    super();
    h(this, "_repo", "");
    h(this, "_category", "General");
    h(this, "_theme", "cream");
    h(this, "_lang", "pt");
    h(this, "_inputPosition", "top");
    h(this, "_broker", "");
    h(this, "_clientId", "Iv23liZHApvnx6e6wtMJ");
    h(this, "_pageSize", 10);
    h(this, "_currentPage", 1);
    h(this, "_title", "");
    h(this, "_term", "");
    // Feature Flags & Ordenação
    h(this, "_order", "oldest");
    h(this, "_hideReactions", !1);
    h(this, "_hideSkinTone", !1);
    h(this, "_hideSorting", !1);
    h(this, "_hideCodeScroll", !1);
    h(this, "_hidePreview", !1);
    h(this, "_hideSearch", !1);
    h(this, "_enableModeration", !1);
    h(this, "_enableImages", !1);
    h(this, "_moderatedUsers", []);
    h(this, "_isModerationLoading", !1);
    h(this, "_comments", []);
    h(this, "_isLoading", !1);
    h(this, "_isBrokerConnected", !1);
    // Sessão de Autenticação
    h(this, "_currentUser", null);
    h(this, "_authToken", null);
    h(this, "_brokerClient", null);
    h(this, "_discussionId", null);
    h(this, "_repositoryId", null);
    h(this, "_categoryId", null);
    // Estados de Interface do Editor e Interações
    h(this, "_activeTab", "write");
    h(this, "_fontMode", "default");
    h(this, "_composerText", "");
    h(this, "_replyingToId", null);
    h(this, "_replyText", "");
    h(this, "_expandedThreads", /* @__PURE__ */ new Set());
    h(this, "_searchQuery", "");
    h(this, "_editingId", null);
    h(this, "_openMenuId", null);
    h(this, "_speakingId", null);
    h(this, "_isEmojiPickerOpen", !1);
    h(this, "_isCodePickerOpen", !1);
    h(this, "_savedComposerSelection", null);
    h(this, "_isTranslatingId", null);
    h(this, "_selectedSkinTone", null);
    h(this, "_isSkinTonePanelOpen", !1);
    h(this, "_activeTonePickerEmoji", null);
    h(this, "_themeObserver", null);
    // Modal de Inserção de GIFs (Anti-NSFW)
    h(this, "_isMediaModalOpen", !1);
    h(this, "_isManagingRecentGifs", !1);
    h(this, "_isConfirmingClearGifs", !1);
    h(this, "_mediaModalUrl", "");
    h(this, "_mediaModalAlt", "");
    h(this, "_mediaModalSuccess", null);
    // Modal de Inserção de Imagens (Apenas via URL HTTPS)
    h(this, "_isImageModalOpen", !1);
    h(this, "_isManagingRecentImages", !1);
    h(this, "_isConfirmingClearImages", !1);
    h(this, "_imageModalUrl", "");
    h(this, "_imageModalAlt", "");
    h(this, "_imageModalSuccess", null);
    // Fechamento de menus ao clicar fora do componente no document ou tecla Escape
    h(this, "_handleDocumentClick", (e) => {
      let t = !1;
      const r = e.composedPath();
      this._openMenuId && (r.some(
        (a) => {
          var i;
          return a instanceof HTMLElement && ((i = a.classList) == null ? void 0 : i.contains("sl-menu-wrapper"));
        }
      ) || (this._openMenuId = null, t = !0)), this._isCodePickerOpen && (r.some(
        (a) => {
          var i, s;
          return a instanceof HTMLElement && (((i = a.classList) == null ? void 0 : i.contains("sl-code-menu-wrapper")) || ((s = a.classList) == null ? void 0 : s.contains("sl-code-picker-popover")));
        }
      ) || (this._isCodePickerOpen = !1, t = !0)), this._isEmojiPickerOpen && (r.some(
        (a) => {
          var i, s;
          return a instanceof HTMLElement && (((i = a.classList) == null ? void 0 : i.contains("sl-emoji-wrapper")) || ((s = a.classList) == null ? void 0 : s.contains("sl-emoji-popover")));
        }
      ) || (this._isEmojiPickerOpen = !1, t = !0)), t && this.render();
    });
    h(this, "_handleDocumentKeydown", (e) => {
      var t;
      if (e.key === "/" && !e.ctrlKey && !e.metaKey && !e.altKey) {
        const r = document.activeElement;
        if (!(r instanceof HTMLInputElement || r instanceof HTMLTextAreaElement || (r == null ? void 0 : r.isContentEditable))) {
          const a = (t = this.shadowRoot) == null ? void 0 : t.getElementById("sl-search-input");
          a && (e.preventDefault(), a.focus());
        }
      }
      if (e.key === "Escape") {
        let r = !1;
        this._openMenuId && (this._openMenuId = null, r = !0), this._isCodePickerOpen && (this._isCodePickerOpen = !1, r = !0), this._isEmojiPickerOpen && (this._isEmojiPickerOpen = !1, r = !0), this._isMediaModalOpen && (this._isMediaModalOpen = !1, r = !0), this._isImageModalOpen && (this._isImageModalOpen = !1, r = !0), this._searchQuery && (this._searchQuery = "", this._currentPage = 1, r = !0), r && this.render();
      }
    });
    h(this, "_mediaModalError", null);
    h(this, "_imageModalError", null);
    this.attachShadow({ mode: "open" });
  }
  static get observedAttributes() {
    return [
      "repo",
      "category",
      "theme",
      "lang",
      "mapping",
      "input-position",
      "broker",
      "client-id",
      "page-size",
      "title",
      "term",
      "order",
      "hide-reactions",
      "reactions",
      "hide-skin-tone",
      "skin-tone",
      "hide-sorting",
      "sorting",
      "hide-code-scroll",
      "code-scroll",
      "hide-preview",
      "preview",
      "hide-search",
      "search",
      "enable-moderation",
      "moderation",
      "enable-images",
      "images"
    ];
  }
  get repo() {
    return this._repo;
  }
  set repo(e) {
    this.setAttribute("repo", e);
  }
  get category() {
    return this._category;
  }
  set category(e) {
    this.setAttribute("category", e);
  }
  get theme() {
    return this._theme;
  }
  set theme(e) {
    this.setAttribute("theme", e);
  }
  get broker() {
    return this._broker;
  }
  set broker(e) {
    this.setAttribute("broker", e);
  }
  get clientId() {
    return this._clientId;
  }
  set clientId(e) {
    this.setAttribute("client-id", e);
  }
  get pageSize() {
    return this._pageSize;
  }
  set pageSize(e) {
    this.setAttribute("page-size", String(e));
  }
  get currentPage() {
    return this._currentPage;
  }
  set currentPage(e) {
    this._currentPage = e, this.render();
  }
  get isLoading() {
    return this._isLoading;
  }
  set isLoading(e) {
    this._isLoading = e, this.render();
  }
  get enableModeration() {
    return this._enableModeration;
  }
  set enableModeration(e) {
    this._enableModeration = !!e, this.isConnected && (this._enableModeration && this._isOwner() && this.loadModerationList(), this.render());
  }
  get enableImages() {
    return this._enableImages;
  }
  set enableImages(e) {
    this._enableImages = !!e, this.isConnected && this.render();
  }
  connectedCallback() {
    this.syncAttributes(), this.initSkinTonePreference(), this.initAuthSession(), this.setupOAuthListener(), this.checkUrlForOAuthCode(), document.addEventListener("click", this._handleDocumentClick), document.addEventListener("keydown", this._handleDocumentKeydown), this._theme === "auto" && (this.detectAndApplyAutoPalette(), this.setupAutoThemeObserver()), this.loadComments(), this._enableModeration && this._isOwner() && this.loadModerationList(), this.render();
  }
  disconnectedCallback() {
    document.removeEventListener("click", this._handleDocumentClick), document.removeEventListener("keydown", this._handleDocumentKeydown), this._themeObserver && (this._themeObserver.disconnect(), this._themeObserver = null);
  }
  attributeChangedCallback(e, t, r) {
    if (t !== r) {
      if (e === "theme" && r)
        this._theme = r, this._theme === "auto" ? (this.detectAndApplyAutoPalette(), this.setupAutoThemeObserver()) : (this._themeObserver && (this._themeObserver.disconnect(), this._themeObserver = null), this.clearAutoPaletteProperties());
      else if (e === "repo" && r)
        this._repo = r, this.loadComments();
      else if (e === "category" && r)
        this._category = r, this.loadComments();
      else if (e === "lang" && r)
        this._lang = r;
      else if (e === "broker" && r)
        this._broker = r, this.initBrokerClient(), this.loadComments();
      else if (e === "client-id" && r)
        this._clientId = r;
      else if (e === "input-position" && (r === "top" || r === "bottom"))
        this._inputPosition = r;
      else if (e === "page-size" && r) {
        const o = parseInt(r, 10);
        this._pageSize = !isNaN(o) && o > 0 ? o : 10, this._currentPage = 1;
      } else e === "title" ? this._title = r || "" : e === "term" ? this._term = r || "" : e === "order" ? this._order = r === "newest" ? "newest" : "oldest" : e === "hide-reactions" || e === "reactions" ? this._hideReactions = this.hasAttribute("hide-reactions") || this.getAttribute("reactions") === "false" : e === "hide-skin-tone" || e === "skin-tone" ? this._hideSkinTone = this.hasAttribute("hide-skin-tone") || this.getAttribute("skin-tone") === "false" : e === "hide-sorting" || e === "sorting" ? this._hideSorting = this.hasAttribute("hide-sorting") || this.getAttribute("sorting") === "false" : e === "hide-code-scroll" || e === "code-scroll" ? this._hideCodeScroll = this.hasAttribute("hide-code-scroll") || this.getAttribute("code-scroll") === "false" : e === "hide-preview" || e === "preview" ? this._hidePreview = this.hasAttribute("hide-preview") || this.getAttribute("preview") === "false" : e === "hide-search" || e === "search" ? this._hideSearch = this.hasAttribute("hide-search") || this.getAttribute("search") === "false" : e === "enable-moderation" || e === "moderation" ? (this._enableModeration = this.hasAttribute("enable-moderation") || this.getAttribute("moderation") === "true", this.isConnected && this._enableModeration && this._isOwner() && this.loadModerationList()) : (e === "enable-images" || e === "images") && (this._enableImages = this.hasAttribute("enable-images") || this.getAttribute("images") === "true");
      this.render();
    }
  }
  syncAttributes() {
    this._repo = this.getAttribute("repo") || "", this._category = this.getAttribute("category") || "General", this._theme = this.getAttribute("theme") || "cream", this._lang = this.getAttribute("lang") || "auto", this._broker = this.getAttribute("broker") || "", this._clientId = this.getAttribute("client-id") || "Iv23liZHApvnx6e6wtMJ";
    const e = this.getAttribute("input-position");
    (e === "top" || e === "bottom") && (this._inputPosition = e);
    const t = this.getAttribute("page-size");
    if (t) {
      const r = parseInt(t, 10);
      !isNaN(r) && r > 0 && (this._pageSize = r);
    }
    this._title = this.getAttribute("title") || "", this._term = this.getAttribute("term") || "", this._order = this.getAttribute("order") === "newest" ? "newest" : "oldest", this._hideReactions = this.hasAttribute("hide-reactions") || this.getAttribute("reactions") === "false", this._hideSkinTone = this.hasAttribute("hide-skin-tone") || this.getAttribute("skin-tone") === "false", this._hideSorting = this.hasAttribute("hide-sorting") || this.getAttribute("sorting") === "false", this._hideCodeScroll = this.hasAttribute("hide-code-scroll") || this.getAttribute("code-scroll") === "false", this._hidePreview = this.hasAttribute("hide-preview") || this.getAttribute("preview") === "false", this._hideSearch = this.hasAttribute("hide-search") || this.getAttribute("search") === "false", this._enableModeration = this.hasAttribute("enable-moderation") || this.getAttribute("moderation") === "true", this._enableImages = this.hasAttribute("enable-images") || this.getAttribute("images") === "true", this.hasAttribute("theme") || this.setAttribute("theme", this._theme), this.initBrokerClient();
  }
  /**
   * Inicializa e persiste o tom de pele padrão escolhido pelo usuário no navegador (localStorage)
   */
  initSkinTonePreference() {
    if (!(typeof window > "u"))
      try {
        const e = localStorage.getItem(ge);
        e !== null && (this._selectedSkinTone = e);
      } catch (e) {
        console.warn("🍃 [ScatterLeaf] localStorage inacessível para skin tones:", e);
      }
  }
  saveSkinTonePreference(e) {
    if (this._selectedSkinTone = e, typeof window < "u")
      try {
        localStorage.setItem(ge, e);
      } catch (t) {
        console.warn("🍃 [ScatterLeaf] Erro ao salvar skin tone em localStorage:", t);
      }
  }
  /**
   * Resolve o idioma efetivo: se lang="auto", detecta automaticamente do navegador/sistema do usuário
   */
  get currentLang() {
    if (this._lang && this._lang !== "auto")
      return this._lang.toLowerCase();
    if (typeof navigator < "u" && navigator.language) {
      const e = navigator.language.toLowerCase();
      if (e.startsWith("pt")) return "pt";
      if (e.startsWith("es")) return "es";
    }
    return "en";
  }
  /**
   * Identifica a paleta de cores do site hospedeiro (body/container/CSS vars) e replica harmoniosamente
   */
  detectAndApplyAutoPalette() {
    if (!(typeof window > "u"))
      try {
        const e = (L) => {
          if (!L || L === "transparent" || L === "rgba(0, 0, 0, 0)")
            return null;
          if (L.startsWith("#")) {
            let I = L.slice(1);
            if ((I.length === 3 || I.length === 4) && (I = I.split("").map((F) => F + F).join("")), I.length >= 6)
              return {
                r: parseInt(I.substring(0, 2), 16),
                g: parseInt(I.substring(2, 4), 16),
                b: parseInt(I.substring(4, 6), 16)
              };
          }
          const j = L.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
          return j ? {
            r: parseInt(j[1], 10),
            g: parseInt(j[2], 10),
            b: parseInt(j[3], 10)
          } : null;
        }, t = window.getComputedStyle(document.documentElement), r = window.getComputedStyle(document.body), o = this.parentElement || document.body, a = window.getComputedStyle(o), i = (L) => {
          for (const j of L) {
            const I = a.getPropertyValue(j).trim() || r.getPropertyValue(j).trim() || t.getPropertyValue(j).trim();
            if (I) {
              const F = e(I);
              if (F) return F;
            }
          }
          return null;
        };
        let s = i([
          "--sl-bg",
          "--page-bg",
          "--color-bg",
          "--background",
          "--color-background",
          "--bg-color",
          "--body-bg",
          "--bg"
        ]);
        if (!s) {
          let L = this;
          for (; L; ) {
            const j = window.getComputedStyle(L).backgroundColor, I = e(j);
            if (I) {
              s = I;
              break;
            }
            L = L.parentElement;
          }
        }
        s || (s = e(r.backgroundColor) || e(t.backgroundColor) || { r: 255, g: 255, b: 255 });
        let c = i([
          "--sl-text",
          "--page-text",
          "--color-text",
          "--text-color",
          "--color-foreground",
          "--foreground",
          "--text"
        ]);
        if (!c) {
          let L = this;
          for (; L; ) {
            const j = window.getComputedStyle(L).color, I = e(j);
            if (I) {
              c = I;
              break;
            }
            L = L.parentElement;
          }
        }
        let n = i([
          "--sl-accent",
          "--page-accent",
          "--color-accent",
          "--color-primary",
          "--primary",
          "--accent",
          "--brand"
        ]);
        if (!n) {
          const L = document.querySelector("a");
          L && (n = e(window.getComputedStyle(L).color));
        }
        const m = document.documentElement.classList.contains("dark") || document.body.classList.contains("dark") || document.documentElement.getAttribute("data-theme") === "dark" || document.body.getAttribute("data-theme") === "dark" || document.body.getAttribute("data-page-theme") === "midnight" || document.body.getAttribute("data-page-theme") === "slate" || document.body.getAttribute("data-page-theme") === "terminal", S = 0.2126 * s.r + 0.7152 * s.g + 0.0722 * s.b, p = m || S < 128;
        c || (c = p ? { r: 230, g: 237, b: 243 } : { r: 28, g: 25, b: 23 }), n || (n = p ? { r: 88, g: 166, b: 255 } : { r: 146, g: 64, b: 14 });
        let k, v, y, E, x, R, P;
        if (p) {
          const L = Math.min(255, Math.round(s.r + 15)), j = Math.min(255, Math.round(s.g + 18)), I = Math.min(255, Math.round(s.b + 22));
          k = `rgb(${L}, ${j}, ${I})`, v = "rgba(0, 0, 0, 0.35)", y = "rgba(255, 255, 255, 0.12)", E = `rgba(${c.r}, ${c.g}, ${c.b}, 0.62)`, x = `rgb(${Math.min(255, n.r + 30)}, ${Math.min(255, n.g + 30)}, ${Math.min(255, n.b + 30)})`, R = `rgba(${n.r}, ${n.g}, ${n.b}, 0.16)`, P = `rgba(${n.r}, ${n.g}, ${n.b}, 0.35)`;
        } else
          k = "rgba(255, 255, 255, 0.96)", v = "rgba(0, 0, 0, 0.035)", y = "rgba(0, 0, 0, 0.12)", E = `rgba(${c.r}, ${c.g}, ${c.b}, 0.65)`, x = `rgb(${n.r}, ${n.g}, ${n.b})`, R = `rgba(${n.r}, ${n.g}, ${n.b}, 0.12)`, P = `rgba(${n.r}, ${n.g}, ${n.b}, 0.28)`;
        const O = `rgb(${n.r}, ${n.g}, ${n.b})`;
        this.style.setProperty("--sl-bg", `rgb(${s.r}, ${s.g}, ${s.b})`), this.style.setProperty("--sl-surface", k), this.style.setProperty("--sl-tab-bg", v), this.style.setProperty("--sl-border", y), this.style.setProperty("--sl-text", `rgb(${c.r}, ${c.g}, ${c.b})`), this.style.setProperty("--sl-text-muted", E), this.style.setProperty("--sl-accent", O), this.style.setProperty("--sl-accent-hover", O), this.style.setProperty("--sl-mention-color", x), this.style.setProperty("--sl-mention-bg", R), this.style.setProperty("--sl-mention-border", P), p ? (this.style.setProperty("--sl-btn-primary-bg", "#1f6feb"), this.style.setProperty("--sl-btn-primary-hover", "#388bfd")) : (this.style.setProperty("--sl-btn-primary-bg", O), this.style.setProperty("--sl-btn-primary-hover", O));
      } catch (e) {
        console.warn("🍃 [ScatterLeaf] Erro ao auto-computar paleta do tema:", e);
      }
  }
  setupAutoThemeObserver() {
    typeof window > "u" || (this._themeObserver && this._themeObserver.disconnect(), this._themeObserver = new MutationObserver(() => {
      this._theme === "auto" && this.detectAndApplyAutoPalette();
    }), this._themeObserver.observe(document.documentElement, {
      attributes: !0,
      attributeFilter: ["class", "data-theme", "style"]
    }), this._themeObserver.observe(document.body, {
      attributes: !0,
      attributeFilter: ["class", "data-theme", "data-page-theme", "style"]
    }), window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
      this._theme === "auto" && this.detectAndApplyAutoPalette();
    }));
  }
  clearAutoPaletteProperties() {
    [
      "--sl-bg",
      "--sl-surface",
      "--sl-tab-bg",
      "--sl-border",
      "--sl-text",
      "--sl-text-muted",
      "--sl-accent",
      "--sl-accent-hover",
      "--sl-btn-primary-bg",
      "--sl-btn-primary-hover",
      "--sl-mention-color",
      "--sl-mention-bg",
      "--sl-mention-border"
    ].forEach((t) => this.style.removeProperty(t));
  }
  initBrokerClient() {
    this._broker ? this._brokerClient = new ke(this._broker, () => this._authToken) : (this._brokerClient = null, this._isBrokerConnected = !1);
  }
  /**
   * Recupera sessão de autenticação prévia salva no sessionStorage
   */
  initAuthSession() {
    try {
      const e = sessionStorage.getItem("scatterleaf_token"), t = sessionStorage.getItem("scatterleaf_user");
      e && t && (this._authToken = e, this._currentUser = JSON.parse(t));
    } catch {
      this._authToken = null, this._currentUser = null;
    }
  }
  /**
   * Escuta mensagens de retorno do popup OAuth
   */
  setupOAuthListener() {
    window.addEventListener("message", async (e) => {
      e.data && e.data.type === "scatterleaf-oauth-code" && e.data.code && await this.exchangeOAuthCode(e.data.code);
    });
  }
  /**
   * Suporte para retorno por redirecionamento direto com ?code=...
   */
  async checkUrlForOAuthCode() {
    if (typeof window > "u") return;
    const t = new URLSearchParams(window.location.search).get("code");
    if (t) {
      if (window.opener) {
        window.opener.postMessage({ type: "scatterleaf-oauth-code", code: t }, "*"), window.close();
        return;
      }
      const r = window.location.pathname + window.location.hash;
      window.history.replaceState({}, document.title, r), await this.exchangeOAuthCode(t);
    }
  }
  /**
   * Troca o código retornado pelo OAuth pelo token seguro via Edge Broker
   */
  async exchangeOAuthCode(e) {
    if (!this._brokerClient) {
      console.warn("🍃 [ScatterLeaf] Broker URL não configurada para efetuar troca de token.");
      return;
    }
    try {
      this._isLoading = !0, this.render();
      const t = window.location.origin + window.location.pathname, r = await this._brokerClient.exchangeOAuthCode(e, t), o = await this._brokerClient.fetchGitHubUserProfile(r);
      this._authToken = r, this._currentUser = o, sessionStorage.setItem("scatterleaf_token", r), sessionStorage.setItem("scatterleaf_user", JSON.stringify(o)), await this.loadComments(), this._enableModeration && this._isOwner() && await this.loadModerationList(), this._isLoading = !1, this.render(), this.dispatchEvent(
        new CustomEvent("scatterleaf-login", {
          detail: { user: o },
          bubbles: !0,
          composed: !0
        })
      );
    } catch (t) {
      this._isLoading = !1, this.render();
      const r = t instanceof Error ? t.message : "Falha na autenticação";
      alert(`🍃 [ScatterLeaf Auth] ${r}`);
    }
  }
  /**
   * Inicia o fluxo de login em 1 clique via popup
   */
  loginWithGitHub() {
    if (!this._clientId) {
      if (confirm(
        this.currentLang === "pt" ? `🍃 ScatterLeaf Playground:
Nenhum "client-id" do GitHub OAuth configurado ainda.
Deseja simular um login local de teste (@demo-reader)?` : `🍃 ScatterLeaf Playground:
No "client-id" configured yet.
Do you want to simulate a local test login (@demo-reader)?`
      )) {
        const n = {
          login: "demo-reader",
          avatarUrl: "https://avatars.githubusercontent.com/u/583231?v=4",
          name: "Demo Reader",
          url: "https://github.com"
        };
        this._currentUser = n, this._authToken = "mock_token_local", sessionStorage.setItem("scatterleaf_token", this._authToken), sessionStorage.setItem("scatterleaf_user", JSON.stringify(n)), this._enableModeration && this._isOwner() && this.loadModerationList(), this.render();
      }
      return;
    }
    const e = encodeURIComponent(window.location.origin + window.location.pathname), t = encodeURIComponent("read:user"), r = `https://github.com/login/oauth/authorize?client_id=${this._clientId}&scope=${t}&redirect_uri=${e}`, o = 600, a = 700, i = window.screen.width / 2 - o / 2, s = window.screen.height / 2 - a / 2;
    window.open(
      r,
      "scatterleaf-oauth-popup",
      `width=${o},height=${a},top=${s},left=${i},scrollbars=yes,status=yes`
    );
  }
  /**
   * Encerra a sessão do usuário
   */
  logout() {
    sessionStorage.removeItem("scatterleaf_token"), sessionStorage.removeItem("scatterleaf_user"), this._authToken = null, this._currentUser = null, this._moderatedUsers = [], this.render(), this.dispatchEvent(
      new CustomEvent("scatterleaf-logout", {
        bubbles: !0,
        composed: !0
      })
    );
  }
  /**
   * Identifica se um erro lançado é decorrente de falha de autenticação/token expirado
   */
  isAuthError(e) {
    return e instanceof he ? !0 : e instanceof Error ? /bad credentials|unauthorized|sessão expirada|http 401/i.test(e.message) : !1;
  }
  /**
   * Trata expiração de token (HTTP 401 / Bad credentials).
   * Limpa as credenciais salvas sem perder o rascunho de texto digitado no composer.
   */
  handleExpiredSession(e = !1) {
    sessionStorage.removeItem("scatterleaf_token"), sessionStorage.removeItem("scatterleaf_user"), this._authToken = null, this._currentUser = null, this._moderatedUsers = [], e || alert(
      this.currentLang === "pt" ? "Sua sessão do GitHub expirou. Conecte-se novamente para publicar sua mensagem (seu texto foi preservado no editor)." : "Your GitHub session has expired. Please sign in again to publish (your text was preserved in the editor)."
    ), this.render(), this.dispatchEvent(
      new CustomEvent("scatterleaf-logout", {
        bubbles: !0,
        composed: !0
      })
    );
  }
  getCurrentTerm() {
    return this._term ? this._term : this._title ? this._title.trim() : typeof window > "u" ? "general" : window.location.pathname || "general";
  }
  /**
   * Verifica se o usuário autenticado é o proprietário do repositório
   */
  _isOwner() {
    var t, r;
    if (!((t = this._currentUser) != null && t.login) || !this._repo) return !1;
    const e = (r = this._repo.split("/")[0]) == null ? void 0 : r.toLowerCase();
    return !!(e && this._currentUser.login.toLowerCase() === e);
  }
  /**
   * Carrega a lista de usuários moderados direto do KV via Broker
   */
  async loadModerationList() {
    if (!(!this._enableModeration || !this._isOwner() || !this._brokerClient || !this._authToken || !this._repo)) {
      this._isModerationLoading = !0, this.render();
      try {
        this._moderatedUsers = await this._brokerClient.getModerationList(this._repo);
      } catch (e) {
        console.warn("🍃 [ScatterLeaf] Erro ao carregar lista de moderação:", e), this.isAuthError(e) && this.handleExpiredSession(!0);
      } finally {
        this._isModerationLoading = !1, this.render();
      }
    }
  }
  /**
   * Aplica ban ou restrição de mídia a um usuário
   */
  async handleSetModeration(e, t) {
    if (!this._isOwner() || !this._brokerClient || !this._authToken || !this._repo) {
      alert(
        this.currentLang === "pt" ? "🍃 Apenas o proprietário do repositório pode moderar usuários." : "🍃 Only the repository owner can moderate users."
      );
      return;
    }
    const r = t === "ban" ? this.currentLang === "pt" ? "banir" : "ban" : this.currentLang === "pt" ? "restringir mídia de" : "restrict media for";
    if (confirm(
      this.currentLang === "pt" ? `Tem certeza que deseja ${r} @${e}?` : `Are you sure you want to ${r} @${e}?`
    ))
      try {
        await this._brokerClient.setModeration(this._repo, e, t), await this.loadModerationList(), alert(
          this.currentLang === "pt" ? `🍃 @${e} foi moderado com sucesso (${t === "ban" ? "banido" : "sem mídia"}).` : `🍃 @${e} moderated successfully (${t === "ban" ? "banned" : "media restricted"}).`
        );
      } catch (a) {
        if (this.isAuthError(a)) {
          this.handleExpiredSession(!1);
          return;
        }
        alert((a == null ? void 0 : a.message) || "Erro ao moderar usuário");
      }
  }
  /**
   * Remove restrição de moderação de um usuário
   */
  async handleRemoveModeration(e) {
    if (!(!this._isOwner() || !this._brokerClient || !this._authToken || !this._repo || !confirm(
      this.currentLang === "pt" ? `Remover restrição de moderação de @${e}?` : `Remove moderation restriction for @${e}?`
    )))
      try {
        await this._brokerClient.removeModeration(this._repo, e), await this.loadModerationList();
      } catch (r) {
        if (this.isAuthError(r)) {
          this.handleExpiredSession(!1);
          return;
        }
        alert((r == null ? void 0 : r.message) || "Erro ao remover moderação");
      }
  }
  /**
   * Carrega comentários: tenta o Edge Broker primeiro; se offline, faz fallback gracioso para mock
   */
  async loadComments() {
    var e;
    if (!this._broker || !this._repo) {
      this.loadMockComments(), this._isBrokerConnected = !1;
      return;
    }
    this._isLoading = !0, this.render();
    try {
      if (this._brokerClient || this.initBrokerClient(), this._brokerClient) {
        const t = await this._brokerClient.discover(this._repo, this._category);
        this._repositoryId = t.repositoryId, this._categoryId = ((e = t.defaultCategory) == null ? void 0 : e.id) || null;
        const r = this.getCurrentTerm(), o = await this._brokerClient.fetchDiscussions(this._repo, r);
        o.discussion && (this._discussionId = o.discussion.id), this._comments = (o.comments || []).map((a) => ({
          ...a,
          originalLang: a.originalLang || this.detectTextLanguage(a.body),
          replies: (a.replies || []).map((i) => ({
            ...i,
            originalLang: i.originalLang || this.detectTextLanguage(i.body)
          }))
        })), this._isBrokerConnected = !0;
      }
    } catch (t) {
      if (this.isAuthError(t) && this._authToken)
        return console.warn("🍃 [ScatterLeaf] Token de usuário expirado detectado ao carregar discussões. Limpando sessão e recarregando anonimamente..."), this.handleExpiredSession(!0), this.loadComments();
      console.warn("🍃 [ScatterLeaf] Broker offline ou inacessível. Usando mock local:", t), this._isBrokerConnected = !1, this.loadMockComments();
    } finally {
      this._isLoading = !1, this.render();
    }
  }
  loadMockComments() {
    const e = this.currentLang, t = e === "pt", r = e === "es", o = this.getCurrentTerm().toLowerCase();
    if (o.includes("obsidian")) {
      this._comments = [
        {
          id: "obs-1",
          author: {
            login: "vault-author",
            avatarUrl: "https://avatars.githubusercontent.com/u/583231?v=4",
            url: "https://github.com",
            isAuthor: !0
          },
          body: t ? "Bem-vindo à discussão do guia de conexão do **Obsidian Vault** com o Minrock! 🍃 Se você tiver dúvidas sobre os passos do assistente do Vault CMS ou sobre o formato Page Bundle, deixe uma mensagem aqui." : r ? "¡Bienvenido a la discusión de la guía de conexión de **Obsidian Vault** con Minrock! 🍃 Si tienes dudas sobre los pasos del asistente de Vault CMS o el formato Page Bundle, deja un mensaje aquí." : "Welcome to the **Obsidian Vault** + Minrock integration discussion! 🍃 If you have questions about the Vault CMS wizard steps or the Page Bundle format, leave a message below.",
          createdAt: t ? "há 15 minutos" : r ? "hace 15 minutos" : "15 minutes ago",
          originalLang: t ? "pt" : r ? "es" : "en",
          reactions: [
            { content: "👍", count: 5, viewerHasReacted: !0 },
            { content: "🚀", count: 3, viewerHasReacted: !1 }
          ],
          replies: [
            {
              id: "obs-1-1",
              author: {
                login: "alex-notes",
                avatarUrl: "https://avatars.githubusercontent.com/u/1024025?v=4",
                url: "https://github.com",
                isAuthor: !1
              },
              body: t ? "@vault-author A calibração do modo de criação como pasta (`folder`) e `index.md` foi essencial. Agora ao colar um print com `Ctrl+V`, a imagem fica junto com o post sem espalhar arquivos soltos na raiz!" : "@vault-author Setting file organization to `folder` and `index.md` was key. Now when pasting screenshots via `Ctrl+V`, images stay co-located with the post instead of scattering across the root!",
              createdAt: t ? "há 10 minutos" : "10 minutes ago",
              originalLang: t ? "pt" : "en",
              reactions: [{ content: "❤️", count: 3, viewerHasReacted: !0 }],
              parentId: "obs-1"
            },
            {
              id: "obs-1-2",
              author: {
                login: "vault-author",
                avatarUrl: "https://avatars.githubusercontent.com/u/583231?v=4",
                url: "https://github.com",
                isAuthor: !0
              },
              body: t ? "@alex-notes Exatamente! O padrão de Page Bundle deixa o cofre 100% autocontido e portátil. Se deletar a pasta do post, as imagens vão embora juntas." : "@alex-notes Exactly! The Page Bundle pattern keeps your vault 100% self-contained and portable. If you ever delete the post folder, its assets are removed cleanly.",
              createdAt: t ? "há 4 minutos" : "4 minutes ago",
              originalLang: t ? "pt" : "en",
              reactions: [{ content: "🚀", count: 2, viewerHasReacted: !1 }],
              parentId: "obs-1"
            }
          ]
        },
        {
          id: "obs-2",
          author: {
            login: "carlos-dev",
            avatarUrl: "https://avatars.githubusercontent.com/u/9919?v=4",
            url: "https://github.com",
            isAuthor: !1
          },
          body: t ? "O vídeo do David Kimball no final do artigo ajudou bastante a visualizar o fluxo de publicação com o Git status bar do Obsidian!" : r ? "¡El vídeo de David Kimball al final del artículo ayudó muchísimo a visualizar el flujo de publicación con la barra de Git en Obsidian!" : "David Kimball's walkthrough video at the end of the post really helped clarify the Git push workflow in Obsidian's status bar!",
          createdAt: t ? "há 12 minutos" : r ? "hace 12 minutos" : "12 minutes ago",
          originalLang: t ? "pt" : r ? "es" : "en",
          reactions: [{ content: "🎉", count: 4, viewerHasReacted: !1 }],
          replies: []
        }
      ];
      return;
    }
    if (o.includes("writing-technical-articles")) {
      this._comments = [
        {
          id: "write-1",
          author: {
            login: "vault-author",
            avatarUrl: "https://avatars.githubusercontent.com/u/583231?v=4",
            url: "https://github.com",
            isAuthor: !0
          },
          body: t ? "Qual é a sua opinião sobre o ritmo tipográfico e o espaçamento para leitura de blocos longos de código técnico no Minrock?" : r ? "¿Cuál es tu opinión sobre el ritmo tipográfico y el espaciado para leer bloques largos de código técnico en Minrock?" : "What are your thoughts on Minrock's typographic rhythm and line height when reading long technical code blocks?",
          createdAt: t ? "há 20 minutos" : r ? "hace 20 minutos" : "20 minutes ago",
          originalLang: t ? "pt" : r ? "es" : "en",
          reactions: [
            { content: "👍", count: 6, viewerHasReacted: !0 },
            { content: "💡", count: 4, viewerHasReacted: !1 }
          ],
          replies: [
            {
              id: "write-1-1",
              author: {
                login: "jordan-tech",
                avatarUrl: "https://avatars.githubusercontent.com/u/1024025?v=4",
                url: "https://github.com",
                isAuthor: !1
              },
              body: t ? "@vault-author A renderização com Shiki e o fundo sutil do bloco de código dão um contraste perfeito sem agredir a visão em sessões longas de leitura." : "@vault-author The Shiki rendering paired with subtle background surfaces creates ideal contrast without eye strain during long reading sessions.",
              createdAt: t ? "há 14 minutos" : "14 minutes ago",
              originalLang: t ? "pt" : "en",
              reactions: [{ content: "❤️", count: 2, viewerHasReacted: !1 }],
              parentId: "write-1"
            }
          ]
        },
        {
          id: "write-2",
          author: {
            login: "lucas-writer",
            avatarUrl: "https://avatars.githubusercontent.com/u/9919?v=4",
            url: "https://github.com",
            isAuthor: !1
          },
          body: t ? "A hierarquia limpa de títulos (`h2`, `h3`) e listas compactas mantém o foco total na substância técnica do artigo." : r ? "La jerarquía limpia de encabezados (`h2`, `h3`) y listas compactas mantiene el foco total en la sustancia técnica del artículo." : "The clean headings hierarchy (`h2`, `h3`) and compact lists keep the focus entirely on technical substance.",
          createdAt: t ? "há 8 minutos" : r ? "hace 8 minutos" : "8 minutes ago",
          originalLang: t ? "pt" : r ? "es" : "en",
          reactions: [{ content: "🎉", count: 2, viewerHasReacted: !1 }],
          replies: []
        }
      ];
      return;
    }
    this._comments = [
      {
        id: "1",
        author: {
          login: "vault-author",
          avatarUrl: "https://avatars.githubusercontent.com/u/583231?v=4",
          url: "https://github.com",
          isAuthor: !0
        },
        body: t ? "Bem-vindo ao **ScatterLeaf**! 🍃 Este é um comentário nativo renderizado diretamente via Shadow DOM, com zero iframes e suporte a Markdown." : r ? "¡Bienvenido a **ScatterLeaf**! 🍃 Este es un comentario nativo renderizado directamente a través de Shadow DOM, sin iframes y con soporte para Markdown." : "Welcome to **ScatterLeaf**! 🍃 This is a native comment rendered directly via Shadow DOM, with zero iframes and full Markdown support.",
        createdAt: t ? "há 10 minutos" : r ? "hace 10 minutos" : "10 minutes ago",
        originalLang: t ? "pt" : r ? "es" : "en",
        reactions: [
          { content: "👍", count: 4, viewerHasReacted: !0 },
          { content: "❤️", count: 6, viewerHasReacted: !1 },
          { content: "🚀", count: 2, viewerHasReacted: !1 }
        ],
        replies: [
          {
            id: "1-1",
            author: {
              login: "sarah-eng",
              avatarUrl: "https://avatars.githubusercontent.com/u/1024025?v=4",
              url: "https://github.com",
              isAuthor: !1
            },
            body: t ? "@vault-author Isso é genial! Ter Shadow DOM nativo deixa a rolagem suave como manteiga, sem nenhum engasgo de iframe." : "@vault-author This is brilliant! Having native Shadow DOM makes the scroll buttery smooth without any iframe stutter.",
            createdAt: t ? "há 5 minutos" : "5 minutes ago",
            originalLang: t ? "pt" : "en",
            reactions: [{ content: "❤️", count: 2, viewerHasReacted: !0 }],
            parentId: "1"
          },
          {
            id: "1-2",
            author: {
              login: "vault-author",
              avatarUrl: "https://avatars.githubusercontent.com/u/583231?v=4",
              url: "https://github.com",
              isAuthor: !0
            },
            body: t ? "@sarah-eng Exato! A rolagem da página não sofre com os pulos visuais de redimensionamento do iframe." : "@sarah-eng Exactly! Page scrolling does not suffer from visual jumping caused by iframe resizing.",
            createdAt: t ? "há 2 minutos" : "2 minutes ago",
            originalLang: t ? "pt" : "en",
            reactions: [{ content: "🚀", count: 1, viewerHasReacted: !1 }],
            parentId: "1"
          },
          {
            id: "1-3",
            author: {
              login: "lucas-writer",
              avatarUrl: "https://avatars.githubusercontent.com/u/9919?v=4",
              url: "https://github.com",
              isAuthor: !1
            },
            body: t ? "@sarah-eng E o consumo de memória cai drasticamente, pois não há instâncias de documentos HTML duplicadas." : "@sarah-eng Plus memory usage drops dramatically since there are no duplicate HTML document contexts.",
            createdAt: t ? "há 1 minuto" : "1 minute ago",
            originalLang: t ? "pt" : "en",
            reactions: [{ content: "🎉", count: 2, viewerHasReacted: !1 }],
            parentId: "1"
          }
        ]
      },
      {
        id: "2",
        author: {
          login: "carlos-dev",
          avatarUrl: "https://avatars.githubusercontent.com/u/9919?v=4",
          url: "https://github.com",
          isAuthor: !1
        },
        body: "¡Excelente proyecto! El tema Warm Paper (**Cream**) queda fenomenal para leer artículos largos.",
        createdAt: t ? "há 8 minutos" : r ? "hace 8 minutos" : "8 minutes ago",
        originalLang: "es",
        reactions: [{ content: "🎉", count: 3, viewerHasReacted: !1 }],
        replies: []
      },
      {
        id: "3",
        author: {
          login: "marina-ui",
          avatarUrl: "https://avatars.githubusercontent.com/u/1024025?v=4",
          url: "https://github.com",
          isAuthor: !1
        },
        body: t ? "Adorei a tipografia e o suporte a Markdown sem precisar carregar frameworks pesados. A performance agradece!" : "Loved the typography and Markdown support without needing heavy frameworks. Performance is incredible!",
        createdAt: t ? "há 7 minutos" : "7 minutes ago",
        originalLang: t ? "pt" : "en",
        reactions: [{ content: "❤️", count: 4, viewerHasReacted: !1 }],
        replies: []
      },
      {
        id: "4",
        author: {
          login: "felipe-dev",
          avatarUrl: "https://avatars.githubusercontent.com/u/9919?v=4",
          url: "https://github.com",
          isAuthor: !1
        },
        body: t ? "O popover de reações com emojis 3D animados traz uma sensação muito viva e dinâmica para o blog." : "The reaction popover with animated 3D emojis gives the blog a very lively and engaging feel.",
        createdAt: t ? "há 6 minutos" : "6 minutes ago",
        originalLang: t ? "pt" : "en",
        reactions: [{ content: "🚀", count: 5, viewerHasReacted: !0 }],
        replies: []
      },
      {
        id: "5",
        author: {
          login: "beatriz-sec",
          avatarUrl: "https://avatars.githubusercontent.com/u/1024025?v=4",
          url: "https://github.com",
          isAuthor: !1
        },
        body: t ? "A validação binária de Magic Bytes para imagens e o filtro Anti-NSFW trazem muita segurança para quem gerencia um blog público." : "Magic Bytes binary validation for images plus Anti-NSFW filtering bring massive peace of mind for public blogs.",
        createdAt: t ? "há 5 minutos" : "5 minutes ago",
        originalLang: t ? "pt" : "en",
        reactions: [{ content: "👍", count: 2, viewerHasReacted: !1 }],
        replies: []
      },
      {
        id: "6",
        author: {
          login: "thiago-arch",
          avatarUrl: "https://avatars.githubusercontent.com/u/9919?v=4",
          url: "https://github.com",
          isAuthor: !1
        },
        body: t ? "A separação de responsabilidades com o Cloudflare Worker como Edge Broker é a melhor decisão de arquitetura." : "Separating concerns with Cloudflare Worker as Edge Broker is the cleanest architectural pattern.",
        createdAt: t ? "há 4 minutos" : "4 minutes ago",
        originalLang: t ? "pt" : "en",
        reactions: [{ content: "💡", count: 3, viewerHasReacted: !1 }],
        replies: []
      },
      {
        id: "7",
        author: {
          login: "juliana-doc",
          avatarUrl: "https://avatars.githubusercontent.com/u/1024025?v=4",
          url: "https://github.com",
          isAuthor: !1
        },
        body: t ? "A tradução automática com detecção de idioma e Web Speech para síntese de voz tornam o conteúdo acessível para todos." : "Automatic translation with language detection and Web Speech text-to-speech make content accessible to everyone.",
        createdAt: t ? "há 3 minutos" : "3 minutes ago",
        originalLang: t ? "pt" : "en",
        reactions: [{ content: "❤️", count: 1, viewerHasReacted: !1 }],
        replies: []
      },
      {
        id: "8",
        author: {
          login: "rodrigo-qa",
          avatarUrl: "https://avatars.githubusercontent.com/u/9919?v=4",
          url: "https://github.com",
          isAuthor: !1
        },
        body: t ? "Testei em vários navegadores (Chromium, Firefox, Safari) e o Shadow DOM isola os estilos com 100% de integridade." : "Tested across Chromium, Firefox, and Safari: Shadow DOM isolates all styles with 100% integrity.",
        createdAt: t ? "há 3 minutos" : "3 minutes ago",
        originalLang: t ? "pt" : "en",
        reactions: [{ content: "👍", count: 2, viewerHasReacted: !1 }],
        replies: []
      },
      {
        id: "9",
        author: {
          login: "clara-rust",
          avatarUrl: "https://avatars.githubusercontent.com/u/1024025?v=4",
          url: "https://github.com",
          isAuthor: !1
        },
        body: t ? "O botão assistido de blocos de código com numeração de linhas e cópia limpa ficou perfeito para desenvolvedores." : "The assisted code block button with line numbering and clean copy is perfect for developers.",
        createdAt: t ? "há 2 minutos" : "2 minutes ago",
        originalLang: t ? "pt" : "en",
        reactions: [{ content: "🚀", count: 4, viewerHasReacted: !1 }],
        replies: []
      },
      {
        id: "10",
        author: {
          login: "andre-linux",
          avatarUrl: "https://avatars.githubusercontent.com/u/9919?v=4",
          url: "https://github.com",
          isAuthor: !1
        },
        body: t ? "Sem trackers externos, sem cookies de terceiros e com zero poluição. É disso que a web estática precisa." : "No third-party trackers, no third-party cookies, and zero bloat. Exactly what static web needs.",
        createdAt: t ? "há 2 minutos" : "2 minutes ago",
        originalLang: t ? "pt" : "en",
        reactions: [{ content: "🎉", count: 3, viewerHasReacted: !1 }],
        replies: []
      },
      {
        id: "11",
        author: {
          login: "renata-cloud",
          avatarUrl: "https://avatars.githubusercontent.com/u/1024025?v=4",
          url: "https://github.com",
          isAuthor: !1
        },
        body: t ? "A paginação inteligente permite manter dezenas de comentários organizados sem travar a navegação da página principal." : "Smart pagination keeps dozens of comments neatly organized without breaking main page navigation flow.",
        createdAt: t ? "há 1 minuto" : "1 minute ago",
        originalLang: t ? "pt" : "en",
        reactions: [{ content: "💡", count: 5, viewerHasReacted: !0 }],
        replies: []
      },
      {
        id: "12",
        author: {
          login: "gabriel-astro",
          avatarUrl: "https://avatars.githubusercontent.com/u/9919?v=4",
          url: "https://github.com",
          isAuthor: !1
        },
        body: t ? "Integração transparente com Astro 7 e SSG. O ScatterLeaf se tornou indispensável." : "Seamless integration with Astro 7 and SSG. ScatterLeaf is now an essential staple.",
        createdAt: t ? "há alguns segundos" : "a few seconds ago",
        originalLang: t ? "pt" : "en",
        reactions: [{ content: "❤️", count: 2, viewerHasReacted: !1 }],
        replies: []
      }
    ];
  }
  /**
   * Parser ultraleve de Markdown client-side (Zero dependências externas)
   * Suporta blocos técnicos de código estruturados, numeração de linhas, inline code, imagens seguras, etc.
   */
  parseMarkdown(e) {
    if (!e) return "";
    const t = [], r = "SLCODEBLOCKTOKEN";
    let a = e.replace(
      /```([a-zA-Z0-9_-]*)\r?\n?([\s\S]*?)```/g,
      (i, s, c) => {
        const n = (s || "code").trim().toLowerCase(), p = c.replace(/^\n+|\n+$/g, "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").split(/\r?\n/), k = p.map(
          (N, q) => `<span class="sl-code-line"><span class="sl-line-num">${q + 1}</span><span class="sl-line-code">${N || " "}</span></span>`
        ).join(""), v = p.length > 20, y = this.currentLang === "pt", E = y ? "Copiar" : "Copy", x = y ? "Copiar código" : "Copy code", R = y ? "Rolar para cima" : "Scroll up", P = y ? "Rolar para baixo" : "Scroll down", O = v ? `${n} · ${p.length} ${y ? "linhas" : "lines"}` : n, L = y ? `Mostrar todas as ${p.length} linhas` : `Show all ${p.length} lines`, j = v && !this._hideCodeScroll ? `
            <div class="sl-code-scroll-controls" aria-label="${y ? "Navegação do código" : "Code navigation"}">
              <button type="button" class="sl-code-scroll-btn sl-scroll-up" title="${R}" aria-label="${R}">
                <svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor">
                  <path d="M8 3.5a.75.75 0 0 1 .53.22l4.5 4.5a.75.75 0 0 1-1.06 1.06L8 5.31 4.03 9.28a.75.75 0 0 1-1.06-1.06l4.5-4.5A.75.75 0 0 1 8 3.5Z"/>
                </svg>
              </button>
              <button type="button" class="sl-code-scroll-btn sl-scroll-down" title="${P}" aria-label="${P}">
                <svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor">
                  <path d="M8 12.5a.75.75 0 0 1-.53-.22l-4.5-4.5a.75.75 0 0 1 1.06-1.06L8 10.69l3.97-3.97a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-.53.22Z"/>
                </svg>
              </button>
            </div>
            <div class="sl-code-expand-bar">
              <button type="button" class="sl-code-expand-btn" data-lines="${p.length}">
                <span>↕</span>
                <span class="sl-expand-text">${L}</span>
              </button>
            </div>
          ` : "", I = `
          <div class="sl-code-block ${v ? "sl-code-block-long sl-collapsed" : ""}" data-lang="${n}">
            <div class="sl-code-header">
              <span class="sl-code-badge">${O}</span>
              <button type="button" class="sl-code-copy-btn" title="${x}" aria-label="${x}">
                <svg class="sl-copy-icon" viewBox="0 0 16 16" width="14" height="14" fill="currentColor">
                  <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path>
                  <path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
                </svg>
                <span class="sl-copy-text">${E}</span>
              </button>
            </div>
            <pre class="sl-code-pre"><code class="sl-code-body">${k}</code></pre>
            ${j}
          </div>
        `.trim(), F = t.length;
        return t.push(I), `${r}${F}ENDTOKEN`;
      }
    ).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    return a = a.replace(/`([^`]+)`/g, '<code class="sl-inline-code">$1</code>'), a = a.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>"), a = a.replace(/__([^_]+)__/g, "<strong>$1</strong>"), a = a.replace(/\*([^*]+)\*/g, "<em>$1</em>"), a = a.replace(/_([^_]+)_/g, "<em>$1</em>"), a = a.replace(/~~([^~]+)~~/g, "<del>$1</del>"), a = a.replace(
      /!\[([^\]]*)\]\(((?:https?:\/\/|data:image\/)[^\s)]+)\)/g,
      (i, s, c) => {
        const n = V(c);
        return n.safe ? `<img src="${c}" alt="${s}" class="sl-embedded-img" loading="lazy" />` : `<span class="sl-blocked-media-notice" title="${n.reason || "Conteúdo potencialmente sensível"}">⚠️ [Mídia bloqueada: filtro de conteúdo sensível / link não seguro]</span>`;
      }
    ), a = a.replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
    ), a = a.replace(
      /(^|[^"'])(https?:\/\/[^\s<]+)/g,
      '$1<a href="$2" target="_blank" rel="noopener noreferrer">$2</a>'
    ), a = a.replace(
      /@([a-zA-Z0-9-_]+)/g,
      '<a href="https://github.com/$1" target="_blank" rel="noopener noreferrer" class="sl-mention">@$1</a>'
    ), a = a.replace(/\n\n/g, "</p><p>"), a = a.replace(/\n/g, "<br />"), t.forEach((i, s) => {
      const c = `${r}${s}ENDTOKEN`;
      a = a.replace(new RegExp(`<p>\\s*${c}\\s*<\\/p>`, "g"), i), a = a.replace(new RegExp(c, "g"), i);
    }), `<p>${a}</p>`;
  }
  /**
   * Formata datas de maneira inteligente, contextual e regionalizada (Intl API)
   */
  formatDate(e) {
    if (!e) return { relative: "", full: "" };
    if (!e.includes("T") && !e.includes("-") && !e.includes(":"))
      return { relative: e, full: e };
    const t = new Date(e);
    if (isNaN(t.getTime()))
      return { relative: e, full: e };
    const r = typeof navigator < "u" && navigator.language ? navigator.language : this.currentLang === "pt" ? "pt-BR" : "en-US", o = new Intl.DateTimeFormat(r, {
      dateStyle: "medium",
      timeStyle: "short"
    }).format(t), a = Math.floor((Date.now() - t.getTime()) / 1e3), i = this.currentLang, s = i === "pt", c = i === "es";
    if (a < 60)
      return {
        relative: s ? "agora mesmo" : c ? "ahora mismo" : "just now",
        full: o
      };
    if (a < 3600) {
      const m = Math.floor(a / 60);
      return {
        relative: s ? `há ${m} ${m === 1 ? "minuto" : "minutos"}` : c ? `hace ${m} ${m === 1 ? "minuto" : "minutos"}` : `${m} ${m === 1 ? "minute" : "minutes"} ago`,
        full: o
      };
    }
    if (a < 86400) {
      const m = Math.floor(a / 3600);
      return {
        relative: s ? `há ${m} ${m === 1 ? "hora" : "horas"}` : c ? `hace ${m} ${m === 1 ? "hora" : "horas"}` : `${m} ${m === 1 ? "hour" : "hours"} ago`,
        full: o
      };
    }
    if (a < 604800) {
      const m = Math.floor(a / 86400);
      return {
        relative: s ? `há ${m} ${m === 1 ? "dia" : "dias"}` : c ? `hace ${m} ${m === 1 ? "día" : "días"}` : `${m} ${m === 1 ? "day" : "days"} ago`,
        full: o
      };
    }
    return { relative: new Intl.DateTimeFormat(r, {
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    }).format(t), full: o };
  }
  /**
   * Detector heurístico ultrarrápido de idioma do texto do comentário (para voz poliglota e tradução)
   */
  detectTextLanguage(e) {
    if (!e || e.trim().length === 0) return this._lang;
    const t = e.toLowerCase().replace(/[*_`#]/g, "").replace(/https?:\/\/\S+/g, "").replace(/@\w+/g, ""), r = (t.match(/\b(o|a|os|as|de|do|da|em|um|uma|para|com|não|que|isso|este|esta|muito|bom|bem|projeto|comentário|genial|manteiga|artigo|leitura)\b/g) || []).length * 2 + (t.match(/[ãõéêáàçíú]/g) || []).length * 3, o = (t.match(/\b(the|and|this|is|that|with|for|you|have|not|but|from|are|was|they|will|all|would|there|what|out|about|who|get|which|go|me|when|make|can|like|time|no|just|know|take|people|into|year|your|good|some|could|them|see|other|than|then|now|look|only|come|its|over|think|also|back|after|use|two|how|our|work|first|well|way|even|new|want|because|any|these|give|day|most|us|welcome|native|having|scroll|stutter)\b/g) || []).length * 2, a = (t.match(/\b(el|la|los|las|de|del|en|un|una|por|con|para|esto|este|esta|muy|bien|es|son|pero|como|más|sus|le|ya|o|fue|ha|sí|porque|cuando|sin|sobre|ser|tiene|también|me|hasta|hay|donde|quien|desde|todo|nos|durante|todos|uno|les|ni|contra|otros|ese|eso|ante|ellos|mí|antes|algunos|qué|unos|yo|otro|otras|otra|él|tanto|esa|estos|mucho|quienes|nada|muchos|cual|poco|ella|estar|estas|algunas|algo|nosotros|queda|excelente|artículos)\b/g) || []).length * 2 + (t.match(/[¿¡ñ]/g) || []).length * 4, i = (t.match(/\b(le|la|les|de|du|des|en|et|un|une|pour|avec|dans|que|qui|est|sont|sur|ce|cette|ces|mais|ou|donc|or|ni|car|très|bien)\b/g) || []).length * 2 + (t.match(/[œçèêàâôûëï]/g) || []).length * 3, s = Math.max(r, o, a, i);
    return s < 2 ? this.currentLang : s === r ? "pt" : s === o ? "en" : s === a ? "es" : s === i ? "fr" : this.currentLang;
  }
  getVisitorLang() {
    return this.currentLang;
  }
  getLanguageName(e, t) {
    return (t === "pt" ? {
      pt: "Português",
      en: "Inglês",
      es: "Espanhol",
      fr: "Francês",
      de: "Alemão"
    } : {
      pt: "Portuguese",
      en: "English",
      es: "Spanish",
      fr: "French",
      de: "German"
    })[e] || e.toUpperCase();
  }
  async toggleTranslate(e) {
    const t = (S) => {
      for (const p of S) {
        if (p.id === e) return p;
        if (p.replies) {
          const k = t(p.replies);
          if (k) return k;
        }
      }
      return null;
    }, r = t(this._comments);
    if (!r) return;
    if (r.isShowingTranslation) {
      r.isShowingTranslation = !1, this.render();
      return;
    }
    if (r.translatedBody) {
      r.isShowingTranslation = !0, this.render();
      return;
    }
    const o = this.currentLang, a = o === "pt", s = a ? "pt" : o === "es" ? "es" : "en", m = a ? {
      1: "Welcome to **ScatterLeaf**! 🍃 This is a native comment rendered directly via Shadow DOM, with zero iframes and Markdown support.",
      "1-1": "@vault-author Isso é genial! Ter Shadow DOM nativo deixa a rolagem suave como manteiga, sem nenhum engasgo de iframe.",
      "1-2": "@sarah-eng Exactly! Page scrolling does not suffer from visual jumping caused by iframe resizing.",
      2: "Excelente projeto! O tema Warm Paper (**Cream**) fica fenomenal para ler artigos longos."
    } : {
      1: "Bem-vindo ao **ScatterLeaf**! 🍃 Este é um comentário nativo renderizado diretamente via Shadow DOM, com zero iframes e suporte a Markdown.",
      "1-1": "@vault-author This is brilliant! Having native Shadow DOM makes the scroll buttery smooth without any iframe stutter.",
      "1-2": "@sarah-eng Exato! A rolagem da página não sofre com os pulos visuais de redimensionamento do iframe.",
      2: "Excellent project! The Warm Paper (**Cream**) theme looks phenomenal for reading long articles."
    };
    if (m[e]) {
      r.translatedBody = m[e], r.isShowingTranslation = !0, this.render();
      return;
    }
    this._isTranslatingId = e, this.render();
    try {
      const S = r.originalLang || this.detectTextLanguage(r.body), p = r.body.replace(/[#*`_~]/g, ""), v = await (await fetch(
        `https://api.mymemory.translated.net/get?q=${encodeURIComponent(p.slice(0, 500))}&langpair=${S}|${s}`
      )).json();
      v && v.responseData && v.responseData.translatedText ? r.translatedBody = v.responseData.translatedText : r.translatedBody = a ? `[Tradução]: ${r.body}` : `[Translation]: ${r.body}`;
    } catch (S) {
      console.warn("🍃 [ScatterLeaf] Erro na tradução automática:", S), r.translatedBody = a ? `[Tradução]: ${r.body}` : `[Translation]: ${r.body}`;
    } finally {
      this._isTranslatingId = null, r.isShowingTranslation = !0, this.render();
    }
  }
  toggleSpeak(e, t, r) {
    if (typeof window > "u" || !("speechSynthesis" in window)) {
      alert(
        this._lang === "pt" ? "Seu navegador não possui suporte à síntese de voz (Web Speech API)." : "Your browser does not support Speech Synthesis (Web Speech API)."
      );
      return;
    }
    if (this._speakingId === e) {
      window.speechSynthesis.cancel(), this._speakingId = null, this.render();
      return;
    }
    window.speechSynthesis.cancel(), this._speakingId = e, this.render();
    const a = t.replace(/```[\s\S]*?(?:```|$)|~~~[\s\S]*?(?:~~~|$)/g, "").replace(/[*_`#]/g, "").replace(/https?:\/\/\S+/g, "link").replace(/\s+/g, " ").trim() || (this._lang === "pt" ? "Este comentário contém apenas um bloco de código." : "This comment contains only a code block."), i = new SpeechSynthesisUtterance(a), c = r && {
      pt: "pt-BR",
      en: "en-US",
      es: "es-ES",
      fr: "fr-FR",
      de: "de-DE",
      it: "it-IT"
    }[r] || r || (this._lang === "pt" ? "pt-BR" : "en-US");
    if (i.lang = c, "speechSynthesis" in window) {
      const n = window.speechSynthesis.getVoices(), m = c.slice(0, 2).toLowerCase(), S = n.find(
        (p) => p.lang.replace("_", "-").toLowerCase().startsWith(m)
      );
      S && (i.voice = S);
    }
    i.rate = 1, i.onend = () => {
      this._speakingId = null, this.render();
    }, i.onerror = () => {
      this._speakingId = null, this.render();
    }, window.speechSynthesis.speak(i);
  }
  render() {
    if (!this.shadowRoot) return;
    const e = this._comments.reduce(
      (a, i) => {
        var s;
        return a + 1 + (((s = i.replies) == null ? void 0 : s.length) || 0);
      },
      0
    ), t = this.currentLang === "pt" ? "Comentários" : "Comments", r = this.renderComposer(), o = this._isLoading ? `<div style="text-align: center; padding: 2.5rem; color: var(--sl-text-muted);">
           <span style="font-size: 1.5rem; display: block; margin-bottom: 0.5rem; animation: spin 1s infinite linear;">🍃</span>
           ${this.currentLang === "pt" ? "Carregando notas na brisa..." : "Floating notes in the breeze..."}
         </div>` : this.renderCommentsList();
    this.shadowRoot.innerHTML = `
      <style>${we}</style>
      <div class="sl-container" part="container">
        <header class="sl-header" part="header">
          <div class="sl-header-left">
            <h3 class="sl-title">
              <span>💬</span>
              <span>${t}</span>
              <span class="sl-badge" part="badge">${e}</span>
            </h3>
            ${this._broker ? `<span class="sl-broker-status" title="${this._isBrokerConnected ? "Conectado ao Cloudflare Edge Broker" : "Broker configurado mas offline (Mock local ativo)"}">
                    <span class="sl-broker-dot ${this._isBrokerConnected ? "" : "sl-broker-standalone"}"></span>
                    <span>${this._isBrokerConnected ? "Broker Borda" : "Mock Local"}</span>
                  </span>` : ""}
          </div>

          <span class="sl-brand-tag" part="brand">
            🍃 <a href="https://github.com/rnt-rez/scatterleaf" target="_blank" rel="noopener noreferrer">ScatterLeaf</a>
          </span>
        </header>

        ${this._inputPosition === "top" ? r : ""}
        ${this.renderCommentsToolbar()}
        ${this.renderModerationBar()}
        ${o}
        ${this._inputPosition === "bottom" ? r : ""}
      </div>
      ${this._isMediaModalOpen ? this.renderMediaModal() : ""}
      ${this._isImageModalOpen ? this.renderImageModal() : ""}
    `, this.attachEvents();
  }
  /**
   * Renderiza o Modal Seguro de Inserção de GIFs (Anti-NSFW)
   */
  renderMediaModal() {
    const e = this.currentLang === "pt", t = e ? "Inserir GIF" : "Insert GIF", r = e ? "Filtro Anti-NSFW ativo: URLs passam por validação estrita de segurança e integridade." : "Anti-NSFW filter active: URLs undergo strict security and integrity checks.", o = e ? "URL do GIF (HTTPS obrigatório):" : "GIF URL (Strict HTTPS):", a = e ? "Descrição do GIF / Alt text (Opcional):" : "GIF description / Alt text (Optional):", i = e ? "Cancelar" : "Cancel", s = e ? "Inserir GIF" : "Insert GIF", c = ne();
    return `
      <div class="sl-modal-backdrop" id="media-modal-backdrop">
        <div class="sl-modal-box" role="dialog" aria-modal="true" aria-labelledby="sl-media-modal-title">
          <div class="sl-modal-header">
            <h4 class="sl-modal-title" id="sl-media-modal-title">
              <span>🖼️</span>
              <span>${t}</span>
            </h4>
            <button type="button" class="sl-modal-close-btn" id="btn-close-media-modal" aria-label="${e ? "Fechar" : "Close"}">✕</button>
          </div>

          <div class="sl-modal-body">
            <div class="sl-modal-notice">
              <span>${r}</span>
            </div>

            <!-- Inserção por URL segura -->
            <div class="sl-modal-input-group">
              <label class="sl-modal-label" for="media-url-input">${o}</label>
              <input
                type="url"
                class="sl-modal-input"
                id="media-url-input"
                placeholder="https://media.giphy.com/media/.../giphy.gif"
                value="${this._mediaModalUrl}"
                autofocus
              />
              <div class="sl-url-preview-card" id="media-url-preview-card" style="${this._mediaModalUrl && !this._mediaModalError ? "display: flex;" : "display: none;"}">
                <img src="${this._mediaModalUrl || ""}" alt="Prévia do GIF" class="sl-url-preview-img" id="media-url-preview-img" onerror="this.style.display='none'" />
                <span class="sl-url-preview-label">${e ? "✓ Link pronto para inserção" : "✓ Link ready to insert"}</span>
              </div>
            </div>

            <!-- Descrição / Alt Text -->
            <div class="sl-modal-input-group">
              <label class="sl-modal-label" for="media-alt-input">${a}</label>
              <input
                type="text"
                class="sl-modal-input"
                id="media-alt-input"
                placeholder="${e ? "Ex: Comemoração animada" : "Ex: Cheering reaction"}"
                value="${this._mediaModalAlt}"
              />
            </div>

            <!-- Botão Adicionar na Coleção -->
            <div class="sl-modal-collection-row">
              <button type="button" class="sl-btn sl-btn-save-collection" id="btn-save-gif-collection" title="${e ? "Salvar GIF na sua coleção recente sem postar direto" : "Save GIF to your recent collection without posting"}">
                <span>➕</span>
                <span>${e ? "Salvar na coleção" : "Save to collection"}</span>
              </button>
              ${this._mediaModalSuccess ? `<span class="sl-modal-success-badge">✓ ${this._mediaModalSuccess}</span>` : ""}
            </div>

            ${c.length > 0 ? `
              <div class="sl-modal-recents">
                <div class="sl-modal-recents-header">
                  <span>${e ? `Seus GIFs Recentes (${c.length}/24):` : `Your Recent GIFs (${c.length}/24):`}</span>
                  ${this._isConfirmingClearGifs ? `
                    <div class="sl-confirm-clear-box">
                      <span class="sl-confirm-clear-text">${e ? "Limpar todos?" : "Clear all?"}</span>
                      <div class="sl-confirm-clear-actions">
                        <button type="button" class="sl-btn-confirm-yes" id="btn-confirm-clear-gifs-yes">${e ? "Sim, limpar" : "Yes, clear"}</button>
                        <button type="button" class="sl-btn-confirm-no" id="btn-confirm-clear-gifs-no">${e ? "Cancelar" : "Cancel"}</button>
                      </div>
                    </div>
                  ` : `
                    <div class="sl-modal-recents-actions">
                      <button type="button" class="sl-btn-manage-recents ${this._isManagingRecentGifs ? "sl-active" : ""}" id="btn-manage-recent-gifs" title="${this._isManagingRecentGifs ? e ? "Concluir gerenciamento" : "Done managing" : e ? "Gerenciar e remover GIFs" : "Manage & remove GIFs"}">
                        ${this._isManagingRecentGifs ? e ? "✓ Concluir" : "✓ Done" : e ? "Gerenciar" : "Manage"}
                      </button>
                      <button type="button" class="sl-btn-clear-recents" id="btn-clear-recent-gifs" title="${e ? "Limpar histórico de GIFs" : "Clear GIF history"}">
                        ${e ? "Limpar" : "Clear"}
                      </button>
                    </div>
                  `}
                </div>
                <div class="sl-modal-recents-grid ${this._isManagingRecentGifs ? "sl-managing-recents" : ""}">
                  ${c.map(
      (n) => `
                    <div class="sl-recent-gif-wrapper">
                      <button type="button" class="sl-recent-gif-item" data-url="${n.url}" data-alt="${n.alt || ""}" title="${n.alt || n.url}">
                        <img src="${n.url}" alt="${n.alt || "GIF"}" loading="lazy" />
                      </button>
                      <button type="button" class="sl-btn-delete-recent-gif" data-url="${n.url}" title="${e ? "Remover este GIF dos recentes" : "Remove this GIF from recents"}" aria-label="${e ? "Remover GIF" : "Remove GIF"}">✕</button>
                    </div>
                  `
    ).join("")}
                </div>
              </div>
            ` : ""}

            <div class="sl-modal-error" id="media-modal-error-box" style="${this._mediaModalError ? "display: flex;" : "display: none;"}">
              <span>⚠️</span>
              <span id="media-modal-error-text">${this._mediaModalError || ""}</span>
            </div>
          </div>

          <div class="sl-modal-footer">
            <button type="button" class="sl-btn sl-btn-secondary" id="btn-cancel-media-modal">
              ${i}
            </button>
            <button type="button" class="sl-btn sl-btn-primary" id="btn-confirm-media-modal">
              <span>🖼️</span>
              <span>${s}</span>
            </button>
          </div>
        </div>
      </div>
    `;
  }
  /**
   * Renderiza o Modal Seguro de Inserção de Imagens (Apenas via URL HTTPS)
   */
  renderImageModal() {
    const e = this.currentLang === "pt", t = e ? "Inserir imagem" : "Insert image", r = e ? "Filtro Anti-NSFW ativo: Insira um link direto HTTPS seguro da sua imagem (Imgur, Cloudinary, GitHub, etc.)." : "Anti-NSFW filter active: Enter a secure HTTPS direct link to your image (Imgur, Cloudinary, GitHub, etc.).", o = e ? "URL da Imagem (HTTPS obrigatório):" : "Image URL (Strict HTTPS):", a = e ? "Descrição da Imagem / Alt text (Opcional):" : "Image description / Alt text (Optional):", i = e ? "Cancelar" : "Cancel", s = e ? "Inserir Imagem" : "Insert Image", c = le();
    return `
      <div class="sl-modal-backdrop" id="image-modal-backdrop">
        <div class="sl-modal-box" role="dialog" aria-modal="true" aria-labelledby="sl-image-modal-title">
          <div class="sl-modal-header">
            <h4 class="sl-modal-title" id="sl-image-modal-title">
              <span>📷</span>
              <span>${t}</span>
            </h4>
            <button type="button" class="sl-modal-close-btn" id="btn-close-image-modal" aria-label="${e ? "Fechar" : "Close"}">✕</button>
          </div>

          <div class="sl-modal-body">
            <div class="sl-modal-notice">
              <span>${r}</span>
            </div>

            <!-- Inserção por URL segura -->
            <div class="sl-modal-input-group">
              <label class="sl-modal-label" for="image-url-input">${o}</label>
              <input
                type="url"
                class="sl-modal-input"
                id="image-url-input"
                placeholder="https://i.imgur.com/... ou https://res.cloudinary.com/..."
                value="${this._imageModalUrl}"
                autofocus
              />
              <div class="sl-url-preview-card" id="image-url-preview-card" style="${this._imageModalUrl && !this._imageModalError ? "display: flex;" : "display: none;"}">
                <img src="${this._imageModalUrl || ""}" alt="Prévia da imagem" class="sl-url-preview-img" id="image-url-preview-img" onerror="this.style.display='none'" />
                <span class="sl-url-preview-label">${e ? "✓ Link pronto para inserção" : "✓ Link ready to insert"}</span>
              </div>
            </div>

            <!-- Descrição / Alt Text -->
            <div class="sl-modal-input-group">
              <label class="sl-modal-label" for="image-alt-input">${a}</label>
              <input
                type="text"
                class="sl-modal-input"
                id="image-alt-input"
                placeholder="${e ? "Ex: Diagrama de fluxo do projeto" : "Ex: Project workflow diagram"}"
                value="${this._imageModalAlt}"
              />
            </div>

            <!-- Botão Adicionar na Coleção -->
            <div class="sl-modal-collection-row">
              <button type="button" class="sl-btn sl-btn-save-collection" id="btn-save-image-collection" title="${e ? "Salvar Imagem na sua coleção recente sem postar direto" : "Save Image to your recent collection without posting"}">
                <span>➕</span>
                <span>${e ? "Salvar na coleção" : "Save to collection"}</span>
              </button>
              ${this._imageModalSuccess ? `<span class="sl-modal-success-badge">✓ ${this._imageModalSuccess}</span>` : ""}
            </div>

            ${c.length > 0 ? `
              <div class="sl-modal-recents">
                <div class="sl-modal-recents-header">
                  <span>${e ? `Suas Imagens Recentes (${c.length}/24):` : `Your Recent Images (${c.length}/24):`}</span>
                  ${this._isConfirmingClearImages ? `
                    <div class="sl-confirm-clear-box">
                      <span class="sl-confirm-clear-text">${e ? "Limpar todas?" : "Clear all?"}</span>
                      <div class="sl-confirm-clear-actions">
                        <button type="button" class="sl-btn-confirm-yes" id="btn-confirm-clear-images-yes">${e ? "Sim, limpar" : "Yes, clear"}</button>
                        <button type="button" class="sl-btn-confirm-no" id="btn-confirm-clear-images-no">${e ? "Cancelar" : "Cancel"}</button>
                      </div>
                    </div>
                  ` : `
                    <div class="sl-modal-recents-actions">
                      <button type="button" class="sl-btn-manage-recents ${this._isManagingRecentImages ? "sl-active" : ""}" id="btn-manage-recent-images" title="${this._isManagingRecentImages ? e ? "Concluir gerenciamento" : "Done managing" : e ? "Gerenciar e remover imagens" : "Manage & remove images"}">
                        ${this._isManagingRecentImages ? e ? "✓ Concluir" : "✓ Done" : e ? "Gerenciar" : "Manage"}
                      </button>
                      <button type="button" class="sl-btn-clear-recents" id="btn-clear-recent-images" title="${e ? "Limpar histórico de imagens" : "Clear image history"}">
                        ${e ? "Limpar" : "Clear"}
                      </button>
                    </div>
                  `}
                </div>
                <div class="sl-modal-recents-grid ${this._isManagingRecentImages ? "sl-managing-recents" : ""}">
                  ${c.map(
      (n) => `
                    <div class="sl-recent-gif-wrapper">
                      <button type="button" class="sl-recent-image-item sl-recent-gif-item" data-url="${n.url}" data-alt="${n.alt || ""}" title="${n.alt || n.url}">
                        <img src="${n.url}" alt="${n.alt || "Imagem"}" loading="lazy" />
                      </button>
                      <button type="button" class="sl-btn-delete-recent-image sl-btn-delete-recent-gif" data-url="${n.url}" title="${e ? "Remover esta imagem dos recentes" : "Remove this image from recents"}" aria-label="${e ? "Remover Imagem" : "Remove Image"}">✕</button>
                    </div>
                  `
    ).join("")}
                </div>
              </div>
            ` : ""}

            <div class="sl-modal-error" id="image-modal-error-box" style="${this._imageModalError ? "display: flex;" : "display: none;"}">
              <span>⚠️</span>
              <span id="image-modal-error-text">${this._imageModalError || ""}</span>
            </div>
          </div>

          <div class="sl-modal-footer">
            <button type="button" class="sl-btn sl-btn-secondary" id="btn-cancel-image-modal">
              ${i}
            </button>
            <button type="button" class="sl-btn sl-btn-primary" id="btn-confirm-image-modal">
              <span>📷</span>
              <span>${s}</span>
            </button>
          </div>
        </div>
      </div>
    `;
  }
  /**
   * Renderiza o Menu Popover Flutuante com as Linguagens Populares
   */
  renderCodePicker() {
    const t = this.currentLang === "pt" ? "Linguagem do Bloco" : "Code Language";
    return `
      <div class="sl-code-picker-popover" role="menu" aria-label="${t}">
        <div class="sl-code-picker-title">${t}</div>
        <div class="sl-code-lang-grid">
          ${Le.map(
      (r) => `
            <button type="button" class="sl-code-lang-btn" data-lang="${r.id}" role="menuitem" title="${r.name}">
              <span class="sl-code-lang-name">${r.name}</span>
              <span class="sl-code-lang-tag">${r.id}</span>
            </button>
          `
    ).join("")}
        </div>
      </div>
    `;
  }
  /**
   * Insere bloco de código com formatação e foco inteligente
   * Suporta seleção prévia do usuário ou template com placeholder pré-selecionado
   */
  insertCodeBlock(e = "typescript") {
    var R, P, O, L;
    const t = (R = this.shadowRoot) == null ? void 0 : R.getElementById("composer-textarea");
    if (!t) return;
    const r = ((P = this._savedComposerSelection) == null ? void 0 : P.start) ?? t.selectionStart ?? this._composerText.length, o = ((O = this._savedComposerSelection) == null ? void 0 : O.end) ?? t.selectionEnd ?? this._composerText.length, i = t.value.substring(r, o) || (this.currentLang === "pt" ? "// Seu código aqui" : "// Your code here"), s = t.value.substring(0, r), c = t.value.substring(o), n = s.length > 0 && !s.endsWith(`
`), m = c.length > 0 && !c.startsWith(`
`), S = n ? `
` : "", k = `${S}\`\`\`${e}
${i}
\`\`\`${m ? `
` : ""}`, v = s + k + c;
    this._composerText = v, this._isCodePickerOpen = !1, this._savedComposerSelection = null;
    const y = s.length + S.length + 3 + e.length + 1, E = y + i.length;
    this.render();
    const x = (L = this.shadowRoot) == null ? void 0 : L.getElementById("composer-textarea");
    x && (x.focus(), x.setSelectionRange(y, E), x.style.height = "auto", x.style.height = `${x.scrollHeight}px`);
  }
  /**
   * Renderiza a Caixa de Escrita Principal (com Abas Escreva / Prévia, Aa e Autenticação)
   */
  renderComposer() {
    const e = this._hidePreview ? !0 : this._activeTab === "write", t = this._fontMode === "monospace", r = this.currentLang === "pt" ? "Deixe uma nota ou comentário..." : "Leave a note or comment...", o = this.currentLang === "pt" ? "Escreva" : "Write", a = this.currentLang === "pt" ? "Prévia" : "Preview", i = this.currentLang === "pt" ? "Nada para pré-visualizar ainda." : "Nothing to preview yet.", s = this.currentLang === "pt" ? "Entre com GitHub" : "Sign in with GitHub", c = this.currentLang === "pt" ? "Publicar nota" : "Post note";
    return `
      <div class="sl-composer" part="composer">
        <!-- Barra de Abas e Ações (Bloco de Código </> e Controle Tipográfico Aa) -->
        <div class="sl-composer-tabs">
          <div class="sl-tabs-group" role="tablist">
            <button class="sl-tab ${e ? "sl-tab-active" : ""}" id="tab-write" role="tab" aria-selected="${e}">
              ${o}
            </button>
            ${this._hidePreview ? "" : `
              <button class="sl-tab ${e ? "" : "sl-tab-active"}" id="tab-preview" role="tab" aria-selected="${!e}">
                ${a}
              </button>
            `}
          </div>
          <div class="sl-composer-tabs-actions">
            <div class="sl-code-menu-wrapper">
              <button class="sl-code-toggle ${this._isCodePickerOpen ? "sl-code-toggle-active" : ""}" id="btn-code-toggle" type="button" title="${this.currentLang === "pt" ? "Inserir bloco de código" : "Insert code block"}" aria-label="Código">
                <span>&lt;/&gt;</span>
              </button>
              ${this._isCodePickerOpen ? this.renderCodePicker() : ""}
            </div>
            <button class="sl-font-toggle ${t ? "sl-mono-active" : ""}" id="btn-font-toggle" title="Alternar fonte monoespaçada / texto" aria-label="Alternar tipografia">
              <span>Aa</span>
            </button>
          </div>
        </div>

        <!-- Área de Edição / Prévia -->
        <div class="sl-composer-body">
          ${e ? `<textarea class="sl-textarea ${t ? "sl-monospace" : ""}" id="composer-textarea" placeholder="${r}" part="textarea">${this._composerText}</textarea>` : `<div class="sl-preview-area ${t ? "sl-monospace" : ""}" part="preview-area">
                  ${this._composerText ? this.parseMarkdown(this._composerText) : `<span class="sl-preview-empty">${i}</span>`}
                </div>`}
        </div>

        <!-- Rodapé do Composer (Usuário Autenticado vs Visitante) -->
        <div class="sl-composer-footer">
          ${this._currentUser ? `
            <div class="sl-user-badge">
              <img class="sl-user-avatar" src="${this._currentUser.avatarUrl}" alt="${this._currentUser.login}" />
              <span class="sl-user-name">@${this._currentUser.login}</span>
              <button class="sl-btn-logout" id="btn-logout" title="Sair da sessão">
                ${this.currentLang === "pt" ? "Sair" : "Logout"}
              </button>
            </div>
            <div class="sl-composer-actions">
              <div class="sl-emoji-wrapper">
                <button class="sl-btn-emoji ${this._isEmojiPickerOpen ? "sl-btn-emoji-active" : ""}" id="btn-emoji-toggle" type="button" title="${this.currentLang === "pt" ? "Inserir emojis e ícones" : "Insert emojis & icons"}" aria-label="Emoji">
                  <span>😀</span>
                </button>
                ${this._isEmojiPickerOpen ? this.renderEmojiPicker() : ""}
              </div>
              <button class="sl-btn sl-btn-primary" id="btn-submit" part="submit-btn">
                <span>🍃</span>
                <span>${c}</span>
              </button>
            </div>
          ` : `
            <span style="font-size: 0.75rem; color: var(--sl-text-muted);">
              ${this.currentLang === "pt" ? "Markdown suportado" : "Markdown supported"}
            </span>
            <div class="sl-composer-actions">
              <div class="sl-emoji-wrapper">
                <button class="sl-btn-emoji ${this._isEmojiPickerOpen ? "sl-btn-emoji-active" : ""}" id="btn-emoji-toggle" type="button" title="${this.currentLang === "pt" ? "Inserir emojis e ícones" : "Insert emojis & icons"}" aria-label="Emoji">
                  <span>😀</span>
                </button>
                ${this._isEmojiPickerOpen ? this.renderEmojiPicker() : ""}
              </div>
              <button class="sl-btn sl-btn-github" id="btn-login-submit" part="submit-btn">
                <svg height="16" width="16" viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                </svg>
                <span>${s}</span>
              </button>
            </div>
          `}
        </div>
      </div>
    `;
  }
  /**
   * Caixa de Emojis e Ícones Expressivos com Seletor de Tom de Pele
   */
  renderEmojiPicker() {
    const e = [
      {
        name: this.currentLang === "pt" ? "Rostos & Emoções" : "Faces & Feelings",
        emojis: [
          "😀",
          "😃",
          "😄",
          "😁",
          "😆",
          "😅",
          "😂",
          "🤣",
          "🥹",
          "😊",
          "😇",
          "🙂",
          "😉",
          "😌",
          "😍",
          "🥰",
          "😘",
          "😋",
          "😜",
          "🤪",
          "😎",
          "🤓",
          "🧐",
          "🤔",
          "🫡",
          "🤫",
          "😴",
          "🤯",
          "🥳",
          "🤩",
          "😭",
          "😡",
          "😈",
          "👻",
          "🤖"
        ]
      },
      {
        name: this.currentLang === "pt" ? "Gestos & Mágica" : "Gestures & Magic",
        emojis: [
          "🧙‍♂️",
          "🧙‍♀️",
          "🧙",
          "🔮",
          "✨",
          "🪄",
          "👍",
          "👏",
          "🙌",
          "🤝",
          "🙏",
          "✌️",
          "🤘",
          "🤙",
          "👊",
          "✊",
          "🤛",
          "🤜",
          "🤞",
          "🫶",
          "👋",
          "🖐️",
          "✋",
          "🖖",
          "💪",
          "👀",
          "🧠",
          "🫀",
          "💯",
          "💥",
          "🚀"
        ]
      },
      {
        name: this.currentLang === "pt" ? "Símbolos & Celebração" : "Symbols & Celebration",
        emojis: [
          "❤️",
          "🧡",
          "💛",
          "💚",
          "💙",
          "💜",
          "🖤",
          "🤍",
          "💔",
          "❣️",
          "💕",
          "💖",
          "🔥",
          "🌟",
          "⭐",
          "⚡",
          "💡",
          "🎉",
          "🏆",
          "☕",
          "🍵",
          "🍺",
          "🍻",
          "🍕",
          "🍿",
          "🎲",
          "🎮",
          "🎸"
        ]
      },
      {
        name: this.currentLang === "pt" ? "Dev, Tech & Natureza" : "Dev, Tech & Nature",
        emojis: [
          "🍃",
          "🌱",
          "🌿",
          "🍂",
          "🍁",
          "🌍",
          "🌎",
          "💻",
          "🖥️",
          "📱",
          "⌨️",
          "🖱️",
          "📡",
          "🚀",
          "🐛",
          "🐞",
          "📦",
          "🛠️",
          "⚙️",
          "🔧",
          "🔨",
          "🔍",
          "🔒",
          "🛡️",
          "🎨",
          "🧪",
          "💎",
          "🎯"
        ]
      }
    ], t = this.currentLang === "pt" ? "Inserir GIF" : "Insert GIF", r = this.currentLang === "pt" ? "Emojis & Ícones" : "Emojis & Icons", o = ie("👊", this._selectedSkinTone), a = this.currentLang === "pt" ? "Tom de pele (clique para escolher)" : "Skin tone (click to choose)";
    return `
      <div class="sl-emoji-popover" id="emoji-popover" part="emoji-popover">
        <div class="sl-emoji-header">
          <div style="display: flex; align-items: center; gap: 0.45rem;">
            <span class="sl-emoji-title">${r}</span>
            ${this._hideSkinTone ? "" : `
              <button type="button" class="sl-skin-tone-toggle-btn ${this._isSkinTonePanelOpen ? "sl-tone-active" : ""}" id="btn-skin-tone-toggle" title="${a}">
                <span>${o}</span>
              </button>
            `}
          </div>
          <div class="sl-emoji-nav">
            <button type="button" class="sl-emoji-nav-btn" id="btn-emoji-scroll-up" title="${this.currentLang === "pt" ? "Subir" : "Scroll up"}">▲</button>
            <button type="button" class="sl-emoji-nav-btn" id="btn-emoji-scroll-down" title="${this.currentLang === "pt" ? "Descer" : "Scroll down"}">▼</button>
            <button type="button" class="sl-emoji-nav-btn sl-emoji-close-btn" id="btn-emoji-close" title="${this.currentLang === "pt" ? "Fechar" : "Close"}">✕</button>
          </div>
        </div>

        ${!this._hideSkinTone && this._isSkinTonePanelOpen ? `
          <div class="sl-skin-tone-panel">
            <div class="sl-skin-tone-panel-header">
              <span>${this.currentLang === "pt" ? "Escolha o tom de pele padrão:" : "Choose default skin tone:"}</span>
              <span style="font-size: 0.68rem; opacity: 0.85;">💾 ${this.currentLang === "pt" ? "Salvo no navegador" : "Saved in browser"}</span>
            </div>
            <div class="sl-skin-tone-options">
              ${_e.map((i) => {
      const s = ie("👊", i.modifier), c = this._selectedSkinTone === i.modifier || this._selectedSkinTone === "default" && i.modifier === "", n = this.currentLang === "pt" ? i.namePt : i.nameEn;
      return `
                  <button type="button" class="sl-tone-btn ${c ? "sl-tone-selected" : ""}" data-tone-mod="${i.modifier || "default"}" title="${n}">
                    ${s}
                  </button>
                `;
    }).join("")}
            </div>
          </div>
        ` : ""}

        <div class="sl-emoji-scroll" id="emoji-scroll-container">
          ${e.map(
      (i) => `
            <div class="sl-emoji-category">
              <span class="sl-emoji-category-title">${i.name}</span>
              <div class="sl-emoji-grid">
                ${i.emojis.map((s) => {
        const c = Ee.has(s), n = c ? ie(s, this._selectedSkinTone) : s;
        return `
                      <button type="button" class="sl-emoji-item" data-emoji="${n}" data-base-emoji="${s}" data-toneable="${c ? "true" : "false"}" title="${n}">
                        ${n}
                      </button>
                    `;
      }).join("")}
              </div>
            </div>
          `
    ).join("")}
        </div>

        <button type="button" class="sl-emoji-gif-btn" id="btn-insert-gif" title="${this.currentLang === "pt" ? "Insere modelo Markdown de GIF" : "Inserts Markdown GIF template"}">
          <span>🖼️</span>
          <span>${t}</span>
        </button>
        ${this._enableImages ? `
          <button type="button" class="sl-emoji-img-btn" id="btn-insert-image" title="${this.currentLang === "pt" ? "Inserir imagem via URL" : "Insert image via URL"}">
            <span>📷</span>
            <span>${this.currentLang === "pt" ? "Inserir imagem" : "Insert image"}</span>
          </button>
        ` : ""}
      </div>
    `;
  }
  /**
   * Insere texto ou emojis na posição atual do cursor na textarea
   */
  insertTextAtCursor(e) {
    if (!this.shadowRoot) return;
    const t = this.shadowRoot.getElementById("composer-textarea");
    if (!t) return;
    const r = t.selectionStart ?? t.value.length, o = t.selectionEnd ?? t.value.length, a = t.value, i = a.substring(0, r), s = a.substring(o);
    t.value = i + e + s, this._composerText = t.value;
    const c = r + e.length;
    this._isEmojiPickerOpen = !1, this.render();
    const n = this.shadowRoot.getElementById("composer-textarea");
    n && (n.focus(), n.setSelectionRange(c, c));
  }
  /**
   * Renderiza a Lista Completa com Threads e Respostas Aninhadas
   */
  escapeHtml(e) {
    return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
  }
  getFilteredComments() {
    const e = this._searchQuery.trim().toLowerCase();
    let t = [];
    if (!e)
      t = [...this._comments];
    else {
      const r = e.startsWith("@") ? e.slice(1) : e, o = r.split(/\s+/).filter(Boolean), a = [];
      for (const i of this._comments) {
        let s = 0;
        const c = i.author.login.toLowerCase(), n = i.body.toLowerCase();
        if (c === r ? s += 100 : c.startsWith(r) ? s += 60 : c.includes(r) && (s += 40), n.includes(e) || n.includes(r))
          s += 35;
        else
          for (const m of o)
            n.includes(m) && (s += 10);
        if (i.replies && i.replies.length > 0)
          for (const m of i.replies) {
            const S = m.author.login.toLowerCase(), p = m.body.toLowerCase();
            if (S === r ? s += 50 : S.includes(r) && (s += 25), p.includes(e) || p.includes(r))
              s += 20;
            else
              for (const k of o)
                p.includes(k) && (s += 5);
          }
        s > 0 && a.push({ comment: i, score: s });
      }
      a.sort((i, s) => s.score - i.score), t = a.map((i) => i.comment);
    }
    return e || (t = this.sortComments(t, this._order)), t;
  }
  /**
   * Ordena comentários por data de criação (cronológico ou cronológico inverso),
   * priorizando comentários fixados pelo autor (pinned) no topo da discussão.
   */
  sortComments(e, t) {
    const r = [], o = [];
    for (const i of e)
      !!(i.isPinned || i.body.includes("<!-- sl:pinned -->") || i.body.includes("<!-- pinned -->")) ? r.push(i) : o.push(i);
    const a = o.every((i) => i.createdAt && !isNaN(Date.parse(i.createdAt)));
    return t === "newest" ? a ? o.sort((i, s) => Date.parse(s.createdAt) - Date.parse(i.createdAt)) : o.reverse() : a && o.sort((i, s) => Date.parse(i.createdAt) - Date.parse(s.createdAt)), [...r, ...o];
  }
  /**
   * Renderiza a Barra de Moderação do Proprietário do Repositório (quando enable-moderation ativo)
   */
  renderModerationBar() {
    if (!this._enableModeration || !this._isOwner())
      return "";
    const e = this.currentLang === "pt", t = this.currentLang === "es", r = e ? "Painel de Moderação KV (Proprietário)" : t ? "Panel de Moderación KV (Propietario)" : "KV Moderation Bar (Repo Owner)", o = e ? "Nenhum usuário bloqueado ou restrito." : t ? "Ningún usuario bloqueado o restringido." : "No users banned or restricted.", a = e ? "Atualizar lista de moderação" : "Refresh moderation list", i = this._moderatedUsers.length === 0 ? `<span class="sl-mod-empty-text">${o}</span>` : this._moderatedUsers.map((s) => {
      const c = s.action === "ban", n = c ? "sl-mod-chip-ban" : "sl-mod-chip-media", m = c ? e ? "Banido" : t ? "Bloqueado" : "Banned" : e ? "Sem Mídia" : t ? "Sin Medios" : "No Media", S = e ? `Remover moderação de @${s.username}` : `Remove moderation for @${s.username}`;
      return `
                <div class="sl-mod-chip ${n}">
                  <span class="sl-mod-chip-user">@${this.escapeHtml(s.username)}</span>
                  <span class="sl-mod-chip-action">${m}</span>
                  <button type="button" class="sl-mod-chip-remove" data-user="${this.escapeHtml(
        s.username
      )}" title="${S}" aria-label="${S}">✕</button>
                </div>
              `;
    }).join("");
    return `
      <div class="sl-moderation-bar" role="region" aria-label="${r}">
        <div class="sl-mod-bar-header">
          <div class="sl-mod-bar-title">
            <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor">
              <path d="M7.47 10.78a.75.75 0 001.06 0l3.75-3.75a.75.75 0 00-1.06-1.06L8.5 8.69V3a.75.75 0 00-1.5 0v5.69L4.28 5.97a.75.75 0 00-1.06 1.06l3.75 3.75zM8 0a8 8 0 100 16A8 8 0 008 0z" />
            </svg>
            <span>🛡️ ${r}</span>
          </div>
          <div class="sl-mod-bar-actions">
            <button type="button" class="sl-mod-refresh-btn" id="sl-mod-refresh" title="${a}" ${this._isModerationLoading ? "disabled" : ""}>
              ${this._isModerationLoading ? "⌛" : "🔄"}
            </button>
          </div>
        </div>
        <div class="sl-mod-chips">
          ${i}
        </div>
      </div>
    `;
  }
  /**
   * Renderiza a Barra de Ferramentas / Buscador e Ordenação acima da Lista de Comentários
   */
  renderCommentsToolbar() {
    if (this._comments.length === 0 && !this._searchQuery || this._hideSearch && this._hideSorting && !this._searchQuery)
      return "";
    const e = this.currentLang === "pt", t = this._comments.length, r = this.getFilteredComments().length, o = this._searchQuery.trim().length > 0;
    let a = "";
    o ? a = e ? `${r} de ${t} encontrados` : `${r} of ${t} found` : a = `${t} ${e ? t === 1 ? "comentário" : "comentários" : t === 1 ? "comment" : "comments"}`;
    const i = this._order === "newest" ? e ? "Mais recentes" : "Newest first" : e ? "Mais antigos" : "Oldest first", s = this._order === "newest" ? e ? "Ordenado por mais recentes. Clique para mais antigos." : "Sorted by newest. Click for oldest." : e ? "Ordenado por mais antigos. Clique para mais recentes." : "Sorted by oldest. Click for newest.", c = this._hideSearch ? "" : `
        <div class="sl-search-wrapper" part="search-wrapper">
          <svg class="sl-search-svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
          <input
            type="text"
            id="sl-search-input"
            class="sl-search-input"
            part="search-input"
            placeholder="${e ? "Buscar comentários ou @autor..." : "Search comments or @user..."}"
            value="${this.escapeHtml(this._searchQuery)}"
            autocomplete="off"
            spellcheck="false"
            aria-label="${e ? "Buscar comentários ou autor" : "Search comments or author"}"
          />
          ${this._searchQuery ? `<button type="button" class="sl-search-clear-btn" id="sl-search-clear" part="search-clear-btn" title="${e ? "Limpar busca (Esc)" : "Clear search (Esc)"}">✕</button>` : `<kbd class="sl-search-kbd" title="${e ? "Pressione / para buscar" : "Press / to search"}">/</kbd>`}
        </div>
      `, n = this._hideSorting ? "" : `
        <button type="button" class="sl-sort-btn" id="btn-sort-toggle" part="sort-btn" title="${s}" aria-label="${s}">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="m3 16 4 4 4-4"/>
            <path d="M7 20V4"/>
            <path d="m21 8-4-4-4 4"/>
            <path d="M17 4v16"/>
          </svg>
          <span>${i}</span>
        </button>
      `;
    return `
      <div class="sl-toolbar" part="toolbar">
        ${c}
        <div class="sl-toolbar-actions" part="toolbar-actions">
          <div class="sl-toolbar-count" part="toolbar-count">
            <span>${a}</span>
          </div>
          ${n}
        </div>
      </div>
    `;
  }
  /**
   * Renderiza a Lista Completa com Threads, Filtros de Busca e Paginação
   */
  renderCommentsList() {
    const e = this._searchQuery.trim().length > 0, t = this.getFilteredComments();
    if (t.length === 0) {
      const m = this.currentLang === "pt", S = e ? m ? `Nenhum comentário encontrado para "${this._searchQuery}".` : `No comments found for "${this._searchQuery}".` : m ? "Nenhum comentário por aqui ainda. Seja o primeiro a semear uma reflexão!" : "No comments here yet. Be the first to scatter an idea!";
      return `
        ${e ? `
          <div class="sl-search-banner" part="search-banner">
            <span>🔍 ${m ? "0 comentários encontrados" : "0 comments found"}</span>
            <button type="button" class="sl-search-banner-clear" part="search-banner-clear">${m ? "Limpar busca" : "Clear search"}</button>
          </div>
        ` : ""}
        <div class="sl-empty" part="empty">
          <span class="sl-empty-icon">${e ? "🔍" : "🍃"}</span>
          <p>${S}</p>
        </div>
      `;
    }
    const r = t.length, o = Math.max(1, Math.ceil(r / this._pageSize));
    this._currentPage > o && (this._currentPage = o);
    const a = (this._currentPage - 1) * this._pageSize, i = a + this._pageSize, s = t.slice(a, i);
    let c = "";
    if (e) {
      const m = this.currentLang === "pt";
      c = `
        <div class="sl-search-banner" part="search-banner">
          <span>🔍 ${m ? `${r} comentário(s) para` : `${r} comment(s) for`} "<strong>${this.escapeHtml(this._searchQuery)}</strong>"</span>
          <button type="button" class="sl-search-banner-clear" part="search-banner-clear">${m ? "Limpar busca" : "Clear search"}</button>
        </div>
      `;
    }
    let n = "";
    if (r > this._pageSize) {
      const m = this.currentLang === "pt", S = m ? "‹ Anterior" : "‹ Previous", p = m ? "Próxima ›" : "Next ›", k = m ? `Página ${this._currentPage} de ${o} • ${r} comentários` : `Page ${this._currentPage} of ${o} • ${r} comments`;
      let v = "";
      for (let y = 1; y <= o; y++) {
        const E = y === this._currentPage;
        v += `
          <button class="sl-page-btn ${E ? "sl-page-active" : ""}" data-page="${y}" part="page-btn" ${E ? 'aria-current="page"' : ""}>
            ${y}
          </button>
        `;
      }
      n = `
        <nav class="sl-pagination" part="pagination" aria-label="${m ? "Paginação de comentários" : "Comments pagination"}">
          <div class="sl-pagination-controls">
            <button class="sl-page-btn sl-page-nav-btn btn-prev-page" part="page-btn-prev" ${this._currentPage <= 1 ? "disabled" : ""}>
              ${S}
            </button>
            ${v}
            <button class="sl-page-btn sl-page-nav-btn btn-next-page" part="page-btn-next" ${this._currentPage >= o ? "disabled" : ""}>
              ${p}
            </button>
          </div>
          <span class="sl-pagination-info" part="pagination-info">${k}</span>
        </nav>
      `;
    }
    return `
      <div class="sl-list" part="list">
        ${c}
        ${s.map((m) => this.renderCommentCard(m)).join("")}
        ${n}
      </div>
    `;
  }
  /**
   * Renderiza um Card de Comentário Individual
   */
  renderCommentCard(e, t = !1, r) {
    var Z, U, W;
    const o = this._repo ? this._repo.split("/")[0].toLowerCase() : "", i = e.author.isAuthor || o && e.author.login.toLowerCase() === o ? `<span class="sl-author-badge" part="author-badge">${this.currentLang === "pt" ? "Autor" : "Author"}</span>` : "", s = !t && !!(e.isPinned || e.body.includes("<!-- sl:pinned -->") || e.body.includes("<!-- pinned -->")), c = s ? `<span class="sl-pinned-badge" part="pinned-badge" title="${this.currentLang === "pt" ? "Comentário fixado no topo pelo autor" : "Comment pinned to top by author"}"><span>📌</span><span>${this.currentLang === "pt" ? "Fixado pelo autor" : "Pinned by author"}</span></span>` : "", n = !!(this._currentUser && o && this._currentUser.login.toLowerCase() === o), m = this._speakingId === e.id, S = this._replyingToId === e.id, p = this._editingId === e.id, k = this._openMenuId === e.id, v = m ? this.currentLang === "pt" ? "⏸️ Pausar" : "⏸️ Pause" : this.currentLang === "pt" ? "🔊 Ouvir" : "🔊 Listen", y = this.currentLang === "pt" ? "Responder" : "Reply", E = this.getVisitorLang(), x = e.originalLang || "pt", R = x !== E, P = this.getLanguageName(x, E), L = (e.isShowingTranslation && e.translatedBody ? e.translatedBody : e.body).replace(/<!--\s*sl:pinned\s*-->\r?\n?/g, "").replace(/<!--\s*pinned\s*-->\r?\n?/g, ""), j = this.formatDate(e.createdAt), I = !!((Z = e.reactions) != null && Z.find((B) => B.content === "👍" && B.viewerHasReacted)), F = this.currentLang === "pt" ? "Gostei" : "Like", N = I ? this.currentLang === "pt" ? "Remover curtida" : "Remove like" : this.currentLang === "pt" ? "Curtir" : "Like", q = (e.reactions || []).filter((B) => B.count > 0);
    return `
      <article class="sl-card ${t ? "sl-card-reply" : ""} ${s ? "sl-card-pinned" : ""}" id="comment-${e.id}" part="card">
        <!-- Cabeçalho do Card (Avatar ancorado no topo!) -->
        <div class="sl-card-header">
          <div class="sl-author-info">
            <a href="${e.author.url}" target="_blank" rel="noopener noreferrer">
              <img class="sl-avatar" src="${e.author.avatarUrl}" alt="${e.author.login}" part="avatar" />
            </a>
            <div class="sl-author-top-row">
              <a class="sl-author-name" href="${e.author.url}" target="_blank" rel="noopener noreferrer" part="author-name">
                ${e.author.login}
              </a>
              ${i}
              ${c}
              <time class="sl-date" part="date" datetime="${e.createdAt}" title="${j.full}">${j.relative}</time>
              ${e.isEdited ? `<span class="sl-edited-badge">(${this.currentLang === "pt" ? "editado" : "edited"})</span>` : ""}
            </div>
          </div>

          <!-- Menu de Contexto In-Place (•••) -->
          <div class="sl-menu-wrapper">
            <button class="sl-menu-btn" data-menu-id="${e.id}" aria-label="${this.currentLang === "pt" ? "Opções do comentário" : "Comment options"}">
              •••
            </button>
            ${k ? `
              <div class="sl-dropdown-menu" part="dropdown-menu">
                ${n && !t ? `
                  <button class="sl-dropdown-item btn-toggle-pin" data-comment-id="${e.id}">
                    <span>📌</span>
                    <span>${s ? this.currentLang === "pt" ? "Desafixar do topo" : "Unpin from top" : this.currentLang === "pt" ? "Fixar no topo" : "Pin to top"}</span>
                  </button>
                ` : ""}
                <button class="sl-dropdown-item btn-edit" data-comment-id="${e.id}">
                  <span>✏️</span>
                  <span>${this.currentLang === "pt" ? "Editar" : "Edit"}</span>
                </button>
                <button class="sl-dropdown-item btn-copy-link" data-comment-id="${e.id}">
                  <span>🔗</span>
                  <span>${this.currentLang === "pt" ? "Copiar link" : "Copy link"}</span>
                </button>
                <button class="sl-dropdown-item sl-dropdown-danger btn-delete" data-comment-id="${e.id}">
                  <span>🗑️</span>
                  <span>${this.currentLang === "pt" ? "Excluir" : "Delete"}</span>
                </button>
                ${this._enableModeration && n && ((U = e.author) != null && U.login) && ((W = this._currentUser) != null && W.login) && e.author.login.toLowerCase() !== this._currentUser.login.toLowerCase() ? `
                  <button class="sl-dropdown-item btn-mod-restrict-media" data-user="${this.escapeHtml(e.author.login)}">
                    <span>🚫</span>
                    <span>${this.currentLang === "pt" ? "Restringir Mídia" : "Restrict Media"}</span>
                  </button>
                  <button class="sl-dropdown-item sl-danger btn-mod-ban" data-user="${this.escapeHtml(e.author.login)}">
                    <span>🛑</span>
                    <span>${this.currentLang === "pt" ? "Banir Usuário" : "Ban User"}</span>
                  </button>
                ` : ""}
              </div>
            ` : ""}
          </div>
        </div>

        <!-- Corpo do Comentário ou Editor In-Place -->
        ${p ? `
          <div class="sl-edit-mode">
            <textarea class="sl-textarea" id="edit-textarea-${e.id}">${e.body.replace(/<!--\s*sl:pinned\s*-->\r?\n?/g, "").replace(/<!--\s*pinned\s*-->\r?\n?/g, "")}</textarea>
            <div class="sl-edit-actions">
              <button class="sl-btn sl-btn-secondary btn-cancel-edit" data-comment-id="${e.id}">
                ${this._lang === "pt" ? "Cancelar" : "Cancel"}
              </button>
              <button class="sl-btn sl-btn-primary btn-save-edit" data-comment-id="${e.id}">
                ${this._lang === "pt" ? "Salvar" : "Save"}
              </button>
            </div>
          </div>
        ` : `
          <div class="sl-card-body" part="card-body">
            ${e.isShowingTranslation ? this.parseMarkdown(L) : e.bodyHtml || this.parseMarkdown(L)}
          </div>
        `}

        <!-- Rodapé do Card: Reações estilo LinkedIn, Responder e Ações da Direita -->
        <div class="sl-card-footer">
          <div class="sl-actions-left">
            ${this._hideReactions ? "" : `
            <!-- Gatilho de Reação Universal (Gostei / Like) -->
            <div class="sl-reaction-container" data-comment-id="${e.id}">
              <button type="button" class="sl-reaction-trigger-btn" data-comment-id="${e.id}" data-emoji="👍" part="reaction-trigger-btn" title="${N}">
                <span>👍</span>
                <span>${F}</span>
              </button>

              <!-- Popover Flutuante com 6 Emojis Animados -->
              <div class="sl-reaction-popover" role="toolbar" aria-label="Reações">
                ${$e.map((B) => {
      var K;
      const J = this.currentLang === "pt" ? B.namePt : B.nameEn;
      return `
                    <button type="button" class="sl-reaction-picker-item ${!!((K = e.reactions) != null && K.find((X) => X.content === B.symbol && X.viewerHasReacted)) ? "sl-reacted" : ""}" data-comment-id="${e.id}" data-emoji="${B.symbol}" data-tooltip="${J}" title="${J}" aria-label="${J}">
                      ${B.symbol}
                    </button>
                  `;
    }).join("")}
              </div>
            </div>

            <!-- Resumo / Badges de Reações Recebidas -->
            ${q.length > 0 ? `
              <div class="sl-reactions-summary">
                ${q.map(
      (B) => `
                  <button type="button" class="sl-reaction-badge ${B.viewerHasReacted ? "sl-reacted" : ""}" data-comment-id="${e.id}" data-emoji="${B.content}" title="${B.viewerHasReacted ? this.currentLang === "pt" ? "Remover sua reação" : "Remove your reaction" : this.currentLang === "pt" ? "Reagir com " + B.content : "React with " + B.content}">
                    <span>${B.content}</span>
                    <span>${B.count}</span>
                  </button>
                `
    ).join("")}
              </div>
            ` : ""}
            `}

            <button class="sl-reply-btn" data-reply-to="${e.id}" data-parent-id="${r || e.id}" part="reply-btn">
              <span>↩️</span>
              <span>${y}</span>
            </button>
          </div>

          <div class="sl-actions-right">
            ${R ? `
              <button class="sl-translate-btn btn-toggle-translate ${e.isShowingTranslation ? "sl-translated" : ""}" data-comment-id="${e.id}" part="translate-btn" title="${e.isShowingTranslation ? this.currentLang === "pt" ? "Ver original" : "See original" : this.currentLang === "pt" ? "Traduzir comentário" : "Translate comment"}">
                <span>${this._isTranslatingId === e.id ? "⏳" : e.isShowingTranslation ? "✨" : "🌐"}</span>
                <span>${this._isTranslatingId === e.id ? this.currentLang === "pt" ? "Traduzindo..." : "Translating..." : e.isShowingTranslation ? this.currentLang === "pt" ? `Traduzido do ${P} • Ver original` : `Translated from ${P} • See original` : this.currentLang === "pt" ? `Publicado em ${P} • Traduzir` : `Published in ${P} • Translate`}</span>
              </button>
            ` : ""}

            <button class="sl-audio-btn ${m ? "sl-audio-playing" : ""}" data-speak-id="${e.id}" data-text="${encodeURIComponent(L)}" data-lang="${e.isShowingTranslation ? E : x}" part="audio-btn">
              <span>${v}</span>
            </button>
          </div>
        </div>

        <!-- Formulário de Resposta Aninhada Inline -->
        ${S ? `
          <div class="sl-inline-composer">
            <textarea id="reply-textarea-${e.id}" placeholder="${this.currentLang === "pt" ? `Respondendo para @${e.author.login}...` : `Replying to @${e.author.login}...`}">${this._replyText}</textarea>
            <div class="sl-inline-footer">
              <button class="sl-btn sl-btn-secondary btn-cancel-reply" data-comment-id="${e.id}">
                ${this.currentLang === "pt" ? "Cancelar" : "Cancel"}
              </button>
              <button class="sl-btn sl-btn-primary btn-send-reply" data-comment-id="${e.id}" data-parent-id="${r || e.id}">
                ${this.currentLang === "pt" ? "Responder" : "Reply"}
              </button>
            </div>
          </div>
        ` : ""}

        <!-- Respostas Aninhadas (Threads Estilo LinkedIn com Linha Guia) -->
        ${!t && e.replies && e.replies.length > 0 ? (() => {
      const B = e.replies.length, J = this._expandedThreads.has(e.id), pe = J || B <= 2 ? e.replies : e.replies.slice(0, 2), K = B - 2;
      return `
                  <div class="sl-thread">
                    ${pe.map((X) => this.renderCommentCard(X, !0, e.id)).join("")}
                    ${B > 2 ? `
                      <button class="sl-thread-toggle-btn" data-thread-id="${e.id}" part="thread-toggle-btn">
                        <span>${J ? "▴" : "💬"}</span>
                        <span>${J ? this.currentLang === "pt" ? "Recolher respostas" : "Collapse replies" : this.currentLang === "pt" ? `Ver mais ${K} resposta${K > 1 ? "s" : ""} ▾` : `View ${K} more repl${K > 1 ? "ies" : "y"} ▾`}</span>
                      </button>
                    ` : ""}
                  </div>
                `;
    })() : ""}
      </article>
    `;
  }
  /**
   * Vinculação de Eventos Interativos do Shadow DOM
   */
  attachEvents() {
    if (!this.shadowRoot) return;
    const e = this.shadowRoot.getElementById("tab-write"), t = this.shadowRoot.getElementById("tab-preview"), r = this.shadowRoot.getElementById("composer-textarea");
    if (r) {
      const l = () => {
        this._savedComposerSelection = {
          start: r.selectionStart ?? 0,
          end: r.selectionEnd ?? 0
        };
      };
      r.addEventListener("input", () => {
        this._composerText = r.value, l(), r.style.height = "auto", r.style.height = `${r.scrollHeight}px`;
      }), r.addEventListener("click", l), r.addEventListener("keyup", l), r.addEventListener("select", l);
    }
    e && e.addEventListener("click", () => {
      this._activeTab = "write", this.render();
    }), t && t.addEventListener("click", () => {
      r && (this._composerText = r.value), this._activeTab = "preview", this.render();
    });
    const o = this.shadowRoot.getElementById("btn-sort-toggle");
    o && o.addEventListener("click", () => {
      this._order = this._order === "oldest" ? "newest" : "oldest", this._currentPage = 1, this.render();
    });
    const a = this.shadowRoot.getElementById("btn-code-toggle");
    a && a.addEventListener("click", (l) => {
      var w;
      l.stopPropagation();
      const g = (w = this.shadowRoot) == null ? void 0 : w.getElementById("composer-textarea");
      if (g) {
        const d = g.selectionStart ?? this._composerText.length, b = g.selectionEnd ?? this._composerText.length;
        if (this._savedComposerSelection = { start: d, end: b }, b > d && g.value.substring(d, b).trim().length > 0) {
          this.insertCodeBlock("typescript");
          return;
        }
      }
      this._isCodePickerOpen = !this._isCodePickerOpen, this.render();
    }), this.shadowRoot.querySelectorAll(".sl-code-lang-btn").forEach((l) => {
      l.addEventListener("click", (g) => {
        g.stopPropagation();
        const w = l.getAttribute("data-lang") || "typescript";
        this.insertCodeBlock(w);
      });
    });
    const s = this.shadowRoot.getElementById("btn-font-toggle");
    s && s.addEventListener("click", () => {
      this._fontMode = this._fontMode === "default" ? "monospace" : "default", this.render();
    });
    const c = this.shadowRoot.getElementById("btn-emoji-toggle");
    c && c.addEventListener("click", (l) => {
      l.stopPropagation(), this._isEmojiPickerOpen = !this._isEmojiPickerOpen, this.render();
    });
    const n = this.shadowRoot.getElementById("emoji-scroll-container"), m = this.shadowRoot.getElementById("btn-emoji-scroll-up"), S = this.shadowRoot.getElementById("btn-emoji-scroll-down"), p = this.shadowRoot.getElementById("btn-emoji-close");
    m && n && m.addEventListener("click", (l) => {
      l.stopPropagation(), n.scrollBy({ top: -90, behavior: "smooth" });
    }), S && n && S.addEventListener("click", (l) => {
      l.stopPropagation(), n.scrollBy({ top: 90, behavior: "smooth" });
    }), p && p.addEventListener("click", (l) => {
      l.stopPropagation(), this._isEmojiPickerOpen = !1, this.render();
    });
    const k = this.shadowRoot.getElementById("btn-skin-tone-toggle");
    k && k.addEventListener("click", (l) => {
      l.stopPropagation(), this._isSkinTonePanelOpen = !this._isSkinTonePanelOpen, this._activeTonePickerEmoji = null, this.render();
    }), this.shadowRoot.querySelectorAll(".sl-tone-btn").forEach((l) => {
      l.addEventListener("click", (g) => {
        g.stopPropagation();
        const w = l.dataset.toneMod || "default", d = w === "default" ? "default" : w;
        this.saveSkinTonePreference(d);
        const b = this._activeTonePickerEmoji;
        if (this._isSkinTonePanelOpen = !1, this._activeTonePickerEmoji = null, b) {
          const _ = ie(b, d === "default" ? "" : d);
          this.insertTextAtCursor(_);
        } else
          this.render();
      });
    }), this.shadowRoot.querySelectorAll(".sl-emoji-item").forEach((l) => {
      l.addEventListener("click", (g) => {
        g.stopPropagation();
        const w = l.dataset.toneable === "true", d = l.dataset.baseEmoji, b = l.dataset.emoji;
        if (w && d && this._selectedSkinTone === null) {
          this._activeTonePickerEmoji = d, this._isSkinTonePanelOpen = !0, this.render();
          return;
        }
        b && this.insertTextAtCursor(b);
      });
    });
    const E = this.shadowRoot.getElementById("btn-insert-gif");
    E && E.addEventListener("click", (l) => {
      l.stopPropagation(), this._isEmojiPickerOpen = !1, this._isMediaModalOpen = !0, this._isManagingRecentGifs = !1, this._isConfirmingClearGifs = !1, this._mediaModalUrl = "", this._mediaModalAlt = "", this._mediaModalError = null, this._mediaModalSuccess = null, this.render();
    });
    const x = this.shadowRoot.getElementById("btn-insert-image");
    if (x && x.addEventListener("click", (l) => {
      l.stopPropagation(), this._isEmojiPickerOpen = !1, this._isImageModalOpen = !0, this._isManagingRecentImages = !1, this._isConfirmingClearImages = !1, this._imageModalUrl = "", this._imageModalAlt = "", this._imageModalError = null, this._imageModalSuccess = null, this.render();
    }), this._isMediaModalOpen) {
      const l = this.shadowRoot.getElementById("media-modal-backdrop"), g = this.shadowRoot.getElementById("btn-close-media-modal"), w = this.shadowRoot.getElementById("btn-cancel-media-modal"), d = this.shadowRoot.getElementById("btn-confirm-media-modal"), b = this.shadowRoot.getElementById("media-url-input"), _ = this.shadowRoot.getElementById("media-alt-input"), M = this.shadowRoot.getElementById("media-url-preview-card"), G = this.shadowRoot.getElementById("media-url-preview-img"), T = this.shadowRoot.getElementById("media-modal-error-box"), z = this.shadowRoot.getElementById("media-modal-error-text"), H = this.currentLang === "pt", Y = (u) => {
        this._mediaModalUrl = u;
        const $ = u.trim();
        if ($.length > 0) {
          const A = V($);
          A.safe ? (this._mediaModalError = null, T && (T.style.display = "none"), M && (M.style.display = "flex"), G && (G.style.display = "block", G.src = $)) : (this._mediaModalError = A.reason || (H ? "Link inválido." : "Invalid link."), M && (M.style.display = "none"), z && (z.textContent = this._mediaModalError), T && (T.style.display = "flex"));
        } else
          this._mediaModalError = null, M && (M.style.display = "none"), T && (T.style.display = "none");
      }, Q = () => {
        this._isMediaModalOpen = !1, this._isManagingRecentGifs = !1, this._isConfirmingClearGifs = !1, this._mediaModalUrl = "", this._mediaModalAlt = "", this._mediaModalError = null, this._mediaModalSuccess = null, this.render();
      };
      g && g.addEventListener("click", Q), w && w.addEventListener("click", Q), l && l.addEventListener("click", (u) => {
        u.target === l && Q();
      }), b && (b.addEventListener("keydown", (u) => {
        u.stopPropagation();
      }), b.addEventListener("input", () => {
        Y(b.value);
      }), b.addEventListener("paste", () => {
        setTimeout(() => Y(b.value), 0);
      })), _ && (_.addEventListener("keydown", (u) => {
        u.stopPropagation();
      }), _.addEventListener("input", () => {
        this._mediaModalAlt = _.value;
      }));
      const ee = this.shadowRoot.getElementById("btn-save-gif-collection");
      ee && ee.addEventListener("click", (u) => {
        u.stopPropagation();
        const $ = (b ? b.value : this._mediaModalUrl).trim(), A = (_ ? _.value : this._mediaModalAlt).trim() || "GIF";
        if (!$) {
          this._mediaModalError = H ? "Por favor, insira a URL do GIF antes de salvar." : "Please enter a GIF URL before saving.", z && (z.textContent = this._mediaModalError), T && (T.style.display = "flex");
          return;
        }
        const D = V($);
        if (!D.safe) {
          this._mediaModalError = D.reason || (H ? "URL inválida ou não segura." : "Invalid or unsafe URL."), z && (z.textContent = this._mediaModalError), T && (T.style.display = "flex");
          return;
        }
        me($, A), this._mediaModalUrl = "", this._mediaModalAlt = "", this._mediaModalError = null, this._mediaModalSuccess = H ? "GIF salvo na sua coleção!" : "GIF saved to collection!", this.render(), setTimeout(() => {
          this._isMediaModalOpen && this._mediaModalSuccess && (this._mediaModalSuccess = null, this.render());
        }, 2500);
      }), this.shadowRoot.querySelectorAll(".sl-recent-gif-item").forEach((u) => {
        let $ = null, A = !1;
        u.addEventListener("touchstart", () => {
          A = !1, $ = setTimeout(() => {
            if (!A) {
              if (this._isManagingRecentGifs = !0, "vibrate" in navigator)
                try {
                  navigator.vibrate(50);
                } catch {
                }
              this.render();
            }
          }, 450);
        }, { passive: !0 }), u.addEventListener("touchmove", () => {
          A = !0, $ && clearTimeout($);
        }, { passive: !0 }), u.addEventListener("touchend", () => {
          $ && clearTimeout($);
        }), u.addEventListener("click", () => {
          if (this._isManagingRecentGifs)
            return;
          const D = u.getAttribute("data-url") || "", se = u.getAttribute("data-alt") || "";
          b && (b.value = D), _ && (_.value = se), this._mediaModalAlt = se, Y(D);
        });
      });
      const te = this.shadowRoot.getElementById("btn-manage-recent-gifs");
      te && te.addEventListener("click", (u) => {
        u.stopPropagation(), this._isManagingRecentGifs = !this._isManagingRecentGifs, this.render();
      }), this.shadowRoot.querySelectorAll(".sl-btn-delete-recent-gif").forEach((u) => {
        u.addEventListener("click", ($) => {
          $.stopPropagation();
          const A = u.getAttribute("data-url") || "";
          A && (Ce(A), ne().length === 0 && (this._isManagingRecentGifs = !1), this.render());
        });
      });
      const re = this.shadowRoot.getElementById("btn-clear-recent-gifs");
      re && re.addEventListener("click", (u) => {
        u.stopPropagation(), this._isConfirmingClearGifs = !0, this.render();
      });
      const ae = this.shadowRoot.getElementById("btn-confirm-clear-gifs-yes");
      ae && ae.addEventListener("click", (u) => {
        u.stopPropagation(), Se(), this._isConfirmingClearGifs = !1, this._isManagingRecentGifs = !1, this.render();
      });
      const oe = this.shadowRoot.getElementById("btn-confirm-clear-gifs-no");
      oe && oe.addEventListener("click", (u) => {
        u.stopPropagation(), this._isConfirmingClearGifs = !1, this.render();
      }), d && d.addEventListener("click", () => {
        const u = (b ? b.value : this._mediaModalUrl).trim(), $ = (_ ? _.value : this._mediaModalAlt).trim() || "GIF";
        if (!u) {
          this._mediaModalError = H ? "Por favor, insira a URL do GIF." : "Please enter a GIF URL.", z && (z.textContent = this._mediaModalError), T && (T.style.display = "flex"), M && (M.style.display = "none");
          return;
        }
        const A = V(u);
        if (!A.safe) {
          this._mediaModalError = A.reason || (H ? "URL inválida ou não segura." : "Invalid or unsafe URL."), z && (z.textContent = this._mediaModalError), T && (T.style.display = "flex"), M && (M.style.display = "none");
          return;
        }
        me(u, $);
        const D = `![${$}](${u})`;
        this._isMediaModalOpen = !1, this._isManagingRecentGifs = !1, this._isConfirmingClearGifs = !1, this._mediaModalUrl = "", this._mediaModalAlt = "", this._mediaModalError = null, this._mediaModalSuccess = null, this.insertTextAtCursor(D);
      });
    }
    if (this._isImageModalOpen) {
      const l = this.shadowRoot.getElementById("image-modal-backdrop"), g = this.shadowRoot.getElementById("btn-close-image-modal"), w = this.shadowRoot.getElementById("btn-cancel-image-modal"), d = this.shadowRoot.getElementById("btn-confirm-image-modal"), b = this.shadowRoot.getElementById("image-url-input"), _ = this.shadowRoot.getElementById("image-alt-input"), M = this.shadowRoot.getElementById("image-url-preview-card"), G = this.shadowRoot.getElementById("image-url-preview-img"), T = this.shadowRoot.getElementById("image-modal-error-box"), z = this.shadowRoot.getElementById("image-modal-error-text"), H = this.currentLang === "pt", Y = (u) => {
        this._imageModalUrl = u;
        const $ = u.trim();
        if ($.length > 0) {
          const A = V($);
          A.safe ? (this._imageModalError = null, T && (T.style.display = "none"), M && (M.style.display = "flex"), G && (G.style.display = "block", G.src = $)) : (this._imageModalError = A.reason || (H ? "Link inválido." : "Invalid link."), M && (M.style.display = "none"), z && (z.textContent = this._imageModalError), T && (T.style.display = "flex"));
        } else
          this._imageModalError = null, M && (M.style.display = "none"), T && (T.style.display = "none");
      }, Q = () => {
        this._isImageModalOpen = !1, this._isManagingRecentImages = !1, this._isConfirmingClearImages = !1, this._imageModalUrl = "", this._imageModalAlt = "", this._imageModalError = null, this._imageModalSuccess = null, this.render();
      };
      g && g.addEventListener("click", Q), w && w.addEventListener("click", Q), l && l.addEventListener("click", (u) => {
        u.target === l && Q();
      }), b && (b.addEventListener("keydown", (u) => {
        u.stopPropagation();
      }), b.addEventListener("input", () => {
        Y(b.value);
      }), b.addEventListener("paste", () => {
        setTimeout(() => Y(b.value), 0);
      })), _ && (_.addEventListener("keydown", (u) => {
        u.stopPropagation();
      }), _.addEventListener("input", () => {
        this._imageModalAlt = _.value;
      }));
      const ee = this.shadowRoot.getElementById("btn-save-image-collection");
      ee && ee.addEventListener("click", (u) => {
        u.stopPropagation();
        const $ = (b ? b.value : this._imageModalUrl).trim(), A = (_ ? _.value : this._imageModalAlt).trim() || (H ? "Imagem" : "Image");
        if (!$) {
          this._imageModalError = H ? "Por favor, insira a URL da imagem antes de salvar." : "Please enter an image URL before saving.", z && (z.textContent = this._imageModalError), T && (T.style.display = "flex");
          return;
        }
        const D = V($);
        if (!D.safe) {
          this._imageModalError = D.reason || (H ? "URL inválida ou não segura." : "Invalid or unsafe URL."), z && (z.textContent = this._imageModalError), T && (T.style.display = "flex");
          return;
        }
        be($, A), this._imageModalUrl = "", this._imageModalAlt = "", this._imageModalError = null, this._imageModalSuccess = H ? "Imagem salva na sua coleção!" : "Image saved to collection!", this.render(), setTimeout(() => {
          this._isImageModalOpen && this._imageModalSuccess && (this._imageModalSuccess = null, this.render());
        }, 2500);
      }), this.shadowRoot.querySelectorAll(".sl-recent-image-item").forEach((u) => {
        let $ = null, A = !1;
        u.addEventListener("touchstart", () => {
          A = !1, $ = setTimeout(() => {
            if (!A) {
              if (this._isManagingRecentImages = !0, "vibrate" in navigator)
                try {
                  navigator.vibrate(50);
                } catch {
                }
              this.render();
            }
          }, 450);
        }, { passive: !0 }), u.addEventListener("touchmove", () => {
          A = !0, $ && clearTimeout($);
        }, { passive: !0 }), u.addEventListener("touchend", () => {
          $ && clearTimeout($);
        }), u.addEventListener("click", () => {
          if (this._isManagingRecentImages)
            return;
          const D = u.getAttribute("data-url") || "", se = u.getAttribute("data-alt") || "";
          b && (b.value = D), _ && (_.value = se), this._imageModalAlt = se, Y(D);
        });
      });
      const te = this.shadowRoot.getElementById("btn-manage-recent-images");
      te && te.addEventListener("click", (u) => {
        u.stopPropagation(), this._isManagingRecentImages = !this._isManagingRecentImages, this.render();
      }), this.shadowRoot.querySelectorAll(".sl-btn-delete-recent-image").forEach((u) => {
        u.addEventListener("click", ($) => {
          $.stopPropagation();
          const A = u.getAttribute("data-url") || "";
          A && (Me(A), le().length === 0 && (this._isManagingRecentImages = !1), this.render());
        });
      });
      const re = this.shadowRoot.getElementById("btn-clear-recent-images");
      re && re.addEventListener("click", (u) => {
        u.stopPropagation(), this._isConfirmingClearImages = !0, this.render();
      });
      const ae = this.shadowRoot.getElementById("btn-confirm-clear-images-yes");
      ae && ae.addEventListener("click", (u) => {
        u.stopPropagation(), Te(), this._isConfirmingClearImages = !1, this._isManagingRecentImages = !1, this.render();
      });
      const oe = this.shadowRoot.getElementById("btn-confirm-clear-images-no");
      oe && oe.addEventListener("click", (u) => {
        u.stopPropagation(), this._isConfirmingClearImages = !1, this.render();
      }), d && d.addEventListener("click", () => {
        const u = (b ? b.value : this._imageModalUrl).trim(), $ = (_ ? _.value : this._imageModalAlt).trim() || (H ? "Imagem" : "Image");
        if (!u) {
          this._imageModalError = H ? "Por favor, insira a URL da imagem." : "Please enter an image URL.", z && (z.textContent = this._imageModalError), T && (T.style.display = "flex"), M && (M.style.display = "none");
          return;
        }
        const A = V(u);
        if (!A.safe) {
          this._imageModalError = A.reason || (H ? "URL inválida ou não segura." : "Invalid or unsafe URL."), z && (z.textContent = this._imageModalError), T && (T.style.display = "flex"), M && (M.style.display = "none");
          return;
        }
        be(u, $);
        const D = `![${$}](${u})`;
        this._isImageModalOpen = !1, this._isManagingRecentImages = !1, this._isConfirmingClearImages = !1, this._imageModalUrl = "", this._imageModalAlt = "", this._imageModalError = null, this._imageModalSuccess = null, this.insertTextAtCursor(D);
      });
    }
    if (this._isEmojiPickerOpen) {
      const l = (g) => {
        var b;
        const w = g.composedPath(), d = (b = this.shadowRoot) == null ? void 0 : b.getElementById("emoji-popover");
        d && !w.includes(d) && c && !w.includes(c) && (this._isEmojiPickerOpen = !1, this.render(), document.removeEventListener("click", l));
      };
      setTimeout(() => document.addEventListener("click", l), 0);
    }
    const R = this.shadowRoot.getElementById("btn-login-submit");
    R && R.addEventListener("click", () => {
      this.loginWithGitHub();
    });
    const P = this.shadowRoot.getElementById("btn-logout");
    P && P.addEventListener("click", () => {
      this.logout();
    });
    const O = this.shadowRoot.getElementById("btn-submit");
    O && O.addEventListener("click", async () => {
      const l = this._composerText.trim();
      if (!l) {
        alert(
          this.currentLang === "pt" ? "Por favor, escreva uma reflexão antes de publicar." : "Please write a note before posting."
        );
        return;
      }
      await this.handlePostComment(l);
    }), this.shadowRoot.querySelectorAll(".sl-reaction-trigger-btn").forEach((l) => {
      l.addEventListener("click", async (g) => {
        if (g.stopPropagation(), !this._currentUser) {
          this.loginWithGitHub();
          return;
        }
        const w = g.currentTarget, d = w.getAttribute("data-comment-id"), b = w.getAttribute("data-emoji") || "👍";
        d && await this.handleToggleReaction(d, b);
      });
    }), this.shadowRoot.querySelectorAll(".sl-reaction-picker-item").forEach((l) => {
      l.addEventListener("click", async (g) => {
        if (g.stopPropagation(), !this._currentUser) {
          this.loginWithGitHub();
          return;
        }
        const w = g.currentTarget, d = w.getAttribute("data-comment-id"), b = w.getAttribute("data-emoji"), _ = w.closest(".sl-reaction-container");
        _ == null || _.classList.remove("sl-popover-open"), d && b && await this.handleToggleReaction(d, b);
      });
    }), this.shadowRoot.querySelectorAll(".sl-reaction-badge").forEach((l) => {
      l.addEventListener("click", async (g) => {
        if (g.stopPropagation(), !this._currentUser) {
          this.loginWithGitHub();
          return;
        }
        const w = g.currentTarget, d = w.getAttribute("data-comment-id"), b = w.getAttribute("data-emoji");
        d && b && await this.handleToggleReaction(d, b);
      });
    }), this.shadowRoot.querySelectorAll(".sl-reaction-container").forEach((l) => {
      l.addEventListener("mouseenter", () => {
        l.classList.add("sl-popover-open");
      }), l.addEventListener("mouseleave", () => {
        l.classList.remove("sl-popover-open");
      }), l.addEventListener("contextmenu", (g) => {
        g.preventDefault(), l.classList.toggle("sl-popover-open");
      });
    }), this.shadowRoot.querySelectorAll(".sl-reply-btn:not(.btn-toggle-translate)").forEach((l) => {
      l.addEventListener("click", (g) => {
        var b;
        const d = g.currentTarget.getAttribute("data-reply-to");
        if (!this._currentUser) {
          this.loginWithGitHub();
          return;
        }
        if (this._replyingToId === d)
          this._replyingToId = null, this._replyText = "";
        else {
          this._replyingToId = d;
          let _ = "";
          const M = this._comments.find((G) => G.id === d);
          if (M)
            _ = M.author.login;
          else
            for (const G of this._comments) {
              const T = (b = G.replies) == null ? void 0 : b.find((z) => z.id === d);
              if (T) {
                _ = T.author.login;
                break;
              }
            }
          this._replyText = _ ? `@${_} ` : "";
        }
        this.render();
      });
    }), this.shadowRoot.querySelectorAll(".sl-thread-toggle-btn").forEach((l) => {
      l.addEventListener("click", (g) => {
        const d = g.currentTarget.getAttribute("data-thread-id");
        d && (this._expandedThreads.has(d) ? this._expandedThreads.delete(d) : this._expandedThreads.add(d), this.render());
      });
    }), this.shadowRoot.querySelectorAll(".btn-send-reply").forEach((l) => {
      l.addEventListener("click", async (g) => {
        var G;
        const w = g.currentTarget, d = w.getAttribute("data-comment-id"), b = w.getAttribute("data-parent-id") || d, _ = (G = this.shadowRoot) == null ? void 0 : G.getElementById(`reply-textarea-${d}`);
        if (!_) return;
        const M = _.value.trim();
        !M || !b || await this.handlePostReply(b, M);
      });
    }), this.shadowRoot.querySelectorAll(".btn-cancel-reply").forEach((l) => {
      l.addEventListener("click", () => {
        this._replyingToId = null, this._replyText = "", this.render();
      });
    }), this.shadowRoot.querySelectorAll(".btn-toggle-translate").forEach((l) => {
      l.addEventListener("click", (g) => {
        const d = g.currentTarget.getAttribute("data-comment-id");
        d && this.toggleTranslate(d);
      });
    }), this.shadowRoot.querySelectorAll(".sl-audio-btn").forEach((l) => {
      l.addEventListener("click", (g) => {
        const w = g.currentTarget, d = w.getAttribute("data-speak-id"), b = w.getAttribute("data-text"), _ = w.getAttribute("data-lang") || void 0;
        if (d && b) {
          const M = decodeURIComponent(b);
          this.toggleSpeak(d, M, _);
        }
      });
    }), this.shadowRoot.querySelectorAll(".sl-menu-btn").forEach((l) => {
      l.addEventListener("click", (g) => {
        g.stopPropagation();
        const d = g.currentTarget.getAttribute("data-menu-id");
        this._openMenuId = this._openMenuId === d ? null : d, this.render();
      });
    }), this.shadowRoot.addEventListener("click", () => {
      this._openMenuId && (this._openMenuId = null, this.render());
    }), this.shadowRoot.querySelectorAll(".btn-toggle-pin").forEach((l) => {
      l.addEventListener("click", async (g) => {
        g.stopPropagation();
        const d = g.currentTarget.getAttribute("data-comment-id");
        d && await this.handleTogglePin(d);
      });
    }), this.shadowRoot.querySelectorAll(".btn-edit").forEach((l) => {
      l.addEventListener("click", (g) => {
        g.stopPropagation();
        const d = g.currentTarget.getAttribute("data-comment-id");
        this._editingId = d, this._openMenuId = null, this.render();
      });
    }), this.shadowRoot.querySelectorAll(".btn-save-edit").forEach((l) => {
      l.addEventListener("click", async (g) => {
        var M;
        const d = g.currentTarget.getAttribute("data-comment-id"), b = (M = this.shadowRoot) == null ? void 0 : M.getElementById(`edit-textarea-${d}`);
        if (!b || !d) return;
        const _ = b.value.trim();
        _ && await this.handleSaveEdit(d, _);
      });
    }), this.shadowRoot.querySelectorAll(".btn-cancel-edit").forEach((l) => {
      l.addEventListener("click", () => {
        this._editingId = null, this.render();
      });
    }), this.shadowRoot.querySelectorAll(".btn-delete").forEach((l) => {
      l.addEventListener("click", async (g) => {
        g.stopPropagation();
        const d = g.currentTarget.getAttribute("data-comment-id");
        if (!d) return;
        const b = this.currentLang === "pt" ? "Tem certeza que deseja excluir esta nota?" : "Are you sure you want to delete this note?";
        confirm(b) && await this.handleDelete(d);
      });
    }), this.shadowRoot.querySelectorAll(".btn-mod-restrict-media").forEach((l) => {
      l.addEventListener("click", async (g) => {
        g.stopPropagation(), this._openMenuId = null, this.render();
        const d = g.currentTarget.getAttribute("data-user");
        d && await this.handleSetModeration(d, "restrict_media");
      });
    }), this.shadowRoot.querySelectorAll(".btn-mod-ban").forEach((l) => {
      l.addEventListener("click", async (g) => {
        g.stopPropagation(), this._openMenuId = null, this.render();
        const d = g.currentTarget.getAttribute("data-user");
        d && await this.handleSetModeration(d, "ban");
      });
    });
    const ue = this.shadowRoot.getElementById("sl-mod-refresh");
    ue && ue.addEventListener("click", async (l) => {
      l.stopPropagation(), await this.loadModerationList();
    }), this.shadowRoot.querySelectorAll(".sl-mod-chip-remove").forEach((l) => {
      l.addEventListener("click", async (g) => {
        g.stopPropagation();
        const d = g.currentTarget.getAttribute("data-user");
        d && await this.handleRemoveModeration(d);
      });
    }), this.shadowRoot.querySelectorAll(".btn-copy-link").forEach((l) => {
      l.addEventListener("click", (g) => {
        g.stopPropagation();
        const d = g.currentTarget.getAttribute("data-comment-id"), b = `${window.location.href.split("#")[0]}#comment-${d}`;
        navigator.clipboard.writeText(b).then(() => {
          alert(
            this.currentLang === "pt" ? "Link copiado para a área de transferência!" : "Link copied to clipboard!"
          );
        }), this._openMenuId = null, this.render();
      });
    }), this.setupCodeBlocks();
  }
  /**
   * Configura blocos de código nos comentários e na área de prévia:
   * Numeração de linhas, botão Copiar com feedback visual e adaptação de blocos do GitHub Discussions.
   */
  setupCodeBlocks() {
    if (!this.shadowRoot) return;
    this.shadowRoot.querySelectorAll(
      ".sl-card-body pre, .sl-preview-area pre"
    ).forEach((p) => {
      var Z;
      if (p.closest(".sl-code-block")) return;
      const k = p.querySelector("code") || p, v = k.textContent || "";
      if (!v.trim()) return;
      let y = "code";
      const E = p.closest('[class*="highlight-source-"]');
      if (E) {
        const U = E.className.match(/highlight-source-([a-zA-Z0-9_-]+)/);
        U && U[1] && (y = U[1]);
      } else if (p.getAttribute("lang"))
        y = p.getAttribute("lang") || "code";
      else if (k.className) {
        const U = k.className.match(/(?:language|lang)-([a-zA-Z0-9_-]+)/);
        U && U[1] && (y = U[1]);
      }
      const x = v.split(/\r?\n/), R = x.length > 20, P = this.currentLang === "pt", O = P ? "Copiar" : "Copy", L = P ? "Copiar código" : "Copy code", j = P ? "Rolar para cima" : "Scroll up", I = P ? "Rolar para baixo" : "Scroll down", F = R ? `${y} · ${x.length} ${P ? "linhas" : "lines"}` : y, N = document.createElement("div");
      N.className = `sl-code-block ${R ? "sl-code-block-long sl-collapsed" : ""}`, N.setAttribute("data-lang", y);
      const q = document.createElement("div");
      if (q.className = "sl-code-header", q.innerHTML = `
        <span class="sl-code-badge">${F}</span>
        <button type="button" class="sl-code-copy-btn" title="${L}" aria-label="${L}">
          <svg class="sl-copy-icon" viewBox="0 0 16 16" width="14" height="14" fill="currentColor">
            <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path>
            <path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
          </svg>
          <span class="sl-copy-text">${O}</span>
        </button>
      `, k.querySelector(".sl-code-line") || (k.innerHTML = x.map((U, W) => {
        const B = U.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        return `<span class="sl-code-line"><span class="sl-line-num">${W + 1}</span><span class="sl-line-code">${B || " "}</span></span>`;
      }).join("")), (Z = p.parentNode) == null || Z.insertBefore(N, p), N.appendChild(q), N.appendChild(p), p.classList.add("sl-code-pre"), k.classList.add("sl-code-body"), R && !this._hideCodeScroll) {
        const U = document.createElement("div");
        U.className = "sl-code-scroll-controls", U.setAttribute("aria-label", P ? "Navegação do código" : "Code navigation"), U.innerHTML = `
          <button type="button" class="sl-code-scroll-btn sl-scroll-up" title="${j}" aria-label="${j}">
            <svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor">
              <path d="M8 3.5a.75.75 0 0 1 .53.22l4.5 4.5a.75.75 0 0 1-1.06 1.06L8 5.31 4.03 9.28a.75.75 0 0 1-1.06-1.06l4.5-4.5A.75.75 0 0 1 8 3.5Z"/>
            </svg>
          </button>
          <button type="button" class="sl-code-scroll-btn sl-scroll-down" title="${I}" aria-label="${I}">
            <svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor">
              <path d="M8 12.5a.75.75 0 0 1-.53-.22l-4.5-4.5a.75.75 0 0 1 1.06-1.06L8 10.69l3.97-3.97a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-.53.22Z"/>
            </svg>
          </button>
        `, N.appendChild(U);
        const W = document.createElement("div");
        W.className = "sl-code-expand-bar", W.innerHTML = `
          <button type="button" class="sl-code-expand-btn" data-lines="${x.length}">
            <span>↕</span>
            <span class="sl-expand-text">${P ? `Mostrar todas as ${x.length} linhas` : `Show all ${x.length} lines`}</span>
          </button>
        `, N.appendChild(W);
      }
    }), this.shadowRoot.querySelectorAll(".sl-code-copy-btn").forEach((p) => {
      p.addEventListener("click", async (k) => {
        k.stopPropagation();
        const v = p.closest(".sl-code-block");
        if (!v) return;
        const y = v.querySelectorAll(".sl-line-code");
        let E = "";
        if (y.length > 0)
          E = Array.from(y).map((x) => x.textContent || "").join(`
`);
        else {
          const x = v.querySelector("pre");
          E = (x == null ? void 0 : x.textContent) || "";
        }
        try {
          await navigator.clipboard.writeText(E);
          const x = p.querySelector(".sl-copy-text"), R = x ? x.textContent : "";
          p.classList.add("sl-copied"), x && (x.textContent = this.currentLang === "pt" ? "Copiado!" : "Copied!"), setTimeout(() => {
            p.classList.remove("sl-copied"), x && R && (x.textContent = R);
          }, 2e3);
        } catch {
        }
      });
    }), this.shadowRoot.querySelectorAll(".sl-code-scroll-btn").forEach((p) => {
      p.addEventListener("click", (k) => {
        k.stopPropagation();
        const v = p.closest(".sl-code-block"), y = v == null ? void 0 : v.querySelector(".sl-code-pre");
        if (!y) return;
        const E = p.classList.contains("sl-scroll-down");
        y.scrollBy({ top: E ? 160 : -160, behavior: "smooth" });
      });
    }), this.shadowRoot.querySelectorAll(".sl-code-block-long").forEach((p) => {
      const k = p.querySelector(".sl-code-pre"), v = p.querySelector(".sl-scroll-up"), y = p.querySelector(".sl-scroll-down");
      if (!k || !v || !y) return;
      const E = () => {
        const x = k.scrollTop <= 2, R = k.scrollTop + k.clientHeight >= k.scrollHeight - 4;
        v.classList.toggle("sl-disabled", x), y.classList.toggle("sl-disabled", R);
      };
      k.addEventListener("scroll", E, { passive: !0 }), E();
    }), this.shadowRoot.querySelectorAll(".sl-code-expand-btn").forEach((p) => {
      p.addEventListener("click", (k) => {
        k.stopPropagation();
        const v = p.closest(".sl-code-block-long");
        if (!v) return;
        const y = v.classList.contains("sl-collapsed"), E = p.getAttribute("data-lines") || "", x = p.querySelector(".sl-expand-text"), R = this.currentLang === "pt";
        y ? (v.classList.remove("sl-collapsed"), v.classList.add("sl-expanded"), x && (x.textContent = R ? "Minimizar código" : "Collapse code")) : (v.classList.remove("sl-expanded"), v.classList.add("sl-collapsed"), x && (x.textContent = R ? `Mostrar todas as ${E} linhas` : `Show all ${E} lines`), v.scrollIntoView({ behavior: "smooth", block: "nearest" }));
      });
    }), this.shadowRoot.querySelectorAll(".sl-page-btn[data-page]").forEach((p) => {
      p.addEventListener("click", (k) => {
        const y = k.currentTarget.getAttribute("data-page");
        if (!y) return;
        const E = parseInt(y, 10);
        E !== this._currentPage && (this._currentPage = E, this.render(), this.scrollListToTop());
      });
    });
    const s = this.shadowRoot.querySelector(".btn-prev-page");
    s && s.addEventListener("click", () => {
      this._currentPage > 1 && (this._currentPage--, this.render(), this.scrollListToTop());
    });
    const c = this.shadowRoot.querySelector(".btn-next-page");
    c && c.addEventListener("click", () => {
      const p = Math.ceil(this._comments.length / this._pageSize);
      this._currentPage < p && (this._currentPage++, this.render(), this.scrollListToTop());
    });
    const n = this.shadowRoot.getElementById("sl-search-input");
    n && (n.addEventListener("input", (p) => {
      var y;
      const k = p.target.value;
      this._searchQuery = k, this._currentPage = 1, this.render();
      const v = (y = this.shadowRoot) == null ? void 0 : y.getElementById("sl-search-input");
      if (v) {
        v.focus();
        const E = v.value.length;
        v.setSelectionRange(E, E);
      }
    }), n.addEventListener("keydown", (p) => {
      p.key === "Escape" && (this._searchQuery = "", this._currentPage = 1, this.render());
    }));
    const m = this.shadowRoot.getElementById("sl-search-clear");
    m && m.addEventListener("click", () => {
      this._searchQuery = "", this._currentPage = 1, this.render();
    });
    const S = this.shadowRoot.querySelector(".sl-search-banner-clear");
    S && S.addEventListener("click", () => {
      this._searchQuery = "", this._currentPage = 1, this.render();
    });
  }
  scrollListToTop() {
    var t;
    const e = (t = this.shadowRoot) == null ? void 0 : t.querySelector(".sl-container");
    e && e.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  /**
   * Operações de Mutação conectadas ao Broker (ou Fallback Mock)
   */
  async handlePostComment(e) {
    const t = this._currentUser || {
      login: "demo-reader",
      avatarUrl: "https://avatars.githubusercontent.com/u/583231?v=4",
      url: "https://github.com"
    };
    if (this._brokerClient && this._authToken)
      try {
        if (!this._discussionId && this._repositoryId && this._categoryId) {
          const o = this._title.trim() || (typeof document < "u" ? document.title.replace(/\s*[-|·].*$/, "").trim() : "") || this.getCurrentTerm(), a = typeof window < "u" ? window.location.href : "", i = a ? `Discussão para o artigo: **[${o}](${a})**

_Comentários gerenciados nativamente pelo [ScatterLeaf](https://github.com/rnt-rez/scatterleaf)._` : void 0, s = await this._brokerClient.createDiscussion(
            this._repositoryId,
            this._categoryId,
            o,
            i
          );
          this._discussionId = s.id;
        }
        if (this._discussionId) {
          const o = await this._brokerClient.addComment(
            this._discussionId,
            e,
            void 0,
            this._repo
          ), a = {
            id: o.id,
            author: {
              login: o.author.login,
              avatarUrl: o.author.avatarUrl,
              url: o.author.url,
              isAuthor: !0
            },
            body: o.body,
            bodyHtml: o.bodyHTML,
            createdAt: this.currentLang === "pt" ? "agora mesmo" : "just now",
            originalLang: this.detectTextLanguage(e),
            reactions: [],
            replies: []
          };
          this._comments.unshift(a), this._currentPage = 1, this._composerText = "", this._activeTab = "write", this.render(), setTimeout(() => {
            const i = this._comments.findIndex((s) => s.id === a.id);
            if (i !== -1) {
              const [s] = this._comments.splice(i, 1);
              this._comments.push(s), this.render();
            }
          }, 5e3);
          return;
        }
      } catch (o) {
        if (console.error("Falha ao enviar comentário via broker:", o), this.isAuthError(o)) {
          this.handleExpiredSession(!1);
          return;
        }
        alert(
          (o == null ? void 0 : o.message) || (this._lang === "pt" ? "Erro ao enviar comentário." : "Failed to post comment.")
        );
        return;
      }
    const r = {
      id: String(Date.now()),
      author: {
        login: t.login,
        avatarUrl: t.avatarUrl,
        url: t.url || `https://github.com/${t.login}`,
        isAuthor: !0
      },
      body: e,
      createdAt: this.currentLang === "pt" ? "agora mesmo" : "just now",
      originalLang: this.detectTextLanguage(e),
      reactions: [],
      replies: []
    };
    this._comments.unshift(r), this._currentPage = 1, this._composerText = "", this._activeTab = "write", this.render(), setTimeout(() => {
      const o = this._comments.findIndex((a) => a.id === r.id);
      if (o !== -1) {
        const [a] = this._comments.splice(o, 1);
        this._comments.push(a), this.render();
      }
    }, 5e3), this.dispatchEvent(
      new CustomEvent("comment-added", {
        detail: r,
        bubbles: !0,
        composed: !0
      })
    );
  }
  async handlePostReply(e, t) {
    const r = this._currentUser || {
      login: "demo-reader",
      avatarUrl: "https://avatars.githubusercontent.com/u/583231?v=4",
      url: "https://github.com"
    };
    if (this._brokerClient && this._authToken && this._discussionId)
      try {
        const a = await this._brokerClient.addComment(
          this._discussionId,
          t,
          e,
          this._repo
        ), i = this._comments.find((s) => s.id === e);
        if (i) {
          i.replies || (i.replies = []), i.replies.push({
            id: a.id,
            author: {
              login: a.author.login,
              avatarUrl: a.author.avatarUrl,
              url: a.author.url,
              isAuthor: !1
            },
            body: a.body,
            bodyHtml: a.bodyHTML,
            createdAt: this.currentLang === "pt" ? "agora mesmo" : "just now",
            originalLang: this.detectTextLanguage(t),
            reactions: [],
            parentId: e
          }), this._expandedThreads.add(e), this._replyingToId = null, this._replyText = "", this.render();
          return;
        }
      } catch (a) {
        if (console.error("Falha ao enviar réplica via broker:", a), this.isAuthError(a)) {
          this.handleExpiredSession(!1);
          return;
        }
        alert(
          (a == null ? void 0 : a.message) || (this._lang === "pt" ? "Erro ao enviar réplica." : "Failed to post reply.")
        );
        return;
      }
    const o = this._comments.find((a) => a.id === e);
    if (o) {
      o.replies || (o.replies = []);
      const a = {
        id: `${e}-${Date.now()}`,
        author: {
          login: r.login,
          avatarUrl: r.avatarUrl,
          url: r.url || `https://github.com/${r.login}`,
          isAuthor: !1
        },
        body: t,
        createdAt: this.currentLang === "pt" ? "agora mesmo" : "just now",
        originalLang: this.detectTextLanguage(t),
        reactions: [],
        parentId: e
      };
      o.replies.push(a), this._expandedThreads.add(e), this._replyingToId = null, this._replyText = "", this.render(), this.dispatchEvent(
        new CustomEvent("reply-added", {
          detail: a,
          bubbles: !0,
          composed: !0
        })
      );
    }
  }
  async handleSaveEdit(e, t) {
    let r = null;
    if (this._brokerClient && this._authToken)
      try {
        r = await this._brokerClient.updateComment(e, t, this._repo);
      } catch (a) {
        if (console.error("Falha ao editar comentário via broker:", a), this.isAuthError(a)) {
          this.handleExpiredSession(!1);
          return;
        }
        alert(
          (a == null ? void 0 : a.message) || (this._lang === "pt" ? "Não foi possível salvar a edição no GitHub. Verifique sua conexão ou permissões." : "Failed to save edit on GitHub. Please check your connection or permissions.")
        );
        return;
      }
    const o = (a) => {
      const i = !!(a.isPinned || a.body.includes("<!-- sl:pinned -->") || a.body.includes("<!-- pinned -->")), s = t.replace(/<!--\s*sl:pinned\s*-->\r?\n?/g, "").replace(/<!--\s*pinned\s*-->\r?\n?/g, "");
      a.body = i ? `<!-- sl:pinned -->
${s}` : s, a.isEdited = !0, a.bodyHtml = (r == null ? void 0 : r.bodyHTML) || void 0, a.translatedBody = void 0, a.isShowingTranslation = !1;
    };
    for (const a of this._comments) {
      if (a.id === e) {
        o(a);
        break;
      }
      if (a.replies) {
        const i = a.replies.find((s) => s.id === e);
        if (i) {
          o(i);
          break;
        }
      }
    }
    this._editingId = null, this.render();
  }
  async handleDelete(e) {
    if (this._brokerClient && this._authToken)
      try {
        await this._brokerClient.deleteComment(e);
      } catch (t) {
        if (console.error("Falha ao excluir comentário via broker:", t), this.isAuthError(t)) {
          this.handleExpiredSession(!1);
          return;
        }
      }
    this._comments = this._comments.filter((t) => t.id === e ? !1 : (t.replies && (t.replies = t.replies.filter((r) => r.id !== e)), !0)), this._openMenuId = null, this.render();
  }
  async handleTogglePin(e) {
    const t = this._comments.find((s) => s.id === e);
    if (!t) return;
    const o = !(!t.parentId && !!(t.isPinned || t.body.includes("<!-- sl:pinned -->") || t.body.includes("<!-- pinned -->"))), a = t.body.replace(/<!--\s*sl:pinned\s*-->\r?\n?/g, "").replace(/<!--\s*pinned\s*-->\r?\n?/g, ""), i = o ? `<!-- sl:pinned -->
${a}` : a;
    if (t.isPinned = o, t.body = i, this._openMenuId = null, this.render(), this._brokerClient && this._authToken)
      try {
        const s = await this._brokerClient.updateComment(e, i);
        s != null && s.bodyHTML && (t.bodyHtml = s.bodyHTML);
      } catch (s) {
        if (console.error("Falha ao atualizar fixação do comentário via broker:", s), this.isAuthError(s)) {
          this.handleExpiredSession(!1);
          return;
        }
      }
  }
  async handleToggleReaction(e, t) {
    let r;
    for (const s of this._comments) {
      if (s.id === e) {
        r = s;
        break;
      }
      if (s.replies) {
        const c = s.replies.find((n) => n.id === e);
        if (c) {
          r = c;
          break;
        }
      }
    }
    if (!r) return;
    r.reactions || (r.reactions = []);
    const o = r.reactions.find((s) => s.content === t), i = !!(o != null && o.viewerHasReacted) ? "remove" : "add";
    if (i === "remove" ? o && (o.count = Math.max(0, o.count - 1), o.viewerHasReacted = !1, o.count === 0 && (r.reactions = r.reactions.filter((s) => s.content !== t))) : o ? (o.count += 1, o.viewerHasReacted = !0) : r.reactions.push({
      content: t,
      count: 1,
      viewerHasReacted: !0
    }), this.render(), this._brokerClient && this._authToken)
      try {
        await this._brokerClient.toggleReaction(e, t, i);
      } catch (s) {
        if (console.error(`Falha ao processar reação (${i}) via broker:`, s), i === "add") {
          const c = r.reactions.find((n) => n.content === t);
          c && (c.count = Math.max(0, c.count - 1), c.viewerHasReacted = !1, c.count === 0 && (r.reactions = r.reactions.filter((n) => n.content !== t)));
        } else {
          const c = r.reactions.find((n) => n.content === t);
          c ? (c.count += 1, c.viewerHasReacted = !0) : r.reactions.push({ content: t, count: 1, viewerHasReacted: !0 });
        }
        if (this.isAuthError(s)) {
          this.handleExpiredSession(!1);
          return;
        }
        this.render();
      }
  }
}
typeof window < "u" && !customElements.get("scatter-leaf") && customElements.define("scatter-leaf", Re);
export {
  Re as ScatterLeaf
};
//# sourceMappingURL=scatterleaf.js.map
