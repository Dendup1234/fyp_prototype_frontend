import Card from "@/components/ui/card";

type AuthCardProps = {
    title: string;
    subtitle?: string;
    children: React.ReactNode;
    footer?: React.ReactNode;
    bg?: string;
    className?: string;
}

export default function AuthCard({ title, subtitle, children, footer, bg, className = "" }: AuthCardProps) {
    return (
        <Card bg={bg} className={["w-full max-w-[520px] flex flex-col", className].join(" ")}>
            <div className="mb-6 text-center">
                <h1 className="text-3xl font-semibold font-sans text-[#769FCD]">{title}</h1>
                {subtitle && <p className="mt-2 text-sm text-[#000000]">{subtitle}</p>}
            </div>
            <div className="flex-1">{children}</div>
            {footer && <div className="mt-6 text-xs text-foreground/60 font-sans">{footer}</div>}
        </Card>
    );
}
