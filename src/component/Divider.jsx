const Divider = () => {
  return (
    <>
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold">Section Title</h2>
          <p>Section content goes here...</p>
        </div>
        <div className="w-full h-2 bg-gray-800"></div>{" "}
        {/* This is the strip divider */}
      </section>
    </>
  );
};

export default Divider;
