import Link from "next/link";
import Image from "next/image";

export default function Project2() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="w-full max-w-5xl text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">Http and Https</h1>
        <p className="text-lg opacity-70">
          Made a website into appropriate folders, with index.html as the default page located in the root directory. I ensured that the styles are separated by linking a common style.css file to all HTML pages, allowing them to revert to plain HTML when the link is commented out. I used and styled at least two levels of heading tags, paragraph tags, divs for logical divisions, bulleted lists, one table, and two span tags. In my CSS, I included a grid layout and selectors in the forms element1 element2 and element1 > element2. For images, I implemented a responsive approach with three variants (narrow, medium, wide) so the browser automatically selects the appropriate version based on the page width. I made sure the use of HTML elements is clear for marking.
        </p>          
      </section>

      {/* Images Section */}
      <section className="w-full max-w-5xl text-center mb-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="border rounded-lg p-4 transform transition-transform duration-300 hover:scale-105">
            <Image src="/images/http1.png" alt="Photo 1" width={500} height={300} className="rounded-lg" />
          </div>
          <div className="border rounded-lg p-4 transform transition-transform duration-300 hover:scale-105">
            <Image src="/images/http2.png" alt="Photo 2" width={500} height={300} className="rounded-lg" />
          </div>
          <div className="border rounded-lg p-4 transform transition-transform duration-300 hover:scale-105">
            <Image src="/images/http3.png" alt="Photo 3" width={500} height={300} className="rounded-lg" />
          </div>
          <div className="border rounded-lg p-4 transform transition-transform duration-300 hover:scale-105">
            <Image src="/images/http4.png" alt="Photo 4" width={500} height={300} className="rounded-lg" />
          </div>
          <div className="border rounded-lg p-4 transform transition-transform duration-300 hover:scale-105">
            <Image src="/images/http5.png" alt="Photo 5" width={500} height={300} className="rounded-lg" />
          </div>
        </div>
      </section>

      <Link href="/"><button className="bg-black text-white p-2 rounded-lg hover:bg-gray-500">Back</button></Link>
    </main>
  );
}