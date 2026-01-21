# Configurazione Applicazione

Questa directory contiene i file di configurazione per l'applicazione Kori.

## Setup Iniziale

### 1. Configurazione Database

Prima di eseguire l'applicazione, devi creare il file `app_config.json` con le tue credenziali Supabase:

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

## File di Configurazione

- `app_config.json.example` - Template pubblico (tracciato in Git)
- `app_config.json` - Configurazione reale con chiavi (escluso da Git)
- `README.md` - Questa documentazione

## Sviluppo Locale vs Cloud

### Configurazione Cloud (Produzione)
- Il file `app_config.json` in questa cartella contiene la configurazione per il **server Supabase cloud** (produzione)
- Questa è la configurazione usata per le build di produzione

### Configurazione Locale (Sviluppo con Docker)
- Per configurazioni di sviluppo locale (Docker/server locale), vedi la cartella **`local_dev/`** nella root del progetto
- Contiene:
  - Configurazione per server Supabase locale (10.8.203.12)
  - Chiavi e credenziali del server di sviluppo
  - Script SQL e file di esempio
  - Documentazione setup rete locale

**Per passare alla configurazione locale:**
```bash
cp local_dev/config/app_config_local.json assets/config/app_config.json
```

**Per tornare alla configurazione cloud:**
```bash
# Ripristina dal tuo backup o riconfigura con le chiavi cloud
```

## Flutter Flavors (Avanzato)

Per configurare build separate per sviluppo e produzione, consulta la guida completa:
**`docs/FLUTTER_FLAVORS_GUIDE.md`**

Questa configurazione permette di:
- Creare build separate con configurazioni diverse
- Installare versioni development e production sullo stesso device
- Gestire database locali (Docker) separati da quelli cloud
