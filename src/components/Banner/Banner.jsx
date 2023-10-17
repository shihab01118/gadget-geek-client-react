

const Banner = () => {
    return (
        <div
            className="hero h-[70vh] lg:h-[calc(100vh-88px)]"
            style={{
              backgroundImage:
                "url(https://img.freepik.com/premium-vector/vector-banner-design-illustration-technology-with-geometric-pattern-dark-blue-background-modern-hi-tech-digital-technology-concept-abstract-internet-communication-future-science-tech-design_181182-7761.jpg)"
            }}
          >
            <div className="hero-overlay bg-opacity-50"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-3xl md:text-4xl lg:text-5xl font-bold">
                Unleash the Gizmo Geek in You
                </h1>
                <p className="mb-5">
                Step into a world of innovation and tech wonders. At TechNova, we{"'"}ve gathered the coolest gadgets and gizmos for your delight.
                </p>
              </div>
            </div>
          </div>
    );
};

export default Banner;