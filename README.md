# SauceDemo Cypress E2E 🚀

[![Cypress](https://img.shields.io/badge/Cypress-E2E-blue)](https://www.cypress.io/)  
[![License: MIT](https://img.shields.io/badge/License-MIT-green)](LICENSE)

Automação de testes **E2E** do [SauceDemo](https://www.saucedemo.com/) usando **Cypress**

---

## 🔹 Funcionalidades

- Login (sucesso e falha)  
- Adição de produtos ao carrinho  
- Checkout completo  

---

## ⚡ Instalação & Execução

```bash
git clone https://github.com/seu-usuario/saucedemo-cypress-e2e.git
cd saucedemo-cypress-e2e
npm install
npx cypress open      # modo interativo
npx cypress run       # modo headless
```

---

## 📂 Estrutura

```
cypress/
├─ e2e/       # testes
├─ support/   # comandos auxiliares
└─ fixtures/  # dados de teste
package.json
README.md
```

---

## ✅ Boas Práticas

- App Actions para legibilidade  
- `contain.text` para asserts confiáveis  
- Modularidade e fácil manutenção

---

## 🌐 Links

- [SauceDemo](https://www.saucedemo.com/)  
- [Cypress Docs](https://docs.cypress.io/)  

---

## 📄 Licença

MIT
