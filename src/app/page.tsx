import Link from "next/link";

export default function Home() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/art1.jpg')" }}
    >
      <h1 className="text-5xl font-bold text-white">Welcome to Digital Art Gallery</h1>
      <p className="mt-4 text-lg text-white">Explore our stunning collection of digital art.</p>
      <div className="mt-8">
        <Link href="/about">
          <a className="text-blue-500 hover:underline">Learn more about us</a>
        </Link>
      </div>
    </div>
  );
}
