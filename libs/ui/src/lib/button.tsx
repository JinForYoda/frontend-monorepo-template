interface ButtonProps {
  label: string;
  variant?: 'primary' | 'secondary';
}

const variantClassName: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'bg-amber-300 text-stone-950 shadow-lg shadow-amber-500/20 hover:bg-amber-200',
  secondary:
    'border border-white/15 bg-white/5 text-white hover:bg-white/10',
};

export function Button({
  label,
  variant = 'primary',
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition ${variantClassName[variant]}`}
      type="button"
    >
      {label}
    </button>
  );
}
