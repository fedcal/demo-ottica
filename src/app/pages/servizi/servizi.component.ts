import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

import { MockDataService } from '../../data/mock-data.service';

@Component({
  selector: 'app-servizi',
  standalone: true,
  imports: [AsyncPipe, NgFor, NgIf, RouterLink],
  template: `
    <section class="page-header">
      <div class="demo-container">
        <h1>I nostri servizi</h1>
        <p>Dall'esame della vista gratuito alla contattologia avanzata. Ottici diplomati a Genova.</p>
      </div>
    </section>

    <article class="demo-container content" *ngIf="servizi$ | async as data">
      <ul class="servizi-grid">
        <li *ngFor="let s of data.servizi" class="servizio-card" [class.servizio-card--evidenza]="s.evidenza">
          <div class="servizio-card__header">
            <span class="servizio-card__icon" aria-hidden="true">{{ s.icon }}</span>
            <div>
              <h2>{{ s.nome }}</h2>
              <span class="badge badge--cat">{{ s.categoria }}</span>
            </div>
          </div>
          <p class="servizio-card__desc">{{ s.descrizione }}</p>
          <div class="servizio-card__meta">
            <span *ngIf="s.durata" class="meta-item">
              <strong>Durata:</strong> {{ s.durata }}
            </span>
            <span class="meta-item price">
              <strong>Costo:</strong> {{ s.prezzoLabel }}
            </span>
          </div>
        </li>
      </ul>

      <aside class="cta-aside">
        <h3>Hai domande su un servizio?</h3>
        <p>Contattaci o vieni in negozio — consulenza sempre gratuita.</p>
        <a routerLink="/contatti" class="btn btn-primary">Prenota o contattaci</a>
      </aside>
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
      .servizi-grid {
        list-style: none;
        padding: 0;
        margin: 0 0 3rem;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: 1.25rem;
      }
      .servizio-card {
        padding: 1.5rem;
        border: 1px solid var(--color-border);
        border-radius: var(--radius-md);
        background: #ffffff;
      }
      .servizio-card--evidenza {
        border-color: var(--color-accent);
        background: #f0f7ff;
      }
      .servizio-card__header {
        display: flex;
        align-items: flex-start;
        gap: 1rem;
        margin-bottom: 0.75rem;
      }
      .servizio-card__icon {
        font-size: 2.2rem;
        flex-shrink: 0;
      }
      .servizio-card__header h2 {
        margin: 0 0 0.3rem;
        font-size: 1.1rem;
      }
      .badge {
        font-size: 0.7rem;
        padding: 0.15rem 0.5rem;
        border-radius: 9999px;
        font-weight: 600;
        text-transform: capitalize;
      }
      .badge--cat {
        background: #e0f2fe;
        color: var(--color-accent);
      }
      .servizio-card__desc {
        color: var(--color-fg-muted);
        font-size: 0.92rem;
        margin: 0 0 1rem;
        line-height: 1.6;
      }
      .servizio-card__meta {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        font-size: 0.85rem;
      }
      .meta-item {
        color: var(--color-fg-muted);
      }
      .meta-item.price {
        color: var(--color-fg-default);
        font-weight: 600;
      }
      .cta-aside {
        background: var(--color-bg-subtle);
        border-radius: var(--radius-lg);
        padding: 2rem;
        text-align: center;
      }
      .cta-aside h3 {
        margin: 0 0 0.5rem;
      }
      .cta-aside p {
        color: var(--color-fg-muted);
        margin: 0 0 1.5rem;
      }
      .btn {
        display: inline-block;
        padding: 0.7rem 1.5rem;
        border-radius: var(--radius-md);
        text-decoration: none;
        font-weight: 600;
      }
      .btn-primary {
        background: var(--color-accent);
        color: #ffffff;
      }
      .btn-primary:hover {
        background: #025e8f;
        text-decoration: none;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServiziComponent {
  private readonly mockData = inject(MockDataService);

  readonly servizi$ = this.mockData.servizi$;
}
