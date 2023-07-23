import AppLayout from "./../../Layout";
import { Link } from "react-router-dom";
import { Col, Form, Input, Row, Typography } from "antd";
import { useState } from "react";
import ConfigurationTable from "../../components/tables/ConfigurationTable";

const { Text } = Typography;

const Configuration = () => {
  const [tableData, setTableData] = useState([
    {
      prefix: "spring.jpa",
      properties: [
        {
          name: "mappingResources",
          data: "[]",
        },
        {
          name: "showSql",
          data: "false",
        },
        {
          name: "openInView",
          data: "false",
        },
        {
          name: "generateDdl",
          data: "false",
        },
        {
          name: "properties",
          data: `{
            "hibernate.cache.use_second_level_cache": "true",
            "hibernate.id.new_generator_mappings": "true",
            "hibernate.query.in_clause_parameter_padding": "true",
            "hibernate.jdbc.time_zone": "UTC",
            "hibernate.connection.provider_disables_autocommit": "true",
            "hibernate.cache.use_query_cache": "false",
            "hibernate.generate_statistics": "false",
            "hibernate.order_updates": "true",
            "hibernate.query.fail_on_pagination_over_collection_fetch": "true",
            "hibernate.jdbc.batch_size": "25",
            "hibernate.order_inserts": "true",
          }`,
        },
      ],
    },
    {
      prefix: "management.endpoints.web",
      properties: [
        {
          name: "mappingResources",
          data: "[]",
        },
        {
          name: "showSql",
          data: "false",
        },
        {
          name: "openInView",
          data: "false",
        },
        {
          name: "generateDdl",
          data: "false",
        },
        {
          name: "properties",
          data: `{
            "hibernate.cache.use_second_level_cache": "true",
            "hibernate.id.new_generator_mappings": "true",
            "hibernate.query.in_clause_parameter_padding": "true",
            "hibernate.jdbc.time_zone": "UTC",
            "hibernate.connection.provider_disables_autocommit": "true",
            "hibernate.cache.use_query_cache": "false",
            "hibernate.generate_statistics": "false",
            "hibernate.order_updates": "true",
            "hibernate.query.fail_on_pagination_over_collection_fetch": "true",
            "hibernate.jdbc.batch_size": "25",
            "hibernate.order_inserts": "true",
          }`,
        },
      ],
    },
    {
      prefix: "management.metrics.export.prometheus",
      properties: [
        {
          name: "mappingResources",
          data: "[]",
        },
        {
          name: "showSql",
          data: "false",
        },
        {
          name: "openInView",
          data: "false",
        },
        {
          name: "generateDdl",
          data: "false",
        },
        {
          name: "properties",
          data: `{
            "hibernate.cache.use_second_level_cache": "true",
            "hibernate.id.new_generator_mappings": "true",
            "hibernate.query.in_clause_parameter_padding": "true",
            "hibernate.jdbc.time_zone": "UTC",
            "hibernate.connection.provider_disables_autocommit": "true",
            "hibernate.cache.use_query_cache": "false",
            "hibernate.generate_statistics": "false",
            "hibernate.order_updates": "true",
            "hibernate.query.fail_on_pagination_over_collection_fetch": "true",
            "hibernate.jdbc.batch_size": "25",
            "hibernate.order_inserts": "true",
          }`,
        },
      ],
    },
  ]);
  const breadcrum = {
    pageTitle: "Configuration",
    data: [
      {
        title: <Link to="">Administration</Link>,
      },
      {
        title: "Configuration",
      },
    ],
  };

  return (
    <AppLayout breadcrum={breadcrum}>
      <div>
        <div className="flex justify-between mb-4">
          <div>
            <Text className="text-xl font-semibold">Configuration</Text>
          </div>
        </div>
        <div>
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            // onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical"
          >
            <Form.Item label="Filter (by prefix)" name="search">
              <Input />
            </Form.Item>
          </Form>
        </div>
        <ConfigurationTable data={tableData} />
        <div className="mt-7 mb-3">
          <Text className="text-2xl font-semibold">Server ports</Text>
        </div>
        <Row>
          <Col span={16} className="border p-3 rounded-tl-lg">
            <Text className="font-bold">Property</Text>
          </Col>
          <Col span={8} className="border p-3 rounded-tr-lg">
            <Text className="font-bold">Value</Text>
          </Col>
        </Row>
        <Row>
          <Col span={16} className="border p-3 rounded-bl-lg">
            <Text>local.server.port</Text>
          </Col>
          <Col span={8} className="border p-3 rounded-br-lg">
            <Text>8080</Text>
          </Col>
        </Row>
        <div className="mt-7 mb-3">
          <Text className="text-2xl font-semibold">
            servletContextInitParams
          </Text>
        </div>
        <Row>
          <Col span={16} className="border p-3 rounded-l-lg">
            <Text className="font-bold">Property</Text>
          </Col>
          <Col span={8} className="border p-3 rounded-r-lg">
            <Text className="font-bold">Value</Text>
          </Col>
        </Row>
        <div className="mt-7 mb-3">
          <Text className="text-2xl font-semibold">systemProperties</Text>
        </div>
        <Row>
          <Col span={5} className="border p-3 rounded-tl-lg">
            <Text className="font-bold">Property</Text>
          </Col>
          <Col span={19} className="border p-3 rounded-tr-lg">
            <Text className="font-bold">Value</Text>
          </Col>
        </Row>
        <Row>
          <Col span={5} className="border p-3 ">
            <Text>java.specification.version </Text>
          </Col>
          <Col span={19} className="border p-3 ">
            <Text>17</Text>
          </Col>
        </Row>
        <Row>
          <Col span={5} className="border p-3 ">
            <Text>sun.jnu.encoding </Text>
          </Col>
          <Col span={19} className="border p-3 ">
            <Text>UTF-8</Text>
          </Col>
        </Row>
        <Row>
          <Col span={5} className="border p-3 rounded-bl-lg">
            <Text>java.class.path </Text>
          </Col>
          <Col span={19} className="border p-3 rounded-br-lg">
            <Text>
              /home/jhipster/app/testapp/target/classes:/root/.m2/repository/tech/jhipster/jhipster-framework/7.9.3/jhipster-framework-7.9.3.jar:/root/.m2/repository/org/springframework/spring-context-support/5.3.22/spring-context-support-5.3.22.jar:/root/.m2/repository/org/springframework/boot/spring-boot-autoconfigure/2.7.3/spring-boot-autoconfigure-2.7.3.jar:/root/.m2/repository/org/aspectj/aspectjweaver/1.9.7/aspectjweaver-1.9.7.jar:/root/.m2/repository/net/logstash/logback/logstash-logback-encoder/7.2/logstash-logback-encoder-7.2.jar:/root/.m2/repository/javax/annotation/javax.annotation-api/1.3.2/javax.annotation-api-1.3.2.jar:/root/.m2/repository/jakarta/annotation/jakarta.annotation-api/1.3.5/jakarta.annotation-api-1.3.5.jar:/root/.m2/repository/com/fasterxml/jackson/module/jackson-module-jaxb-annotations/2.13.3/jackson-module-jaxb-annotations-2.13.3.jar:/root/.m2/repository/com/fasterxml/jackson/core/jackson-annotations/2.13.3/jackson-annotations-2.13.3.jar:/root/.m2/repository/com/fasterxml/jackson/core/jackson-core/2.13.3/jackson-core-2.13.3.jar:/root/.m2/repository/com/fasterxml/jackson/core/jackson-databind/2.13.3/jackson-databind-2.13.3.jar:/root/.m2/repository/jakarta/xml/bind/jakarta.xml.bind-api/2.3.3/jakarta.xml.bind-api-2.3.3.jar:/root/.m2/repository/jakarta/activation/jakarta.activation-api/1.2.2/jakarta.activation-api-1.2.2.jar:/root/.m2/repository/com/fasterxml/jackson/datatype/jackson-datatype-hibernate5/2.13.3/jackson-datatype-hibernate5-2.13.3.jar:/root/.m2/repository/javax/transaction/javax.transaction-api/1.3/javax.transaction-api-1.3.jar:/root/.m2/repository/com/fasterxml/jackson/datatype/jackson-datatype-hppc/2.13.3/jackson-datatype-hppc-2.13.3.jar:/root/.m2/repository/com/carrotsearch/hppc/0.8.1/hppc-0.8.1.jar:/root/.m2/repository/com/fasterxml/jackson/datatype/jackson-datatype-jsr310/2.13.3/jackson-datatype-jsr310-2.13.3.jar:/root/.m2/repository/org/springdoc/springdoc-openapi-webmvc-core/1.6.11/springdoc-openapi-webmvc-core-1.6.11.jar:/root/.m2/repository/org/springdoc/springdoc-openapi-common/1.6.11/springdoc-openapi-common-1.6.11.jar:/root/.m2/repository/io/swagger/core/v3/swagger-core/2.2.2/swagger-core-2.2.2.jar:/root/.m2/repository/com/fasterxml/jackson/dataformat/jackson-dataformat-yaml/2.13.3/jackson-dataformat-yaml-2.13.3.jar:/root/.m2/repository/io/swagger/core/v3/swagger-annotations/2.2.2/swagger-annotations-2.2.2.jar:/root/.m2/repository/io/swagger/core/v3/swagger-models/2.2.2/swagger-models-2.2.2.jar:/root/.m2/repository/org/springframework/spring-webmvc/5.3.22/spring-webmvc-5.3.22.jar:/root/.m2/repository/com/zaxxer/HikariCP/4.0.3/HikariCP-4.0.3.jar:/root/.m2/repository/org/slf4j/slf4j-api/1.7.36/slf4j-api-1.7.36.jar:/root/.m2/repository/org/apache/commons/commons-lang3/3.12.0/commons-lang3-3.12.0.jar:/root/.m2/repository/javax/cache/cache-api/1.1.1/cache-api-1.1.1.jar:/root/.m2/repository/org/ehcache/ehcache/3.10.0/ehcache-3.10.0.jar:/root/.m2/repository/org/glassfish/jaxb/jaxb-runtime/2.3.6/jaxb-runtime-2.3.6.jar:/root/.m2/repository/org/glassfish/jaxb/txw2/2.3.6/txw2-2.3.6.jar:/root/.m2/repository/com/sun/istack/istack-commons-runtime/3.0.12/istack-commons-runtime-3.0.12.jar:/root/.m2/repository/com/sun/activation/jakarta.activation/1.2.2/jakarta.activation-1.2.2.jar:/root/.m2/repository/org/hibernate/hibernate-jcache/5.6.10.Final/hibernate-jcache-5.6.10.Final.jar:/root/.m2/repository/org/jboss/logging/jboss-logging/3.4.3.Final/jboss-logging-3.4.3.Final.jar:/root/.m2/repository/org/hibernate/hibernate-jpamodelgen/5.6.10.Final/hibernate-jpamodelgen-5.6.10.Final.jar:/root/.m2/repository/javax/xml/bind/jaxb-api/2.3.1/jaxb-api-2.3.1.jar:/root/.m2/repository/org/hibernate/hibernate-core/5.6.10.Final/hibernate-core-5.6.10.Final.jar:/root/.m2/repository/javax/persistence/javax.persistence-api/2.2/javax.persistence-api-2.2.jar:/root/.m2/repository/net/bytebuddy/byte-buddy/1.12.13/byte-buddy-1.12.13.jar:/root/.m2/repository/antlr/antlr/2.7.7/antlr-2.7.7.jar:/root/.m2/repository/org/jboss/spec/javax/transaction/jboss-transaction-api_1.2_spec/1.1.1.Final/jboss-transaction-api_1.2_spec-1.1.1.Final.jar:/root/.m2/repository/org/jboss/jandex/2.4.2.Final/jandex-2.4.2.Final.jar:/root/.m2/repository/com/fasterxml/classmate/1.5.1/classmate-1.5.1.jar:/root/.m2/repository/javax/activation/javax.activation-api/1.2.0/javax.activation-api-1.2.0.jar:/root/.m2/repository/org/hibernate/common/hibernate-commons-annotations/5.1.2.Final/hibernate-commons-annotations-5.1.2.Final.jar:/root/.m2/repository/org/hibernate/validator/hibernate-validator/6.2.4.Final/hibernate-validator-6.2.4.Final.jar:/root/.m2/repository/jakarta/validation/jakarta.validation-api/2.0.2/jakarta.validation-api-2.0.2.jar:/root/.m2/repository/org/liquibase/liquibase-core/4.15.0/liquibase-core-4.15.0.jar:/root/.m2/repository/org/yaml/snakeyaml/1.30/snakeyaml-1.30.jar:/root/.m2/repository/com/opencsv/opencsv/5.6/opencsv-5.6.jar:/root/.m2/repository/org/apache/commons/commons-text/1.9/commons-text-1.9.jar:/root/.m2/repository/org/apache/commons/commons-collections4/4.4/commons-collections4-4.4.jar:/root/.m2/repository/org/mapstruct/mapstruct/1.5.2.Final/mapstruct-1.5.2.Final.jar:/root/.m2/repository/org/springframework/boot/spring-boot-loader-tools/2.7.3/spring-boot-loader-tools-2.7.3.jar:/root/.m2/repository/org/apache/commons/commons-compress/1.21/commons-compress-1.21.jar:/root/.m2/repository/org/springframework/spring-core/5.3.22/spring-core-5.3.22.jar:/root/.m2/repository/org/springframework/spring-jcl/5.3.22/spring-jcl-5.3.22.jar:/root/.m2/repository/org/springframework/boot/spring-boot-actuator-autoconfigure/2.7.3/spring-boot-actuator-autoconfigure-2.7.3.jar:/root/.m2/repository/org/springframework/boot/spring-boot-actuator/2.7.3/spring-boot-actuator-2.7.3.jar:/root/.m2/repository/io/micrometer/micrometer-core/1.9.3/micrometer-core-1.9.3.jar:/root/.m2/repository/org/hdrhistogram/HdrHistogram/2.1.12/HdrHistogram-2.1.12.jar:/root/.m2/repository/org/latencyutils/LatencyUtils/2.0.3/LatencyUtils-2.0.3.jar:/root/.m2/repository/org/springframework/spring-jdbc/5.3.22/spring-jdbc-5.3.22.jar:/root/.m2/repository/jakarta/transaction/jakarta.transaction-api/1.3.3/jakarta.transaction-api-1.3.3.jar:/root/.m2/repository/jakarta/persistence/jakarta.persistence-api/2.2.3/jakarta.persistence-api-2.2.3.jar:/root/.m2/repository/org/springframework/data/spring-data-jpa/2.7.2/spring-data-jpa-2.7.2.jar:/root/.m2/repository/org/springframework/spring-orm/5.3.22/spring-orm-5.3.22.jar:/root/.m2/repository/org/springframework/spring-tx/5.3.22/spring-tx-5.3.22.jar:/root/.m2/repository/org/springframework/spring-aspects/5.3.22/spring-aspects-5.3.22.jar:/root/.m2/repository/ch/qos/logback/logback-classic/1.2.11/logback-classic-1.2.11.jar:/root/.m2/repository/ch/qos/logback/logback-core/1.2.11/logback-core-1.2.11.jar:/root/.m2/repository/org/apache/logging/log4j/log4j-to-slf4j/2.17.2/log4j-to-slf4j-2.17.2.jar:/root/.m2/repository/org/apache/logging/log4j/log4j-api/2.17.2/log4j-api-2.17.2.jar:/root/.m2/repository/org/slf4j/jul-to-slf4j/1.7.36/jul-to-slf4j-1.7.36.jar:/root/.m2/repository/com/sun/mail/jakarta.mail/1.6.7/jakarta.mail-1.6.7.jar:/root/.m2/repository/org/springframework/spring-aop/5.3.22/spring-aop-5.3.22.jar:/root/.m2/repository/org/springframework/security/spring-security-config/5.7.3/spring-security-config-5.7.3.jar:/root/.m2/repository/org/springframework/security/spring-security-web/5.7.3/spring-security-web-5.7.3.jar:/root/.m2/repository/org/thymeleaf/thymeleaf-spring5/3.0.15.RELEASE/thymeleaf-spring5-3.0.15.RELEASE.jar:/root/.m2/repository/org/thymeleaf/thymeleaf/3.0.15.RELEASE/thymeleaf-3.0.15.RELEASE.jar:/root/.m2/repository/org/attoparser/attoparser/2.0.5.RELEASE/attoparser-2.0.5.RELEASE.jar:/root/.m2/repository/org/unbescape/unbescape/1.1.6.RELEASE/unbescape-1.1.6.RELEASE.jar:/root/.m2/repository/org/thymeleaf/extras/thymeleaf-extras-java8time/3.0.4.RELEASE/thymeleaf-extras-java8time-3.0.4.RELEASE.jar:/root/.m2/repository/com/fasterxml/jackson/datatype/jackson-datatype-jdk8/2.13.3/jackson-datatype-jdk8-2.13.3.jar:/root/.m2/repository/com/fasterxml/jackson/module/jackson-module-parameter-names/2.13.3/jackson-module-parameter-names-2.13.3.jar:/root/.m2/repository/org/springframework/spring-web/5.3.22/spring-web-5.3.22.jar:/root/.m2/repository/org/springframework/boot/spring-boot/2.7.3/spring-boot-2.7.3.jar:/root/.m2/repository/org/springframework/security/spring-security-core/5.7.3/spring-security-core-5.7.3.jar:/root/.m2/repository/org/springframework/security/spring-security-crypto/5.7.3/spring-security-crypto-5.7.3.jar:/root/.m2/repository/org/zalando/problem-spring-web/0.27.0/problem-spring-web-0.27.0.jar:/root/.m2/repository/org/zalando/problem-violations/0.27.0/problem-violations-0.27.0.jar:/root/.m2/repository/org/zalando/problem-spring-common/0.27.0/problem-spring-common-0.27.0.jar:/root/.m2/repository/org/apiguardian/apiguardian-api/1.1.2/apiguardian-api-1.1.2.jar:/root/.m2/repository/com/google/code/findbugs/jsr305/3.0.2/jsr305-3.0.2.jar:/root/.m2/repository/org/zalando/problem/0.26.0/problem-0.26.0.jar:/root/.m2/repository/org/zalando/jackson-datatype-problem/0.26.0/jackson-datatype-problem-0.26.0.jar:/root/.m2/repository/org/zalando/faux-pas/0.9.0/faux-pas-0.9.0.jar:/root/.m2/repository/javax/validation/validation-api/2.0.1.Final/validation-api-2.0.1.Final.jar:/root/.m2/repository/io/undertow/undertow-core/2.2.19.Final/undertow-core-2.2.19.Final.jar:/root/.m2/repository/org/jboss/xnio/xnio-api/3.8.7.Final/xnio-api-3.8.7.Final.jar:/root/.m2/repository/org/wildfly/common/wildfly-common/1.5.4.Final/wildfly-common-1.5.4.Final.jar:/root/.m2/repository/org/wildfly/client/wildfly-client-config/1.0.1.Final/wildfly-client-config-1.0.1.Final.jar:/root/.m2/repository/org/jboss/xnio/xnio-nio/3.8.7.Final/xnio-nio-3.8.7.Final.jar:/root/.m2/repository/org/jboss/threads/jboss-threads/3.1.0.Final/jboss-threads-3.1.0.Final.jar:/root/.m2/repository/io/undertow/undertow-servlet/2.2.19.Final/undertow-servlet-2.2.19.Final.jar:/root/.m2/repository/io/undertow/undertow-websockets-jsr/2.2.19.Final/undertow-websockets-jsr-2.2.19.Final.jar:/root/.m2/repository/jakarta/servlet/jakarta.servlet-api/4.0.4/jakarta.servlet-api-4.0.4.jar:/root/.m2/repository/jakarta/websocket/jakarta.websocket-api/1.1.2/jakarta.websocket-api-1.1.2.jar:/root/.m2/repository/org/apache/tomcat/embed/tomcat-embed-el/9.0.65/tomcat-embed-el-9.0.65.jar:/root/.m2/repository/org/springframework/spring-messaging/5.3.22/spring-messaging-5.3.22.jar:/root/.m2/repository/org/springframework/spring-websocket/5.3.22/spring-websocket-5.3.22.jar:/root/.m2/repository/io/jsonwebtoken/jjwt-api/0.11.5/jjwt-api-0.11.5.jar:/root/.m2/repository/io/jsonwebtoken/jjwt-impl/0.11.5/jjwt-impl-0.11.5.jar:/root/.m2/repository/io/jsonwebtoken/jjwt-jackson/0.11.5/jjwt-jackson-0.11.5.jar:/root/.m2/repository/org/springframework/security/spring-security-data/5.7.3/spring-security-data-5.7.3.jar:/root/.m2/repository/org/springframework/data/spring-data-commons/2.7.2/spring-data-commons-2.7.2.jar:/root/.m2/repository/io/micrometer/micrometer-registry-prometheus/1.9.3/micrometer-registry-prometheus-1.9.3.jar:/root/.m2/repository/io/prometheus/simpleclient_common/0.15.0/simpleclient_common-0.15.0.jar:/root/.m2/repository/io/prometheus/simpleclient/0.15.0/simpleclient-0.15.0.jar:/root/.m2/repository/io/prometheus/simpleclient_tracer_otel/0.15.0/simpleclient_tracer_otel-0.15.0.jar:/root/.m2/repository/io/prometheus/simpleclient_tracer_common/0.15.0/simpleclient_tracer_common-0.15.0.jar:/root/.m2/repository/io/prometheus/simpleclient_tracer_otel_agent/0.15.0/simpleclient_tracer_otel_agent-0.15.0.jar:/root/.m2/repository/io/dropwizard/metrics/metrics-core/4.2.11/metrics-core-4.2.11.jar:/root/.m2/repository/org/springframework/security/spring-security-messaging/5.7.3/spring-security-messaging-5.7.3.jar:/root/.m2/repository/org/springframework/spring-beans/5.3.22/spring-beans-5.3.22.jar:/root/.m2/repository/org/springframework/spring-context/5.3.22/spring-context-5.3.22.jar:/root/.m2/repository/org/springframework/spring-expression/5.3.22/spring-expression-5.3.22.jar:/root/.m2/repository/org/springframework/boot/spring-boot-devtools/2.7.3/spring-boot-devtools-2.7.3.jar:/root/.m2/repository/com/h2database/h2/2.1.214/h2-2.1.214.jar
            </Text>
          </Col>
        </Row>
        <div className="mt-7 mb-3">
          <Text className="text-2xl font-semibold">systemEnvironment</Text>
        </div>
        <Row>
          <Col span={5} className="border p-3 rounded-tl-lg">
            <Text className="font-bold">Property</Text>
          </Col>
          <Col span={19} className="border p-3 rounded-tr-lg">
            <Text className="font-bold">Value</Text>
          </Col>
        </Row>
        <Row>
          <Col span={5} className="border p-3 ">
            <Text>LANGUAGE </Text>
          </Col>
          <Col span={19} className="border p-3 ">
            <Text>en_US:en</Text>
          </Col>
        </Row>
        <Row>
          <Col span={5} className="border p-3 ">
            <Text>PATH </Text>
          </Col>
          <Col span={19} className="border p-3 ">
            <Text>
              /opt/java/openjdk/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/bin
            </Text>
          </Col>
        </Row>
        <Row>
          <Col span={5} className="border p-3 rounded-bl-lg">
            <Text>JAVA_HOME </Text>
          </Col>
          <Col span={19} className="border p-3 rounded-br-lg">
            <Text>/opt/java/openjdk</Text>
          </Col>
        </Row>
        <div className="mt-7 mb-3">
          <Text className="text-2xl font-semibold">
            Config resource 'class path resource [config/application-dev.yml]'
            via location 'optional:classpath:/config/'
          </Text>
        </div>
        <Row>
          <Col span={5} className="border p-3 rounded-tl-lg">
            <Text className="font-bold">Property</Text>
          </Col>
          <Col span={19} className="border p-3 rounded-tr-lg">
            <Text className="font-bold">Value</Text>
          </Col>
        </Row>
        <Row>
          <Col span={5} className="border p-3 ">
            <Text>LANGUAGE </Text>
          </Col>
          <Col span={19} className="border p-3 ">
            <Text>en_US:en</Text>
          </Col>
        </Row>
        <Row>
          <Col span={5} className="border p-3 ">
            <Text>PATH </Text>
          </Col>
          <Col span={19} className="border p-3 ">
            <Text>
              /opt/java/openjdk/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/bin
            </Text>
          </Col>
        </Row>
        <Row>
          <Col span={5} className="border p-3 rounded-bl-lg">
            <Text>JAVA_HOME </Text>
          </Col>
          <Col span={19} className="border p-3 rounded-br-lg">
            <Text>/opt/java/openjdk</Text>
          </Col>
        </Row>
      </div>
    </AppLayout>
  );
};

export default Configuration;
