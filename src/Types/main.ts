export interface TimelineEvent {
  year: string;
  description?: string;
}

export interface GalleryItem {
  title: string;
  image: string;
  alt: string;
}
export interface Artifact {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  link: string;
}
export interface TeamMember {
  name: string;
  role: string;
  age: number;
  email: string;
  image: string;
}
