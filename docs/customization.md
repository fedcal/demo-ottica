# Customization

## Cambiare i dati mock

Edita i file in `src/assets/mock/`. Vedi [Mock Data](/mock-data).

## Cambiare i colori

I design tokens sono in `src/styles.css`:

```css
:root {
  --color-accent: #0969da;        /* Cambia qui per il colore primario */
  --color-bg-default: #ffffff;
  --color-fg-default: #1f2328;
  /* ... */
}
```

## Cambiare il logo

Sostituisci `public/favicon.ico` e aggiungi il logo SVG in `public/logo.svg`.

## Aggiungere route

1. Crea il componente in `src/app/pages/{nome}/`
2. Aggiungi la route in `src/app/app.routes.ts`:

```typescript
{
  path: 'servizi',
  loadComponent: () => import('./pages/servizi/servizi.component').then((m) => m.ServiziComponent),
  title: 'Servizi — Ottica'
}
```

## Cambiare i metadati SEO

Edita `src/index.html` per:
- `<title>` globale
- `<meta name="description">`
- Open Graph

Per metadati per-route usa `Title` e `Meta` di `@angular/platform-browser`.

## Disabilitare il prerender

In `angular.json`:

```json
"prerender": false
```

In questo caso il sito gira solo in modalità SSR runtime (più lento al cold start, più dinamico).

## Possibili Sviluppi Personalizzabili

Estendere il template ottica con feature specializzate:

- **Advanced AR Try-On MediaPipe + Three.js**: face landmarks 468 punti, fitting room 3D, skin tone matching (190h)
- **AI Style Recommendation RediSearch**: dialogo qwen2.5 per forma viso + fascia prezzo (130h)
- **RX Digital Management + Tesseract OCR**: estrazione prescrizione, Ricettario Nazionale API, scadenza alert (140h)
- **Smart Store Locator + Click&Collect**: Google Maps, availability API, appointment booking (160h)
- **Supplier B2B Hub Essilor+Luxottica**: EDI X12, SFTP, margin rules, reorder automation (150h)
- **Loyalty 2.0 + Predictive Service**: churn ML, eye check reminder, tier VIP gamified (130h)
- **Visual search**: upload foto occhiali → similitudine nel catalogo tramite vision AI (90h)
- **Progressive lens simulator**: visualizza effetto lenti progressive vs bifocali (80h)
- **Lente fotocromatica preview**: simulazione scurimento in base luminosità ambiente (70h)
- **Inventory by store**: query "quale negozio ha montatura XL?" in real-time (60h)
- **Telemedicine visita optometrica**: video call consultation con ottico, prescrizione digitale (200h)
- **Assicurazione rimborso integrata**: verifica copertura assicurazione, rimborso automatico (120h)

Vedi [Tier & Funzionalità](/tier-features) per architettura completa moduli avanzati.

## White-label per cliente

1. Fork del repo o copia in nuova cartella
2. Sostituisci `ottica` con nome cliente (`acme-pizzeria`)
3. Sostituisci footer rimuovendo riferimento a Federico (modifica `footer.component.ts`)
4. Personalizza `vercel.json` con domain custom cliente
5. Deploy su Vercel cliente con loro account
