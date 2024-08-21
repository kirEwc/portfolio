
export const Contact = () => {
  return (
    <div className="w-full pl-20 pr-20 flex justify-between ">
      {/* Botón de contacto a la izquierda */}
      <div className="flex flex-col items-center">
        <h2 className="font-semibold text-white mb-10">Aldair-Guerra</h2>
        <span className="text-opacity-50 mb-10">
            Me enfoco en avanzar un poco cada día.
            <br />
            Para lograr construir algo grande se
            <br /> 
            requiere de un gran sacrificio.
        </span>
        <a
          href="mailto:alelguce@gmail.com"
          className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white py-2 px-4 rounded-lg transition-transform transform hover:scale-105"
        >
          Contactarme
        </a>
      </div>

      {/* Enlaces a redes sociales a la derecha */}
      <div >
        <h2 className="font-semibold text-white mb-10">Contacto</h2>
        <h3>E-mail de contacto</h3>
        <span>alelguce@gmail</span>
        <h3 className="mb-20 mt-5"> Ubicación: La Habana, Cuba</h3>
        <h3>Redes Sociales</h3>
        <div className="flex flex-row mr-4">

        <a href="https://github.com/kirEwc" target="_blank">  
          <img
            src="/assets/skills/github.svg"
            alt="Github"
            className="w-6 h-6 mr-3"
            />
        </a>
        <a href="https://github.com/kirEwc" target="_blank">  
          <img
            src="/assets/skills/facebook.svg"
            alt="Github"
            className="w-6 h-6 mr-3"
            />
        </a>
            </div>

      </div>
    </div>
  );
};
