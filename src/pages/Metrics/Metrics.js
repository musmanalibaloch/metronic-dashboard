import { useEffect, useState } from "react";
import AppLayout from "./../../Layout";
import { deleteOrgs, getOrgs, updateOrgs } from "../../services/api";
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
      <JVMMetrics />
      <Divider />
      <Text className="text-2xl font-semibold">Garbage Collection</Text>
      <GarbageCollection />
      <Divider className="-mt-1" />
      <Text className="text-2xl font-semibold">
        HTTP requests (time in milliseconds)
      </Text>
      <HTTP />
      <div className="mt-7">
        <Text className="text-2xl font-semibold">
          Endpoints requests (time in milliseconds)
        </Text>
      </div>
      <Endpoints />
      <div className="mt-7">
        <Text className="text-2xl font-semibold">Cache statistics</Text>
      </div>
      <CacheStatistics />
      <div className="mt-7">
        <Text className="text-2xl font-semibold">
          DataSource statistics (time in millisecond)
        </Text>
      </div>
      <DataSource />
    </AppLayout>
  );
};

export default Metrics;
