# Thalita Macêdo — Sobrancelhas & Cílios

Landing page de **Thalita Macêdo**, designer de sobrancelhas e cílios em **Ituiutaba-MG**.
Site estático (HTML, CSS e JavaScript puros), sem banco de dados e sem dependências de build.

## Seções

- **Tela de abertura** com a marca animada ao carregar a página
- **Hero** com título animado, CTA para o WhatsApp e retrato com texto circular girando
- **Sobre** a profissional
- **Serviços**: Design de Sobrancelhas, Brow Lamination, Extensão de Cílios (Volume Natural), Design com Henna e Manutenção
- **A experiência** (como funciona o atendimento)
- **Galeria** de resultados e bloco de **Antes & Depois**
- **Dúvidas frequentes** (FAQ)
- **Contato** com WhatsApp, localização e Instagram
- Botão flutuante do WhatsApp

## Estrutura

```
.
├── index.html     # conteúdo da página
├── style.css      # estilos, animações e responsivo
├── script.js      # intro, menu mobile, animações ao rolar e FAQ
└── img/           # logo e fotos
```

## Como rodar localmente

Basta abrir o `index.html` no navegador. Para que tudo funcione como em produção, sirva a pasta com um servidor local:

```bash
python -m http.server 5500
```

e acesse `http://localhost:5500`.

## Como editar

- **Textos**: edite diretamente no `index.html`.
- **Fotos**: substitua os arquivos em `img/` mantendo os mesmos nomes (`hero.jpg`, `sobre.JPEG`, `galeria-1.jpg` … `galeria-4.jpg`, `antes-depois.jpg`, `logo.png`). Os nomes diferenciam maiúsculas de minúsculas na hospedagem.
- **Cores e fontes**: ficam nas variáveis no início do `style.css` (`:root`).
- **WhatsApp**: procure por `wa.me/5534996363947` no `index.html` para trocar o número ou a mensagem.

## Publicação

Por ser um site estático, pode ser publicado gratuitamente no **GitHub Pages**, **Netlify** ou **Vercel**, apontando para a raiz do repositório.

## Contato

- Instagram: [@thalitamacedo.clinic](https://www.instagram.com/thalitamacedo.clinic/)
- WhatsApp: [(34) 99636-3947](https://wa.me/5534996363947)
