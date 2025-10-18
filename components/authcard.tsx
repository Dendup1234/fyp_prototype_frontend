import Card from "@/components/ui/card";

export default function AuthCard({
  title,
  subtitle,
  children,
  footer,
  bg,             // pass-through to Card for custom background
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  bg?: string;
}) {
  return (
    <Card bg={bg} className="w-full max-w-[520px]">
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-semibold font-sans text-[#769FCD]">{title}</h1>
        {subtitle && <p className="mt-2 text-sm text-[#000000]">{subtitle}</p>}
      </div>
      {children}
      {footer && <div className="mt-6 text-xs text-foreground/60">{footer}</div>}
    </Card>
  );
}
