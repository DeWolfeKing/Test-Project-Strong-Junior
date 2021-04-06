export const FETCHING_NEWS = 'FETCHING_NEWS';
export const SUCCESS_NEWS = 'SUCCESS_NEWS';
export const FAILED_NEWS = 'FAILED_NEWS';

export const fetchingNews = () => ({
  type: FETCHING_NEWS,
});
export const successNews = (data) => ({
  type: SUCCESS_NEWS,
  payload: data,
});
export const failedNews = (error) => ({
  type: FAILED_NEWS,
  payload: error,
});
