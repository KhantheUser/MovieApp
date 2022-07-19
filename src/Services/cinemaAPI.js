import axiosClient from "./axiosClient";


const cinemaAPI = {
    getMovie : ()=>{
        return axiosClient.get('QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01');
    }
}
export default cinemaAPI