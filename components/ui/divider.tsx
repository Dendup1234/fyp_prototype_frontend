export default function Divider({ label = "OR" }: { label?: string }) {
  return (
    <div className="my-4 flex items-center gap-4">
      <div className="h-px flex-1 bg-black/30" />
      <span className="text-xs text-black/30 tracking-wide">{label}</span>
      <div className="h-px flex-1 bg-black/30" />
    </div>
  );
}
