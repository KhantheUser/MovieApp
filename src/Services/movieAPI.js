import axiosClient from "./axiosClient";

const movieAPI = {
    getMovie : ()=>{
        return axiosClient.get('QuanLyPhim/LayDanhSachPhim?maNhom=GP01');
    },
    getMovieDetails : (id)=>{
        return axiosClient.get("QuanLyRap/LayThongTinLichChieuPhim",{
            params :{
                MaPhim : id
            }
        })
    }
}
export default movieAPI