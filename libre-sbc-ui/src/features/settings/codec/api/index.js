import axiosInstance from '../../../../api';

export default {
  getList: () => axiosInstance.get('libreapi/class/media'),
};
