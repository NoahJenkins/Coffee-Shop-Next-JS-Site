
import Link from "next/link";
import Image from "next/image";
import CoffeeCup from "./coffee-cup.svg";
import Building from "./building.svg";
import Heart from "./heart.svg";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#4B2067]">
      <header className="py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center shadow-md bg-white sticky top-0 z-10">
        <h1 className="text-3xl font-bold tracking-tight">Axiom Coffee</h1>
        <nav className="flex gap-4">
          <Link href="/" className="text-lg hover:text-purple-500 transition-colors">Home</Link>
          <Link href="/menu" className="text-lg hover:text-purple-500 transition-colors">Menu</Link>
          <Link href="/events" className="text-lg hover:text-purple-500 transition-colors">Events</Link>
        </nav>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 gap-12 w-full">
        {/* Hero Section */}
        <section className="w-full max-w-4xl text-center">
          <h2 className="text-5xl font-extrabold mb-4">CONNECTING TO THE COMMUNITY</h2>
          <p className="text-lg mb-6">Axiom meaning a statement or proposition that is regarded as being established, accepted, or self-evidently true. Axiom Coffee has been talked about and worked on for four years. Axiom exists to serve the best coffee in an environment that develops community..</p>
        </section>
        {/* Triple Column Section: Coffee, Community, Sustainability */}
        <section className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#f6f0fa] rounded-xl p-8 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow">
            <Image src={Building} alt="Building" width={80} height={80} />
            <h3 className="text-2xl font-semibold mt-4 mb-2">Versatile Space</h3>
            <p>The establishment offers a versatile space that caters to various needs, including studying, conducting business meetings in its Executive Suite, and connecting with friends and family.</p>
          </div>
          <div className="bg-[#f6f0fa] rounded-xl p-8 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow">
            <Image src={CoffeeCup} alt="Coffee Cup" width={80} height={80} />
            <h3 className="text-2xl font-semibold mt-4 mb-2">Expertly Roasted</h3>
            <p>The coffee served is made from organically grown coffee beans sourced from the mountainous mile-high region outside Tegucigalpa, Honduras. This emphasizes the commitment to quality and responsible sourcing practices.</p>
          </div>
          <div className="bg-[#f6f0fa] rounded-xl p-8 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow">
            <Image src={Heart} alt="Heart" width={80} height={80} />
            <h3 className="text-2xl font-semibold mt-4 mb-2">Ethicically Sourced</h3>
            <p>The coffee served is made from organically grown coffee beans sourced from the mountainous mile-high region outside Tegucigalpa, Honduras. This emphasizes the commitment to quality and responsible sourcing practices.</p>
          </div>
        </section>
        {/* Double Column Section: Reviews & Hours */}
        <section className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#f6f0fa] rounded-xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">What Our Customers Say</h2>
            <div className="flex flex-col gap-4">
              <blockquote className="bg-white p-4 rounded-lg border-l-4 border-purple-500 italic">“Best coffee and friendliest staff in the city!”</blockquote>
              <blockquote className="bg-white p-4 rounded-lg border-l-4 border-purple-500 italic">“Love the cozy atmosphere and delicious pastries.”</blockquote>
              <blockquote className="bg-white p-4 rounded-lg border-l-4 border-purple-500 italic">“A perfect spot to relax or get some work done.”</blockquote>
            </div>
          </div>
          <div className="bg-[#f6f0fa] rounded-xl p-8 flex flex-col items-center justify-center shadow-lg">
            <h2 className="text-3xl font-bold mb-4">Opening Hours</h2>
            <ul className="text-lg text-center">
              <li>Monday - Saturday: 8:00 AM – 6:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </section>
        {/* Single Column: Location & Map */}
        <section className="w-full max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Visit Us</h2>
          <p className="text-lg mb-4">4005 Golden Triangle Blvd, Fort Worth, TX 76244</p>
          <div className="w-full h-64 bg-[#e5e0ec] rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="Axiom Coffee House Location"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=4005+Golden+Triangle+Blvd,+Fort+Worth,+TX+76244&output=embed"
            ></iframe>
          </div>
        </section>
      </main>
      <footer className="py-6 text-center bg-white text-[#4B2067]">
        <p>© 2025 Axiom Coffee. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
