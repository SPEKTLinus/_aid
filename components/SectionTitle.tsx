type SectionTitleProps = {
  children: React.ReactNode;
  id?: string;
  className?: string;
};

export function SectionTitle({
  children,
  id,
  className = "",
}: SectionTitleProps) {
  return (
    <div className={className}>
      <h2
        id={id}
        className="font-heading text-4xl font-bold uppercase tracking-widest text-brand-white sm:text-5xl md:text-6xl"
      >
        {children}
      </h2>
      <span
        className="mt-3 block h-0.5 w-16 bg-brand-olive"
        aria-hidden
      />
    </div>
  );
}
