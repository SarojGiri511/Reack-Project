function Ab() {
  return (
    <>
      <h1 className="text-center font-bold text-4xl text-blue-900 my-8">
        About Us
      </h1>
      <div className="flex flex-col md:flex-row py-10 px-6 md:px-24 items-center gap-10 mx-auto max-w-7xl">
        <div className="flex-none">
          <img
            className="w-full md:w-80 h-60 rounded-lg shadow-lg object-cover"
            src="https://images.unsplash.com/photo-1683207906680-ee74d1425423?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Pet Shop"
          />
        </div>
        <div className="flex-1">
          <h2 className="font-bold text-3xl text-blue-900 mb-4">Pet Shop</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas,
            eveniet illo? Maxime assumenda quidem minus laborum recusandae
            perspiciatis delectus laboriosam, nam, error debitis molestias?
            Pariatur. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perferendis recusandae itaque natus, laboriosam odit dignissimos.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
            impedit nisi quod doloribus deleniti! Fugit qui, maiores provident
            doloribus repellendus veritatis nihil odio illum quam, ipsa quae
            voluptates aut ducimus quos sunt magni omnis, ullam facere nisi
            vitae molestiae ea amet. Officiis quas possimus, animi dicta quaerat
            perspiciatis eum nesciunt?
          </p>
          <a href="#" className="inline-block">
            <button className="mt-4 px-6 py-3 bg-blue-900 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-300">
              Know More
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Ab;
