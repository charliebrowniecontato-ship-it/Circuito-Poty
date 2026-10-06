# Circuito Poty

Site oficial: https://www.circuitopoty.site/

Migração da versão em produção, preservando layout, textos, animações e comportamento. Os assets do Circuito Poty são copiados sem recompressão ou edição para `assets/images` e `assets/logos`. `asset-manifest.json` registra a origem e o SHA-256 de cada arquivo.

## Execução local

```bash
python3 -m http.server 8080
```

Abra http://localhost:8080/.

## Publicação

Projeto Vercel existente: `circuito-poty`. Repositório: `charliebrowniecontato-ship-it/Circuito-Poty`. Branch de produção desejada: `main`.

Na Vercel, use Framework Preset **Other**, diretório raiz do repositório e sem comandos de build/instalação. Preserve os domínios `www.circuitopoty.site` e `circuitopoty.site`.

A conexão Git e o preview remoto dependem de acesso ao projeto Vercel existente. Não criar, excluir ou renomear projetos durante esta migração.
