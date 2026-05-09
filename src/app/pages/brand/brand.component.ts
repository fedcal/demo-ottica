import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';

import { MockDataService } from '../../data/mock-data.service';

@Component({
  selector: 'app-brand',
  standalone: true,
  imports: [AsyncPipe, NgFor, NgIf],
  template: `
    <section class="page-header">
      <div class="demo-container">
        <h1>I brand che trattiamo</h1>
        <p>10 marchi selezionati dal segmento accessibile al lusso. Montature originali con garanzia ufficiale.</p>
      </div>
    </section>

    <article class="demo-container content" *ngIf="brand$ | async as data">
      <ul class="brand-grid">
        <li *ngFor="let b of data.brand" class="brand-card">
          <div class="brand-card__head">
            <div class="brand-card__avatar" aria-hidden="true">
              {{ b.nome.charAt(0) }}
            </div>
            <div>
              <h2>{{ b.nome }}</h2>
              <p class="brand-card__nazione">{{ b.nazione }}</p>
            </div>
            <span class="badge badge--segmento badge--{{ b.segmento }}">{{ b.segmento }}</span>
          </div>
          <p class="brand-card__desc">{{ b.descrizione }}</p>
          <div class="brand-card__footer">
            <span class="price-range">{{ b.prezzoRange }}</span>
            <div class="categorie">
              <span *ngFor="let cat of b.categorie" class="cat-badge">{{ cat }}</span>
            </div>
          </div>
        </li>
      </ul>

      <aside class="info-note">
        <strong>Nota:</strong> Tutti i prodotti esposti sono originali con garanzia ufficiale del produttore.
        Offriamo assistenza post-vendita, riparazioni e ricambi originali per tutte le marche trattate.
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
      .brand-grid {
        list-style: none;
        padding: 0;
        margin: 0 0 2rem;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1.25rem;
      }
      .brand-card {
        padding: 1.5rem;
        border: 1px solid var(--color-border);
        border-radius: var(--radius-md);
        background: #ffffff;
      }
      .brand-card__head {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 0.75rem;
      }
      .brand-card__avatar {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        background: var(--color-accent);
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.4rem;
        font-weight: 700;
        flex-shrink: 0;
      }
      .brand-card__head > div {
        flex: 1;
      }
      .brand-card__head h2 {
        margin: 0;
        font-size: 1.1rem;
      }
      .brand-card__nazione {
        margin: 0;
        font-size: 0.8rem;
        color: var(--color-fg-muted);
      }
      .badge {
        font-size: 0.7rem;
        padding: 0.2rem 0.6rem;
        border-radius: 9999px;
        font-weight: 600;
        white-space: nowrap;
        text-transform: capitalize;
      }
      .badge--segmento { background: var(--color-bg-subtle); color: var(--color-fg-muted); }
      .badge--medio { background: #dafbe1; color: var(--color-success); }
      .badge--premium { background: #e0f2fe; color: var(--color-accent); }
      .badge--lusso { background: #fff8c5; color: var(--color-warning); }
      .badge--sport { background: #ffebe9; color: var(--color-danger); }
      .brand-card__desc {
        color: var(--color-fg-muted);
        font-size: 0.9rem;
        margin: 0 0 1rem;
        line-height: 1.55;
      }
      .brand-card__footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 0.5rem;
      }
      .price-range {
        font-size: 0.85rem;
        font-weight: 700;
        color: var(--color-accent);
      }
      .categorie {
        display: flex;
        gap: 0.35rem;
        flex-wrap: wrap;
      }
      .cat-badge {
        font-size: 0.7rem;
        padding: 0.15rem 0.45rem;
        border-radius: 9999px;
        background: var(--color-bg-subtle);
        color: var(--color-fg-muted);
        text-transform: capitalize;
      }
      .info-note {
        background: var(--color-bg-subtle);
        border-left: 3px solid var(--color-accent);
        padding: 1rem 1.25rem;
        border-radius: var(--radius-sm);
        font-size: 0.9rem;
        color: var(--color-fg-muted);
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrandComponent {
  private readonly mockData = inject(MockDataService);

  readonly brand$ = this.mockData.brand$;
}
