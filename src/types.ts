export type Setps = {
  subTitle: string;
  src: string;
  alt: string;
  description: string;
  bibliographicCitation: string;
  hrfe: string | number;
};
export interface ImplementTemplate {
  setpsArticules: Setps[];
  pushSetps: () => Setps[];
  articules: string[];
  HTMLCreateDivElement: HTMLDivElement;
  HTMLCreateSectionElement: HTMLElement;
  HTMLCreateSectionTwoElement: HTMLElement;
  returnSections: () => HTMLDivElement;
  createdArticle: () => string[];
}
