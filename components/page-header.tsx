export function PageHeader({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="border-b border-border bg-paper pt-14 text-ink">
      <div className="mx-auto max-w-[1600px] px-4 pt-16 pb-12 sm:px-6 lg:px-10 lg:pt-24 lg:pb-16">
        <p className="label-tech text-cobalt">{label}</p>
        <h1 className="display-crop mt-4 max-w-5xl font-display text-5xl font-bold uppercase tracking-tight sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
