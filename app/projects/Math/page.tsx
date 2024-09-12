import Link from "next/link";
import Image from "next/image";

export default function Project5() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="w-full max-w-5xl text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">The Math Quest Game</h1>
        <p className="text-lg opacity-70">
          A game where the user/ player is to catch the falling objects before they hit the ground and then answer a simple mathe question after they catch the fallin object. Every time the player answers a question wrong or fail to catch an object they lose a heart (they have 3 hearts) when they have no hearts left the game is over and they loose. The player can also chose the dificulty of the game (the dificulty only changes the speed of the falling objects). 
        </p>
      </section>

      {/* Images Section */}
      <section className="w-full max-w-5xl text-center mb-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="border rounded-lg p-4 transform transition-transform duration-300 hover:scale-105">
            <Image src="/images/math1.png" alt="Math Quest Game Screenshot 1" width={500} height={300} className="rounded-lg" />
          </div>
          <div className="border rounded-lg p-4 transform transition-transform duration-300 hover:scale-105">
            <Image src="/images/math2.png" alt="Math Quest Game Screenshot 2" width={500} height={300} className="rounded-lg" />
          </div>
          <div className="border rounded-lg p-4 transform transition-transform duration-300 hover:scale-105">
            <Image src="/images/math3.png" alt="Math Quest Game Screenshot 3" width={500} height={300} className="rounded-lg" />
          </div>
          <div className="border rounded-lg p-4 transform transition-transform duration-300 hover:scale-105">
            <Image src="/images/math4.png" alt="Math Quest Game Screenshot 4" width={500} height={300} className="rounded-lg" />
          </div>
          <div className="border rounded-lg p-4 transform transition-transform duration-300 hover:scale-105">
            <Image src="/images/math5.png" alt="Math Quest Game Screenshot 5" width={500} height={300} className="rounded-lg" />
          </div>
          <div className="border rounded-lg p-4 transform transition-transform duration-300 hover:scale-105">
            <Image src="/images/math6.png" alt="Math Quest Game Screenshot 6" width={500} height={300} className="rounded-lg" />
          </div>
        </div>
      </section>

      {/* Footer Section */}
   

      <Link href="/">
        <button className="bg-black text-white p-2 rounded-lg hover:bg-gray-500 mt-8">Back</button>
      </Link>
    </main>
  );
}
