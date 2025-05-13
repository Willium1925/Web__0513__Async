// 幫我寫非同步抓取資料，使用async/await，並且使用try/catch來處理錯誤，步驟完成console顯示完成
// 這段程式碼會抓取資料，並將結果印出來，來源為https://gogochi.github.io/fetching-data-113/products.json
import nodeFetch from 'node-fetch';

const fetch = nodeFetch.default || nodeFetch;
const url = 'https://gogochi.github.io/fetching-data-113/products.json';
const fetchData = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    // 狀態碼
    console.log('Status Code:', response.status);
    // response的第一筆資料的name
    console.log('First item name:', data[0].name);
  } catch (error) {
    console.error('Error fetching data:', error);
  } finally {
    console.log('Fetching data completed');
  }
};
fetchData();
