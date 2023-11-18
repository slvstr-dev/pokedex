'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { searchFormSchema, type SearchFormSchema } from '@/types/zod';
import { cn } from '@/utils/tailwindUtils';
import { SearchBar } from '@/components/ui/SearchBar/SearchBar';

export interface SearchFormProps {
  className?: string;
  onSubmit?: () => void;
}

export function SearchForm({ className, onSubmit }: SearchFormProps) {
  const { register, handleSubmit, reset } = useForm<SearchFormSchema>({
    resolver: zodResolver(searchFormSchema),
  });

  const handleFormSubmit = (data: SearchFormSchema) => {
    console.log(data);

    reset();

    onSubmit?.();
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className={cn('flex flex-col', className)}>
      <SearchBar placeholder="Search Pokémon by name or number" register={register('query')} />
    </form>
  );
}
