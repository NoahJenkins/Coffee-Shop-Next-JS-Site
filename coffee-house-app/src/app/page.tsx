
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#4B2067]">
      <header className="py-6 px-4 flex justify-between items-center shadow-md bg-white">
        <h1 className="text-2xl font-bold tracking-tight">Axiom Coffee</h1>
        <nav className="flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/menu">Menu</Link>
          <Link href="/events">Events</Link>
        </nav>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center px-2 py-6 gap-8 w-full">
        {/* Mission Section - Single Column */}
        <section className="w-full max-w-2xl text-center mb-6">
          <h2 className="text-3xl font-bold mb-2">Our Mission</h2>
          <p className="text-base mb-4">To serve the best coffee in town, create a welcoming space for all, and support our local community.</p>
        </section>
        {/* Triple Column Section: Coffee, Community, Sustainability */}
        <section className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-[#f6f0fa] rounded-lg p-6 flex flex-col items-center">
            <Image src="/coffee-cup.png" alt="Coffee Cup" width={60} height={60} />
            <h3 className="text-xl font-semibold mt-2 mb-1">Our Coffee</h3>
            <p className="text-sm">From classic espresso to creative specialty drinks, we brew every cup with care and quality beans.</p>
          </div>
          <div className="bg-[#f6f0fa] rounded-lg p-6 flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-1">Community</h3>
            <p className="text-sm">We host local events, support artists, and provide a space for everyone to connect and thrive.</p>
          </div>
          <div className="bg-[#f6f0fa] rounded-lg p-6 flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-1">Sustainability</h3>
            <p className="text-sm">We use eco-friendly products and partner with responsible suppliers to reduce our footprint.</p>
          </div>
        </section>
        {/* Double Column Section: Reviews & Hours */}
        <section className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-[#f6f0fa] rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-2 text-center">Customer Reviews</h2>
            <div className="flex flex-col gap-2">
              <blockquote className="bg-white p-3 rounded-lg border-l-4 border-[#4B2067] text-sm">“Best coffee and friendliest staff in the city!”</blockquote>
              <blockquote className="bg-white p-3 rounded-lg border-l-4 border-[#4B2067] text-sm">“Love the cozy atmosphere and delicious pastries.”</blockquote>
              <blockquote className="bg-white p-3 rounded-lg border-l-4 border-[#4B2067] text-sm">“A perfect spot to relax or get some work done.”</blockquote>
            </div>
          </div>
          <div className="bg-[#f6f0fa] rounded-lg p-6 flex flex-col items-center justify-center">
            <h2 className="text-2xl font-semibold mb-2">Hours</h2>
            <ul className="text-sm text-left">
              <li>Monday: 8:00 AM – 6:00 PM</li>
              <li>Tuesday: 8:00 AM – 6:00 PM</li>
              <li>Wednesday: 8:00 AM – 6:00 PM</li>
              <li>Thursday: 8:00 AM – 6:00 PM</li>
              <li>Friday: 8:00 AM – 6:00 PM</li>
              <li>Saturday: 8:00 AM – 6:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </section>
        {/* Single Column: Location & Map */}
        <section className="w-full max-w-2xl text-center mb-6">
          <h2 className="text-2xl font-semibold mb-2">Visit Us</h2>
          <p className="text-base mb-2">4005 Golden Triangle Blvd, Fort Worth, TX 76244</p>
          <div className="w-full h-48 bg-[#e5e0ec] rounded-lg overflow-hidden flex items-center justify-center">
            <iframe
              title="Purple Bean Coffee House Location"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: "0.5rem" }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=4005+Golden+Triangle+Blvd,+Fort+Worth,+TX+76244&output=embed"
            ></iframe>
          </div>
        </section>
      </main>
      <footer className="py-4 text-center text-xs bg-[#f6f0fa] text-[#4B2067]">© 2025 Axiom Coffee</footer>
    </div>
  );
}
