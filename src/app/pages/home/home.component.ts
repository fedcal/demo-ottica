import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { map } from 'rxjs';

import { MockDataService } from '../../data/mock-data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe, NgFor, NgIf, RouterLink],
  template: `
    <section class="hero">
      <div class="demo-container">
        <p class="hero-eyebrow">Genova · Via XX Settembre</p>
        <h1>Esame della vista gratuito a Genova</h1>
        <p class="hero-tagline">
          Ottica Visus — occhiali da vista, lenti a contatto e sole dal 1998.
          Ottici diplomati, grandi brand, lenti personalizzate.
        </p>
        <div class="hero-actions">
          <a routerLink="/contatti" class="btn btn-primary">Prenota l'esame</a>
          <a routerLink="/servizi" class="btn btn-secondary">Scopri i servizi</a>
        </div>
        <p class="hero-badge">Esame della vista gratuito · senza appuntamento</p>
      </div>
    </section>

    <section class="features demo-container">
      <h2>Perché scegliere Ottica Visus</h2>
      <ul class="feature-grid">
        <li>
          <span class="feature-icon" aria-hidden="true">👁️</span>
          <h3>Esame Vista Gratuito</h3>
          <p>Controllo completo della refrazione da parte di un ottico diplomato, senza costi e senza impegno.</p>
        </li>
        <li>
          <span class="feature-icon" aria-hidden="true">🎓</span>
          <h3>Ottici Diplomati</h3>
          <p>4 professionisti qualificati con specializzazioni in contattologia, ipovisione e sport.</p>
        </li>
        <li>
          <span class="feature-icon" aria-hidden="true">🏷️</span>
          <h3>10 Brand Premium</h3>
          <p>Ray-Ban, Persol, Lindberg, Tom Ford e altri grandi marchi con garanzia ufficiale.</p>
        </li>
        <li>
          <span class="feature-icon" aria-hidden="true">🔵</span>
          <h3>Contattologia Avanzata</h3>
          <p>Applicazione lenti a contatto, orto-K per bambini, consulenza per astigmatismo e presbiopia.</p>
        </li>
      </ul>
    </section>

    <section class="featured-services demo-container" *ngIf="featuredServizi$ | async as servizi">
      <div class="section-header">
        <h2>Servizi in evidenza</h2>
        <a routerLink="/servizi" class="link-more">Tutti i servizi →</a>
      </div>
      <ul class="servizio-grid">
        <li *ngFor="let s of servizi" class="servizio-card">
          <span class="servizio-card__icon" aria-hidden="true">{{ s.icon }}</span>
          <h3>{{ s.nome }}</h3>
          <p class="servizio-card__desc">{{ s.descrizione }}</p>
          <span class="servizio-card__price">{{ s.prezzoLabel }}</span>
        </li>
      </ul>
    </section>

    <section class="cta-band">
      <div class="demo-container">
        <h2>Prenota il tuo esame della vista</h2>
        <p>Gratuito, senza appuntamento. Aperto dal lunedì al sabato a Genova centro.</p>
        <div class="hero-actions">
          <a routerLink="/contatti" class="btn btn-primary">Prenota ora</a>
          <a routerLink="/brand" class="btn btn-secondary-light">Scopri i brand</a>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .hero {
        padding: 5rem 1rem;
        text-align: center;
        background: linear-gradient(180deg, #e0f2fe 0%, #ffffff 100%);
        border-bottom: 1px solid var(--color-border);
      }
      .hero-eyebrow {
        font-size: 0.85rem;
        font-weight: 600;
        letter-spacing: 0.05em;
        color: var(--color-accent);
        text-transform: uppercase;
        margin: 0 0 0.75rem;
      }
      .hero h1 {
        font-size: clamp(2rem, 5vw, 3.2rem);
        margin: 0 0 1rem;
        color: var(--color-fg-default);
      }
      .hero-tagline {
        font-size: 1.1rem;
        color: var(--color-fg-muted);
        margin: 0 0 2rem;
        max-width: 560px;
        margin-left: auto;
        margin-right: auto;
      }
      .hero-actions {
        display: flex;
        gap: 0.75rem;
        justify-content: center;
        flex-wrap: wrap;
      }
      .hero-badge {
        margin-top: 1.5rem;
        font-size: 0.85rem;
        color: var(--color-fg-muted);
      }
      .btn {
        display: inline-block;
        padding: 0.7rem 1.5rem;
        border-radius: var(--radius-md);
        text-decoration: none;
        font-weight: 600;
        transition: all 0.15s ease;
      }
      .btn-primary {
        background: var(--color-accent);
        color: #ffffff;
      }
      .btn-primary:hover {
        background: #025e8f;
        text-decoration: none;
      }
      .btn-secondary {
        background: #ffffff;
        color: var(--color-fg-default);
        border: 1px solid var(--color-border);
      }
      .btn-secondary:hover {
        background: var(--color-bg-subtle);
        text-decoration: none;
      }
      .features {
        padding: 4rem 1rem;
      }
      .features h2 {
        text-align: center;
        margin-bottom: 2rem;
      }
      .feature-grid {
        list-style: none;
        margin: 0;
        padding: 0;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 1.5rem;
      }
      .feature-grid li {
        text-align: center;
        padding: 1.5rem;
        background: var(--color-bg-subtle);
        border-radius: var(--radius-md);
        border: 1px solid var(--color-border);
      }
      .feature-icon {
        font-size: 2.5rem;
        display: block;
        margin-bottom: 0.75rem;
      }
      .feature-grid h3 {
        margin: 0 0 0.5rem;
        font-size: 1.05rem;
      }
      .feature-grid p {
        margin: 0;
        color: var(--color-fg-muted);
        font-size: 0.9rem;
      }
      .featured-services {
        padding: 4rem 1rem;
      }
      .section-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.5rem;
        flex-wrap: wrap;
        gap: 0.5rem;
      }
      .section-header h2 {
        margin: 0;
      }
      .link-more {
        color: var(--color-accent);
        text-decoration: none;
        font-weight: 600;
      }
      .link-more:hover {
        text-decoration: underline;
      }
      .servizio-grid {
        list-style: none;
        margin: 0;
        padding: 0;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 1.25rem;
      }
      .servizio-card {
        background: #ffffff;
        border: 1px solid var(--color-border);
        border-radius: var(--radius-md);
        padding: 1.5rem;
      }
      .servizio-card__icon {
        font-size: 2rem;
        display: block;
        margin-bottom: 0.75rem;
      }
      .servizio-card h3 {
        margin: 0 0 0.5rem;
        font-size: 1.05rem;
      }
      .servizio-card__desc {
        color: var(--color-fg-muted);
        font-size: 0.9rem;
        margin: 0 0 1rem;
        line-height: 1.5;
      }
      .servizio-card__price {
        display: inline-block;
        background: #e0f2fe;
        color: var(--color-accent);
        font-size: 0.8rem;
        font-weight: 700;
        padding: 0.25rem 0.65rem;
        border-radius: 9999px;
      }
      .cta-band {
        padding: 5rem 1rem;
        background: var(--color-accent);
        color: #ffffff;
        text-align: center;
      }
      .cta-band h2 {
        margin: 0 0 0.75rem;
        color: #ffffff;
      }
      .cta-band p {
        color: rgba(255, 255, 255, 0.85);
        margin: 0 0 2rem;
      }
      .btn-secondary-light {
        background: transparent;
        color: #ffffff;
        border: 1px solid rgba(255, 255, 255, 0.4);
        display: inline-block;
        padding: 0.7rem 1.5rem;
        border-radius: var(--radius-md);
        text-decoration: none;
        font-weight: 600;
      }
      .btn-secondary-light:hover {
        background: rgba(255, 255, 255, 0.15);
        text-decoration: none;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  private readonly mockData = inject(MockDataService);

  readonly featuredServizi$ = this.mockData.servizi$.pipe(
    map((data) => data.servizi.filter((s) => s.evidenza))
  );
}
