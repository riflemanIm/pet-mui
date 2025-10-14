import { useEffect } from 'react';
import axios from 'axios';

import App from '@admin/App';
import config from '@admin/config';

const AdminRoot = () => {
  useEffect(() => {
    axios.defaults.baseURL = config.baseURLApi;
    axios.defaults.headers.common['Content-Type'] = 'application/json';
  }, []);

  return <App />;
};

export default AdminRoot;
