import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';

import { MockDataService } from '../../data/mock-data.service';

@Component({
  selector: 'app-chi-siamo',
  standalone: true,
  imports: [AsyncPipe, NgFor, NgIf],
  template: `
    <section class="page-header">
      <div class="demo-container">
        <h1>Chi siamo</h1>
        <p>Ottica Visus a Genova dal 1998. Professionisti della visione al vostro servizio.</p>
      </div>
    </section>

    <article class="demo-container content">
      <section class="story">
        <h2>La nostra storia</h2>
        <p>
          Claudia Ferretti apre Ottica Visus nel 1998 in Via XX Settembre, nel cuore di Genova, dopo essersi
          diplomata all'Istituto Superiore di Ottica di Torino. La sua visione è chiara: un'ottica dove la
          competenza clinica viene prima del marketing, dove ogni cliente riceve tempo, attenzione e soluzioni
          personalizzate.
        </p>
        <p>
          In 25 anni, il team è cresciuto con l'arrivo di Marco Sasso, specialista in contattologia avanzata e
          orto-cheratologia, Sara Bisio, esperta in ipovisione e ausili ottici per i più fragili, e Luca Piana,
          appassionato di sport e lenti ad alte prestazioni. Quattro ottici diplomati, quattro specializzazioni
          complementari.
        </p>
      </section>

      <section class="valori">
        <h2>I nostri valori</h2>
        <ul class="valori-grid">
          <li>
            <h3>Competenza</h3>
            <p>Tutti i nostri ottici sono diplomati ISTAT. Aggiornamento continuo con corsi ECM e conferenze di settore.</p>
          </li>
          <li>
            <h3>Trasparenza</h3>
            <p>Preventivi chiari, senza sorprese. L'esame della vista è sempre gratuito, senza obbligo d'acquisto.</p>
          </li>
          <li>
            <h3>Personalizzazione</h3>
            <p>Nessuna soluzione standard. Ogni occhiale viene scelto, montato e centrato sulla base delle abitudini visive del cliente.</p>
          </li>
          <li>
            <h3>Inclusione</h3>
            <p>Convenzione SSN per bambini, anziani e persone con ipovisione. Servizio accessibile a tutti.</p>
          </li>
        </ul>
      </section>

      <section class="team-section" *ngIf="team$ | async as data">
        <h2>Il team</h2>
        <ul class="team-grid">
          <li *ngFor="let m of data.team" class="team-card">
            <div class="team-card__avatar" aria-hidden="true">{{ m.nome.charAt(0) }}</div>
            <h3>{{ m.nome }}</h3>
            <p class="team-card__role">{{ m.ruolo }}</p>
            <p class="team-card__bio">{{ m.bio }}</p>
            <p class="team-card__exp">{{ m.anniEsperienza }} anni di esperienza</p>
            <ul class="team-card__skills">
              <li *ngFor="let s of m.specialita">{{ s }}</li>
            </ul>
          </li>
        </ul>
      </section>

      <section class="faq-section" *ngIf="faq$ | async as data">
        <h2>Domande frequenti</h2>
        <ul class="faq-list">
          <li *ngFor="let item of data.faq" class="faq-item">
            <h3>{{ item.domanda }}</h3>
            <p>{{ item.risposta }}</p>
          </li>
        </ul>
      </section>
    </article>
  `,
  styles: [
    `
      .page-header {
        padding: 4rem 1rem 3rem;
        background: var(--color-bg-subtle);
        text-align: center;
        border-bottom: 1px solid var(--color-border);
      }
      .page-header h1 {
        margin: 0 0 0.5rem;
      }
      .page-header p {
        color: var(--color-fg-muted);
        margin: 0;
      }
      .content {
        padding: 3rem 1rem;
      }
      .story {
        max-width: 720px;
        margin: 0 auto 4rem;
      }
      .story h2 {
        margin-bottom: 1rem;
      }
      .story p {
        line-height: 1.7;
        margin-bottom: 1rem;
        color: var(--color-fg-muted);
      }
      .valori {
        margin-bottom: 4rem;
      }
      .valori h2 {
        text-align: center;
        margin-bottom: 2rem;
      }
      .valori-grid {
        list-style: none;
        padding: 0;
        margin: 0;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 1.5rem;
      }
      .valori-grid li {
        padding: 1.5rem;
        background: var(--color-bg-subtle);
        border-radius: var(--radius-md);
        border: 1px solid var(--color-border);
      }
      .valori-grid h3 {
        margin: 0 0 0.5rem;
        color: var(--color-accent);
      }
      .valori-grid p {
        margin: 0;
        color: var(--color-fg-muted);
        font-size: 0.92rem;
      }
      .team-section {
        margin-bottom: 4rem;
      }
      .team-section h2 {
        text-align: center;
        margin-bottom: 2rem;
      }
      .team-grid {
        list-style: none;
        padding: 0;
        margin: 0;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 1.5rem;
      }
      .team-card {
        padding: 1.5rem;
        border: 1px solid var(--color-border);
        border-radius: var(--radius-md);
        text-align: center;
      }
      .team-card__avatar {
        width: 72px;
        height: 72px;
        border-radius: 50%;
        background: var(--color-accent);
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.8rem;
        font-weight: 700;
        margin: 0 auto 1rem;
      }
      .team-card h3 {
        margin: 0 0 0.25rem;
      }
      .team-card__role {
        margin: 0 0 0.75rem;
        color: var(--color-accent);
        font-weight: 600;
        font-size: 0.85rem;
      }
      .team-card__bio {
        font-size: 0.88rem;
        color: var(--color-fg-muted);
        margin-bottom: 0.5rem;
        text-align: left;
        line-height: 1.55;
      }
      .team-card__exp {
        font-size: 0.8rem;
        font-weight: 600;
        margin-bottom: 0.75rem;
      }
      .team-card__skills {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        gap: 0.35rem;
        flex-wrap: wrap;
        justify-content: center;
      }
      .team-card__skills li {
        font-size: 0.68rem;
        background: var(--color-bg-subtle);
        padding: 0.2rem 0.5rem;
        border-radius: 9999px;
        color: var(--color-fg-muted);
      }
      .faq-section h2 {
        text-align: center;
        margin-bottom: 2rem;
      }
      .faq-list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: grid;
        gap: 1rem;
        max-width: 760px;
        margin-left: auto;
        margin-right: auto;
      }
      .faq-item {
        border: 1px solid var(--color-border);
        border-radius: var(--radius-md);
        padding: 1.25rem;
      }
      .faq-item h3 {
        margin: 0 0 0.5rem;
        font-size: 1rem;
        color: var(--color-fg-default);
      }
      .faq-item p {
        margin: 0;
        font-size: 0.9rem;
        color: var(--color-fg-muted);
        line-height: 1.6;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChiSiamoComponent {
  private readonly mockData = inject(MockDataService);

  readonly team$ = this.mockData.team$;
  readonly faq$ = this.mockData.faq$;
}
