import axiosFactory from '../axios-factory';

export default {
  getMain: () =>
    axiosFactory(false).get(`/main-page`),
};
