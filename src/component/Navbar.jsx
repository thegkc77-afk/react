function Navbar() {
  return (
    <>
      <div className="flex justify-between bg-black text-amber-50  h-15 py-3">

        <h1 className="text-3xl ml-2">Pahal</h1>

        <div className="flex gap-10 text-2xl center">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
        </div>

        <div className="bg-blue-500 py-1 px-6  rounded-xl mr-6">
          <button className="text-white">LogIn</button>
        </div>
      </div>
    </>
  );
}

export default Navbar;