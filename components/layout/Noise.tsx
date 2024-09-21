'use client'

const Noise = () => {
    return (
        <div
            className="absolute inset-0 w-full h-full overflow-hidden  transform opacity-10 z-40 [mask-image:radial-gradient(#000,transparent,75%)]"
            style={{
                backgroundImage: "url(https://assets.aceternity.com/noise.webp)",
                backgroundSize: "30%",
            }}
        ></div>
    );
};

export default Noise;