import axiosBanner from "./axiosBanner";

const carouselApi = {
    getCarousel: () => {
        
        return axiosBanner.get('movieBanner');
    }
}
export default carouselApi;