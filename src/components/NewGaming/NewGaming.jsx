

const NewGaming = () => {
    return (
        <div className="min-h-[50vh] md:min-h-[65vh] bg-center bg-cover max-w-6xl mx-8 md:mx-16 lg:mx-auto my-16 lg:my-24 rounded-lg flex items-center" style={{
            backgroundImage:
              "url(https://wpbingosite.com/wordpress/arostore/wp-content/uploads/2023/04/background-1.jpg)"
          }}>
            <div className="pl-10 lg:pl-40"> 
            <span className="md:text-lg px-2 py-1 md:px-4 md:py-2 bg-[#ffb300] rounded-md">New Gaming</span>
            <div className="text-white my-3 md:mt-5 md:mb-8">
            <h1 className="text-4xl md:text-6xl font-black md:mb-4">Gamepad-XB1</h1>
            <p className="md:text-xl leading-7">10% OFF for all series</p>
            </div>
            <button className="btn hover:text-white hover:bg-[#ffb300] border-none font-bold capitalize">Shop Now</button>
            </div>
        </div>
    );
};

export default NewGaming;