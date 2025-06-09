const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          "Your feet deserve the very best, and we're here to provide the
          perfect shoes that keep you comfortable and stylish every step of the
          way."
        </p>

        <div className="hero-btn">
          <button>Shop Now</button>
          <button className="secondary-btn">Category</button>
        </div>
        <div className="shopping">
          <p>Also Available On</p>
        </div>
        <div className="brand-iocns">
          <img src="/images/amazon.png" alt="amazon-logo" />
          <img src="/images/flipkart.png" alt="amazon-logo" />
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/shoes2.png" alt="shoe-image" />
      </div>
    </main>
  );
};

export default HeroSection;
