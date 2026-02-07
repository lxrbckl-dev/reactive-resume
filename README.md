# reactive-resume
> A forked, stable release of reactive-resume, for the sake of consistency. Spring 2026.
> 
> **`TypeScript`** `React` `TanStack Start` `Vite` `Tailwind CSS` `PostgreSQL` `Drizzle` `Better Auth` `oRPC`

---

### Server Deployment
```bash
mkdir rxresume
cd rxresume
touch compose.yml
sudo nano compose.yml
# https://github.com/lxrbckl-dev/reactive-resume/blob/main/compose.yml
# add AUTH_SECRET
# add APP_URL
# add PRINTER_APP_URL
# adjust PORT
# adjust NAME
docker compose up -d --pull always --force-recreate
```
When running multiple Docker Compose stacks on the same machine, each stack needs unique host ports to avoid conflicts. If you see "port is already allocated" errors, increment the host port numbers (left side of HOST:CONTAINER) for each new instance while keeping container ports (right side) the same.

`Caddyfile`
```
<alternative-domain> {
    redir https://<host-domain>{uri} permanent
}
```

---
