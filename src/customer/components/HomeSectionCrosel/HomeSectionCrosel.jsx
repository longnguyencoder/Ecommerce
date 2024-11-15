import React, { useState, useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@headlessui/react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";


const HomeSectionCrosel = ({data,sectionName}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null); // Tạo ref cho AliceCarousel

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  // Sử lý sự kiện button nhấn chuyển item tiếp theo
  const slidePrev = () => carouselRef.current.slidePrev(); // Dùng phương thức slidePrev của AliceCarousel
  const slideNext = () => carouselRef.current.slideNext(); // Dùng phương thức slideNext của AliceCarousel

  const syscActiveIndex = ({ item }) => setActiveIndex(item);

  const items = data.slice(0, 10).map((item) => <HomeSectionCard product={item} />);

  return (
    <div className="border">
      <h2 className="text-2xl font-extrabold text-gray-800 py-5">{sectionName}</h2>
      <div className="relative p-5">
        <AliceCarousel
          ref={carouselRef} // Thêm ref cho AliceCarousel
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChange={syscActiveIndex}
          activeIndex={activeIndex}
        />
        {activeIndex !== items.length - 5 && (
          <Button
            variant="contained"
            onClick={slideNext}
            className="z-50 bg-white active:bg-gray-300 hover:bg-gray-200 px-4 py-2 text-lg"
            style={{
              position: "absolute",
              top: "50%",
              right: "0",
              transform: "translate(50%, -50%) rotate(90deg)",
            }}
            aria-label="next"
          >
            <ArrowBackIosIcon sx={{ transform: "rotate(90deg)" }} />
          </Button>
        )}

        {activeIndex !== 0 && <Button
          variant="contained"
          onClick={slidePrev}
          className="z-50 bg-white active:bg-gray-300 hover:bg-gray-200 px-4 py-2 text-lg"
          style={{
            position: "absolute",
            top: "50%",
            left: "0",
            transform: "translate(-50%) rotate(-90deg)",
          }}
          aria-label="prev"
        >
          <ArrowBackIosIcon sx={{ transform: "rotate(90deg)" }} />
        </Button>}
      </div>
    </div>
  );
};

export default HomeSectionCrosel;
