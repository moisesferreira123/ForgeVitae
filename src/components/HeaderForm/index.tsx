import { type LucideIcon } from "lucide-react";

export default function HeaderForm({title, subtitle, Icon} : {title:string, subtitle: string, Icon: LucideIcon}) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 text-(--primary)">
        <Icon size={22} />
        <h2 className="text-2xl text-(--foreground) font-bold">{title}</h2>
      </div>
      <p className="text-(--muted-foreground)">{subtitle}</p>
    </div>
  );
}