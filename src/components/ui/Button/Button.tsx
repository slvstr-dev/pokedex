import type { ButtonHTMLAttributes, AnchorHTMLAttributes, HTMLAttributes } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

type ButtonVariants = VariantProps<typeof button>;

export type ButtonProps = ButtonVariants &
  (
    | (HTMLAttributes<HTMLDivElement> & {
        as?: 'div';
      })
    | (ButtonHTMLAttributes<HTMLButtonElement> & {
        as: 'button';
      })
    | (AnchorHTMLAttributes<HTMLAnchorElement> & {
        as: 'a';
      })
  );

export const Button = ({ className, isActive, isDisabled, children, ...props }: ButtonProps) => {
  const styles = button({ isActive, isDisabled });

  if (props.as === 'a') {
    return (
      <a className={styles.base({ className })} {...props}>
        <span className={styles.label()}>{children}</span>
      </a>
    );
  }

  if (props.as === 'button') {
    return (
      <button className={styles.base({ className })} {...props}>
        <span className={styles.label()}>{children}</span>
      </button>
    );
  }

  return (
    <div className={styles.base({ className })} {...props}>
      <span className={styles.label()}>{children}</span>
    </div>
  );
};

export const button = tv({
  slots: {
    base: 'block py-2 px-4 cursor-pointer transition-opacity hover:opacity-50 active:opacity-75',
    label: '',
  },
  variants: {
    isActive: {
      true: {
        base: 'bg-gray-300',
        label: 'font-semibold',
      },
    },
    isDisabled: {
      true: {
        base: 'pointer-events-none opacity-25',
      },
    },
  },
  defaultVariants: {
    isActive: false,
    isDisabled: false,
  },
});
