# Circuito Poty

Site oficial: https://www.circuitopoty.site/

Migração da versão em produção, preservando layout, textos, animações e comportamento. Os assets do Circuito Poty são copiados sem recompressão ou edição para `assets/images` e `assets/logos`. `asset-manifest.json` registra a origem e o SHA-256 de cada arquivo.

## Execução local

```bash
python3 -m http.server 8080
```

Abra http://localhost:8080/.

## Publicação

Projeto Vercel criado pelo proprietário durante a migração: `circuitopoty` (https://circuitopoty.vercel.app/). Repositório: `charliebrowniecontato-ship-it/Circuito-Poty`. Branch de produção: `main`.

Na Vercel, use Framework Preset **Other**, diretório raiz do repositório e sem comandos de build/instalação. Preserve os domínios `www.circuitopoty.site` e `circuitopoty.site`.

O projeto `circuitopoty` está conectado ao GitHub. Pushes em `main` publicam em produção; branches de trabalho geram previews. A branch `migration-preview` permite validar a migração antes da vinculação dos domínios oficiais.

O projeto anterior `circuito-poty` não foi excluído, recriado nem renomeado. O proprietário optou por criar `circuitopoty` na conta `charliebrowniecontato-7772` durante a execução. Os domínios oficiais devem ser vinculados após a validação do preview.
