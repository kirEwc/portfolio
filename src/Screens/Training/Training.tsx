export const Training = () => {
  return (
    <>
      <h2 className="text-3xl font-semibold text-gray-200 mb-4">Formación</h2>

      <div className="relative flex flex-col md:flex-row justify-between items-center p-6 md:p-10 bg-gray-800 text-white rounded-3xl shadow-lg space-y-10 md:space-y-0 md:space-x-10 overflow-hidden transform transition-all duration-500 hover:shadow-2xl">
        <div className="md:w-1/2 lg:w-2/5 flex justify-center transform transition duration-500 hover:scale-110 hover:rotate-2 ">
          <img
            src="assets/training/uci.png"
            alt="Aldair Guerra"
            className="bg-teal-100 rounded-xl shadow-md w-4/5 md:w-full p-3"
          />
        </div>
        <div className="md:w-1/2 lg:w-3/5 flex flex-col justify-center items-start">
          <h3 className="text-3xl font-semibold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text animate-pulse">
            Universidad de las Ciencias Informáticas
          </h3>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            La Universidad de las Ciencias Informáticas (UCI) es una institución
            académica de excelencia en el desarrollo de software y tecnologías
            de la información. Su misión es formar profesionales altamente
            capacitados en el ámbito tecnológico.
          </p>
          <a
            href="https://www.uci.cu"
            className="inline-block text-lg font-bold text-gray-900 bg-gradient-to-r from-teal-400 via-green-500 to-blue-500 py-3 px-6 rounded-full transform transition duration-300 hover:scale-105 hover:shadow-lg"
          >
            Saber más
          </a>
        </div>
      </div>
    </>
  );
};
