export default function HeaderForm({title, subtitle} : {title:string, subtitle: string}) {
  return (
    <div className="space-y-2">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-(--muted-foreground)">{subtitle}</p>
    </div>
  );
}