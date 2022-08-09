import axiosClient from "./axiosClient";

const userAuth = {
    postUserLogin : (thongTinDangNhap)=>{
        return axiosClient.post('QuanLyNguoiDung/DangNhap',thongTinDangNhap);
    },
    postThongTinNguoiDung : ()=>{
        return axiosClient.post('QuanLyNguoiDung/ThongTinTaiKhoan');
    },
    postUserRegister : (thongTinDangKy)=>{
        return axiosClient.post('QuanLyNguoiDung/DangKy',thongTinDangKy);
    }
   
}
export default userAuth