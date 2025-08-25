export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <header>
        <h1 className="text-3xl font-bold">Willkommen im Massagestudio</h1>
      </header>

      <main className="mt-6">
        <section>
          <h2 className="text-2xl font-semibold mb-2">Unsere Massagen</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {/* Hier kommen deine Massage-Karten rein */}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-2">Gutscheine</h2>
          <p>Hier kannst du Gutscheine kaufen.</p>
        </section>
      </main>

      <footer className="mt-10 text-center text-gray-500">
        © 2025 Massagestudio
      </footer>
    </div>
  );
}
