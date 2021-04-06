export const FETCHING_NEWS = 'FETCHING_NEWS';
export const SUCCESS_NEWS = 'SUCCESS_NEWS';
export const FAILED_NEWS = 'FAILED_NEWS';

export const fetchingNews = () => ({
  type: FETCHING_NEWS,
});
export const successNews = (data) => ({
  type: FETCHING_NEWS,
  payload: data,
});
export const failedNews = (error) => ({
  type: FETCHING_NEWS,
  payload: error,
});
