import Taro from '@tarojs/taro';
import { baseUrl, noConsole } from '../config';

export default async (options = { method: 'GET', data: {} }) => {
  if (!noConsole) {
    console.log(
      `${new Date().toLocaleString()}【 M=${options.url} 】P=${JSON.stringify(
        options.data
      )}`
    );
  }
  const res = await Taro.request({
    url: baseUrl + options.url,
    data: {
      ...options.data,
    },
    header: {
      'Content-Type': 'application/json',
    },
    method: options.method.toUpperCase(),
  });
  return res;
};