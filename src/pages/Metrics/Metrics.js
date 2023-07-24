import { useEffect, useState } from "react";
import AppLayout from "./../../Layout";
import {
  deleteOrgs,
  getJHIMetrics,
  getOrgs,
  getThreaddump,
  updateOrgs,
} from "../../services/api";
import { Link } from "react-router-dom";
import { Button, Col, Divider, Progress, Row, Typography } from "antd";
import { HiOutlineRefresh } from "react-icons/hi";
import JVMMetrics from "../../components/JVMMetrics/JVMMetrics";
import GarbageCollection from "../../components/GarbageCollection/GarbageCollection";
import HTTP from "../../components/HTTP/HTTP";
import Endpoints from "../../components/Endpoints/Endpoints";
import CacheStatistics from "../../components/CacheStatistics/CacheStatistics";
import DataSource from "../../components/DataSource/DataSource";

const { Text } = Typography;

const Metrics = () => {
  const [jvm, setJvm] = useState([]);
  const [threaddump, setThreaddump] = useState([]);
  const [garbage, setGarbage] = useState([]);
  const [httpData, setHttpData] = useState(null);
  const [endPointsData, setEndPointsData] = useState(null);
  const [cacheData, setCacheData] = useState(null);
  const [databasesData, setDatabasesData] = useState(null);

  const breadcrum = {
    pageTitle: "Application Metrics",
    data: [
      {
        title: <Link to="">Administration</Link>,
      },
      {
        title: "Metrics",
      },
    ],
  };

  const getAllJHIMetrics = async () => {
    try {
      const { data } = await getJHIMetrics();
      setJvm(data?.jvm);
      setGarbage(data?.garbageCollector);
      setHttpData(data?.["http.server.requests"]);
      setEndPointsData(data?.services);
      setCacheData(data?.cache);
      setDatabasesData(data?.databases);
    } catch (error) {
      console.log({ error });
    }
  };

  const getALLThreaddump = async () => {
    try {
      const { data } = await getThreaddump();
      setThreaddump(data?.threads);
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    getAllJHIMetrics();
    getALLThreaddump();
  }, []);

  return (
    <AppLayout breadcrum={breadcrum}>
      <div>
        <div className="flex justify-between mb-4">
          <div>
            <Text className="text-xl font-semibold">Application Metrics</Text>
          </div>
          <div className="flex items-center">
            <Button
              size="large"
              className="flex items-center border-none bg-gray-100 mr-2"
            >
              <HiOutlineRefresh className="mr-1" />
              Refresh
            </Button>
          </div>
        </div>
        <Divider />
      </div>
      <Text className="text-2xl font-semibold">JVM Metrics</Text>
      <JVMMetrics jvm={jvm} threads={threaddump} />
      <Divider />
      <Text className="text-2xl font-semibold">Garbage Collection</Text>
      <GarbageCollection garbage={garbage} />
      <Divider className="-mt-1" />
      <Text className="text-2xl font-semibold">
        HTTP requests (time in milliseconds)
      </Text>
      <HTTP httpData={httpData} />
      <div className="mt-7">
        <Text className="text-2xl font-semibold">
          Endpoints requests (time in milliseconds)
        </Text>
      </div>
      <Endpoints endPointsData={endPointsData} />
      <div className="mt-7">
        <Text className="text-2xl font-semibold">Cache statistics</Text>
      </div>
      <CacheStatistics cacheData={cacheData} />
      <div className="mt-7">
        <Text className="text-2xl font-semibold">
          DataSource statistics (time in millisecond)
        </Text>
      </div>
      <DataSource databasesData={databasesData} />
    </AppLayout>
  );
};

export default Metrics;
