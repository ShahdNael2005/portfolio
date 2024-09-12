import Link from "next/link";
import Image from "next/image";

export default function Project9() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="w-full max-w-5xl text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">Android Uni App</h1>
        <p className="text-lg opacity-70">
        Android app for the SCMS that provides essential information on About Us, Our People, Outreach, and Research. The app features a user-friendly interface, allowing easy navigation through its sections. I prioritize responsiveness, ensuring it works seamlessly across different screen sizes and orientations with flexible layouts. Additionally, I am incorporating accessibility features to cater to a diverse user base. Through thorough testing, I aim to ensure the app is functional and engaging, serving as a valuable resource for anyone interested in SCMS.
        </p>
      </section>

      {/* Images Section */}
      <section className="w-full max-w-5xl text-center mb-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="border rounded-lg p-4 transform transition-transform duration-300 hover:scale-105">
            <Image src="/images/android1.png" alt="Photo 1" width={500} height={300} className="rounded-lg" />
          </div>
          <div className="border rounded-lg p-4 transform transition-transform duration-300 hover:scale-105">
            <Image src="/images/android2.png" alt="Photo 2" width={500} height={300} className="rounded-lg" />
          </div>
          <div className="border rounded-lg p-4 transform transition-transform duration-300 hover:scale-105">
            <Image src="/images/android3.png" alt="Photo 3" width={500} height={300} className="rounded-lg" />
          </div>
          <div className="border rounded-lg p-4 transform transition-transform duration-300 hover:scale-105">
            <Image src="/images/android4.png" alt="Photo 4" width={500} height={300} className="rounded-lg" />
          </div>
          <div className="border rounded-lg p-4 transform transition-transform duration-300 hover:scale-105">
            <Image src="/images/android5.png" alt="Photo 5" width={500} height={300} className="rounded-lg" />
          </div>
          <div className="border rounded-lg p-4 transform transition-transform duration-300 hover:scale-105">
            <Image src="/images/android6.png" alt="Photo 6" width={500} height={300} className="rounded-lg" />
          </div>
        </div>
      </section>

      <Link href="/"><button className="bg-black text-white p-2 rounded-lg hover:bg-gray-500">Back</button></Link>
    </main>
  );
}