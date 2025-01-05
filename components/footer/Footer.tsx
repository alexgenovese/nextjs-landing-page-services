export function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <span className="text-gray-400">hanson@futr.agency</span>
        </div>
        <div className="flex gap-6 text-sm text-gray-400">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
        <div className="text-sm text-gray-400 mt-4 md:mt-0">
          Copyright © 2024 FUTR - Transform Your Operations with Tailored AI Solutions
        </div>
      </div>
    </footer>
  );
}