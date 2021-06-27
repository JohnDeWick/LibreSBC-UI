import axiosInstance from '@/api';

export default {
  getList : async () => {
    console.log("hit getList");
    let test = await axiosInstance.get('libreapi/class/media');
    console.log(test);
    return test;
  }
}
