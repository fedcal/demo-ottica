# Tier e Funzionalità — Ottica Indipendente

> Catalogo completo delle feature per ogni livello di implementazione

## Tier Base — Fondamenta Digitali (€500 | 200h)

### Core E-commerce Sanitario
- **Catalogo occhiali**: 2.000+ modelli (marche: Ray-Ban, Persol, Maui Jim, indie designer) con filtri forma/colore/prezzo
- **Ricerca ibrida**: per marca, forma (wayfarer/clubmaster/cat-eye), fascia prezzo (€50-€600)
- **Dettagli tecnici**: tabella misure (ponte, larghezza lente), peso, materiale (acetato/titanio/TR90)
- **Shopping cart Stripe**: checkout 1-click, Paypal integration, gestione taglia
- **Wishlist smart**: salvataggio look preferiti, notifica prezzo ribasso, share social

### Esperienza SEO & Marketing
- **Schema.org Product**: prezzo, rating, disponibilità, sizing guide (schema strutturato per Google)
- **Blog guide**: "come scegliere occhiali forma viso", "manutenzione lenti", "trend eyewear 2026"
- **Sitemap i18n 18 lingue**: hreflang per mercati europei + Asia
- **GA4 ecommerce**: view_item (con taglia/colore), cart e purchase tracking
- **Visual search**: upload foto → similitudine occhiali consigliati

### Infrastruttura Tecnica
- **SSR + Prerender**: TTFB <500ms, first paint <1.5s
- **SSL/TLS**: certificato EV per e-commerce health/sanitario
- **CDN Cloudflare**: caching immagini HD + live inventory sync
- **Database PostgreSQL**: indici su marca/forma/colore, JSONB per certificato visita

---

## Tier Intermedio — Omnichannel Ottico (€1.800 | 450h)

Includes tutte feature Base, più:

### Omnichannel Retail
- **POS Cassa in Cloud**: integrazione inventory negozio fisico + e-commerce, sync real-time
- **Click & Collect**: prenotazione online, ritiro in 24h negozio, checkout veloce
- **E-fattura SDI v1.9.1**: generazione XML automatica, conservazione digitale 6 anni
- **Multi-currency Stripe**: EUR/USD/GBP, gestione VAT cross-border EU
- **Store locator Google Maps**: mappa negozi + orari + prenotazione visita

### Contenuti Sanitari
- **Email Resend transazionale**: conferma ordine, shipping tracking, follow-up servizio post-vendita
- **Ricettario digitale**: upload prescrizione RX (optional campo), avviso scadenza ricetta
- **Newsletter segmentata**: content per fascia età (bambini/adulti/senior), trend eyewear, care tips
- **Video lenti**: guida manutenzione lenti progressive, anti-riflesso, UV protection
- **FAQ ottiche**: domande su graduazione, prescrizione, adattamento progressive, rimborso assicurazione

### Analytics Sanitaria
- **Cohort analysis**: repeat rate per fascia d'età, tempo replacement occhiali (media 2-3 anni)
- **Inventory optimization**: best sellers per forme, predizione trend stagionale
- **Customer lifetime value**: acquisti multipli (occhiali + ricambi astuccio + soluzioni pulizia)

---

## Tier Avanzato — AI & Digital Health (€4.500 | 700h)

Includes tutte feature Intermedio + 6 AI modules:

### 1. Advanced AR Try-On + Face Analysis (190h)
- **MediaPipe 468 landmark detection**: 468 punti faccia (occhi, naso, orecchi) a 60fps
- **Three.js GLTF rendering**: modelli occhiali 3D fedeli, deformazione dinamica per fit viso
- **Light simulation**: preview occhiali con 3 profili illuminazione (indoor/outdoor/sera)
- **Face shape analysis**: algoritmo classifica forma (ovale/quadrata/rotonda/rettangolare) → raccomandazioni forma
- **Skin tone matching**: analisi colore pelle → palette colori lenti consigliate (warm/cool tone)
- **Device support**: Android 8+, iOS 14+, fallback 2D su browser legacy
- **Sharing**: screenshot AR + link WhatsApp, confronto offline app

### 2. AI Style Recommendation (130h)
- **RediSearch HNSW 384-dim**: embedding 5.000 occhiali (marca, forma, colore, prezzo, trend)
- **qwen2.5:14b reasoning**: dialogo cliente "occhiali per smartworking", "preferisco montatura leggera" → ranked suggestions
- **Context learning**: storico acquisti precedenti, preferenze marca, fascia prezzo abituale
- **Trend injection**: collezione FW2026 highlight, limited edition promozione, bundle offer
- **Confidence scoring**: per raccomandazione (es. "95% sicuri che amerai questo stile")
- **Comparison tool**: side-by-side 2-3 modelli con pro/contro prezzo, peso, trend match

### 3. RX Digital Management (140h)
- **Tesseract OCR**: upload immagine prescrizione → estrazione automatica sfera/cilindro/asse/PD
- **Optical algorithm validation**: controllo logica prescrizione (range validi per refrazione)
- **Ricettario Nazionale API**: verifica prescrizione non scaduta, matching con database sanitario (dove possibile)
- **Lenti smart filtering**: filtro automatico per prescrizione (es. "progressive recommended" per >45 anni)
- **Storage GDPR**: archiviazione RX cifrata, accesso solo cliente autorizzato
- **Monitoramento scadenza**: notifica 30gg prima scadenza prescrizione, call-to-action visita ottico
- **Esportazione clinica**: generazione PDF prescrizione per portare da ottico diverso

### 4. Smart Store Locator + Click&Collect (160h)
- **Google Maps integration**: mappa negozi (indirizzo, telefono, orari, reviews)
- **Availability API**: query real-time "ho questo occhiale in stock?" per negozio selezionato
- **Appointment booking**: prenotazione visita optometrica, fascia oraria libera via Calendly API
- **Cassa in Cloud federated**: pagamento online + ritiro negozio, sincronizzazione inventory
- **In-store experience**: QR code generato → staff vede preordine cliente in POS
- **Feedback post-visita**: survey soddisfazione su app, incentivo (€5 coupon) per review
- **Analytics**: quali negozi hanno conversioni migliori, quali prodotti richiesti per location

### 5. Supplier B2B Hub Essilor+Luxottica (150h)
- **EDI X12 integration**: trasmissione ordini bulk a Essilor/Luxottica, tracciamento fulfillment
- **SFTP secure transfer**: catalogo fornitore aggiornato settimanale, bulk pricing negotiation
- **Margin rules engine**: configurazione markup per fascia prezzo (es. €200+ = 50% margin)
- **Reorder automation**: inventory below threshold → PO auto a supplier, ETA forecast
- **Compliance tracking**: gestione lotti, numero serie per sospetti/recall (ANFA compliance)
- **B2B portal private**: login credentials, catalogo wholesale, negotiated pricing tiers

### 6. Loyalty 2.0 + Predictive Service (130h)
- **Churn ML prediction**: LightGBM weekly retraining su storico acquisti → probabilità abbandono cliente
- **Intervento proattivo**: email coupon sconto prima abbandono ("non ti vediamo da 18 mesi, -20%")
- **Loyalty tier**: Bronze/Silver/Gold, unlock free shipping, priority support, exclusive try-on events
- **Eye check reminder**: notifica 2 anni dopo ultimo acquisto occhiali ("è ora di controllo!"), prenotazione visita
- **Health insight**: dashboard cliente "ultimi 5 anni storico", trend spesa, lenti preferite
- **Referral program**: invita amico → entrambi ricevono €10 coupon, tracking conversione
- **Points redemption**: accumulati per acquisti, reviews, social share → sconto o accessori gratis

---

## Stack Tecnologico per Tier Avanzato

| Layer | Tecnologia |
|-------|-----------|
| **Frontend** | Angular 21 SSR + MediaPipe Pose + Three.js WebGL + Signals + Transloco |
| **Backend** | Spring Boot 3.4 + Stripe Connect + Google Maps API + Calendly API |
| **ML/AI** | Ollama (qwen2.5:14b) + RediSearch HNSW + Tesseract OCR + LightGBM weekly retraining |
| **Data** | PostgreSQL 16 + Redis Stack 7 |
| **DevOps** | Hetzner CCX23 + Nginx + Cloudflare CDN + Let's Encrypt |
| **External** | EDI X12 (Essilor/Luxottica), Ricettario Nazionale API, Google Maps, Calendly |

---

## Roadmap Consigliata

1. **Week 1-2**: Base (catalogo, Stripe, visual search)
2. **Week 3-6**: Intermedio (POS sync, e-fattura SDI, ricettario digitale)
3. **Week 7-11**: AR try-on MediaPipe + Three.js rendering
4. **Week 12-17**: RX OCR + Ricettario API + eye check reminders
5. **Week 18-24**: Supplier EDI + loyalty ML churn prediction
6. **Week 25+**: Continuous optimization + new features

**Post-build**: €4.500-5.500 implementazione, €900/mese hosting + AI + EDI compliance + Stripe 2.9%.

---

## Metriche Digitali Salute

- **Base**: conversion rate +12%, online orders 28% total, customer satisfaction 4.6/5
- **Intermedio**: repeat purchase 45%, store foot traffic +18% con click&collect, email open rate 32%
- **Avanzato**: AR try-on adoption 23%, RX OCR accuracy 98%, churn reduction 16%, loyalty tier engagement 72%, store inventory optimization -12% waste
