import Link from "next/link";
import Image from "next/image";

export default function Project1() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="w-full max-w-5xl text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">Once Upon A Time</h1>
        <p className="text-lg opacity-70">
          Created an interactive touchscreen authoring tool for children's stories, using AI like ChatGPT and DALL-E for generating artwork, sound effects, and content.
        </p>
      </section>

      {/* Images Section */}
      <section className="w-full max-w-5xl text-center mb-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="border rounded-lg p-4 transform transition-transform duration-300 hover:scale-105">
            <Image src="/images/once1.png" alt="Photo 1" width={500} height={300} className="rounded-lg" />
          </div>
          <div className="border rounded-lg p-4 transform transition-transform duration-300 hover:scale-105">
            <Image src="/images/once2.png" alt="Photo 2" width={500} height={300} className="rounded-lg" />
          </div>
          <div className="border rounded-lg p-4 transform transition-transform duration-300 hover:scale-105">
            <Image src="/images/once4.png" alt="Photo 3" width={500} height={300} className="rounded-lg" />
          </div>
          <div className="border rounded-lg p-4 transform transition-transform duration-300 hover:scale-105">
            <Image src="/images/once3.png" alt="Photo 4" width={500} height={300} className="rounded-lg" />
          </div>
          <div className="border rounded-lg p-4 transform transition-transform duration-300 hover:scale-105">
            <Image src="/images/once5.png" alt="Photo 5" width={500} height={300} className="rounded-lg" />
          </div>
          <div className="border rounded-lg p-4 transform transition-transform duration-300 hover:scale-105">
            <Image src="/images/once6.png" alt="Photo 6" width={500} height={300} className="rounded-lg" />
          </div>
          <div className="border rounded-lg p-4 transform transition-transform duration-300 hover:scale-105">
            <Image src="/images/once7.png" alt="Photo 7" width={500} height={300} className="rounded-lg" />
          </div>
          <div className="border rounded-lg p-4 transform transition-transform duration-300 hover:scale-105">
            <Image src="/images/once8.png" alt="Photo 8" width={500} height={300} className="rounded-lg" />
          </div>
          <div className="border rounded-lg p-4 transform transition-transform duration-300 hover:scale-105">
            <Image src="/images/once9.png" alt="Photo 9" width={500} height={300} className="rounded-lg" />
          </div>
          <div className="border rounded-lg p-4 transform transition-transform duration-300 hover:scale-105">
            <Image src="/images/once10.png" alt="Photo 10" width={500} height={300} className="rounded-lg" />
          </div>
          <section className="w-full max-w-5xl text-center mt-16">
            <a href="https://once-upon-a-time-app.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              Visit the app on Vercel
            </a>
          </section>
        </div>
      </section>

      <Link href="/">
        <button className="bg-black text-white p-2 rounded-lg hover:bg-gray-500">Back</button>
      </Link>
    </main>
  );
}
