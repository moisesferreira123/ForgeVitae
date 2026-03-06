interface LabelProps {
  id: string;
  value: string
}

export default function Label({id, value} : LabelProps) {
  return (
    <label htmlFor={id} className="ml-1 text-sm font-medium flex items-center">{value}</label>
  );
}