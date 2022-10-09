import { DatePicker, Space } from 'antd';
import moment from 'moment';
import * as S from './ReservationInfo.styles';
import 'antd/dist/antd.min.css';

const ResevationInfo = ({ date, placeList }) => {
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
