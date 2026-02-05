import { Link } from "react-router-dom";

export default function Resume() {
  return (
    <div className="flex min-h-screen w-full">
      <aside className="min-h-screen h-full w-64 bg-(--background) p-6">
        <Link
          to={'/'}
          className="flex items-center "
        >

        </Link>
      </aside>
    </div>
  );
}