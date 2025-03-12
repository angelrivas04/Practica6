import {Autoplay, Navigation, Pagination} from "swiper/modules";
import {Swiper} from "swiper";

const Carousel =() => {
    <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{clickable: true}}
        autoplay={{delay: 3000}}>
    </Swiper>
};
export default Carousel;