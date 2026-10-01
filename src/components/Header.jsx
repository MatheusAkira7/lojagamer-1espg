import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="flex justify-between items-center py-6 px-[5%] bg-black">
      <h1 className="logo p-2 text-white text-[2rem] font-bold cursor-pointer transition-all">
        LOJA<span className="text-[#95ff00] p-4">GAMER</span></h1>
      <nav>
        <ul className="flex list-none items-center gap-8">
          <li>
            <Link to="/" className="text-white text-lg no-underline 
              hover:text-[#95ff00] hover:uppercase transition-all">Home</Link>
          </li>
          <li>
            <Link to="/jogos" className="text-white text-lg no-underline 
              hover:text-[#95ff00] hover:uppercase transition-all">Jogos</Link>
          </li>
          <li>
            <Link to="/contato" className="text-white text-lg no-underline 
              hover:text-[#95ff00] hover:uppercase transition-all">Contato</Link>
          </li>
          <li>
            <Link to="/login" className="text-white text-lg no-underline 
              hover:text-[#95ff00] hover:uppercase transition-all">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
const Contato = () => {
  return (
    <main className="grow flex items-center justify-center px-4">
      <div className="bg-black p-8 sm:p-10 rounded-[10px] w-full max-w-md shadow-2xl border-2 border-[#95ff00]">

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#95ff00] text-center mb-6 uppercase tracking-wider">
          Fale Conosco
        </h2>

        <p className="text-gray-300 text-center mb-6">
          Entre em contato conosco através do e-mail:
        </p>

        <a
          href="mailto:suporte@lojagamer.com"
          className="block text-center text-[#95ff00] font-semibold hover:underline transition-all"
        >
          suporte@lojagamer.com
        </a>

      </div>
    </main>
  );
};
