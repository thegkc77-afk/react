function Home() {
  return (
    <>
      <div className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white">
        <h1 className="text-xl font-bold">Pahal</h1>

        <div className="flex gap-6">
          <a href="#" className="hover:text-blue-400 transition duration-300">Home</a>
          <a href="#" className="hover:text-blue-400 transition duration-300">About</a>
          <a href="#" className="hover:text-blue-400 transition duration-300">Services</a>
          <a href="#" className="hover:text-blue-400 transition duration-300">Contact</a>
        </div>

        <div>
          <button className="bg-blue-500 px-4 py-1 rounded hover:bg-blue-600">
            LogIn
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;