/// <reference types="astro/client" />
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; // 1. Importa el loader

const articulos = defineCollection({
  // 2. Añade el loader: le dice a Astro que busque archivos .md en la carpeta 'articulos'
  loader: glob({ pattern: '**/*.md', base: './src/content/articulos' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tag: z.enum([
      'Derecho Penal',
      'Compliance',
      'Ciberseguridad',
      'IA & Tech',
      'Laboral',
    ]),
    author: z.string().default('Equipo Editorial'),
    readingTime: z.number().default(8),
    cover: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { articulos };