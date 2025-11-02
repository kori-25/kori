# Configurazione Applicazione

Questa directory contiene i file di configurazione per l'applicazione Kori.

## Setup Iniziale

### 1. Configurazione Database

Prima di eseguire l'applicazione, devi creare il file `app_config.json` con le tue credenziali:

```bash
# Copia il file template
cp app_config.json.example app_config.json
```

### 2. Inserisci le tue credenziali Supabase

Modifica `app_config.json` e sostituisci i placeholder:

```json
{
  "supabaseUrl": "https://your-project.supabase.co",
  "supabaseAnonKey": "your-supabase-anon-key-here"
}
```

Le credenziali Supabase le trovi nel tuo progetto Supabase:
- Dashboard Supabase → Settings → API
- **Project URL** → `supabaseUrl`
- **Project API keys** → `anon` `public` → `supabaseAnonKey`

### 3. Configurazione per Ambiente

#### Produzione
```json
{
  "isDebug": false,
  "features": {
    "enableAdvancedLogging": false
  }
}
```

#### Sviluppo
```json
{
  "isDebug": true,
  "features": {
    "enableAdvancedLogging": true
  }
}
```

## ⚠️ SICUREZZA

**IMPORTANTE:**
- ❌ **NON** committare mai `app_config.json` nel repository
- ✅ Il file è già in `.gitignore` per proteggerti
- ✅ Usa sempre `app_config.json.example` come template
- 🔒 Le chiavi API devono rimanere private

## Docker Locale

Per usare Supabase locale con Docker:

```json
{
  "dockerHost": "localhost",
  "dockerPort": 54321
}
```

La chiave `dockerAnonKey` è quella di default di Supabase e può rimanere nel template.

## File di Configurazione

- `app_config.json.example` - Template pubblico (tracciato in Git)
- `app_config.json` - Configurazione reale con chiavi (escluso da Git)
- `README.md` - Questa documentazione
