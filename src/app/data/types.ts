// Tipi TypeScript per i dati mock di Ottica Visus

export interface Indirizzo {
  via: string;
  citta: string;
  provincia: string;
  cap: string;
  regione: string;
  paese: string;
  lat: number;
  lng: number;
}

export interface Contatti {
  telefono: string;
  whatsapp: string;
  email: string;
  social: {
    instagram?: string;
    facebook?: string;
  };
}

export interface OrariApertura {
  lunedi: string;
  martedi: string;
  mercoledi: string;
  giovedi: string;
  venerdi: string;
  sabato: string;
  domenica: string;
}

export interface MetaSeo {
  title: string;
  description: string;
  keywords: string[];
}

export interface InfoAttivita {
  ragioneSociale: string;
  nomeCommerciale: string;
  tagline: string;
  descrizione: string;
  autorizzazione: string;
  indirizzo: Indirizzo;
  contatti: Contatti;
  orari: OrariApertura;
  metaSeo: MetaSeo;
}

export interface Servizio {
  id: string;
  nome: string;
  descrizione: string;
  durata: string | null;
  prezzo: number | null;
  prezzoLabel: string;
  icon: string;
  categoria: string;
  evidenza: boolean;
}

export interface ServiziData {
  servizi: Servizio[];
}

export interface Brand {
  id: string;
  nome: string;
  nazione: string;
  segmento: 'medio' | 'premium' | 'lusso' | 'sport';
  descrizione: string;
  prezzoRange: string;
  categorie: string[];
}

export interface BrandData {
  brand: Brand[];
}

export interface MembroTeam {
  id: number;
  nome: string;
  ruolo: string;
  bio: string;
  anniEsperienza: number;
  specialita: string[];
}

export interface TeamData {
  team: MembroTeam[];
}

export interface FaqItem {
  domanda: string;
  risposta: string;
}

export interface FaqData {
  faq: FaqItem[];
}
