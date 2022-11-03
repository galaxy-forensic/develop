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

interface onlySmsType {
  sms: smsType[];
  _count: string;
  _backup_set: string;
  _backup_date: string;
  _type: string;
}

export default function Main() {
  const sms_2019 = useRef<number[]>([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const sms_2020 = useRef<number[]>([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const sms_2021 = useRef<number[]>([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const sms_2022 = useRef<number[]>([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const call_2020 = useRef<number[]>([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const call_2021 = useRef<number[]>([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const call_2022 = useRef<number[]>([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

  onlySms.sms.map((sms: smsType) => {
    if (sms._readable_date.slice(0, 4) === '2019') {
      sms_2019.current[Number(sms._readable_date.slice(6, 8)) - 1] += 1;
    } else if (sms._readable_date.slice(0, 4) === '2020') {
      sms_2020.current[Number(sms._readable_date.slice(6, 8)) - 1] += 1;
    } else if (sms._readable_date.slice(0, 4) === '2021') {
      sms_2021.current[Number(sms._readable_date.slice(6, 8)) - 1] += 1;
    } else {
      sms_2022.current[Number(sms._readable_date.slice(6, 8)) - 1] += 1;
    }
  });
  call.call.map((call: callType) => {
    if (call._readable_date.slice(0, 4) === '2020') {
      call_2020.current[Number(call._readable_date.slice(6, 8)) - 1] += 1;
    } else if (call._readable_date.slice(0, 4) === '2021') {
      call_2021.current[Number(call._readable_date.slice(6, 8)) - 1] += 1;
    } else {
      call_2022.current[Number(call._readable_date.slice(6, 8)) - 1] += 1;
    }
  });

  console.log('sms_2019 : ' + sms_2019.current);
  console.log('sms_2020 : ' + sms_2020.current);
  console.log('sms_2021 : ' + sms_2021.current);
  console.log('sms_2022 : ' + sms_2022.current);
  console.log('call_2020 : ' + call_2020.current);
  console.log('call_2021 : ' + call_2021.current);
  console.log('call_2022 : ' + call_2022.current);

  return <p>d</p>;
}
