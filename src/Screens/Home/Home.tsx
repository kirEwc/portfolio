export const Home = () => {
    return (
      <div className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-gray-900 text-white p-8">
        <div className="contenido md:w-1/2 lg:w-2/3">
          <h3 className="text-lg md:text-xl text-gray-400 mb-2">Hola, soy</h3>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-pulse">
            Aldair Guerra
          </h1>
          <h3 className="text-xl md:text-2xl text-gray-300 mb-6">
            Desarrollador web Front-end
          </h3>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl">
            Estudiante de Ciencias Informáticas enfocado en el Desarrollo Web Frontend. Como amante de los diseños intuitivos y estéticamente agradables, busco crear proyectos que brinden la mejor experiencia para el usuario.
          </p>
        </div>
        <div className="imagen md:w-1/2 lg:w-1/3 mt-8 md:mt-0 flex justify-center">
          <img 
            src="assets/home-img/image-profile.png" 
            alt="Aldair Guerra" 
            className="rounded-lg shadow-lg w-3/4 md:w-full"
          />
        </div>
      </div>
    );
  };
  