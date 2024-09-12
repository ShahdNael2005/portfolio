import Link from "next/link";
import Image from "next/image";

export default function Project6() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="w-full max-w-5xl text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">Binary Search Tree</h1>
        <p className="text-lg opacity-70">
          A binary search tree (BST) using Java, implementing essential operations such as insertion, deletion, searching, and traversal. I enhanced the BST to function as a Computer Science dictionary, structuring each node to hold a term and its definition for efficient lookups. I included traversal methods like in-order and pre-order to display terms in sorted order, along with features for updating definitions and deleting terms.
        </p>
      </section>

      {/* Images Section */}
      <section className="w-full max-w-5xl text-center mb-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="border rounded-lg p-4 transform transition-transform duration-300 hover:scale-105">
            <Image src="/images/binary1.png" alt="Photo 1" width={500} height={300} className="rounded-lg" />
          </div>
          <div className="border rounded-lg p-4 transform transition-transform duration-300 hover:scale-105">
            <Image src="/images/binary2.png" alt="Photo 2" width={500} height={300} className="rounded-lg" />
          </div>
          <div className="border rounded-lg p-4 transform transition-transform duration-300 hover:scale-105">
            <Image src="/images/binary3.png" alt="Photo 3" width={500} height={300} className="rounded-lg" />
          </div>
          <div className="border rounded-lg p-4 transform transition-transform duration-300 hover:scale-105">
            <Image src="/images/binary4.png" alt="Photo 4" width={500} height={300} className="rounded-lg" />
          </div>
          <div className="border rounded-lg p-4 transform transition-transform duration-300 hover:scale-105">
            <Image src="/images/binary5.png" alt="Photo 5" width={500} height={300} className="rounded-lg" />
          </div>
          <div className="border rounded-lg p-4 transform transition-transform duration-300 hover:scale-105">
            <Image src="/images/binary6.png" alt="Photo 6" width={500} height={300} className="rounded-lg" />
          </div>
        </div>
      </section>

      <Link href="/"><button className="bg-black text-white p-2 rounded-lg hover:bg-gray-500">Back</button></Link>
    </main>
  );
}