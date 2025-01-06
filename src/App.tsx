import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Github, Mail, Linkedin, Twitter, Instagram } from 'lucide-react';
import Navbar from './components/Navbar';
import Section from './components/Section';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Durasi animasi dalam milidetik
  }, []);

  return (
    <div className="bg-black text-gray-300 min-h-screen">
      <Navbar />
      
      <Section id="home" title="">
        <div className="space-y-6" data-aos="fade-up">
        <h1 className="text-5xl font-bold 
  text-white drop-shadow-[0_0_10px_rgba(79,70,229,0.7)] animate-pulse">
  Hello, I'm <span className="text-indigo-500 
    drop-shadow-[0_0_8px_rgba(79,70,229,0.5)]">
    Avail Dwi Febrianto
  </span>
</h1>
          <p className="text-xl">
            Frontend Developer specializing in building exceptional digital experiences
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </Section>

      <Section id="about" title="About">
        <div className="grid md:grid-cols-2 gap-8" data-aos="fade-right">
          <div className="space-y-4">
            <p>
              [Your introduction here] Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              [Your skills and experience] Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="relative" data-aos="fade-left">
  <img
    src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80"
    alt="Workspace"
    className="rounded-lg shadow-xl 
    transition-all duration-300 
    hover:scale-105 
    hover:shadow-2xl 
    hover:brightness-110"
  />
</div>
        </div>
      </Section>

      <Section id="skills" title="Skills">
  <div className="grid md:grid-cols-2 gap-8" data-aos="fade-left">
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold text-white">Technical Skills</h3>
      <div className="grid grid-cols-3 gap-4">
        {[
          { name: 'React', icon: 'https://cdn.worldvectorlogo.com/logos/react-2.svg' },
          { name: 'JavaScript', icon: 'https://cdn.worldvectorlogo.com/logos/javascript-1.svg' },
          { name: 'TypeScript', icon: 'https://cdn.worldvectorlogo.com/logos/typescript.svg' },
          { name: 'Next.js', icon: 'https://cdn.worldvectorlogo.com/logos/next-js.svg' },
          { name: 'Tailwind', icon: 'https://cdn.worldvectorlogo.com/logos/tailwindcss.svg' },
          { name: 'Node.js', icon: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg' },
          { name: 'Python', icon: 'https://cdn.worldvectorlogo.com/logos/python-5.svg' },
          { name: 'Laravel', icon: 'https://raw.githubusercontent.com/gilbarbara/logos/master/logos/laravel.svg' },
          { name: 'Git', icon: 'https://cdn.worldvectorlogo.com/logos/git-icon.svg' },
        ].map((skill) => (
          <div 
            key={skill.name} 
            className="flex flex-col items-center p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors group"
          >
            <img 
              src={skill.icon} 
              alt={skill.name} 
              className="w-12 h-12 mb-2 group-hover:scale-110 transition-transform"
            />
            <span className="text-sm text-gray-300">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
    
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold text-white">Professional Skills</h3>
      <div className="space-y-4">
        {[
          { name: 'Frontend Development', level: 90 },
          { name: 'Responsive Design', level: 85 },
          { name: 'UI/UX Design', level: 75 },
          { name: 'Backend Integration', level: 70 },
        ].map((skill) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex justify-between text-sm text-gray-400">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2.5">
              <div 
                className="bg-indigo-600 h-2.5 rounded-full" 
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>

  <div className="mt-12 text-center" data-aos="fade-up">
    <h3 className="text-2xl font-semibold text-white mb-6">Learning & Growth</h3>
    <p className="max-w-2xl mx-auto text-gray-400">
      I'm passionate about continuous learning and staying updated with the latest 
      technologies. Currently exploring advanced React patterns, serverless architectures, 
      and diving deeper into performance optimization techniques.
    </p>
  </div>
</Section>

      <Section id="projects" title="Projects">
        <div className="grid md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((project) => (
            <div
              key={project}
              className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors"
              data-aos="zoom-in"
            >
              <h3 className="text-xl font-semibold mb-2 text-white">Project {project}</h3>
              <p className="mb-4">
                [Project description] Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="flex space-x-2">
                <span className="px-2 py-1 bg-gray-800 rounded text-sm">React</span>
                <span className="px-2 py-1 bg-gray-800 rounded text-sm">TypeScript</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="contact" title="Contact">
  <div className="max-w-xl mx-auto text-center space-y-6" data-aos="fade-up">
    <p className="text-lg">
      I'm currently open for new opportunities. Whether you have a question or just
      want to say hi, feel free to reach out!
    </p>
    
    {/* Sosial Media Links */}
    <div className="flex justify-center space-x-6 mb-6">
      {[
        {
          name: 'GitHub',
          icon: <Github size={32} />,
          link: 'https://github.com/xfbriianto',
          color: 'hover:text-gray-300'
        },
        {
          name: 'LinkedIn',
          icon: <Linkedin size={32} />,
          link: 'https://www.linkedin.com/in/availdwi',
          color: 'hover:text-blue-500'
        },
        {
          name: 'Instagram',
          icon: <Instagram size={32} />,
          link: 'https://www.instagram.com/itsavdfbriiiant_',
          color: 'hover:text-pink-500'
        },
        {
          name: 'Twitter',
          icon: <Twitter size={32} />,
          link: 'https://twitter.com/availdwi',
          color: 'hover:text-blue-400'
        }
      ].map((social) => (
        <a
          key={social.name}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-gray-500 transition-all duration-300 
            ${social.color} 
            hover:scale-125 
            hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]`}
          aria-label={social.name}
        >
          {social.icon}
        </a>
      ))}
    </div>

    {/* Email Button */}
    <a
      href="mailto:availdwifebrianto@gmail.com"
      className="inline-block px-6 py-3 
        bg-gradient-to-r from-purple-600 to-indigo-600 
        text-white 
        rounded-lg 
        hover:from-purple-700 hover:to-indigo-700 
        transition-all 
        duration-300 
        hover:scale-105 
        hover:drop-shadow-[0_0_10px_rgba(124,58,237,0.5)]"
    >
      Say Hello
    </a>

    {/* Contact Info */}
    <div className="mt-6 text-sm text-gray-400">
      <p>Email: availfebri1912@gmail.com</p>
      <p>Location: Banyuwangi - Indonesia</p>
    </div>
  </div>
</Section>
    </div>
  );
}

export default App;
