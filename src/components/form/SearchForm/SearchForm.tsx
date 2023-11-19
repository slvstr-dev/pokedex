'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { searchFormSchema, type SearchFormSchema } from '@/types/zod';
import { cn } from '@/utils/tailwindUtils';
import { SearchBar } from '@/components/ui/SearchBar/SearchBar';

export interface SearchFormProps {
  className?: string;
  onChange: (query: string) => void;
}

export function SearchForm({ className, onChange }: SearchFormProps) {
  const { register, handleSubmit } = useForm<SearchFormSchema>({
    resolver: zodResolver(searchFormSchema),
  });

  const handleFormSubmit = ({ query }: SearchFormSchema) => {
    onChange(query);
  };

  return (
    <form onChange={handleSubmit(handleFormSubmit)} className={cn('flex flex-col', className)}>
      <SearchBar placeholder="Search Pokémon by name or number" register={register('query')} />
    </form>
  );
}
