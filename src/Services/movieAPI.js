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
    },
    getMoviePage : (page)=>{
        return axiosClient.get(`QuanLyPhim/LayDanhSachPhimPhanTrang`,{
            params :{
                maNhom : 'GP02',
                soTrang : page,
                soPhanTuTrenTrang : 10
            }
        })
    }
}
export default movieAPI