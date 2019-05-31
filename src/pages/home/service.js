import Request from '../../utils/request';

export const homepage = () => Request({
  url: 'api/testwx/',
  method: 'GET',
});