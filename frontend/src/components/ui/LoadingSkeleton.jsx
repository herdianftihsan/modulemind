export default function LoadingSkeleton() {
  return (
    <div className="max-w-2xl mx-auto py-10 space-y-5 animate-pulse">
      {/* Header skeleton */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
        <div className="h-3 w-36 bg-zinc-700 rounded" />
      </div>
      {/* Tab row skeleton */}
      <div className="flex gap-2">
        {[80, 96, 110, 80].map((w, i) => (
          <div key={i} className="h-8 rounded-md bg-zinc-800" style={{ width: w }} />
        ))}
      </div>
      {/* Content skeleton */}
      <div className="border border-zinc-800 rounded-xl p-6 space-y-3 bg-zinc-900">
        <div className="h-3 bg-zinc-700 rounded w-1/3" />
        <div className="h-3 bg-zinc-800 rounded w-full" />
        <div className="h-3 bg-zinc-800 rounded w-5/6" />
        <div className="h-3 bg-zinc-800 rounded w-4/6" />
        <div className="h-3 bg-zinc-800 rounded w-full mt-2" />
        <div className="h-3 bg-zinc-800 rounded w-3/4" />
      </div>
      <p className="text-xs text-zinc-600 text-center pt-2">
        Menyusun modul &amp; menyembunyikan bug...
      </p>
    </div>
  );
}