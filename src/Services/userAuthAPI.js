import axiosClient from "./axiosClient";

const userAuth = {
    postUserLogin : (thongTinDangNhap)=>{
        return axiosClient.post('QuanLyNguoiDung/DangNhap',thongTinDangNhap);
    },
    postThongTinNguoiDung : ()=>{
        return axiosClient.post('QuanLyNguoiDung/ThongTinTaiKhoan');
    }
   
}
export default userAuth