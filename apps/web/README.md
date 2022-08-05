# Folder Structure

Usually, I just through everything into `lib`, `pages`, and `components`; but for this project, I want to try to be more methodical about how things are organized.

```
.
├── src/
│   ├── dbschema/                # EdgeDB
│   ├── pages/                   # Next.js pages
│   ├── pages/                   # Next.js pages
│   ├── server/                  # tRPC context and routers
│   ├── features/                # Group hooks, components, and services (interface with API) by feature
│   │   ├── ...
│   │   │   ├── hooks/
│   │   │   ├── components/
│   │   │   ├── services/
│   │   │   ├── index.js
│   ├── test/                    # Automated tests (alternatively `spec` or `tests`)
│   ├── lib/                     # Global utilities and configs
│   ├── hooks/                   # Global hooks
│   ├── .eslintrc.json           # Config files...
│   ├── next.config.js
│   ├── edgedb.toml
│   ├── tsconfig.json
│   └── README.md                # Documentation
```
