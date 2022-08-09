import React,{useState} from "react";
import { Tabs  } from "antd";
import './HomeMore.scss'
import 'animate.css';
import cn from 'classnames'
function HomeMore() {
  const { TabPane } = Tabs;
  const [isTurnMore,setIsTurnMore] = useState(true)
  return (
    <div className="py-3 mt-3 homeMore">
      <Tabs defaultActiveKey="1" centered animated={true} >
        <TabPane className={cn( 'transform animate__animated animate__backInDown',{
          'hidden':isTurnMore

        })} 
          tab={<div className="text-xl hover:scale-110 text-black transition-all duration-500 ease-in-out font-semibold ">Movies 24h</div>}
          key="1"
        >
          <div  className="grid grid-cols-12 mt-4  ">
            <div className="md:col-start-3 md:col-span-4 col-start-2 col-span-10 md:pr-2  ">
              <div style={{ width: "100%"}}>
                <img
                  style={{ height: "287px",width:'100%' }}
                  className="rounded-md"
                  src="https://znews-photo.zingcdn.me/w660/Uploaded/vnaits/2022_06_27/fid20178_trid20431.jpg"
                  alt=""
                />

                <a className="text-lg my-2 text-black font-semibold hover:text-red-400 block">
                  Minions will be coming to Vietnam in June
                </a>
                <p>
                  We know how gibberish the minions are saying but did you know
                  some of the words the minions are saying are ... Minion
                  Language, English Translation. Bello!
                </p>
              </div>
            </div>
            <div className="md:col-start-7 md:col-span-4 col-start-2 col-span-10 md:pl-2 ">
              <div style={{ width: "100%"  }}>
                <img
                  style={{ height: "287px",width:'100%'  }}
                  className="rounded-md"
                  src="https://cdnimg.vietnamplus.vn/t620/uploaded/tpuohuo/2022_07_20/1650197263_conan.jpg"
                  alt=""
                />
                <a className="text-lg my-2 text-black font-semibold hover:text-red-400 block">
                  How did fans feel after watching Conan movie 25 ?
                </a>
                <p>
                  Great Detective Conan, officially translated as Detective
                  Conan) in its original release in Japan, is based on the manga
                  series of the same name by Gosho Aoyama.{" "}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-12 mt-4">
              <div className="md:col-start-3 md:col-span-8 col-start-2 col-span-10   ">
                <div className="flex justify-between flex-wrap">
                  <div className="md:w-1/3 md:pr-2" >
                    <div style={{ width: "100%" }}>
                      <img
                       style={{height:'176px',width:'100%'}}
                        className="rounded-md"
                        src="https://s3img.vcdn.vn/123phim/2020/07/gerard-butler-cung-bo-cu-deadpool-tham-gia-greenland-15937528932506.png"
                        alt=""
                      />
                      <a
                        className="text-base font-semibold text-black hover:text-red-400 block my-2"
                        href=""
                      >
                        Gerard with Deadpool's old girl friend took part in
                        Greenland
                      </a>
                      <p>
                        The action movie with apocalyptic theme Greenland:
                        Meteor Point from the series producer John Wick released
                      </p>
                    </div>
                  </div>

                  <div className="md:w-1/3 md:px-2">
                    <div style={{ width: "100%" }}>
                      <img
                        style={{ height: "176px", width: "100%" }}
                        className="rounded-md"
                        src="https://i.imgur.com/vz02jVn.jpg"
                        alt=""
                      />
                      <a
                        className="text-base font-semibold text-black hover:text-red-400 block my-2"
                        href=""
                      >
                        The actress of The witch has a simple life
                      </a>
                      <p>
                        The actress of the witch has very simple single life .
                        She said she doesn't want to live in the city because
                        it's very noisy
                      </p>
                    </div>
                  </div>
                  <div className=" md:w-1/3 md:pl-2">
                    <div className="flex flex-col">
                      <div className="flex  mb-4">
                        <img
                          className="rounded-sm"
                          style={{ height: "50px", width: "50px" }}
                          src="https://s3img.vcdn.vn/123phim/2020/07/pee-nak-2-van-kiep-thien-thu-di-tu-khong-het-nghiep-15937498464029.png"
                          alt=""
                        />
                        <a className="text-black hover:text-red-400 text-base ml-2">
                          Pee Nak 2 - Vạn kiếp thiên thu, đi tu không hết
                          nghiệp!
                        </a>
                      </div>
                      <div className="flex mb-4">
                        <img
                          className="rounded-sm"
                          style={{ height: "50px", width: "50px" }}
                          src="https://s3img.vcdn.vn/123phim/2020/07/loat-phim-kinh-di-khong-the-bo-lo-trong-thang-7-15937470779379.png"
                          alt=""
                        />
                        <a className="text-black hover:text-red-400 text-base ml-2">
                          Loạt phim kinh dị không thể bỏ lỡ trong tháng 7!
                        </a>
                      </div>
                      <div className="flex  mb-4">
                        <img
                          className="rounded-sm"
                          style={{ height: "50px", width: "50px" }}
                          src="https://s3img.vcdn.vn/123phim/2020/06/rom-tung-trailer-he-lo-cuoc-song-cua-dan-choi-so-de-15929959532579.jpg"
                          alt=""
                        />
                        <a className="text-black hover:text-red-400 text-base ml-2">
                          RÒM tung trailer hé lộ cuộc sống của dân chơi số đề
                        </a>
                      </div>
                      <div className="flex  mb-4">
                        <img
                          className="rounded-sm"
                          style={{ height: "50px", width: "50px" }}
                          src="https://s3img.vcdn.vn/123phim/2020/06/antebellum-trailer-cuoi-cung-khong-he-lo-bat-cu-thong-tin-gi-them-15929866818923.jpg"
                          alt=""
                        />
                        <a className="text-black hover:text-red-400 text-base ml-2">
                          Antebellum - Trailer cuối cùng không hé lộ bất cứ
                          thông tin gì thêm
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPane>
        <TabPane
        className={cn('animate__animated animate__backInDown',{
          'hidden':isTurnMore,

        })} 
          tab={<div className="text-xl text-black hover:scale-110 transition-all duration-500 ease-in-out font-semibold">Review</div>}
          key="2"
        >
          <div className="grid grid-cols-12 mt-4 ">
            <div className="md:col-start-3 md:col-span-4 col-start-2 col-span-10 md:pr-2 ">
              <div style={{ width: "100%" }}>
                <img
                  style={{ height: "287px" ,width:"100%"}}
                  className="rounded-md"
                  src="https://s3img.vcdn.vn/123phim/2020/03/review-nang-3-loi-hua-cua-cha-cau-chuyen-tinh-than-cam-dong-cua-kha-nhu-va-kieu-minh-tuan-15834049872311.jpg"
                  alt=""
                />

                <a className="text-lg my-2 text-black font-semibold hover:text-red-400 block">
                  [Review] Nắng 3: Lời Hứa Của Cha - Câu chuyện tình thân cảm
                  động của Khả Như và Kiều Minh Tuấn
                </a>
                <p>
                  Như hai phần phim trước, Nắng 3 tiếp tục mang đến câu chuyện
                  tình cha, mẹ - con đầy nước mắt của bộ ba nhân vật chính.
                </p>
              </div>
            </div>
            <div className="md:col-start-7 md:col-span-4 col-start-2 col-span-10 md:pl-2">
              <div style={{ width: "100%" }}>
                <img
                  style={{ height: "287px" ,width: "100%" }}
                  className="rounded-md"
                  src="https://s3img.vcdn.vn/123phim/2020/03/review-onward-khi-phep-thuat-manh-me-nhat-chinh-la-tinh-than-15832047938817.jpg"
                  alt=""
                />
                <a className="text-lg my-2 text-black font-semibold hover:text-red-400 block">
                  [Review] Onward - Khi phép thuật mạnh mẽ nhất chính là tình
                  thân
                </a>
                <p>
                  Tác phẩm mới nhất của Pixar tiếp tục là câu chuyện hài hước và
                  cảm xúc về tình cảm gia đình.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-12 mt-4">
              <div className="md:col-start-3 md:col-span-8 col-start-2 col-span-10    ">
                <div className="flex justify-between flex-wrap">
                  <div className="md:w-1/3 md:pr-2">
                    <div style={{ width: "100%" }}>
                      <img
                      style={{ height: "176px" ,width: "100%" }}
                        className="rounded-sm"
                        src="https://s3img.vcdn.vn/123phim/2020/02/review-ke-vo-hinh-con-gi-dang-so-hon-ke-giet-nguoi-benh-hoan-vo-hinh-15828835353362.jpg"
                        alt=""
                      />
                      <a
                        className="text-base font-semibold text-black hover:text-red-400 block my-2"
                        href=""
                      >
                        [Review] Kẻ Vô Hình - Còn gì đáng sợ hơn kẻ giết người
                        bệnh hoạn vô hình?
                      </a>
                      <p>
                        Phiên bản hiện đại của The Invisible Man là một trong
                        những phim kinh dị xuất sắc nhất năm nay.
                      </p>
                    </div>
                  </div>

                  <div className=" md:w-1/3 md:px-2">
                    <div style={{ width: "100%" }}>
                      <img
                        style={{ height: "176px", width: "100%" }}
                        className="rounded-sm"
                        src="https://s3img.vcdn.vn/123phim/2020/02/review-cau-be-ma-2-ban-trai-cua-be-beo-la-day-chu-dau-xa-15823608583110.jpg"
                        alt=""
                      />
                      <a
                        className="text-base font-semibold text-black hover:text-red-400 block my-2"
                        href=""
                      >
                        [Review] Cậu Bé Ma 2 - Bạn trai của 'bé Beo' là đây chứ
                        đâu xa
                      </a>
                      <p>
                        Brahms: The Boy II có những màn hù dọa ấn tượng nhưng
                        cái kết lại không tương xứng với phần mở đầu hứa hẹn.
                      </p>
                    </div>
                  </div>
                  <div className=" md:w-1/3 md:pl-2">
                    <div className="flex flex-col">
                      <div className="flex  mb-4">
                        <img
                          className="rounded-sm"
                          style={{ height: "50px", width: "50px" }}
                          src="https://s3img.vcdn.vn/123phim/2020/02/review-nhim-sonic-cuoi-tha-ga-cung-chang-nhim-sieu-thanh-lay-loi-15821907793369.jpg"
                          alt=""
                        />
                        <a className="text-black hover:text-red-400 text-base ml-2">
                          [Review] Nhím Sonic - Cười thả ga cùng chàng nhím siêu thanh lầy lội
                        </a>
                      </div>
                      <div className="flex mb-4">
                        <img
                          className="rounded-sm"
                          style={{ height: "50px", width: "50px" }}
                          src="https://s3img.vcdn.vn/123phim/2020/02/review-thang-nam-hanh-phuc-ta-tung-co-buong-bo-chua-bao-gio-la-viec-de-dang-15817967038683.jpg"
                          alt=""
                        />
                        <a className="text-black hover:text-red-400 text-base ml-2">
                          [Review] Tháng Năm Hạnh Phúc Ta Từng Có - Buông bỏ chưa bao giờ là việc dễ dàng
                        </a>
                      </div>
                      <div className="flex  mb-4">
                        <img
                          className="rounded-sm"
                          style={{ height: "50px", width: "50px" }}
                          src="https://s3img.vcdn.vn/123phim/2020/02/review-sac-dep-doi-tra-huong-giang-ke-chuyen-doi-minh-qua-phim-anh-15817958389162.jpg"
                          alt=""
                        />
                        <a className="text-black hover:text-red-400 text-base ml-2">
                          [Review] Sắc Đẹp Dối Trá - Hương Giang kể chuyện đời mình qua phim ảnh
                        </a>
                      </div>
                      <div className="flex  mb-4">
                        <img
                          className="rounded-sm"
                          style={{ height: "50px", width: "50px" }}
                          src="https://s3img.vcdn.vn/123phim/2020/02/review-birds-of-prey-15809871977193.jpg"
                          alt=""
                        />
                        <a className="text-black hover:text-red-400 text-base ml-2">
                          [Review] Birds of Prey - Màn lột xác hoành tráng của Harley Quinn và DC
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPane>
        <TabPane
        className={cn('animate__animated animate__backInDown ',{
          'hidden':isTurnMore,
          // 'scale-0':isTurnMore,
        })} 
          tab={<div className="text-xl hover:scale-110 text-black transition-all duration-500 ease-in-out font-semibold">Voucher</div>}
          key="3"
        >
            <div className="grid grid-cols-12 mt-4">
            <div className="md:col-start-3 md:col-span-4 col-start-2 col-span-10 md:pr-2 ">
              <div style={{ width: "100%" }}>
                <img
                  style={{ height: "287px",width: "100%" }}
                  className="rounded-md"
                  src="https://s3img.vcdn.vn/123phim/2019/10/123phim-nhap-ma-bkt-giam-ngay-20k-khi-dat-ve-bac-kim-thang-15712976725554.jpg"
                  alt=""
                />

                <a className="text-lg my-2 text-black font-semibold hover:text-red-400 block">
                  [123Phim] NHẬP MÃ 'BKT' - Giảm ngay 20k khi đặt vé Bắc Kim Thang
                </a>
                <p>
                  123Phim đồng hành cùng phim Việt - Giảm ngay 20k mỗi giao dịch khi đặt vé Bắc Kim Thang trên ứng dụng 123Phim.
                </p>
              </div>
            </div>
            <div className="md:col-start-7 md:col-span-4 col-start-2 col-span-10 md:pl-2  ">
              <div style={{ width: "100%" }}>
                <img
                  style={{ height: "287px",width: "100%" }}
                  className="rounded-md"
                  src="https://s3img.vcdn.vn/123phim/2019/08/sinh-nhat-mega-gs-15663933683466.jpg"
                  alt=""
                />
                <a className="text-lg my-2 text-black font-semibold hover:text-red-400 block">
                 Sinh Nhật Mega GS
                </a>
                <p>
                 Đến hẹn lại lên, vậy là một năm nữa đã trôi qua và chúng ta lại đến tháng 8, tháng sinh nhật của Mega GS Cinemas.
                </p>
              </div>
            </div>
          </div>
             <div className="grid grid-cols-12 ">
            <div className="md:col-start-3 md:col-span-4 col-start-2 col-span-10 md:pr-2 ">
              <div style={{ width: "100%" }}>
                <img
                  style={{ height: "287px", width: "100%"  }}
                  className="rounded-md"
                  src="https://s3img.vcdn.vn/123phim/2019/05/galaxy-trang-thi-xem-phim-hay-say-qua-tang-15572160162243.jpg"
                  alt=""
                />

                <a className="text-lg my-2 text-black font-semibold hover:text-red-400 block">
                 [Galaxy Tràng Thi] Xem Phim Hay, Say Quà Tặng
                </a>
                <p>
                 Nhân dịp khai trương Galaxy Tràng Thi, Galaxy Cinema dành tặng các Stars Hà Nội loạt phần quà siêu hấp dẫn.
                </p>
              </div>
            </div>
            <div className="md:col-start-7 md:col-span-4 col-start-2 col-span-10 md:pl-2">
              <div style={{ width: "100%" }}>
                <img
                  style={{ height: "287px" ,width: "100%"}}
                  className="rounded-md"
                  src="https://s3img.vcdn.vn/123phim/2019/05/123phim-tixshop-tro-lai-qua-xin-hon-xua-15583511037699.jpg"
                  alt=""
                />
                <a className="text-lg my-2 text-black font-semibold hover:text-red-400 block">
                 [123Phim] TixShop trở lại, quà ‘xịn’ hơn xưa
                </a>
                <p>
                  Nhiều Tix làm gì, để tiêu vào TixShop chứ còn chờ chi.
                </p>
              </div>
            </div>
          </div>
        </TabPane>
      </Tabs>
      <div className=" bg-white my-4 text-center" >
        <button
        onClick={()=>setIsTurnMore(!isTurnMore)}
          style={{ border: "2px solid #ccc" }}
          className="px-3 py-2 rounded-md text-gray-400 text-lg hover:scale-110 transition-all duration-500 hover:bg-gray-500" 
        >
          {isTurnMore ? 'Show more...' : 'Shorten'}
        </button>
      </div>
    </div>
  );
}

export default HomeMore;
