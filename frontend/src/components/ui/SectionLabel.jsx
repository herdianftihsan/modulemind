export default function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <span className="h-px flex-1 bg-zinc-800" />
      <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-zinc-600">
        {children}
      </span>
      <span className="h-px flex-1 bg-zinc-800" />
    </div>
  );
}