import React, { useState, useRef, useEffect } from 'react';
import onlySms from '../common/onlySms.json';
import call from '../common/call.json';
import ApexCharts from 'react-apexcharts';
import styled from 'styled-components';
import axios from 'axios';

interface smsType {
  _protocol: string;
  _address: string;
  _date: string;
  _type: string;
  _subject: string;
  _body: string;
  _toa: string;
  _sc_toa: string;
  _service_center: string;
  _read: string;
  _status: string;
  _locked: string;
  _date_sent: string;
  _sub_id: string;
  _readable_date: string;
  _contact_name: string;
}

interface callType {
  _number: string;
  _duration: string;
  _date: string;
  _type: string;
  _presentation: string;
  _subscription_id: string;
  _post_dial_digits: string;
  _subscription_component_name: string;
  _readable_date: string;
  _contact_name: string;
}

interface smsMonthType {
  Jan: smsType[];
  Feb: smsType[];
  Mar: smsType[];
  Apr: smsType[];
  May: smsType[];
  June: smsType[];
  July: smsType[];
  Aug: smsType[];
  Sep: smsType[];
  Oct: smsType[];
  Nov: smsType[];
  Dec: smsType[];
}

interface callMonthType {
  Jan: callType[];
  Feb: callType[];
  Mar: callType[];
  Apr: callType[];
  May: callType[];
  June: callType[];
  July: callType[];
  Aug: callType[];
  Sep: callType[];
  Oct: callType[];
  Nov: callType[];
  Dec: callType[];
}

interface monthAddressType {
  Jan: string[];
  Feb: string[];
  Mar: string[];
  Apr: string[];
  May: string[];
  June: string[];
  July: string[];
  Aug: string[];
  Sep: string[];
  Oct: string[];
  Nov: string[];
  Dec: string[];
}

interface addressCountMonthType {
  Jan: any[];
  Feb: any[];
  Mar: any[];
  Apr: any[];
  May: any[];
  June: any[];
  July: any[];
  Aug: any[];
  Sep: any[];
  Oct: any[];
  Nov: any[];
  Dec: any[];
}

interface smsAddressCountType {
  smsAddressCount_2019: addressCountMonthType;
  smsAddressCount_2020: addressCountMonthType;
  smsAddressCount_2021: addressCountMonthType;
  smsAddressCount_2022: addressCountMonthType;
}
interface callAddressCountType {
  callAddressCount_2020: addressCountMonthType;
  callAddressCount_2021: addressCountMonthType;
  callAddressCount_2022: addressCountMonthType;
}
interface sentimentType {
  negative: number;
  positive: number;
  neutral: number;
}
export default function Main() {
  // 비율 클릭 여부
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [sentimentClicked, setSentimentClicked] = useState<boolean>(false);
  // select month, year
  const [month, setMonth] = useState<string>();
  const [year, setYear] = useState<string>('2019');
  // 연도와 달별로 구분
  const sms_2019_Month = useRef<smsMonthType>({
    Jan: [],
    Feb: [],
    Mar: [],
    Apr: [],
    May: [],
    June: [],
    July: [],
    Aug: [],
    Sep: [],
    Oct: [],
    Nov: [],
    Dec: [],
  });
  const sms_2020_Month = useRef<smsMonthType>({
    Jan: [],
    Feb: [],
    Mar: [],
    Apr: [],
    May: [],
    June: [],
    July: [],
    Aug: [],
    Sep: [],
    Oct: [],
    Nov: [],
    Dec: [],
  });
  const sms_2021_Month = useRef<smsMonthType>({
    Jan: [],
    Feb: [],
    Mar: [],
    Apr: [],
    May: [],
    June: [],
    July: [],
    Aug: [],
    Sep: [],
    Oct: [],
    Nov: [],
    Dec: [],
  });
  const sms_2022_Month = useRef<smsMonthType>({
    Jan: [],
    Feb: [],
    Mar: [],
    Apr: [],
    May: [],
    June: [],
    July: [],
    Aug: [],
    Sep: [],
    Oct: [],
    Nov: [],
    Dec: [],
  });
  const call_2020_Month = useRef<callMonthType>({
    Jan: [],
    Feb: [],
    Mar: [],
    Apr: [],
    May: [],
    June: [],
    July: [],
    Aug: [],
    Sep: [],
    Oct: [],
    Nov: [],
    Dec: [],
  });
  const call_2021_Month = useRef<callMonthType>({
    Jan: [],
    Feb: [],
    Mar: [],
    Apr: [],
    May: [],
    June: [],
    July: [],
    Aug: [],
    Sep: [],
    Oct: [],
    Nov: [],
    Dec: [],
  });
  const call_2022_Month = useRef<callMonthType>({
    Jan: [],
    Feb: [],
    Mar: [],
    Apr: [],
    May: [],
    June: [],
    July: [],
    Aug: [],
    Sep: [],
    Oct: [],
    Nov: [],
    Dec: [],
  });
  // 연도별 문자 횟수
  const sms_2019 = useRef<number[]>([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const sms_2020 = useRef<number[]>([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const sms_2021 = useRef<number[]>([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const sms_2022 = useRef<number[]>([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  // 연도별 전화 횟수
  const call_2019 = useRef<number[]>([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const call_2020 = useRef<number[]>([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const call_2021 = useRef<number[]>([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const call_2022 = useRef<number[]>([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  // 연락 목록
  const smsAddresses_2019 = useRef<monthAddressType>({
    Jan: [],
    Feb: [],
    Mar: [],
    Apr: [],
    May: [],
    June: [],
    July: [],
    Aug: [],
    Sep: [],
    Oct: [],
    Nov: [],
    Dec: [],
  });
  const smsAddresses_2020 = useRef<monthAddressType>({
    Jan: [],
    Feb: [],
    Mar: [],
    Apr: [],
    May: [],
    June: [],
    July: [],
    Aug: [],
    Sep: [],
    Oct: [],
    Nov: [],
    Dec: [],
  });
  const smsAddresses_2021 = useRef<monthAddressType>({
    Jan: [],
    Feb: [],
    Mar: [],
    Apr: [],
    May: [],
    June: [],
    July: [],
    Aug: [],
    Sep: [],
    Oct: [],
    Nov: [],
    Dec: [],
  });
  const smsAddresses_2022 = useRef<monthAddressType>({
    Jan: [],
    Feb: [],
    Mar: [],
    Apr: [],
    May: [],
    June: [],
    July: [],
    Aug: [],
    Sep: [],
    Oct: [],
    Nov: [],
    Dec: [],
  });
  const callAddresses_2020 = useRef<monthAddressType>({
    Jan: [],
    Feb: [],
    Mar: [],
    Apr: [],
    May: [],
    June: [],
    July: [],
    Aug: [],
    Sep: [],
    Oct: [],
    Nov: [],
    Dec: [],
  });
  const callAddresses_2021 = useRef<monthAddressType>({
    Jan: [],
    Feb: [],
    Mar: [],
    Apr: [],
    May: [],
    June: [],
    July: [],
    Aug: [],
    Sep: [],
    Oct: [],
    Nov: [],
    Dec: [],
  });
  const callAddresses_2022 = useRef<monthAddressType>({
    Jan: [],
    Feb: [],
    Mar: [],
    Apr: [],
    May: [],
    June: [],
    July: [],
    Aug: [],
    Sep: [],
    Oct: [],
    Nov: [],
    Dec: [],
  });
  const smsAddressCount = useRef<smsAddressCountType>({
    smsAddressCount_2019: {
      Jan: [],
      Feb: [],
      Mar: [],
      Apr: [],
      May: [],
      June: [],
      July: [],
      Aug: [],
      Sep: [],
      Oct: [],
      Nov: [],
      Dec: [],
    },
    smsAddressCount_2020: {
      Jan: [],
      Feb: [],
      Mar: [],
      Apr: [],
      May: [],
      June: [],
      July: [],
      Aug: [],
      Sep: [],
      Oct: [],
      Nov: [],
      Dec: [],
    },
    smsAddressCount_2021: {
      Jan: [],
      Feb: [],
      Mar: [],
      Apr: [],
      May: [],
      June: [],
      July: [],
      Aug: [],
      Sep: [],
      Oct: [],
      Nov: [],
      Dec: [],
    },
    smsAddressCount_2022: {
      Jan: [],
      Feb: [],
      Mar: [],
      Apr: [],
      May: [],
      June: [],
      July: [],
      Aug: [],
      Sep: [],
      Oct: [],
      Nov: [],
      Dec: [],
    },
  });
  const callAddressCount = useRef<callAddressCountType>({
    callAddressCount_2020: {
      Jan: [],
      Feb: [],
      Mar: [],
      Apr: [],
      May: [],
      June: [],
      July: [],
      Aug: [],
      Sep: [],
      Oct: [],
      Nov: [],
      Dec: [],
    },
    callAddressCount_2021: {
      Jan: [],
      Feb: [],
      Mar: [],
      Apr: [],
      May: [],
      June: [],
      July: [],
      Aug: [],
      Sep: [],
      Oct: [],
      Nov: [],
      Dec: [],
    },
    callAddressCount_2022: {
      Jan: [],
      Feb: [],
      Mar: [],
      Apr: [],
      May: [],
      June: [],
      July: [],
      Aug: [],
      Sep: [],
      Oct: [],
      Nov: [],
      Dec: [],
    },
  });
  // 비율을 보기 위한 주소와 연락 횟수
  const [smsAddressCount_Address, setSmsAddressCount_Address] = useState<
    string[]
  >([]);
  const [smsAddressCount_Num, setSmsAddressCount_Num] = useState<number[]>([]);
  // 특정 연락처로 연락 횟수 구하는 함수
  const addresses = (smsAddress: any, smsAddressNumber: string) => {
    if (smsAddressNumber in smsAddress) {
      smsAddress[smsAddressNumber]++;
    } else {
      smsAddress[smsAddressNumber] = 1;
    }
    return smsAddress;
  };

  // 연락처와 횟수 분리
  const smsCount = (sms: any) => {
    Object.entries(sms).forEach(([key, value]) => {
      setSmsAddressCount_Address((smsAddressCount_Address) => [
        ...smsAddressCount_Address,
        key,
      ]);
      setSmsAddressCount_Num((smsAddressCount_Num) => [
        ...smsAddressCount_Num,
        Number(value),
      ]);
    });
  };

  useEffect(() => {
    onlySms.sms.forEach((sms: smsType) => {
      if (sms._readable_date.slice(0, 4) === '2019') {
        sms_2019.current[Number(sms._readable_date.slice(6, 8)) - 1] += 1;
        if (Number(sms._readable_date.slice(6, 8)) === 1) {
          sms_2019_Month.current.Jan.push(sms);
          smsAddresses_2019.current.Jan.push(sms._address);
        } else if (Number(sms._readable_date.slice(6, 8)) === 2) {
          sms_2019_Month.current.Feb.push(sms);
          smsAddresses_2019.current.Feb.push(sms._address);
        } else if (Number(sms._readable_date.slice(6, 8)) === 3) {
          sms_2019_Month.current.Mar.push(sms);
          smsAddresses_2019.current.Mar.push(sms._address);
        } else if (Number(sms._readable_date.slice(6, 8)) === 4) {
          sms_2019_Month.current.Apr.push(sms);
          smsAddresses_2019.current.Apr.push(sms._address);
        } else if (Number(sms._readable_date.slice(6, 8)) === 5) {
          sms_2019_Month.current.May.push(sms);
          smsAddresses_2019.current.May.push(sms._address);
        } else if (Number(sms._readable_date.slice(6, 8)) === 6) {
          sms_2019_Month.current.June.push(sms);
          smsAddresses_2019.current.June.push(sms._address);
        } else if (Number(sms._readable_date.slice(6, 8)) === 7) {
          sms_2019_Month.current.July.push(sms);
          smsAddresses_2019.current.July.push(sms._address);
        } else if (Number(sms._readable_date.slice(6, 8)) === 8) {
          sms_2019_Month.current.Aug.push(sms);
          smsAddresses_2019.current.Aug.push(sms._address);
        } else if (Number(sms._readable_date.slice(6, 8)) === 9) {
          sms_2019_Month.current.Sep.push(sms);
          smsAddresses_2019.current.Sep.push(sms._address);
        } else if (Number(sms._readable_date.slice(6, 8)) === 10) {
          sms_2019_Month.current.Oct.push(sms);
          smsAddresses_2019.current.Oct.push(sms._address);
        } else if (Number(sms._readable_date.slice(6, 8)) === 11) {
          sms_2019_Month.current.Nov.push(sms);
          smsAddresses_2019.current.Nov.push(sms._address);
        } else {
          sms_2019_Month.current.Dec.push(sms);
          smsAddresses_2019.current.Dec.push(sms._address);
        }
      } else if (sms._readable_date.slice(0, 4) === '2020') {
        sms_2020.current[Number(sms._readable_date.slice(6, 8)) - 1] += 1;
        if (Number(sms._readable_date.slice(6, 8)) === 1) {
          sms_2020_Month.current.Jan.push(sms);
          smsAddresses_2020.current.Jan.push(sms._address);
        } else if (Number(sms._readable_date.slice(6, 8)) === 2) {
          sms_2020_Month.current.Feb.push(sms);
          smsAddresses_2020.current.Feb.push(sms._address);
        } else if (Number(sms._readable_date.slice(6, 8)) === 3) {
          sms_2020_Month.current.Mar.push(sms);
          smsAddresses_2020.current.Mar.push(sms._address);
        } else if (Number(sms._readable_date.slice(6, 8)) === 4) {
          sms_2020_Month.current.Apr.push(sms);
          smsAddresses_2020.current.Apr.push(sms._address);
        } else if (Number(sms._readable_date.slice(6, 8)) === 5) {
          sms_2020_Month.current.May.push(sms);
          smsAddresses_2020.current.May.push(sms._address);
        } else if (Number(sms._readable_date.slice(6, 8)) === 6) {
          sms_2020_Month.current.June.push(sms);
          smsAddresses_2020.current.June.push(sms._address);
        } else if (Number(sms._readable_date.slice(6, 8)) === 7) {
          sms_2020_Month.current.July.push(sms);
          smsAddresses_2020.current.July.push(sms._address);
        } else if (Number(sms._readable_date.slice(6, 8)) === 8) {
          sms_2020_Month.current.Aug.push(sms);
          smsAddresses_2020.current.Aug.push(sms._address);
        } else if (Number(sms._readable_date.slice(6, 8)) === 9) {
          sms_2020_Month.current.Sep.push(sms);
          smsAddresses_2020.current.Sep.push(sms._address);
        } else if (Number(sms._readable_date.slice(6, 8)) === 10) {
          sms_2020_Month.current.Oct.push(sms);
          smsAddresses_2020.current.Oct.push(sms._address);
        } else if (Number(sms._readable_date.slice(6, 8)) === 11) {
          sms_2020_Month.current.Nov.push(sms);
          smsAddresses_2020.current.Nov.push(sms._address);
        } else {
          sms_2020_Month.current.Dec.push(sms);
          smsAddresses_2020.current.Dec.push(sms._address);
        }
      } else if (sms._readable_date.slice(0, 4) === '2021') {
        sms_2021.current[Number(sms._readable_date.slice(6, 8)) - 1] += 1;
        if (Number(sms._readable_date.slice(6, 8)) === 1) {
          sms_2021_Month.current.Jan.push(sms);
          smsAddresses_2021.current.Jan.push(sms._address);
        } else if (Number(sms._readable_date.slice(6, 8)) === 2) {
          sms_2021_Month.current.Feb.push(sms);
          smsAddresses_2021.current.Feb.push(sms._address);
        } else if (Number(sms._readable_date.slice(6, 8)) === 3) {
          sms_2021_Month.current.Mar.push(sms);
          smsAddresses_2021.current.Mar.push(sms._address);
        } else if (Number(sms._readable_date.slice(6, 8)) === 4) {
          sms_2021_Month.current.Apr.push(sms);
          smsAddresses_2021.current.Apr.push(sms._address);
        } else if (Number(sms._readable_date.slice(6, 8)) === 5) {
          sms_2021_Month.current.May.push(sms);
          smsAddresses_2021.current.May.push(sms._address);
        } else if (Number(sms._readable_date.slice(6, 8)) === 6) {
          sms_2021_Month.current.June.push(sms);
          smsAddresses_2021.current.June.push(sms._address);
        } else if (Number(sms._readable_date.slice(6, 8)) === 7) {
          sms_2021_Month.current.July.push(sms);
          smsAddresses_2021.current.July.push(sms._address);
        } else if (Number(sms._readable_date.slice(6, 8)) === 8) {
          sms_2021_Month.current.Aug.push(sms);
          smsAddresses_2021.current.Aug.push(sms._address);
        } else if (Number(sms._readable_date.slice(6, 8)) === 9) {
          sms_2021_Month.current.Sep.push(sms);
          smsAddresses_2021.current.Sep.push(sms._address);
        } else if (Number(sms._readable_date.slice(6, 8)) === 10) {
          sms_2021_Month.current.Oct.push(sms);
          smsAddresses_2021.current.Oct.push(sms._address);
        } else if (Number(sms._readable_date.slice(6, 8)) === 11) {
          sms_2021_Month.current.Nov.push(sms);
          smsAddresses_2021.current.Nov.push(sms._address);
        } else {
          sms_2021_Month.current.Dec.push(sms);
          smsAddresses_2021.current.Dec.push(sms._address);
        }
      } else {
        sms_2022.current[Number(sms._readable_date.slice(6, 8)) - 1] += 1;
        if (Number(sms._readable_date.slice(6, 8)) === 1) {
          sms_2022_Month.current.Jan.push(sms);
          smsAddresses_2022.current.Jan.push(sms._address);
        } else if (Number(sms._readable_date.slice(6, 8)) === 2) {
          sms_2022_Month.current.Feb.push(sms);
          smsAddresses_2022.current.Feb.push(sms._address);
        } else if (Number(sms._readable_date.slice(6, 8)) === 3) {
          sms_2022_Month.current.Mar.push(sms);
          smsAddresses_2022.current.Mar.push(sms._address);
        } else if (Number(sms._readable_date.slice(6, 8)) === 4) {
          sms_2022_Month.current.Apr.push(sms);
          smsAddresses_2022.current.Apr.push(sms._address);
        } else if (Number(sms._readable_date.slice(6, 8)) === 5) {
          sms_2022_Month.current.May.push(sms);
          smsAddresses_2022.current.May.push(sms._address);
        } else if (Number(sms._readable_date.slice(6, 8)) === 6) {
          sms_2022_Month.current.June.push(sms);
          smsAddresses_2022.current.June.push(sms._address);
        } else if (Number(sms._readable_date.slice(6, 8)) === 7) {
          sms_2022_Month.current.July.push(sms);
          smsAddresses_2022.current.July.push(sms._address);
        } else if (Number(sms._readable_date.slice(6, 8)) === 8) {
          sms_2022_Month.current.Aug.push(sms);
          smsAddresses_2022.current.Aug.push(sms._address);
        } else if (Number(sms._readable_date.slice(6, 8)) === 9) {
          sms_2022_Month.current.Sep.push(sms);
          smsAddresses_2022.current.Sep.push(sms._address);
        } else if (Number(sms._readable_date.slice(6, 8)) === 10) {
          sms_2022_Month.current.Oct.push(sms);
          smsAddresses_2022.current.Oct.push(sms._address);
        } else if (Number(sms._readable_date.slice(6, 8)) === 11) {
          sms_2022_Month.current.Nov.push(sms);
          smsAddresses_2022.current.Nov.push(sms._address);
        } else {
          sms_2022_Month.current.Dec.push(sms);
          smsAddresses_2022.current.Dec.push(sms._address);
        }
      }
    });
    call.call.forEach((call: callType) => {
      if (call._readable_date.slice(0, 4) === '2020') {
        call_2020.current[Number(call._readable_date.slice(6, 8)) - 1] += 1;
        if (Number(call._readable_date.slice(6, 8)) === 1) {
          call_2020_Month.current.Jan.push(call);
          callAddresses_2020.current.Jan.push(call._number);
        } else if (Number(call._readable_date.slice(6, 8)) === 2) {
          call_2020_Month.current.Feb.push(call);
          callAddresses_2020.current.Feb.push(call._number);
        } else if (Number(call._readable_date.slice(6, 8)) === 3) {
          call_2020_Month.current.Mar.push(call);
          callAddresses_2020.current.Mar.push(call._number);
        } else if (Number(call._readable_date.slice(6, 8)) === 4) {
          call_2020_Month.current.Apr.push(call);
          callAddresses_2020.current.Apr.push(call._number);
        } else if (Number(call._readable_date.slice(6, 8)) === 5) {
          call_2020_Month.current.May.push(call);
          callAddresses_2020.current.May.push(call._number);
        } else if (Number(call._readable_date.slice(6, 8)) === 6) {
          call_2020_Month.current.June.push(call);
          callAddresses_2020.current.June.push(call._number);
        } else if (Number(call._readable_date.slice(6, 8)) === 7) {
          call_2020_Month.current.July.push(call);
          callAddresses_2020.current.July.push(call._number);
        } else if (Number(call._readable_date.slice(6, 8)) === 8) {
          call_2020_Month.current.Aug.push(call);
          callAddresses_2020.current.Aug.push(call._number);
        } else if (Number(call._readable_date.slice(6, 8)) === 9) {
          call_2020_Month.current.Sep.push(call);
          callAddresses_2020.current.Sep.push(call._number);
        } else if (Number(call._readable_date.slice(6, 8)) === 10) {
          call_2020_Month.current.Oct.push(call);
          callAddresses_2020.current.Oct.push(call._number);
        } else if (Number(call._readable_date.slice(6, 8)) === 11) {
          call_2020_Month.current.Nov.push(call);
          callAddresses_2020.current.Nov.push(call._number);
        } else {
          call_2020_Month.current.Dec.push(call);
          callAddresses_2020.current.Dec.push(call._number);
        }
      } else if (call._readable_date.slice(0, 4) === '2021') {
        call_2021.current[Number(call._readable_date.slice(6, 8)) - 1] += 1;
        if (Number(call._readable_date.slice(6, 8)) === 1) {
          call_2021_Month.current.Jan.push(call);
          callAddresses_2021.current.Jan.push(call._number);
        } else if (Number(call._readable_date.slice(6, 8)) === 2) {
          call_2021_Month.current.Feb.push(call);
          callAddresses_2021.current.Feb.push(call._number);
        } else if (Number(call._readable_date.slice(6, 8)) === 3) {
          call_2021_Month.current.Mar.push(call);
          callAddresses_2021.current.Mar.push(call._number);
        } else if (Number(call._readable_date.slice(6, 8)) === 4) {
          call_2021_Month.current.Apr.push(call);
          callAddresses_2021.current.Apr.push(call._number);
        } else if (Number(call._readable_date.slice(6, 8)) === 5) {
          call_2021_Month.current.May.push(call);
          callAddresses_2021.current.May.push(call._number);
        } else if (Number(call._readable_date.slice(6, 8)) === 6) {
          call_2021_Month.current.June.push(call);
          callAddresses_2021.current.June.push(call._number);
        } else if (Number(call._readable_date.slice(6, 8)) === 7) {
          call_2021_Month.current.July.push(call);
          callAddresses_2021.current.July.push(call._number);
        } else if (Number(call._readable_date.slice(6, 8)) === 8) {
          call_2021_Month.current.Aug.push(call);
          callAddresses_2021.current.Aug.push(call._number);
        } else if (Number(call._readable_date.slice(6, 8)) === 9) {
          call_2021_Month.current.Sep.push(call);
          callAddresses_2021.current.Sep.push(call._number);
        } else if (Number(call._readable_date.slice(6, 8)) === 10) {
          call_2021_Month.current.Oct.push(call);
          callAddresses_2021.current.Oct.push(call._number);
        } else if (Number(call._readable_date.slice(6, 8)) === 11) {
          call_2021_Month.current.Nov.push(call);
          callAddresses_2021.current.Nov.push(call._number);
        } else {
          call_2021_Month.current.Dec.push(call);
          callAddresses_2021.current.Dec.push(call._number);
        }
      } else {
        call_2022.current[Number(call._readable_date.slice(6, 8)) - 1] += 1;
        if (Number(call._readable_date.slice(6, 8)) === 1) {
          call_2022_Month.current.Jan.push(call);
          callAddresses_2022.current.Jan.push(call._number);
        } else if (Number(call._readable_date.slice(6, 8)) === 2) {
          call_2022_Month.current.Feb.push(call);
          callAddresses_2022.current.Feb.push(call._number);
        } else if (Number(call._readable_date.slice(6, 8)) === 3) {
          call_2022_Month.current.Mar.push(call);
          callAddresses_2022.current.Mar.push(call._number);
        } else if (Number(call._readable_date.slice(6, 8)) === 4) {
          call_2022_Month.current.Apr.push(call);
          callAddresses_2022.current.Apr.push(call._number);
        } else if (Number(call._readable_date.slice(6, 8)) === 5) {
          call_2022_Month.current.May.push(call);
          callAddresses_2022.current.May.push(call._number);
        } else if (Number(call._readable_date.slice(6, 8)) === 6) {
          call_2022_Month.current.June.push(call);
          callAddresses_2022.current.June.push(call._number);
        } else if (Number(call._readable_date.slice(6, 8)) === 7) {
          call_2022_Month.current.July.push(call);
          callAddresses_2022.current.July.push(call._number);
        } else if (Number(call._readable_date.slice(6, 8)) === 8) {
          call_2022_Month.current.Aug.push(call);
          callAddresses_2022.current.Aug.push(call._number);
        } else if (Number(call._readable_date.slice(6, 8)) === 9) {
          call_2022_Month.current.Sep.push(call);
          callAddresses_2022.current.Sep.push(call._number);
        } else if (Number(call._readable_date.slice(6, 8)) === 10) {
          call_2022_Month.current.Oct.push(call);
          callAddresses_2022.current.Oct.push(call._number);
        } else if (Number(call._readable_date.slice(6, 8)) === 11) {
          call_2022_Month.current.Nov.push(call);
          callAddresses_2022.current.Nov.push(call._number);
        } else {
          call_2022_Month.current.Dec.push(call);
          callAddresses_2022.current.Dec.push(call._number);
        }
      }
    });

    smsAddressCount.current.smsAddressCount_2019.Jan =
      smsAddresses_2019.current.Jan.reduce(addresses, {});
    smsAddressCount.current.smsAddressCount_2019.Feb =
      smsAddresses_2019.current.Feb.reduce(addresses, {});
    smsAddressCount.current.smsAddressCount_2019.Mar =
      smsAddresses_2019.current.Mar.reduce(addresses, {});
    smsAddressCount.current.smsAddressCount_2019.Apr =
      smsAddresses_2019.current.Apr.reduce(addresses, {});
    smsAddressCount.current.smsAddressCount_2019.May =
      smsAddresses_2019.current.May.reduce(addresses, {});
    smsAddressCount.current.smsAddressCount_2019.June =
      smsAddresses_2019.current.June.reduce(addresses, {});
    smsAddressCount.current.smsAddressCount_2019.July =
      smsAddresses_2019.current.July.reduce(addresses, {});
    smsAddressCount.current.smsAddressCount_2019.Aug =
      smsAddresses_2019.current.Aug.reduce(addresses, {});
    smsAddressCount.current.smsAddressCount_2019.Sep =
      smsAddresses_2019.current.Sep.reduce(addresses, {});
    smsAddressCount.current.smsAddressCount_2019.Oct =
      smsAddresses_2019.current.Oct.reduce(addresses, {});
    smsAddressCount.current.smsAddressCount_2019.Nov =
      smsAddresses_2019.current.Nov.reduce(addresses, {});
    smsAddressCount.current.smsAddressCount_2019.Dec =
      smsAddresses_2019.current.Dec.reduce(addresses, {});
    smsAddressCount.current.smsAddressCount_2020.Jan =
      smsAddresses_2020.current.Jan.reduce(addresses, {});
    smsAddressCount.current.smsAddressCount_2020.Feb =
      smsAddresses_2020.current.Feb.reduce(addresses, {});
    smsAddressCount.current.smsAddressCount_2020.Mar =
      smsAddresses_2020.current.Mar.reduce(addresses, {});
    smsAddressCount.current.smsAddressCount_2020.Apr =
      smsAddresses_2020.current.Apr.reduce(addresses, {});
    smsAddressCount.current.smsAddressCount_2020.May =
      smsAddresses_2020.current.May.reduce(addresses, {});
    smsAddressCount.current.smsAddressCount_2020.June =
      smsAddresses_2020.current.June.reduce(addresses, {});
    smsAddressCount.current.smsAddressCount_2020.July =
      smsAddresses_2020.current.July.reduce(addresses, {});
    smsAddressCount.current.smsAddressCount_2020.Aug =
      smsAddresses_2020.current.Aug.reduce(addresses, {});
    smsAddressCount.current.smsAddressCount_2020.Sep =
      smsAddresses_2020.current.Sep.reduce(addresses, {});
    smsAddressCount.current.smsAddressCount_2020.Oct =
      smsAddresses_2020.current.Oct.reduce(addresses, {});
    smsAddressCount.current.smsAddressCount_2020.Nov =
      smsAddresses_2020.current.Nov.reduce(addresses, {});
    smsAddressCount.current.smsAddressCount_2020.Dec =
      smsAddresses_2020.current.Dec.reduce(addresses, {});
    smsAddressCount.current.smsAddressCount_2021.Jan =
      smsAddresses_2021.current.Jan.reduce(addresses, {});
    smsAddressCount.current.smsAddressCount_2021.Feb =
      smsAddresses_2021.current.Feb.reduce(addresses, {});
    smsAddressCount.current.smsAddressCount_2021.Mar =
      smsAddresses_2021.current.Mar.reduce(addresses, {});
    smsAddressCount.current.smsAddressCount_2021.Apr =
      smsAddresses_2021.current.Apr.reduce(addresses, {});
    smsAddressCount.current.smsAddressCount_2021.May =
      smsAddresses_2021.current.May.reduce(addresses, {});
    smsAddressCount.current.smsAddressCount_2021.June =
      smsAddresses_2021.current.June.reduce(addresses, {});
    smsAddressCount.current.smsAddressCount_2021.July =
      smsAddresses_2021.current.July.reduce(addresses, {});
    smsAddressCount.current.smsAddressCount_2021.Aug =
      smsAddresses_2021.current.Aug.reduce(addresses, {});
    smsAddressCount.current.smsAddressCount_2021.Sep =
      smsAddresses_2021.current.Sep.reduce(addresses, {});
    smsAddressCount.current.smsAddressCount_2021.Oct =
      smsAddresses_2021.current.Oct.reduce(addresses, {});
    smsAddressCount.current.smsAddressCount_2021.Nov =
      smsAddresses_2021.current.Nov.reduce(addresses, {});
    smsAddressCount.current.smsAddressCount_2021.Dec =
      smsAddresses_2021.current.Dec.reduce(addresses, {});
    smsAddressCount.current.smsAddressCount_2022.Jan =
      smsAddresses_2022.current.Jan.reduce(addresses, {});
    smsAddressCount.current.smsAddressCount_2022.Feb =
      smsAddresses_2022.current.Feb.reduce(addresses, {});
    smsAddressCount.current.smsAddressCount_2022.Mar =
      smsAddresses_2022.current.Mar.reduce(addresses, {});
    smsAddressCount.current.smsAddressCount_2022.Apr =
      smsAddresses_2022.current.Apr.reduce(addresses, {});
    smsAddressCount.current.smsAddressCount_2022.May =
      smsAddresses_2022.current.May.reduce(addresses, {});
    smsAddressCount.current.smsAddressCount_2022.June =
      smsAddresses_2022.current.June.reduce(addresses, {});
    smsAddressCount.current.smsAddressCount_2022.July =
      smsAddresses_2022.current.July.reduce(addresses, {});
    smsAddressCount.current.smsAddressCount_2022.Aug =
      smsAddresses_2022.current.Aug.reduce(addresses, {});
    smsAddressCount.current.smsAddressCount_2022.Sep =
      smsAddresses_2022.current.Sep.reduce(addresses, {});
    smsAddressCount.current.smsAddressCount_2022.Oct =
      smsAddresses_2022.current.Oct.reduce(addresses, {});
    smsAddressCount.current.smsAddressCount_2022.Nov =
      smsAddresses_2022.current.Nov.reduce(addresses, {});
    smsAddressCount.current.smsAddressCount_2022.Dec =
      smsAddresses_2022.current.Dec.reduce(addresses, {});
    callAddressCount.current.callAddressCount_2020.Jan =
      callAddresses_2020.current.Jan.reduce(addresses, {});
    callAddressCount.current.callAddressCount_2020.Feb =
      callAddresses_2020.current.Feb.reduce(addresses, {});
    callAddressCount.current.callAddressCount_2020.Mar =
      callAddresses_2020.current.Mar.reduce(addresses, {});
    callAddressCount.current.callAddressCount_2020.Apr =
      callAddresses_2020.current.Apr.reduce(addresses, {});
    callAddressCount.current.callAddressCount_2020.May =
      callAddresses_2020.current.May.reduce(addresses, {});
    callAddressCount.current.callAddressCount_2020.June =
      callAddresses_2020.current.June.reduce(addresses, {});
    callAddressCount.current.callAddressCount_2020.July =
      callAddresses_2020.current.July.reduce(addresses, {});
    callAddressCount.current.callAddressCount_2020.Aug =
      callAddresses_2020.current.Aug.reduce(addresses, {});
    callAddressCount.current.callAddressCount_2020.Sep =
      callAddresses_2020.current.Sep.reduce(addresses, {});
    callAddressCount.current.callAddressCount_2020.Oct =
      callAddresses_2020.current.Oct.reduce(addresses, {});
    callAddressCount.current.callAddressCount_2020.Nov =
      callAddresses_2020.current.Nov.reduce(addresses, {});
    callAddressCount.current.callAddressCount_2020.Dec =
      callAddresses_2020.current.Dec.reduce(addresses, {});
    callAddressCount.current.callAddressCount_2021.Jan =
      callAddresses_2021.current.Jan.reduce(addresses, {});
    callAddressCount.current.callAddressCount_2021.Feb =
      callAddresses_2021.current.Feb.reduce(addresses, {});
    callAddressCount.current.callAddressCount_2021.Mar =
      callAddresses_2021.current.Mar.reduce(addresses, {});
    callAddressCount.current.callAddressCount_2021.Apr =
      callAddresses_2021.current.Apr.reduce(addresses, {});
    callAddressCount.current.callAddressCount_2021.May =
      callAddresses_2021.current.May.reduce(addresses, {});
    callAddressCount.current.callAddressCount_2021.June =
      callAddresses_2021.current.June.reduce(addresses, {});
    callAddressCount.current.callAddressCount_2021.July =
      callAddresses_2021.current.July.reduce(addresses, {});
    callAddressCount.current.callAddressCount_2021.Aug =
      callAddresses_2021.current.Aug.reduce(addresses, {});
    callAddressCount.current.callAddressCount_2021.Sep =
      callAddresses_2021.current.Sep.reduce(addresses, {});
    callAddressCount.current.callAddressCount_2021.Oct =
      callAddresses_2021.current.Oct.reduce(addresses, {});
    callAddressCount.current.callAddressCount_2021.Nov =
      callAddresses_2021.current.Nov.reduce(addresses, {});
    callAddressCount.current.callAddressCount_2021.Dec =
      callAddresses_2021.current.Dec.reduce(addresses, {});
    callAddressCount.current.callAddressCount_2022.Jan =
      callAddresses_2022.current.Jan.reduce(addresses, {});
    callAddressCount.current.callAddressCount_2022.Feb =
      callAddresses_2022.current.Feb.reduce(addresses, {});
    callAddressCount.current.callAddressCount_2022.Mar =
      callAddresses_2022.current.Mar.reduce(addresses, {});
    callAddressCount.current.callAddressCount_2022.Apr =
      callAddresses_2022.current.Apr.reduce(addresses, {});
    callAddressCount.current.callAddressCount_2022.May =
      callAddresses_2022.current.May.reduce(addresses, {});
    callAddressCount.current.callAddressCount_2022.June =
      callAddresses_2022.current.June.reduce(addresses, {});
    callAddressCount.current.callAddressCount_2022.July =
      callAddresses_2022.current.July.reduce(addresses, {});
    callAddressCount.current.callAddressCount_2022.Aug =
      callAddresses_2022.current.Aug.reduce(addresses, {});
    callAddressCount.current.callAddressCount_2022.Sep =
      callAddresses_2022.current.Sep.reduce(addresses, {});
    callAddressCount.current.callAddressCount_2022.Oct =
      callAddresses_2022.current.Oct.reduce(addresses, {});
    callAddressCount.current.callAddressCount_2022.Nov =
      callAddresses_2022.current.Nov.reduce(addresses, {});
    callAddressCount.current.callAddressCount_2022.Dec =
      callAddresses_2022.current.Dec.reduce(addresses, {});
  }, []);

  useEffect(() => {
    setSmsAddressCount_Address([]);
    setSmsAddressCount_Num([]);
    if (year === '2019') {
      if (month === '1') {
        smsCount(smsAddressCount.current.smsAddressCount_2019.Jan);
      } else if (month === '2') {
        smsCount(smsAddressCount.current.smsAddressCount_2019.Feb);
      } else if (month === '3') {
        smsCount(smsAddressCount.current.smsAddressCount_2019.Mar);
      } else if (month === '4') {
        smsCount(smsAddressCount.current.smsAddressCount_2019.Apr);
      } else if (month === '5') {
        smsCount(smsAddressCount.current.smsAddressCount_2019.May);
      } else if (month === '6') {
        smsCount(smsAddressCount.current.smsAddressCount_2019.June);
      } else if (month === '7') {
        smsCount(smsAddressCount.current.smsAddressCount_2019.July);
      } else if (month === '8') {
        smsCount(smsAddressCount.current.smsAddressCount_2019.Aug);
      } else if (month === '9') {
        smsCount(smsAddressCount.current.smsAddressCount_2019.Sep);
      } else if (month === '10') {
        smsCount(smsAddressCount.current.smsAddressCount_2019.Oct);
      } else if (month === '11') {
        smsCount(smsAddressCount.current.smsAddressCount_2019.Nov);
      } else {
        smsCount(smsAddressCount.current.smsAddressCount_2019.Dec);
      }
    } else if (year === '2020') {
      if (month === '1') {
        smsCount(smsAddressCount.current.smsAddressCount_2020.Jan);
      } else if (month === '2') {
        smsCount(smsAddressCount.current.smsAddressCount_2020.Feb);
      } else if (month === '3') {
        smsCount(smsAddressCount.current.smsAddressCount_2020.Mar);
      } else if (month === '4') {
        smsCount(smsAddressCount.current.smsAddressCount_2020.Apr);
      } else if (month === '5') {
        smsCount(smsAddressCount.current.smsAddressCount_2020.May);
      } else if (month === '6') {
        smsCount(smsAddressCount.current.smsAddressCount_2020.June);
      } else if (month === '7') {
        smsCount(smsAddressCount.current.smsAddressCount_2020.July);
      } else if (month === '8') {
        smsCount(smsAddressCount.current.smsAddressCount_2020.Aug);
      } else if (month === '9') {
        smsCount(smsAddressCount.current.smsAddressCount_2020.Sep);
      } else if (month === '10') {
        smsCount(smsAddressCount.current.smsAddressCount_2020.Oct);
      } else if (month === '11') {
        smsCount(smsAddressCount.current.smsAddressCount_2020.Nov);
      } else {
        smsCount(smsAddressCount.current.smsAddressCount_2020.Dec);
      }
    } else if (year === '2021') {
      if (month === '1') {
        smsCount(smsAddressCount.current.smsAddressCount_2021.Jan);
      } else if (month === '2') {
        smsCount(smsAddressCount.current.smsAddressCount_2021.Feb);
      } else if (month === '3') {
        smsCount(smsAddressCount.current.smsAddressCount_2021.Mar);
      } else if (month === '4') {
        smsCount(smsAddressCount.current.smsAddressCount_2021.Apr);
      } else if (month === '5') {
        smsCount(smsAddressCount.current.smsAddressCount_2021.May);
      } else if (month === '6') {
        smsCount(smsAddressCount.current.smsAddressCount_2021.June);
      } else if (month === '7') {
        smsCount(smsAddressCount.current.smsAddressCount_2021.July);
      } else if (month === '8') {
        smsCount(smsAddressCount.current.smsAddressCount_2021.Aug);
      } else if (month === '9') {
        smsCount(smsAddressCount.current.smsAddressCount_2021.Sep);
      } else if (month === '10') {
        smsCount(smsAddressCount.current.smsAddressCount_2021.Oct);
      } else if (month === '11') {
        smsCount(smsAddressCount.current.smsAddressCount_2021.Nov);
      } else {
        smsCount(smsAddressCount.current.smsAddressCount_2021.Dec);
      }
    } else {
      if (month === '1') {
        smsCount(smsAddressCount.current.smsAddressCount_2022.Jan);
      } else if (month === '2') {
        smsCount(smsAddressCount.current.smsAddressCount_2022.Feb);
      } else if (month === '3') {
        smsCount(smsAddressCount.current.smsAddressCount_2022.Mar);
      } else if (month === '4') {
        smsCount(smsAddressCount.current.smsAddressCount_2022.Apr);
      } else if (month === '5') {
        smsCount(smsAddressCount.current.smsAddressCount_2022.May);
      } else if (month === '6') {
        smsCount(smsAddressCount.current.smsAddressCount_2022.June);
      } else if (month === '7') {
        smsCount(smsAddressCount.current.smsAddressCount_2022.July);
      } else if (month === '8') {
        smsCount(smsAddressCount.current.smsAddressCount_2022.Aug);
      } else if (month === '9') {
        smsCount(smsAddressCount.current.smsAddressCount_2022.Sep);
      } else if (month === '10') {
        smsCount(smsAddressCount.current.smsAddressCount_2022.Oct);
      } else if (month === '11') {
        smsCount(smsAddressCount.current.smsAddressCount_2022.Nov);
      } else {
        smsCount(smsAddressCount.current.smsAddressCount_2022.Dec);
      }
    }
  }, [year, month]);

  const [bodySentimentJanNegative, setBodySentimentJanNegative] =
    useState<number>(0);
  const [bodySentimentJanPositive, setBodySentimentJanPositive] =
    useState<number>(0);
  const [bodySentimentJanNeutral, setBodySentimentJanNeutral] =
    useState<number>(0);
  const [bodySentimentFebNegative, setBodySentimentFebNegative] =
    useState<number>(0);
  const [bodySentimentFebPositive, setBodySentimentFebPositive] =
    useState<number>(0);
  const [bodySentimentFebNeutral, setBodySentimentFebNeutral] =
    useState<number>(0);
  const [bodySentimentMarNegative, setBodySentimentMarNegative] =
    useState<number>(0);
  const [bodySentimentMarPositive, setBodySentimentMarPositive] =
    useState<number>(0);
  const [bodySentimentMarNeutral, setBodySentimentMarNeutral] =
    useState<number>(0);
  const [bodySentimentAprNegative, setBodySentimentAprNegative] =
    useState<number>(0);
  const [bodySentimentAprPositive, setBodySentimentAprPositive] =
    useState<number>(0);
  const [bodySentimentAprNeutral, setBodySentimentAprNeutral] =
    useState<number>(0);
  const [bodySentimentMayNegative, setBodySentimentMayNegative] =
    useState<number>(0);
  const [bodySentimentMayPositive, setBodySentimentMayPositive] =
    useState<number>(0);
  const [bodySentimentMayNeutral, setBodySentimentMayNeutral] =
    useState<number>(0);
  const [bodySentimentJuneNegative, setBodySentimentJuneNegative] =
    useState<number>(0);
  const [bodySentimentJunePositive, setBodySentimentJunePositive] =
    useState<number>(0);
  const [bodySentimentJuneNeutral, setBodySentimentJuneNeutral] =
    useState<number>(0);
  const [bodySentimentJulyNegative, setBodySentimentJulyNegative] =
    useState<number>(0);
  const [bodySentimentJulyPositive, setBodySentimentJulyPositive] =
    useState<number>(0);
  const [bodySentimentJulyNeutral, setBodySentimentJulyNeutral] =
    useState<number>(0);
  const [bodySentimentAugNegative, setBodySentimentAugNegative] =
    useState<number>(0);
  const [bodySentimentAugPositive, setBodySentimentAugPositive] =
    useState<number>(0);
  const [bodySentimentAugNeutral, setBodySentimentAugNeutral] =
    useState<number>(0);
  const [bodySentimentSepNegative, setBodySentimentSepNegative] =
    useState<number>(0);
  const [bodySentimentSepPositive, setBodySentimentSepPositive] =
    useState<number>(0);
  const [bodySentimentSepNeutral, setBodySentimentSepNeutral] =
    useState<number>(0);
  const [bodySentimentOctNegative, setBodySentimentOctNegative] =
    useState<number>(0);
  const [bodySentimentOctPositive, setBodySentimentOctPositive] =
    useState<number>(0);
  const [bodySentimentOctNeutral, setBodySentimentOctNeutral] =
    useState<number>(0);
  const [bodySentimentNovNegative, setBodySentimentNovNegative] =
    useState<number>(0);
  const [bodySentimentNovPositive, setBodySentimentNovPositive] =
    useState<number>(0);
  const [bodySentimentNovNeutral, setBodySentimentNovNeutral] =
    useState<number>(0);
  const [bodySentimentDecNegative, setBodySentimentDecNegative] =
    useState<number>(0);
  const [bodySentimentDecPositive, setBodySentimentDecPositive] =
    useState<number>(0);
  const [bodySentimentDecNeutral, setBodySentimentDecNeutral] =
    useState<number>(0);
  // const bodySentimentFeb = useRef<sentimentType>({
  //   negative: 0,
  //   positive: 0,
  //   neutral: 0,
  // });
  // const bodySentimentMar = useRef<sentimentType>({
  //   negative: 0,
  //   positive: 0,
  //   neutral: 0,
  // });
  // const bodySentimentApr = useRef<sentimentType>({
  //   negative: 0,
  //   positive: 0,
  //   neutral: 0,
  // });
  // const bodySentimentMay = useRef<sentimentType>({
  //   negative: 0,
  //   positive: 0,
  //   neutral: 0,
  // });
  // const bodySentimentJune = useRef<sentimentType>({
  //   negative: 0,
  //   positive: 0,
  //   neutral: 0,
  // });
  // const bodySentimentJuly = useRef<sentimentType>({
  //   negative: 0,
  //   positive: 0,
  //   neutral: 0,
  // });
  // const bodySentimentAug = useRef<sentimentType>({
  //   negative: 0,
  //   positive: 0,
  //   neutral: 0,
  // });
  // const bodySentimentSep = useRef<sentimentType>({
  //   negative: 0,
  //   positive: 0,
  //   neutral: 0,
  // });
  // const bodySentimentOct = useRef<sentimentType>({
  //   negative: 0,
  //   positive: 0,
  //   neutral: 0,
  // });
  // const bodySentimentNov = useRef<sentimentType>({
  //   negative: 0,
  //   positive: 0,
  //   neutral: 0,
  // });
  // const bodySentimentDec = useRef<sentimentType>({
  //   negative: 0,
  //   positive: 0,
  //   neutral: 0,
  // });

  const [bodyJanNum, setBodyJanNum] = useState<number>(0);
  const [bodyFebNum, setBodyFebNum] = useState<number>(0);
  const [bodyMarNum, setBodyMarNum] = useState<number>(0);
  const [bodyAprNum, setBodyAprNum] = useState<number>(0);
  const [bodyMayNum, setBodyMayNum] = useState<number>(0);
  const [bodyJuneNum, setBodyJuneNum] = useState<number>(0);
  const [bodyJulyNum, setBodyJulyNum] = useState<number>(0);
  const [bodyAugNum, setBodyAugNum] = useState<number>(0);
  const [bodySepNum, setBodySepNum] = useState<number>(0);
  const [bodyOctNum, setBodyOctNum] = useState<number>(0);
  const [bodyNovNum, setBodyNovNum] = useState<number>(0);
  const [bodyDecNum, setBodyDecNum] = useState<number>(0);

  useEffect(() => {
    if (sentimentClicked) {
      let bodyJan: string = '';
      let bodyFeb: string = '';
      let bodyMar: string = '';
      let bodyApr: string = '';
      let bodyMay: string = '';
      let bodyJune: string = '';
      let bodyJuly: string = '';
      let bodyAug: string = '';
      let bodySep: string = '';
      let bodyOct: string = '';
      let bodyNov: string = '';
      let bodyDec: string = '';

      if (year === '2019') {
        sms_2019_Month.current.Jan.forEach((sms) => {
          if (sms._type === '2') bodyJan = bodyJan.concat(sms._body);
        });
        sms_2019_Month.current.Feb.forEach((sms) => {
          if (sms._type === '2') bodyFeb = bodyFeb.concat(sms._body);
        });
        sms_2019_Month.current.Mar.forEach((sms) => {
          if (sms._type === '2') bodyMar = bodyMar.concat(sms._body);
        });
        sms_2019_Month.current.Apr.forEach((sms) => {
          if (sms._type === '2') bodyApr = bodyApr.concat(sms._body);
        });
        sms_2019_Month.current.May.forEach((sms) => {
          if (sms._type === '2') bodyMay = bodyMay.concat(sms._body);
        });
        sms_2019_Month.current.June.forEach((sms) => {
          if (sms._type === '2') bodyJune = bodyJune.concat(sms._body);
        });
        sms_2019_Month.current.July.forEach((sms) => {
          if (sms._type === '2') bodyJuly = bodyJuly.concat(sms._body);
        });
        sms_2019_Month.current.Aug.forEach((sms) => {
          if (sms._type === '2') bodyAug = bodyAug.concat(sms._body);
        });
        sms_2019_Month.current.Sep.forEach((sms) => {
          if (sms._type === '2') bodySep = bodySep.concat(sms._body);
        });
        sms_2019_Month.current.Oct.forEach((sms) => {
          if (sms._type === '2') bodyOct = bodyOct.concat(sms._body);
        });
        sms_2019_Month.current.Nov.forEach((sms) => {
          if (sms._type === '2') bodyNov = bodyNov.concat(sms._body);
        });
        sms_2019_Month.current.Dec.forEach((sms) => {
          if (sms._type === '2') bodyDec = bodyDec.concat(sms._body);
        });
      } else if (year === '2020') {
        sms_2020_Month.current.Jan.forEach((sms) => {
          if (sms._type === '2') bodyJan = bodyJan.concat(sms._body);
        });
        sms_2020_Month.current.Feb.forEach((sms) => {
          if (sms._type === '2') bodyFeb = bodyFeb.concat(sms._body);
        });
        sms_2020_Month.current.Mar.forEach((sms) => {
          if (sms._type === '2') bodyMar = bodyMar.concat(sms._body);
        });
        sms_2020_Month.current.Apr.forEach((sms) => {
          if (sms._type === '2') bodyApr = bodyApr.concat(sms._body);
        });
        sms_2020_Month.current.May.forEach((sms) => {
          if (sms._type === '2') bodyMay = bodyMay.concat(sms._body);
        });
        sms_2020_Month.current.June.forEach((sms) => {
          if (sms._type === '2') bodyJune = bodyJune.concat(sms._body);
        });
        sms_2020_Month.current.July.forEach((sms) => {
          if (sms._type === '2') bodyJuly = bodyJuly.concat(sms._body);
        });
        sms_2020_Month.current.Aug.forEach((sms) => {
          if (sms._type === '2') bodyAug = bodyAug.concat(sms._body);
        });
        sms_2020_Month.current.Sep.forEach((sms) => {
          if (sms._type === '2') bodySep = bodySep.concat(sms._body);
        });
        sms_2020_Month.current.Oct.forEach((sms) => {
          if (sms._type === '2') bodyOct = bodyOct.concat(sms._body);
        });
        sms_2020_Month.current.Nov.forEach((sms) => {
          if (sms._type === '2') bodyNov = bodyNov.concat(sms._body);
        });
        sms_2020_Month.current.Dec.forEach((sms) => {
          if (sms._type === '2') bodyDec = bodyDec.concat(sms._body);
        });
      } else if (year === '2021') {
        sms_2021_Month.current.Jan.forEach((sms) => {
          if (sms._type === '2') bodyJan = bodyJan.concat(sms._body);
        });
        sms_2021_Month.current.Feb.forEach((sms) => {
          if (sms._type === '2') bodyFeb = bodyFeb.concat(sms._body);
        });
        sms_2021_Month.current.Mar.forEach((sms) => {
          if (sms._type === '2') bodyMar = bodyMar.concat(sms._body);
        });
        sms_2021_Month.current.Apr.forEach((sms) => {
          if (sms._type === '2') bodyApr = bodyApr.concat(sms._body);
        });
        sms_2021_Month.current.May.forEach((sms) => {
          if (sms._type === '2') bodyMay = bodyMay.concat(sms._body);
        });
        sms_2021_Month.current.June.forEach((sms) => {
          if (sms._type === '2') bodyJune = bodyJune.concat(sms._body);
        });
        sms_2021_Month.current.July.forEach((sms) => {
          if (sms._type === '2') bodyJuly = bodyJuly.concat(sms._body);
        });
        sms_2021_Month.current.Aug.forEach((sms) => {
          if (sms._type === '2') bodyAug = bodyAug.concat(sms._body);
        });
        sms_2021_Month.current.Sep.forEach((sms) => {
          if (sms._type === '2') bodySep = bodySep.concat(sms._body);
        });
        sms_2021_Month.current.Oct.forEach((sms) => {
          if (sms._type === '2') bodyOct = bodyOct.concat(sms._body);
        });
        sms_2021_Month.current.Nov.forEach((sms) => {
          if (sms._type === '2') bodyNov = bodyNov.concat(sms._body);
        });
        sms_2021_Month.current.Dec.forEach((sms) => {
          if (sms._type === '2') bodyDec = bodyDec.concat(sms._body);
        });
      } else {
        sms_2022_Month.current.Jan.forEach((sms) => {
          if (sms._type === '2') bodyJan = bodyJan.concat(sms._body);
        });
        sms_2022_Month.current.Feb.forEach((sms) => {
          if (sms._type === '2') bodyFeb = bodyFeb.concat(sms._body);
        });
        sms_2022_Month.current.Mar.forEach((sms) => {
          if (sms._type === '2') bodyMar = bodyMar.concat(sms._body);
        });
        sms_2022_Month.current.Apr.forEach((sms) => {
          if (sms._type === '2') bodyApr = bodyApr.concat(sms._body);
        });
        sms_2022_Month.current.May.forEach((sms) => {
          if (sms._type === '2') bodyMay = bodyMay.concat(sms._body);
        });
        sms_2022_Month.current.June.forEach((sms) => {
          if (sms._type === '2') bodyJune = bodyJune.concat(sms._body);
        });
        sms_2022_Month.current.July.forEach((sms) => {
          if (sms._type === '2') bodyJuly = bodyJuly.concat(sms._body);
        });
        sms_2022_Month.current.Aug.forEach((sms) => {
          if (sms._type === '2') bodyAug = bodyAug.concat(sms._body);
        });
        sms_2022_Month.current.Sep.forEach((sms) => {
          if (sms._type === '2') bodySep = bodySep.concat(sms._body);
        });
        sms_2022_Month.current.Oct.forEach((sms) => {
          if (sms._type === '2') bodyOct = bodyOct.concat(sms._body);
        });
        sms_2022_Month.current.Nov.forEach((sms) => {
          if (sms._type === '2') bodyNov = bodyNov.concat(sms._body);
        });
        sms_2022_Month.current.Dec.forEach((sms) => {
          if (sms._type === '2') bodyDec = bodyDec.concat(sms._body);
        });
      }

      for (let i = 0; i < bodyJan.length; i += 900) {
        setBodyJanNum((bodyJanNum) => bodyJanNum + 1);
        axios({
          method: 'post',
          url: '/sentiment-analysis/v1/analyze',
          headers: {
            'X-NCP-APIGW-API-KEY-ID': process.env.REACT_APP_NAVER_CLIENT_ID,
            'X-NCP-APIGW-API-KEY': process.env.REACT_APP_NAVER_SECRET_KEY,
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
          data: {
            content: bodyJan.substring(i, i + 900),
          },
        })
          .then((response) => {
            setBodySentimentJanNegative(
              (bodySentimentJanNegative) =>
                (bodySentimentJanNegative +=
                  response.data.document.confidence.negative)
            );
            setBodySentimentJanPositive(
              (bodySentimentJanPositive) =>
                (bodySentimentJanPositive +=
                  response.data.document.confidence.positive)
            );
            setBodySentimentJanNeutral(
              (bodySentimentJanNeutral) =>
                (bodySentimentJanNeutral +=
                  response.data.document.confidence.neutral)
            );
          })
          .catch((error) => {
            console.log({ error });
          });
      }
      for (let i = 0; i < bodyFeb.length; i += 900) {
        setBodyFebNum((bodyFebNum) => bodyFebNum + 1);
        axios({
          method: 'post',
          url: '/sentiment-analysis/v1/analyze',
          headers: {
            'X-NCP-APIGW-API-KEY-ID': process.env.REACT_APP_NAVER_CLIENT_ID,
            'X-NCP-APIGW-API-KEY': process.env.REACT_APP_NAVER_SECRET_KEY,
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
          data: {
            content: bodyFeb.substring(i, i + 900),
          },
        })
          .then((response) => {
            setBodySentimentFebNegative(
              (bodySentimentFebNegative) =>
                (bodySentimentFebNegative +=
                  response.data.document.confidence.negative)
            );
            setBodySentimentFebPositive(
              (bodySentimentFebPositive) =>
                (bodySentimentFebPositive +=
                  response.data.document.confidence.positive)
            );
            setBodySentimentFebNeutral(
              (bodySentimentFebNeutral) =>
                (bodySentimentFebNeutral +=
                  response.data.document.confidence.neutral)
            );
          })
          .catch((error) => {
            console.log({ error });
          });
      }
      for (let i = 0; i < bodyMar.length; i += 900) {
        setBodyMarNum((bodyMarNum) => bodyMarNum + 1);
        axios({
          method: 'post',
          url: '/sentiment-analysis/v1/analyze',
          headers: {
            'X-NCP-APIGW-API-KEY-ID': process.env.REACT_APP_NAVER_CLIENT_ID,
            'X-NCP-APIGW-API-KEY': process.env.REACT_APP_NAVER_SECRET_KEY,
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
          data: {
            content: bodyMar.substring(i, i + 900),
          },
        })
          .then((response) => {
            setBodySentimentMarNegative(
              (bodySentimentMarNegative) =>
                (bodySentimentMarNegative +=
                  response.data.document.confidence.negative)
            );
            setBodySentimentMarPositive(
              (bodySentimentMarPositive) =>
                (bodySentimentMarPositive +=
                  response.data.document.confidence.positive)
            );
            setBodySentimentMarNeutral(
              (bodySentimentMarNeutral) =>
                (bodySentimentMarNeutral +=
                  response.data.document.confidence.neutral)
            );
          })
          .catch((error) => {
            console.log({ error });
          });
      }
      for (let i = 0; i < bodyApr.length; i += 900) {
        setBodyAprNum((bodyAprNum) => bodyAprNum + 1);
        axios({
          method: 'post',
          url: '/sentiment-analysis/v1/analyze',
          headers: {
            'X-NCP-APIGW-API-KEY-ID': process.env.REACT_APP_NAVER_CLIENT_ID,
            'X-NCP-APIGW-API-KEY': process.env.REACT_APP_NAVER_SECRET_KEY,
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
          data: {
            content: bodyApr.substring(i, i + 900),
          },
        })
          .then((response) => {
            setBodySentimentAprNegative(
              (bodySentimentAprNegative) =>
                (bodySentimentAprNegative +=
                  response.data.document.confidence.negative)
            );
            setBodySentimentAprPositive(
              (bodySentimentAprPositive) =>
                (bodySentimentAprPositive +=
                  response.data.document.confidence.positive)
            );
            setBodySentimentAprNeutral(
              (bodySentimentAprNeutral) =>
                (bodySentimentAprNeutral +=
                  response.data.document.confidence.neutral)
            );
          })
          .catch((error) => {
            console.log({ error });
          });
      }
      for (let i = 0; i < bodyMay.length; i += 900) {
        setBodyMayNum((bodyMayNum) => bodyMayNum + 1);
        axios({
          method: 'post',
          url: '/sentiment-analysis/v1/analyze',
          headers: {
            'X-NCP-APIGW-API-KEY-ID': process.env.REACT_APP_NAVER_CLIENT_ID,
            'X-NCP-APIGW-API-KEY': process.env.REACT_APP_NAVER_SECRET_KEY,
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
          data: {
            content: bodyMay.substring(i, i + 900),
          },
        })
          .then((response) => {
            setBodySentimentMayNegative(
              (bodySentimentMayNegative) =>
                (bodySentimentMayNegative +=
                  response.data.document.confidence.negative)
            );
            setBodySentimentMayPositive(
              (bodySentimentMayPositive) =>
                (bodySentimentMayPositive +=
                  response.data.document.confidence.positive)
            );
            setBodySentimentMayNeutral(
              (bodySentimentMayNeutral) =>
                (bodySentimentMayNeutral +=
                  response.data.document.confidence.neutral)
            );
          })
          .catch((error) => {
            console.log({ error });
          });
      }
      for (let i = 0; i < bodyJune.length; i += 900) {
        setBodyJuneNum((bodyJuneNum) => bodyJuneNum + 1);
        axios({
          method: 'post',
          url: '/sentiment-analysis/v1/analyze',
          headers: {
            'X-NCP-APIGW-API-KEY-ID': process.env.REACT_APP_NAVER_CLIENT_ID,
            'X-NCP-APIGW-API-KEY': process.env.REACT_APP_NAVER_SECRET_KEY,
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
          data: {
            content: bodyJune.substring(i, i + 900),
          },
        })
          .then((response) => {
            setBodySentimentJuneNegative(
              (bodySentimentJuneNegative) =>
                (bodySentimentJuneNegative +=
                  response.data.document.confidence.negative)
            );
            setBodySentimentJunePositive(
              (bodySentimentJunePositive) =>
                (bodySentimentJunePositive +=
                  response.data.document.confidence.positive)
            );
            setBodySentimentJuneNeutral(
              (bodySentimentJuneNeutral) =>
                (bodySentimentJuneNeutral +=
                  response.data.document.confidence.neutral)
            );
          })
          .catch((error) => {
            console.log({ error });
          });
      }
      for (let i = 0; i < bodyJuly.length; i += 900) {
        setBodyJulyNum((bodyJulyNum) => bodyJulyNum + 1);
        axios({
          method: 'post',
          url: '/sentiment-analysis/v1/analyze',
          headers: {
            'X-NCP-APIGW-API-KEY-ID': process.env.REACT_APP_NAVER_CLIENT_ID,
            'X-NCP-APIGW-API-KEY': process.env.REACT_APP_NAVER_SECRET_KEY,
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
          data: {
            content: bodyJuly.substring(i, i + 900),
          },
        })
          .then((response) => {
            setBodySentimentJulyNegative(
              (bodySentimentJulyNegative) =>
                (bodySentimentJulyNegative +=
                  response.data.document.confidence.negative)
            );
            setBodySentimentJulyPositive(
              (bodySentimentJulyPositive) =>
                (bodySentimentJulyPositive +=
                  response.data.document.confidence.positive)
            );
            setBodySentimentJulyNeutral(
              (bodySentimentJulyNeutral) =>
                (bodySentimentJulyNeutral +=
                  response.data.document.confidence.neutral)
            );
          })
          .catch((error) => {
            console.log({ error });
          });
      }
      for (let i = 0; i < bodyAug.length; i += 900) {
        setBodyAugNum((bodyAugNum) => bodyAugNum + 1);
        axios({
          method: 'post',
          url: '/sentiment-analysis/v1/analyze',
          headers: {
            'X-NCP-APIGW-API-KEY-ID': process.env.REACT_APP_NAVER_CLIENT_ID,
            'X-NCP-APIGW-API-KEY': process.env.REACT_APP_NAVER_SECRET_KEY,
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
          data: {
            content: bodyAug.substring(i, i + 900),
          },
        })
          .then((response) => {
            setBodySentimentAugNegative(
              (bodySentimentAugNegative) =>
                (bodySentimentAugNegative +=
                  response.data.document.confidence.negative)
            );
            setBodySentimentAugPositive(
              (bodySentimentAugPositive) =>
                (bodySentimentAugPositive +=
                  response.data.document.confidence.positive)
            );
            setBodySentimentAugNeutral(
              (bodySentimentAugNeutral) =>
                (bodySentimentAugNeutral +=
                  response.data.document.confidence.neutral)
            );
          })
          .catch((error) => {
            console.log({ error });
          });
      }
      for (let i = 0; i < bodySep.length; i += 900) {
        setBodySepNum((bodySepNum) => bodySepNum + 1);
        axios({
          method: 'post',
          url: '/sentiment-analysis/v1/analyze',
          headers: {
            'X-NCP-APIGW-API-KEY-ID': process.env.REACT_APP_NAVER_CLIENT_ID,
            'X-NCP-APIGW-API-KEY': process.env.REACT_APP_NAVER_SECRET_KEY,
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
          data: {
            content: bodySep.substring(i, i + 900),
          },
        })
          .then((response) => {
            setBodySentimentSepNegative(
              (bodySentimentSepNegative) =>
                (bodySentimentSepNegative +=
                  response.data.document.confidence.negative)
            );
            setBodySentimentSepPositive(
              (bodySentimentSepPositive) =>
                (bodySentimentSepPositive +=
                  response.data.document.confidence.positive)
            );
            setBodySentimentSepNeutral(
              (bodySentimentSepNeutral) =>
                (bodySentimentSepNeutral +=
                  response.data.document.confidence.neutral)
            );
          })
          .catch((error) => {
            console.log({ error });
          });
      }
      for (let i = 0; i < bodyOct.length; i += 900) {
        setBodyOctNum((bodyOctNum) => bodyOctNum + 1);
        axios({
          method: 'post',
          url: '/sentiment-analysis/v1/analyze',
          headers: {
            'X-NCP-APIGW-API-KEY-ID': process.env.REACT_APP_NAVER_CLIENT_ID,
            'X-NCP-APIGW-API-KEY': process.env.REACT_APP_NAVER_SECRET_KEY,
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
          data: {
            content: bodyOct.substring(i, i + 900),
          },
        })
          .then((response) => {
            setBodySentimentOctNegative(
              (bodySentimentOctNegative) =>
                (bodySentimentOctNegative +=
                  response.data.document.confidence.negative)
            );
            setBodySentimentOctPositive(
              (bodySentimentOctPositive) =>
                (bodySentimentOctPositive +=
                  response.data.document.confidence.positive)
            );
            setBodySentimentOctNeutral(
              (bodySentimentOctNeutral) =>
                (bodySentimentOctNeutral +=
                  response.data.document.confidence.neutral)
            );
          })
          .catch((error) => {
            console.log({ error });
          });
      }
      for (let i = 0; i < bodyNov.length; i += 900) {
        setBodyNovNum((bodyNovNum) => bodyNovNum + 1);
        axios({
          method: 'post',
          url: '/sentiment-analysis/v1/analyze',
          headers: {
            'X-NCP-APIGW-API-KEY-ID': process.env.REACT_APP_NAVER_CLIENT_ID,
            'X-NCP-APIGW-API-KEY': process.env.REACT_APP_NAVER_SECRET_KEY,
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
          data: {
            content: bodyNov.substring(i, i + 900),
          },
        })
          .then((response) => {
            setBodySentimentNovNegative(
              (bodySentimentNovNegative) =>
                (bodySentimentNovNegative +=
                  response.data.document.confidence.negative)
            );
            setBodySentimentNovPositive(
              (bodySentimentNovPositive) =>
                (bodySentimentNovPositive +=
                  response.data.document.confidence.positive)
            );
            setBodySentimentNovNeutral(
              (bodySentimentNovNeutral) =>
                (bodySentimentNovNeutral +=
                  response.data.document.confidence.neutral)
            );
          })
          .catch((error) => {
            console.log({ error });
          });
      }
      for (let i = 0; i < bodyDec.length; i += 900) {
        setBodyDecNum((bodyDecNum) => bodyDecNum + 1);
        axios({
          method: 'post',
          url: '/sentiment-analysis/v1/analyze',
          headers: {
            'X-NCP-APIGW-API-KEY-ID': process.env.REACT_APP_NAVER_CLIENT_ID,
            'X-NCP-APIGW-API-KEY': process.env.REACT_APP_NAVER_SECRET_KEY,
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
          data: {
            content: bodyDec.substring(i, i + 900),
          },
        })
          .then((response) => {
            setBodySentimentDecNegative(
              (bodySentimentDecNegative) =>
                (bodySentimentDecNegative +=
                  response.data.document.confidence.negative)
            );
            setBodySentimentDecPositive(
              (bodySentimentDecPositive) =>
                (bodySentimentDecPositive +=
                  response.data.document.confidence.positive)
            );
            setBodySentimentDecNeutral(
              (bodySentimentDecNeutral) =>
                (bodySentimentDecNeutral +=
                  response.data.document.confidence.neutral)
            );
          })
          .catch((error) => {
            console.log({ error });
          });
      }
    }
  }, [sentimentClicked]);

  return (
    <Container>
      <select
        value={year}
        onChange={(e) => {
          setYear(e.target.value);
        }}
      >
        <option value={2019}>2019</option>
        <option value={2020}>2020</option>
        <option value={2021}>2021</option>
        <option value={2022}>2022</option>
      </select>
      {isClicked && (
        <select
          value={month}
          onChange={(e) => {
            setMonth(e.target.value);
          }}
        >
          <option value={1}>1월</option>
          <option value={2}>2월</option>
          <option value={3}>3월</option>
          <option value={4}>4월</option>
          <option value={5}>5월</option>
          <option value={6}>6월</option>
          <option value={7}>7월</option>
          <option value={8}>8월</option>
          <option value={9}>9월</option>
          <option value={10}>10월</option>
          <option value={11}>11월</option>
          <option value={12}>12월</option>
        </select>
      )}
      {isClicked ? (
        <SmsButton
          onClick={() => {
            setIsClicked(!isClicked);
          }}
        >
          SMS & CALL
        </SmsButton>
      ) : (
        <ButtonSection>
          <CountButton
            onClick={() => {
              setIsClicked(!isClicked);
            }}
          >
            비율
          </CountButton>
          <SentimentButton
            onClick={() => {
              setSentimentClicked(!sentimentClicked);
            }}
          >
            감정 분석
          </SentimentButton>
        </ButtonSection>
      )}
      {isClicked ? (
        <ApexCharts
          type="donut"
          series={smsAddressCount_Num}
          options={{
            chart: {
              height: 350,
              type: 'line',
              zoom: {
                enabled: false,
              },
            },
            dataLabels: {
              enabled: true,
              formatter: function (val) {
                return Math.round(Number(val)) + '%';
              },
            },
            stroke: {
              curve: 'straight',
            },
            title: {
              text: 'User Data',
              align: 'left',
            },
            grid: {
              row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5,
              },
            },
            labels: smsAddressCount_Address,
            plotOptions: {
              pie: {
                donut: {
                  labels: {
                    show: true,
                    total: {
                      showAlways: true,
                      show: true,
                      label: `${year}년 ${month}월 SMS`,
                      fontSize: '12px',
                      color: 'red',
                    },
                    value: {
                      fontSize: '22px',
                      show: true,
                      color: 'blue',
                    },
                  },
                },
              },
            },
          }}
          height={750}
          width={1300}
        />
      ) : (
        <ApexCharts
          type="bar"
          series={[
            {
              name: 'sms',
              data:
                year === '2019'
                  ? sms_2019.current
                  : year === '2020'
                  ? sms_2020.current
                  : year === '2021'
                  ? sms_2021.current
                  : sms_2022.current,
            },
            {
              name: 'call',
              data:
                year === '2019'
                  ? call_2019.current
                  : year === '2020'
                  ? call_2020.current
                  : year === '2021'
                  ? call_2021.current
                  : call_2022.current,
            },
          ]}
          options={{
            chart: {
              height: 350,
              type: 'line',
              zoom: {
                enabled: false,
              },
            },
            dataLabels: {
              enabled: false,
            },
            stroke: {
              curve: 'straight',
            },
            title: {
              text: 'User Data',
              align: 'left',
            },
            grid: {
              row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5,
              },
            },
            xaxis: {
              categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'June',
                'July',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec',
              ],
            },
          }}
          height={500}
          width={1000}
        />
      )}
      {sentimentClicked && (
        <p>
          1월 부정 : {bodySentimentJanNegative / bodyJanNum}, 긍정 :{' '}
          {bodySentimentJanPositive / bodyJanNum}, 중립 :{' '}
          {bodySentimentJanNeutral / bodyJanNum}
          <br />
          2월 부정 : {bodySentimentFebNegative / bodyFebNum}, 긍정 :{' '}
          {bodySentimentFebPositive / bodyFebNum}, 중립 :{' '}
          {bodySentimentFebNeutral / bodyFebNum}
          <br />
          3월 부정 : {bodySentimentMarNegative / bodyMarNum}, 긍정 :{' '}
          {bodySentimentMarPositive / bodyMarNum}, 중립 :{' '}
          {bodySentimentMarNeutral / bodyMarNum}
          <br />
          4월 부정 : {bodySentimentAprNegative / bodyAprNum}, 긍정 :{' '}
          {bodySentimentAprPositive / bodyAprNum}, 중립 :{' '}
          {bodySentimentAprNeutral / bodyAprNum}
          <br />
          5월 부정 : {bodySentimentMayNegative / bodyMayNum}, 긍정 :{' '}
          {bodySentimentMayPositive / bodyMayNum}, 중립 :{' '}
          {bodySentimentMayNeutral / bodyMayNum}
          <br />
          6월 부정 : {bodySentimentJuneNegative / bodyJuneNum}, 긍정 :{' '}
          {bodySentimentJunePositive / bodyJuneNum}, 중립 :{' '}
          {bodySentimentJuneNeutral / bodyJuneNum}
          <br />
          7월 부정 : {bodySentimentJulyNegative / bodyJulyNum}, 긍정 :{' '}
          {bodySentimentJulyPositive / bodyJulyNum}, 중립 :{' '}
          {bodySentimentJulyNeutral / bodyJulyNum}
          <br />
          8월 부정 : {bodySentimentAugNegative / bodyAugNum}, 긍정 :{' '}
          {bodySentimentAugPositive / bodyAugNum}, 중립 :{' '}
          {bodySentimentAugNeutral / bodyAugNum}
          <br />
          9월 부정 : {bodySentimentSepNegative / bodySepNum}, 긍정 :{' '}
          {bodySentimentSepPositive / bodySepNum}, 중립 :{' '}
          {bodySentimentSepNeutral / bodySepNum}
          <br />
          10월 부정 : {bodySentimentOctNegative / bodyOctNum}, 긍정 :{' '}
          {bodySentimentOctPositive / bodyOctNum}, 중립 :{' '}
          {bodySentimentOctNeutral / bodyOctNum}
          <br />
          11월 부정 : {bodySentimentNovNegative / bodyNovNum}, 긍정 :{' '}
          {bodySentimentNovPositive / bodyNovNum}, 중립 :{' '}
          {bodySentimentNovNeutral / bodyNovNum}
          <br />
          12월 부정 : {bodySentimentDecNegative / bodyDecNum}, 긍정 :{' '}
          {bodySentimentDecPositive / bodyDecNum}, 중립 :{' '}
          {bodySentimentDecNeutral / bodyDecNum}
        </p>
      )}
    </Container>
  );
}

const Container = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  select {
    -family: 'Noto Sansf KR', sans-serif;
    -size: 13px;
    -weight: 400;
    line-height: 1.5;
    width: 80px;
    height: 35px;
    top: 60px;
    left: 30px;
    color: #444;
    background-color: #fff;
    padding: 0.3em 0.7em 0.2em 0.4em;
    border: 1px solid #aaa;
    border-radius: 0.5em;
    box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);

    &:hover {
      border-color: #888;
    }
    &:focus {
      border-color: #aaa;
      box-shadow: 0 0 1px 2px rgba(59, 153, 252, 0.7);
      color: #222;
      outline: none;
    }
    &:disabled {
      opacity: 0.5;
    }
  }
  button {
    background: #4286f4;

    margin: 5px;
    padding: 0.5rem 1rem;

    -family: 'Noto Sans KR', sans-serif;
    -size: 1rem;
    -weight: 400;
    text-align: center;
    text-decoration: none;

    border: none;
    border-radius: 4px;

    display: inline-block;
    width: auto;

    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);

    cursor: pointer;

    transition: 0.5s;

    &:active {
      background: skyblue;
      outline: 0;
    }
    &:disabled {
      opacity: 0.5;
    }
    p {
      -family: 'Pretendard';
      -style: normal;
      -weight: 500;
      -size: 16px;
      line-height: 24px;
      color: #ffffff;
    }
  }
`;
const SmsButton = styled.button`
  position: absolute;
  width: 40px;
  height: 40px;
  right: 150px;
`;
const ButtonSection = styled.section`
  position: absolute;
  top: -10px;
  width: 200px;
  height: 40px;
  right: 100px;
`;
const CountButton = styled.button`
  width: 40px;
  height: 40px;
`;
const SentimentButton = styled.button`
  width: 40px;
  height: 40px;
`;
