"use client";
import Link from "next/link";

const events = [
  { date: "July 15, 2025", title: "Open Mic Night" },
  { date: "July 22, 2025", title: "Latte Art Workshop" },
  { date: "August 5, 2025", title: "Local Artist Showcase" },
];

export default function EventsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#4B2067]">
      <header className="py-6 px-4 flex justify-between items-center shadow-md bg-white">
        <h1 className="text-2xl font-bold tracking-tight">Purple Bean Coffee House</h1>
        <nav className="flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/menu">Menu</Link>
          <Link href="/events">Events</Link>
        </nav>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-8 gap-8">
        <section className="w-full max-w-lg text-center">
          <h2 className="text-3xl font-bold mb-2">Upcoming Events</h2>
          <ul className="flex flex-col gap-4 mt-4">
            {events.map((event, idx) => (
              <li key={idx} className="bg-[#f6f0fa] p-4 rounded-lg shadow text-base">
                <span className="block font-semibold text-lg mb-1">{event.title}</span>
                <span className="text-xs text-[#4B2067]">{event.date}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <footer className="py-4 text-center text-xs bg-[#f6f0fa] text-[#4B2067]">© 2025 Purple Bean Coffee House</footer>
    </div>
  );
}
