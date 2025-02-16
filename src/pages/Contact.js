import React from 'react';

function Contact() {
  return (
    <div className="App-main p-6 text-white">
      <h2 className="text-3xl mb-6">Contáctanos</h2>
      <form className="bg-white bg-opacity-10 p-6 rounded-lg">
        <div className="mb-4">
          <label className="block text-white mb-2" htmlFor="name">Nombre</label>
          <input className="w-full p-2 rounded-lg" type="text" id="name" />
        </div>
        <div className="mb-4">
          <label className="block text-white mb-2" htmlFor="email">Correo Electrónico</label>
          <input className="w-full p-2 rounded-lg" type="email" id="email" />
        </div>
        <div className="mb-4">
          <label className="block text-white mb-2" htmlFor="message">Mensaje</label>
          <textarea className="w-full p-2 rounded-lg" id="message" rows="4"></textarea>
        </div>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">Enviar</button>
      </form>
      <div className="mt-6">
        <a href="tel:+1234567890" className="px-4 py-2 bg-green-500 text-white rounded-lg">Llamar</a>
      </div>
    </div>
  );
}

export default Contact;
