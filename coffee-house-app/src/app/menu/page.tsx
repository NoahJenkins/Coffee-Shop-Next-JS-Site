"use client";
import Link from "next/link";

export default function MenuPage() {
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
        <section className="w-full max-w-lg text-center">
          <h2 className="text-3xl font-bold mb-2">Our Menu</h2>
        </section>
        {/* Hot Drinks Table */}
        <section className="w-full max-w-lg">
          <h3 className="text-xl font-semibold mb-2">Hot Drinks</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full text-base border border-[#4B2067]">
              <thead className="bg-[#f6f0fa]">
                <tr>
                  <th className="p-2 border border-[#4B2067]">Drink</th>
                  <th className="p-2 border border-[#4B2067]">S</th>
                  <th className="p-2 border border-[#4B2067]">M</th>
                  <th className="p-2 border border-[#4B2067]">L</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border border-[#4B2067]">Espresso</td>
                  <td className="p-2 border border-[#4B2067]">$2.50 / 5 cal</td>
                  <td className="p-2 border border-[#4B2067]">$3.00 / 7 cal</td>
                  <td className="p-2 border border-[#4B2067]">$3.50 / 10 cal</td>
                </tr>
                <tr>
                  <td className="p-2 border border-[#4B2067]">Americano</td>
                  <td className="p-2 border border-[#4B2067]">$2.75 / 10 cal</td>
                  <td className="p-2 border border-[#4B2067]">$3.25 / 15 cal</td>
                  <td className="p-2 border border-[#4B2067]">$3.75 / 20 cal</td>
                </tr>
                <tr>
                  <td className="p-2 border border-[#4B2067]">Cappuccino</td>
                  <td className="p-2 border border-[#4B2067]">$3.00 / 60 cal</td>
                  <td className="p-2 border border-[#4B2067]">$3.50 / 90 cal</td>
                  <td className="p-2 border border-[#4B2067]">$4.00 / 120 cal</td>
                </tr>
                <tr>
                  <td className="p-2 border border-[#4B2067]">Latte</td>
                  <td className="p-2 border border-[#4B2067]">$3.25 / 80 cal</td>
                  <td className="p-2 border border-[#4B2067]">$3.75 / 120 cal</td>
                  <td className="p-2 border border-[#4B2067]">$4.25 / 160 cal</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        {/* Cold Drinks Table */}
        <section className="w-full max-w-lg">
          <h3 className="text-xl font-semibold mb-2">Cold Drinks</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full text-base border border-[#4B2067]">
              <thead className="bg-[#f6f0fa]">
                <tr>
                  <th className="p-2 border border-[#4B2067]">Drink</th>
                  <th className="p-2 border border-[#4B2067]">S</th>
                  <th className="p-2 border border-[#4B2067]">M</th>
                  <th className="p-2 border border-[#4B2067]">L</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border border-[#4B2067]">Iced Coffee</td>
                  <td className="p-2 border border-[#4B2067]">$2.75 / 10 cal</td>
                  <td className="p-2 border border-[#4B2067]">$3.25 / 15 cal</td>
                  <td className="p-2 border border-[#4B2067]">$3.75 / 20 cal</td>
                </tr>
                <tr>
                  <td className="p-2 border border-[#4B2067]">Cold Brew</td>
                  <td className="p-2 border border-[#4B2067]">$3.00 / 15 cal</td>
                  <td className="p-2 border border-[#4B2067]">$3.50 / 20 cal</td>
                  <td className="p-2 border border-[#4B2067]">$4.00 / 25 cal</td>
                </tr>
                <tr>
                  <td className="p-2 border border-[#4B2067]">Iced Latte</td>
                  <td className="p-2 border border-[#4B2067]">$3.50 / 90 cal</td>
                  <td className="p-2 border border-[#4B2067]">$4.00 / 130 cal</td>
                  <td className="p-2 border border-[#4B2067]">$4.50 / 170 cal</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        {/* Specialty Drinks Table */}
        <section className="w-full max-w-lg">
          <h3 className="text-xl font-semibold mb-2">Specialty Drinks</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full text-base border border-[#4B2067]">
              <thead className="bg-[#f6f0fa]">
                <tr>
                  <th className="p-2 border border-[#4B2067]">Drink</th>
                  <th className="p-2 border border-[#4B2067]">S</th>
                  <th className="p-2 border border-[#4B2067]">M</th>
                  <th className="p-2 border border-[#4B2067]">L</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border border-[#4B2067]">Lavender Latte</td>
                  <td className="p-2 border border-[#4B2067]">$3.75 / 100 cal</td>
                  <td className="p-2 border border-[#4B2067]">$4.25 / 140 cal</td>
                  <td className="p-2 border border-[#4B2067]">$4.75 / 180 cal</td>
                </tr>
                <tr>
                  <td className="p-2 border border-[#4B2067]">Honey Cinnamon Cold Brew</td>
                  <td className="p-2 border border-[#4B2067]">$4.00 / 80 cal</td>
                  <td className="p-2 border border-[#4B2067]">$4.50 / 110 cal</td>
                  <td className="p-2 border border-[#4B2067]">$5.00 / 140 cal</td>
                </tr>
                <tr>
                  <td className="p-2 border border-[#4B2067]">Matcha Latte</td>
                  <td className="p-2 border border-[#4B2067]">$4.25 / 120 cal</td>
                  <td className="p-2 border border-[#4B2067]">$4.75 / 160 cal</td>
                  <td className="p-2 border border-[#4B2067]">$5.25 / 200 cal</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        {/* Pastries Table */}
        <section className="w-full max-w-lg">
          <h3 className="text-xl font-semibold mb-2">Pastries</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full text-base border border-[#4B2067]">
              <thead className="bg-[#f6f0fa]">
                <tr>
                  <th className="p-2 border border-[#4B2067]">Pastry</th>
                  <th className="p-2 border border-[#4B2067]">S</th>
                  <th className="p-2 border border-[#4B2067]">M</th>
                  <th className="p-2 border border-[#4B2067]">L</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border border-[#4B2067]">Croissant</td>
                  <td className="p-2 border border-[#4B2067]">$2.50 / 180 cal</td>
                  <td className="p-2 border border-[#4B2067]">$3.00 / 220 cal</td>
                  <td className="p-2 border border-[#4B2067]">$3.50 / 260 cal</td>
                </tr>
                <tr>
                  <td className="p-2 border border-[#4B2067]">Muffin</td>
                  <td className="p-2 border border-[#4B2067]">$2.25 / 200 cal</td>
                  <td className="p-2 border border-[#4B2067]">$2.75 / 250 cal</td>
                  <td className="p-2 border border-[#4B2067]">$3.25 / 300 cal</td>
                </tr>
                <tr>
                  <td className="p-2 border border-[#4B2067]">Scone</td>
                  <td className="p-2 border border-[#4B2067]">$2.75 / 220 cal</td>
                  <td className="p-2 border border-[#4B2067]">$3.25 / 270 cal</td>
                  <td className="p-2 border border-[#4B2067]">$3.75 / 320 cal</td>
                </tr>
                <tr>
                  <td className="p-2 border border-[#4B2067]">Banana Bread</td>
                  <td className="p-2 border border-[#4B2067]">$2.50 / 210 cal</td>
                  <td className="p-2 border border-[#4B2067]">$3.00 / 260 cal</td>
                  <td className="p-2 border border-[#4B2067]">$3.50 / 310 cal</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
      <footer className="py-4 text-center text-xs bg-[#f6f0fa] text-[#4B2067]">© 2025 Axiom Coffee</footer>
    </div>
  );
}
