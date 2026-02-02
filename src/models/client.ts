export interface Client {
  id?: string;
  userId: string;
  email: string;
  name: string;
  stripeCustomerId?: string;
  subscription: 'free' | 'basic' | 'premium';
  materialesDescargados: string[];
  progresoCursos: Record<string, {
    completado: boolean;
    progreso: number;
    ultimoAcceso: Date;
  }>;
  fechaRegistro: Date;
}

export interface Material {
  id?: string;
  titulo: string;
  descripcion: string;
  tipo: 'pdf' | 'video' | 'curso';
  fileUrl: string;
  thumbnailUrl: string;
  categoria: string;
  nivelAcceso: 'free' | 'basic' | 'premium';
  orden: number;
  createdAt: Date;
}
