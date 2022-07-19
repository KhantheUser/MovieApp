import ThongTinDatVe from "../_core/ThongTinDatVe";
import axiosClient from "./axiosClient";

const ticketAPI = {
    getPhongVe : (idTicket)=>{
        return axiosClient.get('QuanLyDatVe/LayDanhSachPhongVe',{
            params:{
                MaLichChieu : idTicket
            }
        });
    },
    postDatVe : (thongTinDatVe = new ThongTinDatVe())=>{
        return axiosClient.post('QuanLyDatVe/DatVe',thongTinDatVe);
    }
   
}
export default ticketAPI