import React, { useRef } from 'react';
import onlySms from '../common/onlySms.json';
import call from '../common/call.json';

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

export default function Main() {
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

  onlySms.sms.map((sms: smsType) => {
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
  call.call.map((call: callType) => {
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
    smsAddresses_2019.current.Jan.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});
  smsAddressCount.current.smsAddressCount_2019.Feb =
    smsAddresses_2019.current.Feb.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});
  smsAddressCount.current.smsAddressCount_2019.Mar =
    smsAddresses_2019.current.Mar.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});
  smsAddressCount.current.smsAddressCount_2019.Apr =
    smsAddresses_2019.current.Apr.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});

  smsAddressCount.current.smsAddressCount_2019.May =
    smsAddresses_2019.current.May.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});
  smsAddressCount.current.smsAddressCount_2019.June =
    smsAddresses_2019.current.June.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});
  smsAddressCount.current.smsAddressCount_2019.July =
    smsAddresses_2019.current.July.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});
  smsAddressCount.current.smsAddressCount_2019.Aug =
    smsAddresses_2019.current.Aug.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});
  smsAddressCount.current.smsAddressCount_2019.Sep =
    smsAddresses_2019.current.Sep.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});
  smsAddressCount.current.smsAddressCount_2019.Oct =
    smsAddresses_2019.current.Oct.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});
  smsAddressCount.current.smsAddressCount_2019.Nov =
    smsAddresses_2019.current.Nov.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});
  smsAddressCount.current.smsAddressCount_2019.Dec =
    smsAddresses_2019.current.Dec.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});
  smsAddressCount.current.smsAddressCount_2020.Jan =
    smsAddresses_2020.current.Jan.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});
  smsAddressCount.current.smsAddressCount_2020.Feb =
    smsAddresses_2020.current.Feb.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});
  smsAddressCount.current.smsAddressCount_2020.Mar =
    smsAddresses_2020.current.Mar.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});
  smsAddressCount.current.smsAddressCount_2020.Apr =
    smsAddresses_2020.current.Apr.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});

  smsAddressCount.current.smsAddressCount_2020.May =
    smsAddresses_2020.current.May.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});
  smsAddressCount.current.smsAddressCount_2020.June =
    smsAddresses_2020.current.June.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});
  smsAddressCount.current.smsAddressCount_2020.July =
    smsAddresses_2020.current.July.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});
  smsAddressCount.current.smsAddressCount_2020.Aug =
    smsAddresses_2020.current.Aug.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});
  smsAddressCount.current.smsAddressCount_2020.Sep =
    smsAddresses_2020.current.Sep.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});
  smsAddressCount.current.smsAddressCount_2020.Oct =
    smsAddresses_2020.current.Oct.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});
  smsAddressCount.current.smsAddressCount_2020.Nov =
    smsAddresses_2020.current.Nov.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});
  smsAddressCount.current.smsAddressCount_2020.Dec =
    smsAddresses_2020.current.Dec.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});
  smsAddressCount.current.smsAddressCount_2021.Jan =
    smsAddresses_2021.current.Jan.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});
  smsAddressCount.current.smsAddressCount_2021.Feb =
    smsAddresses_2021.current.Feb.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});
  smsAddressCount.current.smsAddressCount_2021.Mar =
    smsAddresses_2021.current.Mar.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});
  smsAddressCount.current.smsAddressCount_2021.Apr =
    smsAddresses_2021.current.Apr.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});

  smsAddressCount.current.smsAddressCount_2021.May =
    smsAddresses_2021.current.May.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});
  smsAddressCount.current.smsAddressCount_2021.June =
    smsAddresses_2021.current.June.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});
  smsAddressCount.current.smsAddressCount_2021.July =
    smsAddresses_2021.current.July.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});
  smsAddressCount.current.smsAddressCount_2021.Aug =
    smsAddresses_2021.current.Aug.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});
  smsAddressCount.current.smsAddressCount_2021.Sep =
    smsAddresses_2021.current.Sep.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});
  smsAddressCount.current.smsAddressCount_2021.Oct =
    smsAddresses_2021.current.Oct.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});
  smsAddressCount.current.smsAddressCount_2021.Nov =
    smsAddresses_2021.current.Nov.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});
  smsAddressCount.current.smsAddressCount_2021.Dec =
    smsAddresses_2021.current.Dec.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});
  smsAddressCount.current.smsAddressCount_2022.Jan =
    smsAddresses_2022.current.Jan.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});
  smsAddressCount.current.smsAddressCount_2022.Feb =
    smsAddresses_2022.current.Feb.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});
  smsAddressCount.current.smsAddressCount_2022.Mar =
    smsAddresses_2022.current.Mar.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});
  smsAddressCount.current.smsAddressCount_2022.Apr =
    smsAddresses_2022.current.Apr.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});

  smsAddressCount.current.smsAddressCount_2022.May =
    smsAddresses_2022.current.May.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});
  smsAddressCount.current.smsAddressCount_2022.June =
    smsAddresses_2022.current.June.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});
  smsAddressCount.current.smsAddressCount_2022.July =
    smsAddresses_2022.current.July.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});
  smsAddressCount.current.smsAddressCount_2022.Aug =
    smsAddresses_2022.current.Aug.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});
  smsAddressCount.current.smsAddressCount_2022.Sep =
    smsAddresses_2022.current.Sep.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});
  smsAddressCount.current.smsAddressCount_2022.Oct =
    smsAddresses_2022.current.Oct.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});
  smsAddressCount.current.smsAddressCount_2022.Nov =
    smsAddresses_2022.current.Nov.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});
  smsAddressCount.current.smsAddressCount_2022.Dec =
    smsAddresses_2022.current.Dec.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});
  callAddressCount.current.callAddressCount_2020.Jan =
    callAddresses_2020.current.Jan.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});
  callAddressCount.current.callAddressCount_2020.Feb =
    callAddresses_2020.current.Feb.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});
  callAddressCount.current.callAddressCount_2020.Mar =
    callAddresses_2020.current.Mar.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});
  callAddressCount.current.callAddressCount_2020.Apr =
    callAddresses_2020.current.Apr.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});

  callAddressCount.current.callAddressCount_2020.May =
    callAddresses_2020.current.May.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});
  callAddressCount.current.callAddressCount_2020.June =
    callAddresses_2020.current.June.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});
  callAddressCount.current.callAddressCount_2020.July =
    callAddresses_2020.current.July.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});
  callAddressCount.current.callAddressCount_2020.Aug =
    callAddresses_2020.current.Aug.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});
  callAddressCount.current.callAddressCount_2020.Sep =
    callAddresses_2020.current.Sep.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});
  callAddressCount.current.callAddressCount_2020.Oct =
    callAddresses_2020.current.Oct.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});
  callAddressCount.current.callAddressCount_2020.Nov =
    callAddresses_2020.current.Nov.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});
  callAddressCount.current.callAddressCount_2020.Dec =
    callAddresses_2020.current.Dec.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});
  callAddressCount.current.callAddressCount_2021.Jan =
    callAddresses_2021.current.Jan.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});
  callAddressCount.current.callAddressCount_2021.Feb =
    callAddresses_2021.current.Feb.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});
  callAddressCount.current.callAddressCount_2021.Mar =
    callAddresses_2021.current.Mar.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});
  callAddressCount.current.callAddressCount_2021.Apr =
    callAddresses_2021.current.Apr.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});

  callAddressCount.current.callAddressCount_2021.May =
    callAddresses_2021.current.May.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});
  callAddressCount.current.callAddressCount_2021.June =
    callAddresses_2021.current.June.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});
  callAddressCount.current.callAddressCount_2021.July =
    callAddresses_2021.current.July.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});
  callAddressCount.current.callAddressCount_2021.Aug =
    callAddresses_2021.current.Aug.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});
  callAddressCount.current.callAddressCount_2021.Sep =
    callAddresses_2021.current.Sep.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});
  callAddressCount.current.callAddressCount_2021.Oct =
    callAddresses_2021.current.Oct.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});
  callAddressCount.current.callAddressCount_2021.Nov =
    callAddresses_2021.current.Nov.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});
  callAddressCount.current.callAddressCount_2021.Dec =
    callAddresses_2021.current.Dec.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});
  callAddressCount.current.callAddressCount_2022.Jan =
    callAddresses_2022.current.Jan.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});
  callAddressCount.current.callAddressCount_2022.Feb =
    callAddresses_2022.current.Feb.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});
  callAddressCount.current.callAddressCount_2022.Mar =
    callAddresses_2022.current.Mar.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});
  callAddressCount.current.callAddressCount_2022.Apr =
    callAddresses_2022.current.Apr.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});

  callAddressCount.current.callAddressCount_2022.May =
    callAddresses_2022.current.May.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});
  callAddressCount.current.callAddressCount_2022.June =
    callAddresses_2022.current.June.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});
  callAddressCount.current.callAddressCount_2022.July =
    callAddresses_2022.current.July.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});
  callAddressCount.current.callAddressCount_2022.Aug =
    callAddresses_2022.current.Aug.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});
  callAddressCount.current.callAddressCount_2022.Sep =
    callAddresses_2022.current.Sep.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});
  callAddressCount.current.callAddressCount_2022.Oct =
    callAddresses_2022.current.Oct.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});
  callAddressCount.current.callAddressCount_2022.Nov =
    callAddresses_2022.current.Nov.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});
  callAddressCount.current.callAddressCount_2022.Dec =
    callAddresses_2022.current.Dec.reduce(function (
      smsAddress: any,
      smsAddressNumber: string
    ) {
      if (smsAddressNumber in smsAddress) {
        smsAddress[smsAddressNumber]++;
      } else {
        smsAddress[smsAddressNumber] = 1;
      }
      return smsAddress;
    },
    {});
  return <p>d</p>;
}
