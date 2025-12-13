# Nuxt Creative Travel

Проект на Nuxt 4 с современным фронтенд-стеком, линтингом, форматированием кода и поддержкой mock API через OpenAPI.

## Стек технологий

- Nuxt ^4.2.1
- Vue ^3.5
- Pinia ^3 (+ @pinia/nuxt)
- GSAP — анимации
- Swagger UI — документация API
- Prism — mock API по OpenAPI
- ESLint, Stylelint, Prettier — качество кода
- Husky + lint-staged — pre-commit проверки

## Установка

```bash
npm install
```

## Разработка

Запуск dev-сервера:

```bash
npm run dev
```

Приложение доступно на [http://localhost:3000](http://localhost:3000)

### Dev-режим с mock API

```bash
npm run dev:mock
```

- Nuxt запускается в dev-режиме
- Prism поднимает mock-сервер на [http://localhost:4010](http://localhost:4010)
- Swagger UI доступен по [http://localhost:3000/swagger](http://localhost:3000/swagger) (только в dev)

## Сборка

```bash
npm run build
npm run preview
```

## Линтинг и форматирование

```bash
npm run lint
npm run lint:scripts
npm run lint:scripts:fix
npm run lint:styles
npm run lint:styles:fix
npm run format
npm run format:fix
```

## Git hooks

Husky и lint-staged проверяют код перед коммитами.

## Документация

- Nuxt: [https://nuxt.com/docs](https://nuxt.com/docs)
- Pinia: [https://pinia.vuejs.org/](https://pinia.vuejs.org/)
- GSAP: [https://gsap.com/](https://gsap.com/)
- Prism: [https://meta.stoplight.io/docs/prism](https://meta.stoplight.io/docs/prism)

## Рекомендации

- Использовать `dev:mock` для изолированной разработки
