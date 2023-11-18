import { z } from 'zod';

export const searchFormSchema = z.object({
  query: z.string(),
});

export type SearchFormSchema = z.infer<typeof searchFormSchema>;
