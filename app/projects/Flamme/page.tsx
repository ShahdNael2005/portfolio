import Link from "next/link";
import Image from "next/image";

export default function Project4() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="w-full max-w-5xl text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">Flamme Rouge Game</h1>
        <p className="text-lg opacity-70">
          Recreated the original board game using C#, focusing on making it functional and user-friendly. This involved analyzing the gameplay mechanics and replicating them while maintaining the same core functionality. I designed an intuitive user interface that allows players to easily navigate the game and interact with its elements. All original features, such as player movement, scoring systems, and game rules, were implemented, and I optimized performance to enhance the overall experience
        </p>
      </section>

      {/* Images Section */}
      <section className="w-full max-w-5xl text-center mb-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="border rounded-lg p-4 transform transition-transform duration-300 hover:scale-105">
            <Image src="/images/flamme1.png" alt="Photo 1" width={500} height={300} className="rounded-lg" />
          </div>
          <div className="border rounded-lg p-4 transform transition-transform duration-300 hover:scale-105">
            <Image src="/images/flamme2.png" alt="Photo 2" width={500} height={300} className="rounded-lg" />
          </div>
          <div className="border rounded-lg p-4 transform transition-transform duration-300 hover:scale-105">
            <Image src="/images/flamme3.png" alt="Photo 3" width={500} height={300} className="rounded-lg" />
          </div>
        </div>
      </section>

      <Link href="/"><button className="bg-black text-white p-2 rounded-lg hover:bg-gray-500">Back</button></Link>
    </main>
  );
}