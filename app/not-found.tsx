import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: "#F8F8F6" }}>
      <div className="text-center max-w-md px-6">
        <Image src="/STAR.png" alt="" width={48} height={48} className="mx-auto mb-6 opacity-20" />
        <h1
          className="text-4xl font-bold mb-3"
          style={{ fontFamily: "'Sora', sans-serif", color: "#0F1629" }}
        >
          Page not found
        </h1>
        <p className="text-sm mb-8" style={{ color: "#7A7F94" }}>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block text-sm font-semibold text-white px-6 py-3 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-md"
          style={{ background: "#6366F1" }}
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
