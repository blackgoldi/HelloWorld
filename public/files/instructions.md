### Этап 1: TypeScript (1–2 недели)

Освойте уверенное владение TS, включая generics, unions, interfaces и продвинутые типы для React/Node.js.

Изучите типизацию React-компонентов, hooks и props с примерами из официального roadmap.

#### Практика: Типизируйте существующий React-проект (добавьте TS к Vite+React с Material UI)

#### Проект: Создайте типизированный TODO-list с CRUD на чистом TS+React (используйте generics для API responses)

---

### Этап 2: Backend на Node.js (2–3 недели)

Разработайте BFF или микросервисы на Node.js/Express для обработки запросов и агрегации данных.

Освойте Express.js, middleware, REST API, аутентификацию JWT.

#### Практика: Постройте простой BFF-сервер, агрегирующий данные из mock-сервисов для React-frontend

#### Проект: BFF-сервис для дашборда (fetch users/orders/products из отдельных эндпоинтов, типизируйте с TS)

---

### Этап 3: Базы данных SQL (2 недели)

Работа с PostgreSQL/MySQL/YDB: схемы, запросы, транзакции, ORM (pg или Prisma).

Изучите CRUD, joins, индексы; подключите к Node.js через pg.
​

#### Практика: Настройте PostgreSQL локально, создайте схему для тикетов (id, user_id, status, message)


#### Проект: Fullstack CRUD-app (React + Node/Express + PostgreSQL) — система тикетов поддержки с поиском и фильтрами

---

### Этап 4: UI/UX на React (1 неделя, укрепление)

Развивайте клиентский портал: UX, стабильность, производительность с React+TS.

Оптимизируйте с memo, useCallback, lazy loading; добавьте drag-and-drop (React DnD).

#### Практика: Интегрируйте BFF из ### Этапа 2 в React-портал тикетов (формы, чат-подобный интерфейс)

#### Проект: Расширьте тикет-систему: клиентский портал с реал-тайм обновлениями (WebSockets/SSE) и AI-чат симуляцией

---

### Этап 5: Support Hub и AI-ассистенты (1–2 недели)

Hub для инженеров: дашборды, улучшение AI-ответов (интеграция OpenAI или mock).

Создайте админ-панель: просмотр/назначение тикетов, аналитика.

#### Практика: Добавьте в проект ролей (client/support/agent), простую AI-логику (prompts для ответов)

#### Проект: Доработайте тикет-систему до полноценного Support Hub с дашбордами и базовым AI (Node.js для генерации ответов)

---

### Этап 6: DevOps — Kubernetes/Terraform (2–3 недели)

Настройка K8s и IaC для деплоя микросервисов.

K8s basics: pods, deployments, services; Terraform для provision кластера.
​

#### Практика: Деплойте fullstack-приложение в minikube с Docker

#### Проект: Terraform-скрипт для K8s-кластера, деплоите тикет-систему как микросервисы (frontend/backend/DB)

---

### Этап 7: Temporal и CI/CD (1–2 недели)

Temporal для workflows (оркестрация задач поддержки); CI/CD в Arcanum/TeamCity.

Temporal: workflows/activities на Node.js/TS для обработки тикетов (открытие→назначение→закрытие).

#### Практика: Настройте pipeline в GitHub Actions (аналог TeamCity) для тестов/деплоя



#### Проект: Интегрируйте Temporal в тикет-систему (workflow для эскалации тикетов); настройте CI/CD для всего стека

#### Финальный проект и портфолио

Соберите всё в монолитный Проект: "Yandex Cloud Support Platform" — клиентский портал + Support Hub + BFF + PostgreSQL/YDB + Temporal workflows + K8s-деплой. Разместите на GitHub с README (скриншоты, архитектура). Это покроет UX, backend, DB, DevOps; протестируйте на нагрузку. Добавьте YDB для релевантности (Node.js SDK).

---

## Детальный роудмап

---

### Этапа 1: TypeScript (1–2 недели)

Углубите владение TS для уверенной работы с React/Node.js, фокусируясь на типах, которые используются в fullstack (generics, mapped types, utility types).

Теория (2–3 дня): Изучи advanced types (Partial<T>, Pick<T,K>, conditional types), modules, namespaces. Прочитай handbook на typescriptlang.org (разделы Daily TS, TypeScript 5.x features). Пойми, как TS решает проблемы JS (null safety с strictNullChecks).

Практика (3–4 дня): Добавь TS в твой текущий React+Vite проект (tsconfig.json с "strict": true). Типизируй hooks (useState<T>, custom hooks для API), props с React.FC<P>, context providers. Создай типы для API (interface ResponseData { data: T[]; error?: string }).

#### Проект: Типизированный TODO-app с CRUD. Функции: добавление/удаление задач (generics для Task<T extends {id: string}>), поиск с union types ("all" | "active" | "completed"). Деплой на GitHub Pages. Время: 2 дня, цель — 100% типобезопасный код без any.

---

### Этапа 2: Backend на Node.js (2–3 недели)

Освой BFF (Backend for Frontend) — паттерн для кастомных API под UI, плюс базовые микросервисы.

Теория (3–4 дня): Express.js routing, middleware (cors, helmet, rate-limiter), async/await с error handling. JWT auth (jsonwebtoken), validation (zod или joi). Микросервисы: REST/GraphQL, message queues basics.

Практика (5–7 дней): Создай Express-сервер на TS (ts-node-dev для hot-reload). Эндпоинты: /users, /tickets (GET/POST с валидацией). Middleware для логирования/аутентификации. Тестируй с Postman/Thunder Client.

#### Проект: BFF для дашборда поддержки. Сервер агрегирует данные: GET /dashboard?userId=123 возвращает {tickets: Ticket[], stats: {open: 5}}. Интегрируй mock-DB (JSON files). Деплой на Render/Heroku. Время: 4–5 дней.

---

### Этапа 3: Базы данных SQL (2 недели)

Фокус на PostgreSQL (или YDB для Yandex-релевантности): реляционные модели, оптимизация запросов.

Теория (3 дня): SQL basics (SELECT/JOIN/GROUP BY), нормализация (3NF), индексы, транзакции. ORM: Prisma (schema.prisma для миграций) или pg library. Подключение: node-postgres или @ydb/client для YDB.

Практика (4–5 дней): Установи Postgres (Docker: docker run -p 5432:5432 postgres). Создай схему: таблицы users, tickets (FOREIGN KEY user_id). Запросы: INSERT с RETURNING, UPDATE с WHERE, сложные JOIN для аналитики.

#### Проект: Fullstack тикет-система. Backend: Express+Prisma+Postgres (CRUD тикетов). Frontend: React forms для создания/редактирования. Фильтры (status: "open"|"closed"). Деплой DB на Supabase (бесплатно). Время: 5 дней.

---

### Этапа 4: UI/UX на React (1 неделя)

Улучши клиентский портал: фокус на UX (формы, таблицы), perf (React 18+), стабильность.

Теория (1–2 дня): React Compiler (если 19+), Suspense for data fetching, Error Boundaries. UX: accessibility (ARIA), responsive (Tailwind/MUI). Perf: React.memo, useMemo, Virtualized lists (react-window).

Практика (2–3 дня): Интегрируй BFF из ### Этапа 2 в React (axios/fetch с SWR/react-query для caching). Добавь drag-and-drop (react-beautiful-dnd) для перетаскивания тикетов по статусам.

#### Проект: Клиентский портал тикетов. Функции: чат-интерфейс (SSE для real-time), поиск/фильтры, модалки (portals из твоего опыта). Симулируй AI-ответы (mock с setTimeout). Время: 3 дня.

---

### Этапа 5: Support Hub и AI-ассистенты (1–2 недели)

Hub для инженеров: дашборды, ролевый доступ; AI — базовая интеграция.

Теория (2 дня): Role-based auth (RBAC), дашборды (Recharts/Ant Design). AI: OpenAI API (chat completions), prompt engineering для support-ответов.

Практика (3–4 дня): Расширь проект ролями (middleware checks role). Дашборд: графики открытых тикетов (Chart.js). AI: POST /generate-answer {prompt: "помоги с ошибкой X"} → OpenAI или mock.

#### Проект: Полный Support Hub. Админ: список тикетов, назначение, аналитика. AI-чат: автоответы на типовые вопросы. Интеграция с порталом ### Этапа 4. Время: 5 дней.

---

### Этапа 6: DevOps — Kubernetes/Terraform (2–3 недели)

IaC и оркестрация для продакшена микросервисов.

Теория (4 дня): Docker basics (твой опыт с devcontainers поможет). K8s: Pods/Deployments/Services/Ingress. Terraform: providers (google для GKE или yandex для Yandex Cloud).

Практика (5 дней): Dockerfile для frontend/backend. Minikube локально: kubectl apply -f deployment.yaml. Terraform: main.tf для кластера (aws_eks_cluster аналог).

#### Проект: Деплой тикет-системы в K8s. Раздели на сервисы (frontend, backend, postgres). Terraform provision кластера. Helm для чартов. Время: 7 дней.

---

### Этапа 7: Temporal и CI/CD (1–2 недели)

Workflows для бизнес-логики (эскалация тикетов); автоматизация релизов.

Теория (2–3 дня): Temporal: workflows/activities/child workflows на Node.js SDK. CI/CD: GitHub Actions/TeamCity pipelines (build/test/deploy).

Практика (3 дня): Temporal local dev (docker run temporalio/auto-setup). Workflow: ticketWorkflow(id) → assign → notify → close. CI: .github/workflows/ci.yml (jest, docker build).

#### Проект: Интеграция Temporal в тикеты (эскалация по таймауту). CI/CD: pipeline с тестами, deploy в K8s. Альтернатива Arcanum — GitHub Actions. Время: 5 дней.

---

# Итоговый проект: "Support Platform" на GitHub (архитектура в README, скрины, docker-compose up). Тестируй нагрузкой (Artillery.io). Каждый Этап — коммить в отдельный репозиторий для портфолио. Общее время: 3–4 месяца по 10–15 ч/нед. Адаптировано под твой React/Docker опыт.
