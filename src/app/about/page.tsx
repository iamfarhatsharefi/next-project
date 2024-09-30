import Link from "next/link";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold">About Us</h1>
      <p className="mt-4 text-lg text-gray-600">
        This digital art gallery showcases a variety of artworks created by talented artists.
      </p>
      <div className="mt-8">
        {/* Added legacyBehavior to support <a> */}
        <Link href="/" legacyBehavior>
          <a className="text-blue-500 hover:underline">Go back to Home</a>
        </Link>
      </div>
    </div>
  );
};

export default About;
