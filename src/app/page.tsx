import Link from "next/link";

export default function Home() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen"
      style={{ backgroundColor: 'black' }}
    >
      <h1 className="text-5xl font-bold text-white">Welcome to Digital Art Gallery</h1>
      
      <p className="mt-4 text-lg text-white">
        The Digital Art Gallery is an immersive online platform showcasing unique and diverse digital artworks.
      </p>
      
      <p className="mt-2 text-lg text-white">
        Our gallery features a wide array of styles and techniques, from abstract designs to photorealistic creations.
      </p>
      
      <p className="mt-2 text-lg text-white">
        Every piece of art is carefully curated to provide an engaging experience for all visitors.
      </p>
      
      <p className="mt-2 text-lg text-white">
        Explore our stunning collection of digital art, crafted by talented artists from around the world.
      </p>
      
      <div className="mt-8">
        <Link href="/about" className="text-blue-500 hover:underline">
          Learn more about us
        </Link>
      </div>
    </div>
  );
}
