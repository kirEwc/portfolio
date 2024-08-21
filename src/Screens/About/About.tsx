export const About = () => {
  return (
    <section className="p-8 bg-gray-800 text-white rounded-lg shadow-lg">
      <h2 className="text-4xl font-semibold text-center text-gray-200 mb-8">Sobre mí</h2>
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Imagen */}
        <div className="flex justify-center md:w-1/2 lg:w-1/3">
          <img 
            src="assets/home-img/2.png" 
            alt="Aldair Guerra" 
            className="rounded-r-full shadow-lg w-3/4 md:w-full"
          />
        </div>
        
        {/* Descripción */}
        <div className="flex flex-col justify-center items-center md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-500 to-green-500">
            Aldair Guerra
          </h2>
          <p className="text-lg text-justify md:text-xl leading-relaxed max-w-3xl">
            Soy estudiante del pregrado de la Universidad de las Ciencias Informáticas (UCI). Aspiro conseguir empleo en el mundo del Desarrollo Web, adquirir experiencia, nuevos conocimientos y fortalecer mi vida profesional. Soy una persona empática y entusiasta, con competencias enfocadas en el trabajo en equipo, comunicación asertiva, resolución de problemas, responsable y proactiva. Me gusta aprender de los demás y superarme continuamente.
          </p>
        </div>
        
      </div>
    </section>
  );
};
