import { PokemonDialog } from '@/components/dialog/PokemonDialog/PokemonDialog';
import { cn } from '@/utils/tailwindUtils';

export interface PokemonCardProps {
  className?: string;
  pokemon: string;
}

export const PokemonCard = ({ className, pokemon }: PokemonCardProps) => {
  return (
    <div
      className={cn(
        'flex h-full w-full flex-col items-center justify-center space-y-4 p-4',
        className,
      )}>
      <div className="h-32 w-32 rounded-full bg-gray-300"></div>

      <div className="text-2xl font-bold text-gray-800">{pokemon}</div>
    </div>
  );
};
