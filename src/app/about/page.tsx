import Link from "next/link";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
      <h1 className="text-4xl font-bold text-white">About Us</h1>
      <p className="mt-4 text-lg text-gray-200">
        This digital art gallery showcases a variety of artworks created by talented artists.
      </p>
      
      {/* Display images from the public/images folder */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
        <img src="/images/digital1.jpg" alt="Art 1" className="rounded-lg shadow-lg" />
        <img src="/images/digital2.jpg" alt="Art 2" className="rounded-lg shadow-lg" />
        <img src="/images/digital3.jpg" alt="Art 3" className="rounded-lg shadow-lg" />
        <img src="/images/favicon.jpeg" alt="Art 4" className="rounded-lg shadow-lg" />
        <img src="/images/digital9.jpg" alt="Art 5" className="rounded-lg shadow-lg" />
        <img src="/images/digital6.jpg" alt="Art 6" className="rounded-lg shadow-lg" />
        <img src="/images/digital7.jpg" alt="Art 7" className="rounded-lg shadow-lg" />
        <img src="/images/digital8.jpg" alt="Art 8" className="rounded-lg shadow-lg" />
        <img src="/images/digital10.jpg" alt="Art 9" className="rounded-lg shadow-lg" />
        <img src="/images/digital13.jpg" alt="Art 10" className="rounded-lg shadow-lg" />
        <img src="/images/digital11.jpg" alt="Art 11" className="rounded-lg shadow-lg" />
        <img src="/images/digital12.jpg" alt="Art 6" className="rounded-lg shadow-lg" />
    
      </div>

      <div className="mt-8">
        {/* Link back to the home page */}
        <Link href="/" className="text-blue-200 hover:underline">
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default About;
