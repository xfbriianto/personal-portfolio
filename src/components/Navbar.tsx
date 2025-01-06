
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-sm z-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-center items-center h-16">
          {['Home', 'About', 'Projects', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="px-4 py-2 mx-2 text-gray-300 
              relative 
              after:absolute 
              after:bottom-0 
              after:left-0 
              after:w-0 
              after:h-0.5 
              after:bg-white 
              after:transition-all 
              after:duration-300 
              hover:after:w-full 
              hover:text-white 
              transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;