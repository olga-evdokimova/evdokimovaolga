import Link from "next/link";

export default function NotFound() {
  return (
        <div className="not-found">
          <h2 className="not-found__title" title="404">
            404
          </h2>
          <p title="Страница не найдена">Страница не найдена</p>
          <Link href="/">Вернуться на главную</Link>
        </div>
  );
}
