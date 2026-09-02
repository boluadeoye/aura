export interface AssetMeta {
  id: number;
  src: string;
  title: string;
  subtitle: string;
  category: "fleet" | "atelier" | "ritual" | "atmosphere" | "engineering";
  description: string;
}

export interface SpecItem {
  label: string;
  value: string;
  unit: string;
  detail: string;
}

export interface MaterialSpec {
  id: string;
  title: string;
  material: string;
  origin: string;
  image: string;
  description: string;
}
