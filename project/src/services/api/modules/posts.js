import axiosFactory from "../axios-factory";

export default {
  getPosts: (
    pageNumber = 1,
    postsPerPage = 6,
    startDate = null,
    endDate = null
  ) => {
    const postsOffset = (pageNumber - 1) * postsPerPage;
    let range = {};
    if (startDate && endDate) {
      range = {
        updated_at_gte: startDate,
        updated_at_lte: endDate,
      };
      console.log({...range});
    }
    
    return axiosFactory().get(`/posts`, {        
      params: {
        _start: postsOffset,
        _limit: postsPerPage,
        ...range,
      },
    });
    
  },
  getCountPosts: () => {
    return axiosFactory().get(`/posts/count`);
  },
};
