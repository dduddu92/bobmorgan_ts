import { DatePicker, Space } from 'antd';
import moment from 'moment';
import * as S from './ReservationInfo.styles';
import 'antd/dist/antd.min.css';

interface IPlaceList {
  placeList: {
    menu_avg_price: string;
    menu_max_price: string;
    menu_min_price: string;
    menus: {
      id: number;
      name: string;
      price: string;
      is_signature: boolean;
    }[];
    place_able_to_reserve: boolean;
    place_category: string;
    place_closed_temporarily: boolean;
    place_id: number;
    place_image: string;
    place_maximum_number_of_subscriber: number;
    place_name: string;
    place_opening_hours: string;
    place_region: string;
  }[];
}

const ResevationInfo = ({
  date,
  placeList,
}: {
  date: string;
  placeList: IPlaceList;
}) => {
  const format = 'YYYY-MM-DD';

  return (
    <S.ReservationWrapper>
      <S.Reservation>
        <S.ResevationContents>
          <S.ResevationInfo>
            <S.Title>지역</S.Title>
            <S.Info>{placeList[0]?.place_region.replaceAll('_', ' · ')}</S.Info>
          </S.ResevationInfo>
          <S.ResevationInfo>
            <S.Title>날짜</S.Title>
            <S.Info>
              <Space direction="vertical">
                <DatePicker
                  bordered={false}
                  defaultValue={moment()}
                  format={format}
                />
              </Space>
            </S.Info>
          </S.ResevationInfo>
        </S.ResevationContents>
      </S.Reservation>
    </S.ReservationWrapper>
  );
};

export default ResevationInfo;
