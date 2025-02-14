import React, { useState, useRef } from "react";

const MapsDetail = () => {
  const [tooltip, setTooltip] = useState(null);
  const containerRef = useRef(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = (province, event) => {
    clearTimeout(timeoutRef.current);
    const element = event.currentTarget.getBoundingClientRect();
    const container = containerRef.current?.getBoundingClientRect();

    setTooltip({
      name: province.name,
      desc: province.desc,
      link: province.link,
      x: element.left - (container?.left || 0),
      y: element.bottom - (container?.top || 0) + 10, // Positioned below the province
    });
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setTooltip(null);
    }, 500); // Small delay to prevent accidental hiding
  };

  const provinces = [
    {
      id: "1449",
      name: "Ha Noi",
      desc: "Hanoi, the capital of Vietnam, is a city rich in history and culture...",
      img: "hanoi(1).png",
      top: "13.6%",
      left: "55%",
      width: "7.3%",
      link: "/places/Hanoi",
    },
    {
      id: "1456",
      name: "Ho Chi Minh",
      desc: "Ho Chi Minh City, formerly known as Saigon, is the largest city in Vietnam...",
      img: "HCM(1).png",
      top: "81.9%",
      left: "65%",
      width: "6.4%",
      link: "/places/Saigon",
    },
    {
      id: "1469",
      name: "Kien Giang",
      desc: "Kien Giang Province, located in the Mekong Delta region of southern Vietnam, is known for fishing and rice farming...",
      img: "kiengiang(1).png",
      top: "86.6%",
      left: "38.7%",
      width: "2.5%",
      link: "/places/PhuQuoc",
    },
    {
      id: "1463",
      name: "Quang Nam",
      desc: "Quang Nam is a province in central Vietnam, known for its rich history and cultural heritage...",
      img: "Quangnam(1).png",
      top: "48.6%",
      left: "75.7%",
      width: "14.9%",
      link: "/places/Danang",
    },
    {
      id: "1466",
      name: "Lao Cai",
      desc: "Lao Cai is a mountainous province in northern Vietnam, bordering China...",
      img: "laocai(1).png",
      top: "3.7%",
      left: "37%",
      width: "11%",
      link: "/places/Sapa",
    },
  ];

  return (
    <section id="maps-detail" className="py-10 relative">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold">
          Discover and write your own story...
        </h2>
        <p>
          Click on the map to discover the activities and accommodations in each
          province!
        </p>
      </div>

      <div className="flex justify-center">
        <div className="relative" ref={containerRef}>
          <img
            className="w-full"
            src="/assets/images/vnlccactinh(2).png"
            alt="Vietnam Map"
          />

          {provinces.map((province) => (
            <a
              key={province.id}
              className="absolute maps-ab"
              href={province.link}
              style={{
                top: province.top,
                left: province.left,
                width: province.width,
              }}
              onMouseEnter={(event) => handleMouseEnter(province, event)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                className="w-full opacity-0 hover:opacity-100 transition-opacity duration-300"
                src={`/assets/images/${province.img}`}
                alt={province.name}
              />
            </a>
          ))}
        </div>
      </div>

      {tooltip && (
        <div
          className="absolute bg-white shadow-lg p-4 rounded-lg w-64 border border-gray-300 transition-opacity duration-300"
          style={{
            top: `${tooltip.y}px`,
            left: `${tooltip.x}px`,
            zIndex: 50,
          }}
          onMouseEnter={() => clearTimeout(timeoutRef.current)}
          onMouseLeave={handleMouseLeave}
        >
          <h2 className="font-bold text-lg text-orange-600">{tooltip.name}</h2>
          <p className="text-gray-700 text-sm">{tooltip.desc}</p>
          <a
            className="mt-2 block text-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            href={tooltip.link}
          >
            More info
          </a>
        </div>
      )}
    </section>
  );
};

export default MapsDetail;
