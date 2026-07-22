# Product glossary

Terms as used in this codebase. This file grows over time — append, do not overwrite.

## Entities

- **User** — the sole persisted entity (`project_management/src/models/user.models.js`). Fields include `avatar` (nested `{url, localPath}`), `username`, `email`, `fullName`, `password` (raw, no hashing yet), `isEmailVerified`, `refreshToken`, `forgetPasswordToken(+Expiry)`, `emailVerificationToken(+Expiry)`, plus Mongoose timestamps.
- **Task** — a concept referenced only via `TaskStatusEnum` in `utils/constants.js`. No model exists yet.
- **Todo** — an unrelated learning-artifact concept used in two demo scripts (`course/03_todo.js` CLI + `todos.json`; `node/http_module/6.js` in-memory REST).

## Roles

Per `UserRolesEnum` in `project_management/src/utils/constants.js`:
- `admin`, `project_manager`, `team_lead`, `member`, `developer`, `qa`, `designer`, `intern`, `guest`.

## Task statuses

Per `TaskStatusEnum`: `todo`, `pending`, `in_progress`, `completed`, `on_hold`, `done`.

## Endpoints

- `GET /` — root, returns `"Hello World"`.
- `GET /api/v1/healthcheck` — returns `ApiResponse(200, {message: "server is running"}, "OK")`.

## Response / error contract

- **ApiResponse** — `{ statusCode, data, message, success = statusCode < 400 }`.
- **ApiError** — extends `Error`, adds `{ statusCode, data: null, success: false, errors: [] }` plus a captured stack trace.

## Environment

- `MONGODB_URI` — base MongoDB URL, WITHOUT database name suffix.
- `DB_NAME` (constant, not env) — `"projectmanagement"`; concatenated onto `MONGODB_URI` at connect time.
- `PORT` — HTTP listen port for `project_management/` (default `8000`).
- `CORS_ORIGIN` — comma-separated origins; parsed via `.split(",")` in `app.js`. Fallback: `"http://localhost:5173"`.

## Learning-artifact concepts (referenced in `course/`, `node/`)

- **Event loop phases** — timers, pending callbacks, poll, check, close; illustrated with `process.nextTick`, `setTimeout(0)`, `setImmediate`, Promise microtasks in `node/event_loop.js`.
- **Blocking vs non-blocking I/O** — `fs.readFileSync` vs `fs.readFile` (`node/blocking_non_blocking.js`).
- **Callback Hell / Promise chains / async-await** — three-style pipelines in `node/callbackHell_promise_async_await(_copy).js`.
- **Worker threads** — CPU-bound parallelism, `course/05_threads.js` with `worker_threads` module.
- **CommonJS module loader internals** — hand-rolled require in `course/08_loadModule/main.js` via `vm.runInThisContext`.
- **`module.exports` vs `exports`** — reference-vs-value gotcha, `course/09_module.exports/example{1,2,3}.js`.
- **`vm` module** — sandbox execution (`runInThisContext`, `runInNewContext`, `createContext`, `Script`, `compileFunction`), `course/10_vm/`.
- **ES Modules vs CommonJS** — semantic comparison in `course/11_ES_Module/diff_commonjs_esModule.js` and side-by-side `node/commonjs/` vs `node/esModule/`.
