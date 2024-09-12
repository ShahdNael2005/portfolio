import Link from "next/link";
import Image from "next/image";

export default function Project8() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="w-full max-w-5xl text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">Digital Circuit Design</h1>
        <p className="text-lg opacity-70">
          A flexible and robust object-oriented digital circuit editor that allows users to customize circuits easily. The editor features an intuitive interface for creating and modifying digital circuits with components like logic gates and flip-flops. By utilizing object-oriented programming principles, I ensure modularity, enabling easy addition of new components and features. Users can manipulate circuit elements through drag-and-drop functionality, real-time simulation, and error checking. Additionally, the editor supports saving and exporting circuits for easy sharing.
        </p>
      </section>

      {/* Images Section */}
      <section className="w-full max-w-5xl text-center mb-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="border rounded-lg p-4 transform transition-transform duration-300 hover:scale-105">
            <Image src="/images/circuit1.png" alt="Photo 1" width={500} height={300} className="rounded-lg" />
          </div>
          <div className="border rounded-lg p-4 transform transition-transform duration-300 hover:scale-105">
            <Image src="/images/circuit2.png" alt="Photo 2" width={500} height={300} className="rounded-lg" />
          </div>
          <div className="border rounded-lg p-4 transform transition-transform duration-300 hover:scale-105">
            <Image src="/images/circuit3.png" alt="Photo 3" width={500} height={300} className="rounded-lg" />
          </div>
        </div>
      </section>

      <Link href="/"><button className="bg-black text-white p-2 rounded-lg hover:bg-gray-500">Back</button></Link>
    </main>
  );
}