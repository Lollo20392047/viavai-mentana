# ViaVai — sito ufficiale

Landing page responsive per ViaVai Pizzeria, Via del Conventino 2, Mentana (RM).

## Cosa include

- menu filtrabile per tonde rosse, tonde bianche, pizza al taglio e fritti;
- pannello di prenotazione che prepara un messaggio WhatsApp per il numero `+39 351 393 1910`;
- animazioni progressive con supporto a `prefers-reduced-motion`;
- dati strutturati `Restaurant`, metadati social e impostazioni SEO locali;
- logo originale ViaVai, recuperato dal profilo pubblico ufficiale;
- layout responsive senza framework e senza processo di build.

## Anteprima locale

Servire la cartella con un server statico, per esempio:

```sh
python3 -m http.server 4173
```

Poi aprire `http://localhost:4173`.

## Fonti dei contenuti

- listino tondo e fritti: pagina ViaVai su Just Eat, consultata il 18 luglio 2026;
- apertura, offerta al taglio/pala/tonda e lievitazione 72 ore: IlTerritorio.net, 28 settembre 2023;
- contatti e profilo social: canale Instagram pubblico `@via.vai_pizzeria_mentana`;
- indirizzo, servizi e orari: confronto tra Just Eat, Restaurant Guru e directory locali.

Il prezzo della pizza al taglio non risulta pubblicato online: il sito lo indica quindi correttamente come prezzo al peso esposto al banco. Prezzi e orari vanno sempre confermati con la pizzeria.

Il progetto non utilizza immagini generate con intelligenza artificiale. La hero è composta con tipografia e grafica CSS attorno al marchio originale ViaVai.

## Pubblicazione

Il progetto è statico e può essere importato direttamente in Vercel. `vercel.json` abilita URL puliti e cache lunga per gli asset.
