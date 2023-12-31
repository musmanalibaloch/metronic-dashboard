import axios from "axios";
// import jwtDecode from "jwt-decode"; already installed
import {
  LOGIN,
  ACCOUNT,
  WEBSOCKET_TRACKER_INFO,
  SIGNUP,
  ORGS,
  EMPLOYEES,
  ADMIN_USERS,
  MANAGEMENT_HEALTH,
  MANAGEMENT_JHIMETRICS,
  MANAGEMENT_THREAD_DUMP,
  MANAGEMENT_CONFIG_PROPS,
  MANAGEMENT_ENV,
  MANAGEMENT_LOGGERS,
} from "../../constants";
import Employee from "../../pages/Employee/Employee";

const {
  REACT_APP_AXIOS_RETRY,
  REACT_APP_API_PREFIX,
  REACT_APP_CONTENT_TYPE,
  REACT_APP_SOCKET_ENDPOINT,
} = process.env;

// Constants
const AXIOS_RETRY = REACT_APP_AXIOS_RETRY;
const API_PREFIX = REACT_APP_API_PREFIX;
const SOCKET_API_PREFIX = REACT_APP_SOCKET_ENDPOINT;
const CONTENT_TYPE = REACT_APP_CONTENT_TYPE;

const token = localStorage.getItem("token");
const headers = {
  Authorization: `Bearer ${token}`,
};
const cachebuster = Math.round(new Date().getTime() / 1000);

export const signup = (data) => {
  return axios.post(`${API_PREFIX}${SIGNUP}`, data, {
    [AXIOS_RETRY]: {
      retries: 3,
    },
    errorHandling: {
      global: true,
    },
  });
};

export const login = (data) => {
  localStorage.removeItem("token");
  return axios.post(`${API_PREFIX}${LOGIN}`, data, {
    [AXIOS_RETRY]: {
      retries: 3,
    },
    errorHandling: {
      global: true,
    },
  });
};

export const getAccount = (token) => {
  return axios.get(
    `${API_PREFIX}${ACCOUNT}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
    {
      [AXIOS_RETRY]: {
        retries: 2,
      },
      errorHandling: {
        global: true,
      },
    }
  );
};

export const getSocketInfo = (accessToken) => {
  return axios.get(
    `${API_PREFIX}${WEBSOCKET_TRACKER_INFO}?access_token=${accessToken}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
    {
      [AXIOS_RETRY]: {
        retries: 2,
      },
      errorHandling: {
        global: true,
      },
    }
  );
};

export const getOrgs = () => {
  return axios.get(
    `${API_PREFIX}${ORGS}?page=${0}&size=${20}&sort=${"id,asc"}&cacheBuster=${cachebuster}`,
    {
      headers,
    },
    {
      [AXIOS_RETRY]: {
        retries: 2,
      },
      errorHandling: {
        global: true,
      },
    }
  );
};

export const createOrg = (data) => {
  return axios.post(
    `${API_PREFIX}${ORGS}`,
    data,
    {
      headers,
    },
    {
      [AXIOS_RETRY]: {
        retries: 2,
      },
      errorHandling: {
        global: true,
      },
    }
  );
};

export const updateOrgs = (id, data) => {
  return axios.put(
    `${API_PREFIX}${ORGS}/${id}`,
    data,
    {
      headers,
    },
    {
      [AXIOS_RETRY]: {
        retries: 2,
      },
      errorHandling: {
        global: true,
      },
    }
  );
};

export const deleteOrgs = (id) => {
  return axios.delete(
    `${API_PREFIX}${ORGS}/${id}`,
    {
      headers,
    },
    {
      [AXIOS_RETRY]: {
        retries: 2,
      },
      errorHandling: {
        global: true,
      },
    }
  );
};

export const getEmployees = () => {
  return axios.get(
    `${API_PREFIX}${EMPLOYEES}?page=${0}&size=${20}&sort=${"id,asc"}&cacheBuster=${cachebuster}`,
    {
      headers,
    },
    {
      [AXIOS_RETRY]: {
        retries: 2,
      },
      errorHandling: {
        global: true,
      },
    }
  );
};

export const createEmployees = (data) => {
  return axios.post(
    `${API_PREFIX}${EMPLOYEES}`,
    data,
    {
      headers,
    },
    {
      [AXIOS_RETRY]: {
        retries: 2,
      },
      errorHandling: {
        global: true,
      },
    }
  );
};

export const updateEmployee = (id, data) => {
  console.log({ id });
  return axios.put(
    `${API_PREFIX}${EMPLOYEES}/${id}`,
    data,
    {
      headers,
    },
    {
      [AXIOS_RETRY]: {
        retries: 2,
      },
      errorHandling: {
        global: true,
      },
    }
  );
};

export const deleteEmployee = (id) => {
  return axios.delete(
    `${API_PREFIX}${EMPLOYEES}/${id}`,
    {
      headers,
    },
    {
      [AXIOS_RETRY]: {
        retries: 2,
      },
      errorHandling: {
        global: true,
      },
    }
  );
};

export const updateUser = (data) => {
  return axios.put(
    `${API_PREFIX}${ADMIN_USERS}`,
    data,
    {
      headers,
    },
    {
      [AXIOS_RETRY]: {
        retries: 2,
      },
      errorHandling: {
        global: true,
      },
    }
  );
};

export const deleteUser = (id) => {
  return axios.delete(
    `${API_PREFIX}${ADMIN_USERS}/${id}`,
    {
      headers,
    },
    {
      [AXIOS_RETRY]: {
        retries: 2,
      },
      errorHandling: {
        global: true,
      },
    }
  );
};

export const getUsers = () => {
  return axios.get(
    `${API_PREFIX}${ADMIN_USERS}?page=${0}&size=${20}&sort=${"id,asc"}`,
    {
      headers,
    },
    {
      [AXIOS_RETRY]: {
        retries: 2,
      },
      errorHandling: {
        global: true,
      },
    }
  );
};

export const createUsers = (data) => {
  return axios.get(
    `${API_PREFIX}${ADMIN_USERS}`,
    data,
    {
      headers,
    },
    {
      [AXIOS_RETRY]: {
        retries: 2,
      },
      errorHandling: {
        global: true,
      },
    }
  );
};

export const getHealth = () => {
  return axios.get(
    `${SOCKET_API_PREFIX}${MANAGEMENT_HEALTH}`,
    {
      headers,
    },
    {
      [AXIOS_RETRY]: {
        retries: 2,
      },
      errorHandling: {
        global: true,
      },
    }
  );
};

export const getJHIMetrics = () => {
  return axios.get(
    `${SOCKET_API_PREFIX}${MANAGEMENT_JHIMETRICS}`,
    {
      headers,
    },
    {
      [AXIOS_RETRY]: {
        retries: 2,
      },
      errorHandling: {
        global: true,
      },
    }
  );
};

export const getThreaddump = () => {
  return axios.get(
    `${SOCKET_API_PREFIX}${MANAGEMENT_THREAD_DUMP}`,
    {
      headers,
    },
    {
      [AXIOS_RETRY]: {
        retries: 2,
      },
      errorHandling: {
        global: true,
      },
    }
  );
};

export const getConfigProps = () => {
  return axios.get(
    `${SOCKET_API_PREFIX}${MANAGEMENT_CONFIG_PROPS}`,
    {
      headers,
    },
    {
      [AXIOS_RETRY]: {
        retries: 2,
      },
      errorHandling: {
        global: true,
      },
    }
  );
};

export const getManagementEnv = () => {
  return axios.get(
    `${SOCKET_API_PREFIX}${MANAGEMENT_ENV}`,
    {
      headers,
    },
    {
      [AXIOS_RETRY]: {
        retries: 2,
      },
      errorHandling: {
        global: true,
      },
    }
  );
};

export const getManagementLoggers = () => {
  return axios.get(
    `${SOCKET_API_PREFIX}${MANAGEMENT_LOGGERS}`,
    {
      headers,
    },
    {
      [AXIOS_RETRY]: {
        retries: 2,
      },
      errorHandling: {
        global: true,
      },
    }
  );
};

export const managementLoggersUpdate = (name, method) => {
  console.log({ name, method });
  return axios.post(
    `${SOCKET_API_PREFIX}${MANAGEMENT_LOGGERS}/${name}`,
    { configuredLevel: method },
    {
      headers,
    },
    {
      [AXIOS_RETRY]: {
        retries: 2,
      },
      errorHandling: {
        global: true,
      },
    }
  );
};
