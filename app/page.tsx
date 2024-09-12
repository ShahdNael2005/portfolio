import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Introduction Section */}
      <section className="w-full max-w-5xl text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">Kia ora, I'm Shahd</h1>
        <p className="text-lg opacity-70">I'm a software engineering student passionate about creating impactful software solutions. Here's a glimpse into my work and skills.</p>
      </section>

      {/* Projects Section */}
      <section className="w-full max-w-5xl text-center mb-16">
        <h2 className="text-4xl font-semibold mb-8">Projects</h2>
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <Link href="/projects/OnceUponATime" passHref>
            <div className="border rounded-lg p-4 transition-colors hover:border-gray-300 hover:bg-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-800/30 cursor-pointer">
              <h3 className="text-2xl font-semibold mb-2">Once upon a Time</h3>
              <p className="text-sm opacity-70">Created an interactive touchscreen authoring tool for children's stories, using AI like ChatGPT and DALL-E for generating images, sound effects, and content.</p>
            </div>
          </Link>
          {/* Project 2 */}
          <Link href="/projects/Http" passHref>
          <div className="border rounded-lg p-4 transition-colors hover:border-gray-300 hover:bg-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-800/30">
            <h3 className="text-2xl font-semibold mb-2">HTTP & HTTPS</h3>
            <p className="text-sm opacity-70">Created a website focused on HTTP using only HTML and CSS, implementing various features to show my knowledge of web development</p>
          </div>
          </Link>
          {/* Project 3 */}
          <div className="border rounded-lg p-4 transition-colors hover:border-gray-300 hover:bg-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-800/30">
            <h3 className="text-2xl font-semibold mb-2">Weather App</h3>
            <p className="text-sm opacity-70">Developed a weather app using MicroPython, displaying sound and shapes on the Microbit, and implemented a navigation button for each day. These functions goal is to help for accessibility services.
            </p>
          </div>
          {/* Project 4 */}
          <Link href="/projects/Flamme" passHref>
          <div className="border rounded-lg p-4 transition-colors hover:border-gray-300 hover:bg-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-800/30">
            <h3 className="text-2xl font-semibold mb-2">Flamme Rouge Game</h3>
            <p className="text-sm opacity-70">Recreated the original board game in a functional and user-friendly way with the same functionality using C#</p>
          </div>
          </Link>
          {/* Project 5 */}
          <Link href="/projects/Math" passHref>
          <div className="border rounded-lg p-4 transition-colors hover:border-gray-300 hover:bg-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-800/30">
            <h3 className="text-2xl font-semibold mb-2">The Math Quest Game</h3>
            <p className="text-sm opacity-70">Adding and subtracting game for kids where they must catch a falling object and answer the math question</p>
          </div>
          </Link>
          {/* Project 6 */}
          <Link href="/projects/Binary" passHref>
          <div className="border rounded-lg p-4 transition-colors hover:border-gray-300 hover:bg-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-800/30">
            <h3 className="text-2xl font-semibold mb-2">Binary Search Trees</h3>
            <p className="text-sm opacity-70">Developed a binary search tree (BST) using java, implemented all its operations, and updated it to function as a Computer Science dictionary</p>
          </div>
          </Link>
          {/* Project 7 */}
          <div className="border rounded-lg p-4 transition-colors hover:border-gray-300 hover:bg-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-800/30">
            <h3 className="text-2xl font-semibold mb-2">Multitasking Kernel</h3>
            <p className="text-sm opacity-70">Developed a series of C and assembly programs, including parallel and serial I/O tasks, and a multitasking kernel that supports multiple tasks</p>
          </div>
          {/* Project 8 */}
          <Link href="/projects/Circuit" passHref>
          <div className="border rounded-lg p-4 transition-colors hover:border-gray-300 hover:bg-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-800/30">
            <h3 className="text-2xl font-semibold mb-2">Digital Circuit Design</h3>
            <p className="text-sm opacity-70">Flexible and robust object-oriented digital circuit editor that can be edited however the user want</p>
          </div>
          </Link>
          {/* Project 9 */}
          <Link href="/projects/Android" passHref>
          <div className="border rounded-lg p-4 transition-colors hover:border-gray-300 hover:bg-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-800/30">
            <h3 className="text-2xl font-semibold mb-2">Android Uni App</h3>
            <p className="text-sm opacity-70">Android app for the SCMS that offers info on About Us, Our People, Outreach, and Research, ensuring it’s responsive across different screen sizes and orientations.</p>
          </div>
          </Link>
        </div>
      </section>
      {/* Skills Section */}
      <section className="w-full max-w-5xl text-center mb-16">
        <h2 className="text-4xl font-semibold mb-8">Skills</h2>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="border rounded-lg p-4 transition-colors hover:border-gray-300 hover:bg-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-800/30">
            <h3 className="text-2xl font-semibold mb-2">Programming Languages</h3>
            <p className="text-sm opacity-70">Python, JavaScript, TypeScript, Java, Matlab, WRAMP, HTML, CSS C#, C, SQL</p>
          </div>
          <div className="border rounded-lg p-4 transition-colors hover:border-gray-300 hover:bg-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-800/30">
            <h3 className="text-2xl font-semibold mb-2">Frameworks, Libraries & Tools</h3>
            <p className="text-sm opacity-70">React, Next.js, Node.js, Gitlab, Github, Vercel, Figma</p>
          </div>
          <div className="border rounded-lg p-4 transition-colors hover:border-gray-300 hover:bg-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-800/30">
            <h3 className="text-2xl font-semibold mb-2">Personal Skills</h3>
            <p className="text-sm opacity-70"> Good communication, Cheerful attitude, Welcoming and positive, Teamwork and collaboration, Willing to learn, Critical thinking and problem-solving</p>
          </div>
        </div>
      </section>

      {/* Current Learning Section */}
      <section className="w-full max-w-5xl text-center mb-16">
  <h2 className="text-4xl font-semibold mb-8">Current Learning</h2>
  <div className="border rounded-lg p-4 transition-colors hover:border-gray-300 hover:bg-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-800/30">
  <p className="text-lg opacity-70 mb-4">
    I am currently enhancing my skills and knowledge through various courses:
  </p>
  <ul className="list-disc list-inside text-lg opacity-70 mb-4">
    <li>Mobile Computing: Exploring the development of mobile applications and the challenges of mobile platforms.</li>
    <li>Software Architecture: Understanding the fundamental concepts of software architecture and design patterns.</li>
    <li>Software Engineering Design 2: Delving deeper into software design methodologies and project management practices.</li>
    <li>Engineering and Business: Learning how engineering principles can be applied within a business context.</li>
    <li>Web Development: Expanding my web development skills with new technologies and frameworks.</li>
    <li>Practical Networking and Cyber Security: Gaining hands-on experience in networking principles and security measures.</li>
    <li>ELEVATE Program: Participating in a program focused on embedded engineering to enhance my practical skills.</li>
  </ul>
  <p className="text-lg opacity-70 mb-4">
    I am excited to apply what I learn in real-world projects and contribute to innovative solutions in the software industry.
  </p>
  </div>
</section>
 {/* About Me Section */}
 <section className="w-full max-w-5xl text-center mb-16">
        <h2 className="text-4xl font-semibold mb-8">About Me</h2>
        <div className="border rounded-lg p-4 transition-colors hover:border-gray-300 hover:bg-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-800/30">
        <p className="text-lg opacity-70 mb-4">
          I am a second-year software engineering student at the University of Waikato, with a strong desire to leverage my skills in the software industry. I have a keen interest in creating impactful software solutions that make a difference. My academic journey has provided me with a solid foundation in various programming languages and technologies, and I am always eager to learn more.
        </p>
        <p className="text-lg opacity-70 mb-4">
          My experience in community and volunteer activities, such as being a class representative and a member of the Yasmina community, has honed my teamwork, communication, and leadership skills. As a student leader for Amnesty, I developed strong advocacy skills and a commitment to promoting human rights. These experiences have taught me the importance of collaboration and effective communication in achieving common goals.
        </p>
        <p className="text-lg opacity-70 mb-4">
          I am fluent in both Arabic and English, which allows me to connect with diverse groups of people. My cheerful and welcoming attitude has always helped me build rapport with peers and colleagues. I believe in continuous learning and am always open to new opportunities that challenge me and help me grow.
        </p>
        <p className="text-lg opacity-70 mb-4">In my free time, I enjoy:</p>
        <ul className="list-disc list-inside text-lg opacity-70 mb-4">
          <li>Badminton: I love the challenge and fun of this sport.</li>
          <li>Swimming: It’s a great way for me to relax and stay fit.</li>
          <li>Archery: I find it to be a rewarding and focused activity.</li>
          <li>Reading & Writing: I enjoy exploring new worlds through books and expressing my thoughts through writing.</li>
        </ul>
        <p className="text-lg opacity-70 mb-4">
          As I continue my studies, I am excited about the possibility of securing an internship where I can apply my skills and knowledge in a real-world setting. I look forward to contributing to innovative projects and learning from experienced professionals in the software industry.
        </p>
        </div>
      </section>
      {/* Contact Section */}
      <section className="w-full max-w-5xl text-center mb-16">
        <h2 className="text-4xl font-semibold mb-8">Contact</h2>
        <div className="border rounded-lg p-4 transition-colors hover:border-gray-300 hover:bg-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-800/30">

        <form className="grid gap-4">
          <input className="border p-2 rounded-lg" type="text" placeholder="Name" required />
          <input className="border p-2 rounded-lg" type="email" placeholder="Email" required />
          <textarea className="border p-2 rounded-lg" rows={4} placeholder="Message" required></textarea>
          <button className="bg-blue-500 text-white p-2 rounded-lg" type="submit">Send</button>
        </form></div>
      </section>

      {/* Footer */}
      <footer className="w-full max-w-5xl text-center">
        <p className="text-sm opacity-70">© 2024 Shahd Abusaleh. All rights reserved.</p>
      </footer>
    </main>
  );
}
