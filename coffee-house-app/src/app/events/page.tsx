"use client";
import Link from "next/link";


import { useState } from "react";

const events = [
  { date: "2025-07-15", title: "Open Mic Night" },
  { date: "2025-07-22", title: "Latte Art Workshop" },
  { date: "2025-08-05", title: "Local Artist Showcase" },
];

function getDaysInMonth(year: number, month: number): number {
  console.log("[DEBUG] getDaysInMonth called with:", { year, month });
  return new Date(year, month + 1, 0).getDate();
}

function getMonthName(month: number): string {
  console.log("[DEBUG] getMonthName called with:", { month });
  return new Date(2025, month, 1).toLocaleString("default", { month: "long" });
}


export default function EventsPage() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();

  // Filter events for the current month
  const monthEvents = events.filter(e => {
    const d = new Date(e.date);
    return d.getMonth() === currentMonth && d.getFullYear() === currentYear;
  });

  function nextMonth() {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(y => y + 1);
    } else {
      setCurrentMonth(m => m + 1);
    }
  }
  function prevMonth() {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(y => y - 1);
    } else {
      setCurrentMonth(m => m - 1);
    }
  }

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
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-8 gap-8">
        <section className="w-full max-w-lg md:max-w-2xl lg:max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-2">Events Calendar</h2>
          <div className="flex justify-between items-center mb-2">
            <button onClick={prevMonth} className="px-2 py-1 rounded bg-[#f6f0fa]">&lt;</button>
            <span className="font-semibold">{getMonthName(currentMonth)} {currentYear}</span>
            <button onClick={nextMonth} className="px-2 py-1 rounded bg-[#f6f0fa]">&gt;</button>
          </div>
          <div className="grid grid-cols-7 gap-1 md:gap-2 text-xs md:text-base">
            {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(d => (
              <div key={d} className="font-bold py-1 md:py-2 border border-gray-300">{d}</div>
            ))}
            {Array(firstDay).fill(null).map((_, i) => (
              <div key={"empty-"+i} className="border border-gray-300"></div>
            ))}
            {Array(daysInMonth).fill(null).map((_, i) => {
              const day = i + 1;
              const dateStr = `${currentYear}-${String(currentMonth+1).padStart(2,"0")}-${String(day).padStart(2,"0")}`;
              const event = events.find(e => e.date === dateStr);
              return (
                <div key={day} className={`py-2 md:py-4 rounded border border-gray-300 ${event ? "bg-[#e5e0ec] font-bold" : ""}`}>{day}{event && <span className="block text-[10px] md:text-sm">{event.title}</span>}</div>
              );
            })}
          </div>
          {monthEvents.length > 0 && (
            <ul className="mt-4 flex flex-col gap-2">
              {monthEvents.map((event, idx) => (
                <li key={idx} className="bg-[#f6f0fa] p-2 rounded text-sm md:text-base">
                  <span className="font-semibold">{new Date(event.date).toLocaleDateString()}</span>: {event.title}
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
      <footer className="py-4 text-center text-xs bg-[#f6f0fa] text-[#4B2067]">© 2025 Axiom Coffee</footer>
    </div>
  );
}
