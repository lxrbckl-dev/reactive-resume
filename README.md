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
docker compose up -d --pull always --force-recreate
```

`Caddyfile`
```
<alternative-domain> {
    redir https://<host-domain>{uri} permanent
}
```

---
