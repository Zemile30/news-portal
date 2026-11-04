import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4 text-center">
      <h1 className="font-serif text-4xl font-bold">404</h1>
      <p className="text-gray-600">Bu xəbər tapılmadı.</p>
      <Link href="/" className="bg-red-600 px-5 py-2 text-sm text-white">
        Ana səhifəyə qayıt
      </Link>
    </div>
  );
}