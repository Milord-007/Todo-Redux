import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetProducts } from '@/hooks/api/useGetProducts';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './ProductShowPage.css';

function ProductShowPage() {
  const { id } = useParams();
  const { data } = useGetProducts();

  const product = data.products.filter((el) => el.id == id);

  return (
    <div>
      {product.map((el) => {
        return (
          <div className="w-full flex " key={el.id}>
            <div className="w-[50%] flex justify-center items-center h-screen">
              <Swiper
                pagination={{
                  type: 'progressbar',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper pt-[40px]"
              >
                <SwiperSlide>
                  {' '}
                  <img src={el.images[0]} alt="" className=" " />
                </SwiperSlide>
                <SwiperSlide>
                  {' '}
                  <img src={el.images[1]} alt="" />{' '}
                </SwiperSlide>
                <SwiperSlide>
                  {' '}
                  <img src={el.images[2]} alt="" />{' '}
                </SwiperSlide>
                <SwiperSlide>
                  {' '}
                  <img src={el.images[3]} alt="" />{' '}
                </SwiperSlide>
                <SwiperSlide>
                  {' '}
                  <img src={el.images[4]} alt="" />{' '}
                </SwiperSlide>
              </Swiper>
            </div>

            <div className="w-[40%] pt-[80px]  ">
              <div>
                <p className="text-[38px] font-[600] text-[#ffdd00]">{el.title}</p>
                <p className="text-[22px] pt-[30px]">{el.description}</p>
                <p className="text-[20px] text-end pt-[30px] font-[700]"> Цена: {el.price}</p>

                <button className="bg-[#ffdd00] text-white font-[600] text-[20px] rounded-lg mt-[30px] p-2 w-full">
                  В корзину
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductShowPage;
