import Link from 'next/link';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav className="flex justify-between p-4 bg-gray-800 text-white">
          <div>
            <Link href="/" className="font-bold text-lg">
              Digital Art Gallery
            </Link>
          </div>
          <div>
            <Link href="/" className="mx-4">
              Home
            </Link>
            <Link href="/about" className="mx-4">
              About
            </Link>
            <Link href="/contact" className="mx-4">
              Contact
            </Link>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
