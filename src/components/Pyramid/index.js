import React, { useEffect, useState } from "react";
import * as d3 from "d3";
// import './styles.css';

const Pyramid = ({ data, ...props }) => {
  const [chartData, setChartData] = useState(null);

  //  10 * 1000 / 25 = 40
  //  10 * 100 / 25
  //  10 = 25 / 100
  //  1000 = x25
  //  x = 1000 / 25
  //  x = 40
  //  1500 / 25
  //  60

  useEffect(() => {
    setChartData(data);
    const paths = Array.from(document.querySelectorAll("g"));

    const handleMouseOver = (event) => {
      const { pageX, pageY } = event;
      const tooltip = d3.select(".tooltip");
      const path = event.target;

      tooltip
        .style("visibility", "visible")
        .html(path.getAttribute("bx:origin"))
        .style("left", `${pageX + 20}px`)
        .style("top", `${pageY - 20}px`);
    };

    const handleMouseOut = () => {
      const tooltip = d3.select(".tooltip");
      tooltip.style("visibility", "hidden");
    };

    paths.forEach((path) => {
      path.addEventListener("mouseover", handleMouseOver);
      path.addEventListener("mouseout", handleMouseOut);
    });

    return () => {
      paths.forEach((path) => {
        path.removeEventListener("mouseover", handleMouseOver);
        path.removeEventListener("mouseout", handleMouseOut);
      });
    };
  }, []);

  useEffect(() => {
    const groups = document.querySelectorAll("g");
    const intensityFactor = 1.1;

    const handleMouseEnter = (group, originalColors) => {
      const paths = group.querySelectorAll("path");

      paths.forEach((path, index) => {
        const { fill, stroke } = originalColors[index];

        if (fill) {
          const updatedFill = increaseIntensity(fill, intensityFactor);
          path.style.fill = updatedFill;
        }

        if (stroke) {
          const updatedStroke = increaseIntensity(stroke, intensityFactor);
          path.style.stroke = updatedStroke;
        }
      });
    };

    const handleMouseLeave = (group, originalColors) => {
      const paths = group.querySelectorAll("path");

      paths.forEach((path, index) => {
        path.style.fill = originalColors[index].fill;
        path.style.stroke = originalColors[index].stroke;
      });
    };

    const increaseIntensity = (color, factor) => {
      const sanitizedColor = color.replace(/\s/g, "");
      const isRgbColor = /^rgb\(\d+,\d+,\d+\)$/i.test(sanitizedColor);

      if (isRgbColor) {
        const rgbValues = sanitizedColor.match(/\d+/g);
        const adjustedRgbValues = rgbValues.map((value) => {
          const newValue = Math.round(value * factor);
          return Math.min(newValue, 255);
        });

        return `rgb(${adjustedRgbValues.join(",")})`;
      }

      return color;
    };

    groups.forEach((group) => {
      const paths = group.querySelectorAll("path");
      const originalColors = [];

      paths.forEach((path) => {
        originalColors.push({
          fill: path.style.fill,
          stroke: path.style.stroke,
        });
      });

      group.addEventListener("mouseenter", () =>
        handleMouseEnter(group, originalColors)
      );
      group.addEventListener("mouseleave", () =>
        handleMouseLeave(group, originalColors)
      );
    });
  }, []);

  const getPercentOf = (val, block) => {
    if (block === "a") {
      const additionalVal = Math.abs(chartData?.bottom?.additional);
      const standardVal =
        Math.abs(chartData?.bottom?.total) -
        Math.abs(chartData?.bottom?.additional);
      const sum = additionalVal + standardVal;
      const percent = (standardVal * 100) / sum;
      const res = (percent / 100) * val;
      return res;
    }
    if (block === "b") {
      const additionalVal = Math.abs(chartData?.middle?.additional);
      const standardVal =
        Math.abs(chartData?.middle?.total) -
        Math.abs(chartData?.middle?.additional);
      const sum = additionalVal + standardVal;
      const percent = (standardVal * 100) / sum;
      const res = (percent / 100) * val;
      return res;
    }
    if (block === "c") {
      const additionalVal = Math.abs(chartData?.top?.additional);
      const standardVal =
        Math.abs(chartData?.top?.total) - Math.abs(chartData?.top?.additional);
      const sum = additionalVal + standardVal;
      const percent = (standardVal * 100) / sum;
      const res = (percent / 100) * val;
      return res;
    }
  };

  const getPercentOfRight = (val, block) => {
    if (block === "a") {
      const res = (50 / 100) * val;
      return res;
    }
    if (block === "b") {
      const res = (50 / 100) * val;
      return res;
    }
    if (block === "c") {
      const res = (50 / 100) * val;
      return res;
    }
  };

  return (
    <div>
      <svg
        viewBox="25.511 7.299 1020.985 507.299"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs></defs>
        <path
          d={`M 528.876 386.598 L 717.265 318.218 L 646.702 499.145 L 466.285 568.99 L 528.876 386.598 Z`}
          style={{ fill: "rgb(250, 243, 243)", stroke: "rgb(250, 243, 243)" }}
          transform="matrix(0.707107, 0.707107, -0.707107, 0.707107, 338.357803, -367.257975)"
          bxorigin="0.570483 -0.438073"
        />
        <g>
          <path
            d={`M 446.251 281.613 L 562.873 331.551 L 522.654 412.352 L 369.848 412.352 L 329.629 331.551 L 446.251 281.613 Z`}
            style={{ fill: "#65AC39", stroke: "#65AC39" }}
            transform="matrix(-1, 0, 0, -1, 888.770135, 697.36422)"
          ></path>

          <path
            d={`M 422.731 267.599 L 496.332 230.884 L 463.609 305.123 L 388.781 338.307 L 422.731 267.599 Z`}
            style={{ fill: "rgb(245, 242, 242)", stroke: "rgb(132, 198, 122)" }}
            transform="matrix(0.707106, 0.707107, -0.707107, 0.707106, 330.861551, -229.578697)"
          ></path>
          <path
            d={`M 465.434 301.031 L 545.598 303.496 L 550.953 392.085 L 426.142 392.507 L 465.434 301.031 Z`}
            style={{ fill: "rgb(101, 154, 98)", stroke: "rgb(101, 154, 98)" }}
            transform="matrix(0.920505, -0.39073, 0.39073, 0.920505, -102.599543, 219.66572)"
          ></path>
          <path
            d={`M 443.434 314.873 L 518.204 285.858 L ${
              518.424 + getPercentOf(39, "a")
            } ${284.403 + getPercentOf(80, "a")} L 443.324 ${
              313.487 + getPercentOf(101, "a")
            } L 443.434 314.873 Z`}
            style={{ fill: "rgb(236, 231, 231)", stroke: "rgb(236, 231, 231)" }}
          ></path>
          <path
            d={`M 353.408 316.625 L 428.973 345.761 L ${
              429.422 + getPercentOf(40, "a")
            } ${346.154 + getPercentOf(-80, "a")} L 353.52 ${
              317.007 - getPercentOf(101, "a")
            } L 353.408 316.625 Z`}
            style={{ fill: "rgb(245, 242, 242)", stroke: "rgb(245, 242, 242)" }}
            transform="matrix(-1, 0, 0, -1, 795.849006, 631.496977)"
          ></path>

          <image
            width="83"
            height="57"
            x="323.377"
            y="233.747"
            transform="matrix(0.672454, 0.009742, -0.007823, 0.540045, 103.585457, 210.945969)"
            xlinkHref={`./images/Vector3.png`}
            style={{
              filter: "drop-shadow(1px 3px 1px rgb(0 0 0 / 0.6))",
            }}
          ></image>

          <text
            style={{
              fill: "rgb(51, 51, 51)",
              fontSize: "12px",
              whiteSpace: "pre",
              fontFamily: "Roboto, sans-serif",
              fontWeight: 600,
            }}
            x="343.723"
            y="355.114"
          >
            {chartData?.bottom?.additional > 0
              ? Math.abs(chartData?.bottom?.total) -
                Math.abs(chartData?.bottom?.additional)
              : Math.abs(chartData?.bottom?.total)}
            %
          </text>
        </g>
        <g>
          <path
            d={`M 443.123 190.973 L 514.173 217.806 L 476.82 298.965 L 409.424 298.965 L 372.071 217.806 L 443.123 190.973 Z`}
            style={{ fill: "#FCBD24", stroke: "#FCBD24" }}
            transform="matrix(-1, 0, 0, -1, 886.243982, 489.937996)"
          ></path>
          <path
            d={`M 432.57 182.265 L 466.483 167.413 L 451.943 200.86 L 419.434 214.937 L 432.57 182.265 Z`}
            style={{ fill: "rgb(200, 155, 20)", stroke: "rgb(200, 155, 20)" }}
            transform="matrix(0.707107, 0.707107, -0.707107, 0.707107, 264.92067, -257.22509)"
          ></path>
          <path
            d={`M 442.969 205.253 L 476.253 192.137 L 512.818 271.57 L 443.629 297.708 L 442.969 205.253 Z`}
            style={{ fill: "#dea51b", stroke: "#dea51b" }}
          ></path>
          <path
            d={`M 397.232 220.562 L 429.896 233.286 L ${
              429.847 + getPercentOf(37, "b")
            } ${233.276 + getPercentOf(-80, "b")} L 397.024 ${
              220.611 + getPercentOf(-93, "b")
            } L 397.232 220.562 Z`}
            style={{ fill: "rgb(200, 155, 20)", stroke: "rgb(200, 155, 20)" }}
            transform="matrix(-1, 0, 0, -1, 839.204013, 425.816999)"
          ></path>
          <path
            d={`M 442.968 205.255 L 477.246 192.137 L ${
              475.552 + getPercentOf(40, "b")
            } ${192.028 + getPercentOf(80, "b")} L 443.175 ${
              205.206 + getPercentOf(93, "b")
            } L 442.968 205.255 Z`}
            style={{ fill: "rgb(181, 144, 32)", stroke: "rgb(181, 144, 32)" }}
          ></path>

          <image
            width="82"
            height="57"
            x="371.877"
            y="222.506"
            transform="matrix(0.689669, -0.032112, -0.022707, 0.52397, 117.404556, 143.86142)"
            xlinkHref={`./images/Vector2.png`}
            style={{
              filter: "drop-shadow(1px 3px 1px rgb(0 0 0 / 0.6))",
            }}
          ></image>

          <text
            style={{
              fill: "rgb(51, 51, 51)",
              fontSize: "12px",
              whiteSpace: "pre",
              fontFamily: "Roboto, sans-serif",
              fontWeight: 600,
            }}
            x="385.89"
            y="261.94"
          >
            {chartData?.middle?.additional > 0
              ? Math.abs(chartData?.middle?.total) -
                Math.abs(chartData?.middle?.additional)
              : Math.abs(chartData?.middle?.total)}
            %
          </text>
        </g>
        <g>
          <path
            d={`M 444.317 121.369 L 475.663 133.708 L 444.428 219.277 L 434.326 192.507 L 411.971 133.708 L 444.317 121.369 Z`}
            style={{ fill: "#5BC9DD", stroke: "#5BC9DD" }}
            transform="matrix(-1, 0, 0, -1, 887.63395, 313.876004)"
          ></path>
          <path
            d={`M 443.443 98.147 L 443.395 97.994 L 474.371 179.583 L 443.814 191.288 L 443.443 98.147 Z`}
            style={{ fill: "#53b7c9", stroke: "#53b7c9" }}
          ></path>
          <path
            d={`M 443.782 97.918 L ${444.0 + getPercentOf(32, "c")} ${
              101.313 + getPercentOf(78, "c")
            } L 443.541 ${100.425 + getPercentOf(91, "c")} L 443.382 97.918 Z`}
            style={{ fill: "rgb(37, 135, 154)", stroke: "rgb(37, 135, 154)" }}
          ></path>
          <path
            d={`M 434.483 124.934 L ${435.055 + getPercentOf(30, "c")} ${
              124.326 + getPercentOf(-81, "c")
            } L 434.95 ${120.496 + getPercentOf(-89, "c")} L 434.483 124.934 Z`}
            style={{ fill: "rgb(74, 175, 195)", stroke: "rgb(74, 175, 195)" }}
            transform="matrix(-1, 0, 0, -1, 877.517003, 222.932)"
          ></path>
          <path
            d={`M 434.589 120.843 L 442.544 124.436 L 442.555 125.08 L 434.024 122.382 L 434.589 120.843 Z`}
            style={{
              fill: "rgb(107, 198, 216)",
              stroke: "rgb(107, 198, 216)",
              opacity: 1,
              visibility: "hidden",
            }}
          ></path>

          <image
            width="63"
            height="56"
            x="348.337"
            y="125.175"
            transform="matrix(0.70206, 0, 0, 0.657909, 165.195618, 63.89854)"
            xlinkHref={`./images/Vector.png`}
            style={{
              filter: "drop-shadow(3px 1px 1px rgb(0 0 0 / 0.6))",
            }}
          ></image>
          <path
            d="M 443.403 150.207 L 450.684 165.778 L 443.783 165.795 L 443.403 150.207 Z"
            style={{ fill: "rgb(219, 219, 219)", stroke: "rgb(219, 219, 219)" }}
            transform="matrix(0.999731, 0.023188, -0.022188, 0.999731, 3.894169, -14.325673)"
          ></path>
          <text
            style={{
              fill: "rgb(51, 51, 51)",
              fontSize: "12px",
              whiteSpace: "pre",
              fontFamily: "Roboto, sans-serif",
              fontWeight: 600,
            }}
            x="423.636"
            y="160.471"
          >
            {chartData?.top?.additional > 0
              ? Math.abs(chartData?.top?.total) -
                Math.abs(chartData?.top?.additional)
              : Math.abs(chartData?.top?.total)}
            %
          </text>
        </g>
        <g transform="matrix(1, 0, 0, 1, 353, -31)">
          <path
            d="M 329.38 122.065 L 332.38 122.065 L 332.38 230.817 L 329.38 230.817 L 329.38 122.065 Z"
            style={{ fill: "#5BC9DD", stroke: "#5BC9DD" }}
          ></path>
          <ellipse
            style={{
              strokeWidth: "2px",
              fill: "#5BC9DD",
              stroke: "rgb(220, 220, 220)",
            }}
            cx="331"
            cy={126.802 + getPercentOfRight(101, "c")}
            rx="5"
            ry="5"
            data-bx-origin="0.5 0.5"
          ></ellipse>
          <path
            d="M 299.629 148.911 L 302.629 148.911 L 302.629 196.663 L 299.629 196.663 L 299.629 148.911 Z"
            style={{ stroke: "rgb(220, 220, 220)", fill: "rgb(220, 220, 220)" }}
            transform={`matrix(0, -1, 1, 0, 128.341999, ${
              427.915988 + getPercentOfRight(101, "c")
            })`}
          ></path>
        </g>
        <g transform="matrix(1, 0, 0, 1, 353, -31)">
          <path
            d="M 329.398 232.246 L 332.398 232.246 L 332.398 340.998 L 329.398 340.998 L 329.398 232.246 Z"
            style={{ fill: "#FCBD24", stroke: "#FCBD24" }}
          ></path>
          <ellipse
            style={{
              strokeWidth: "2px",
              stroke: "rgb(220, 220, 220)",
              fill: "#FCBD24",
            }}
            cx="331.018"
            cy={236.983 + getPercentOfRight(99, "b")}
            rx="5"
            ry="5"
            data-bx-origin="0.5 0.5"
          ></ellipse>
          <path
            d="M 299.647 259.092 L 302.647 259.092 L 302.647 306.844 L 299.647 306.844 L 299.647 259.092 Z"
            style={{ stroke: "rgb(220, 220, 220)", fill: "rgb(220, 220, 220)" }}
            transform={`matrix(0, -1, 1, 0, 18.179004, ${
              538.115005 + getPercentOfRight(99, "b")
            })`}
          ></path>
        </g>
        <g transform="matrix(1, 0, 0, 1, 353, -31)">
          <path
            d="M 329.431 342.412 L 332.431 342.412 L 332.431 451.164 L 329.431 451.164 L 329.431 342.412 Z"
            style={{ fill: "#65AC39", stroke: "#65AC39" }}
          ></path>
          <ellipse
            style={{
              strokeWidth: "2px",
              stroke: "rgb(220, 220, 220)",
              fill: "#65AC39",
            }}
            cx="331.051"
            cy={347.983 + getPercentOfRight(99, "a")}
            rx="5"
            ry="5"
            data-bx-origin="0.5 0.5"
          ></ellipse>
          <path
            d="M 299.68 369.544 L 302.68 369.544 L 302.68 417.296 L 299.68 417.296 L 299.68 369.544 Z"
            style={{ stroke: "rgb(220, 220, 220)", fill: "rgb(220, 220, 220)" }}
            transform={`matrix(0, -1, 1, 0, -92.240011, ${
              648.599992 + getPercentOfRight(99, "a")
            })`}
          ></path>
        </g>
        <g>
          <text
            style={{
              fill: "#5BC9DD",
              fontSize: "13.5px",
              whiteSpace: "pre",
              fontFamily: "Roboto, sans-serif",
              fontWeight: 600,
            }}
            transform="matrix(0.784442, 0, 0, 0.709677, 426.14151, 19.793186)"
            x="348.592"
            y={111.695 + getPercentOfRight(143, "c")}
          >
            {chartData?.top?.total - chartData?.top?.additional}% Total
          </text>
        </g>
        <g>
          <text
            style={{
              fill: "#FCBD24",
              fontSize: "13.5px",
              whiteSpace: "pre",
              fontFamily: "Roboto, sans-serif",
              fontWeight: 600,
            }}
            transform="matrix(0.784442, 0, 0, 0.709677, 425.798645, 129.297958)"
            x="348.592"
            y={113.695 + getPercentOfRight(138, "b")}
          >
            {chartData?.middle?.total - chartData?.middle?.additional}% Total
          </text>
        </g>
        <g>
          <text
            style={{
              fill: "#65AC39",
              fontSize: "13.5px",
              whiteSpace: "pre",
              fontFamily: "Roboto, sans-serif",
              fontWeight: 600,
            }}
            transform="matrix(0.784442, 0, 0, 0.709677, 425.730072, 240.447205)"
            x="348.592"
            y={113.695 + getPercentOfRight(138, "a")}
          >
            {chartData?.bottom?.total - chartData?.bottom?.additional}% Total
          </text>
        </g>
        <g transform="matrix(0.929836, 0, 0, 0.898066, -120, 4.947435)">
          <path
            d="M 498.306 80.497 C 503.819 77.314 509.333 77.314 514.846 80.497 L 531.385 90.047 C 536.898 93.23 539.655 98.004 539.655 104.37 L 539.655 123.468 C 539.655 129.834 536.898 134.609 531.385 137.792 L 429.846 198.341 C 424.333 201.524 418.819 201.524 413.306 198.341 L 396.767 188.792 C 391.254 185.609 388.497 180.834 388.497 174.468 L 388.497 155.37 C 388.497 149.004 391.254 144.23 396.767 141.047 L 498.306 80.497 Z"
            style={{
              strokeWidth: "2px",
              fill: "rgb(255, 255, 255)",
              stroke: "rgba(109, 109, 109, 0.11)",
              filter: "drop-shadow(3px 1px 2px rgb(0 0 0 / 0.2))",
            }}
            transform="matrix(0.866047, 0.499963, -0.499963, 0.866047, 131.868797, -213.345181)"
          ></path>
          <text
            style={{
              fill: "gray",
              fontSize: "13px",
              fontStyle: "normal",
              fontWeight: 600,
              whiteSpace: "pre",
              fontFamily: "Roboto, sans-serif",
            }}
            x="449.148"
            y="124.521"
          >
            TOTAL: {chartData?.top?.total}%
          </text>
          <text
            style={{
              fill: "#5BC9DD",
              fontSize: "10px",
              whiteSpace: "pre",
              fontWeight: 600,
              fontFamily: "Roboto, sans-serif",
            }}
            x="448.915"
            y="143.88"
          >
            Standard: {chartData?.top?.total - chartData?.top?.additional}%
          </text>
          <text
            style={{
              fill: "rgb(143, 139, 139)",
              fontSize: "10px",
              whiteSpace: "pre",
              fontWeight: 600,
              fontFamily: "Roboto, sans-serif",
            }}
            x="449.447"
            y="158.006"
          >
            {chartData?.top?.additional > 0 ? "Additional" : "Less"} :
            {Math.abs(chartData?.top?.additional)}%
          </text>
          <image
            width="95"
            height="95"
            x="338.525"
            y="88.673"
            transform="matrix(0.894737, 0, 0, 0.836531, 43.497669, 25.784603)"
            xlinkHref={`./images/tier3.png`}
          ></image>
        </g>
        <g transform="matrix(0.929836, 0, 0, 0.898066, -120, 4.947435)">
          <path
            d="M 430.696 193.588 C 436.209 190.405 441.723 190.405 447.236 193.588 L 463.775 203.138 C 469.288 206.321 472.045 211.095 472.045 217.461 L 472.045 236.559 C 472.045 242.925 469.288 247.7 463.775 250.883 L 362.236 311.432 C 356.723 314.615 351.209 314.615 345.696 311.432 L 329.157 301.883 C 323.644 298.7 320.887 293.925 320.887 287.559 L 320.887 268.461 C 320.887 262.095 323.644 257.321 329.157 254.138 L 430.696 193.588 Z"
            style={{
              strokeSidth: "2px",
              fill: "rgb(255, 255, 255)",
              stroke: "rgba(109, 109, 109, 0.11)",
              filter: "drop-shadow(3px 1px 2px rgb(0 0 0 / 0.2))",
            }}
            transform="matrix(0.866047, 0.499963, -0.499963, 0.866047, 179.353524, -164.393789)"
          ></path>
          <text
            style={{
              fill: "gray",
              fontSize: "13px",
              fontStyle: "normal",
              fontWeight: 600,
              whiteSpace: "pre",
              fontFamily: "Roboto, sans-serif",
            }}
            x="381.538"
            y="237.612"
          >
            TOTAL: {chartData?.middle?.total}%
          </text>
          <text
            style={{
              fill: "#FCBD24",
              fontSize: "10px",
              whiteSpace: "pre",
              fontWeight: 600,
              fontFamily: "Roboto, sans-serif",
            }}
            x="381.305"
            y="256.971"
          >
            Standard: {chartData?.middle?.total - chartData?.middle?.additional}
            %
          </text>
          <text
            style={{
              fill: "rgb(143, 139, 139)",
              fontSize: "10px",
              whiteSpace: "pre",
              fontWeight: 600,
              fontFamily: "Roboto, sans-serif",
            }}
            x="381.837"
            y="271.097"
          >
            {chartData?.middle?.additional > 0 ? "Additional" : "Less"} :
            {Math.abs(chartData?.middle?.additional)}%
          </text>
          <image
            width="88"
            height="95"
            transform="matrix(0.915789, 0, 0, 0.866531, 282.535095, 211.351282)"
            xlinkHref={`./images/tier2.png`}
          ></image>
        </g>
        <g transform="matrix(0.929836, 0, 0, 0.898066, -120, 4.947435)">
          <path
            d="M 373.39 304.796 C 378.903 301.613 384.417 301.613 389.93 304.796 L 406.469 314.346 C 411.982 317.529 414.739 322.303 414.739 328.669 L 414.739 347.767 C 414.739 354.133 411.982 358.908 406.469 362.091 L 304.93 422.64 C 299.417 425.823 293.903 425.823 288.39 422.64 L 271.851 413.091 C 266.338 409.908 263.581 405.133 263.581 398.767 L 263.581 379.669 C 263.581 373.303 266.338 368.529 271.851 365.346 L 373.39 304.796 Z"
            style={{
              strokeWidth: "2px",
              fill: "rgb(255, 255, 255)",
              stroke: "rgba(109, 109, 109, 0.11)",
              filter: "drop-shadow(3px 1px 2px rgb(0 0 0 / 0.2))",
            }}
            transform="matrix(0.866047, 0.499963, -0.499963, 0.866047, 227.277079, -120.84624)"
          ></path>
          <text
            style={{
              fill: "gray",
              fontSize: "13px",
              fontStyle: "normal",
              fontWeight: 600,
              whiteSpace: "pre",
              fontFamily: "Roboto, sans-serif",
            }}
            x="324.232"
            y="348.82"
          >
            TOTAL: {chartData?.bottom?.total}%
          </text>
          <text
            style={{
              fill: "#65AC39",
              fontSize: "10px",
              whiteSpace: "pre",
              fontWeight: 600,
              fontFamily: "Roboto, sans-serif",
            }}
            x="323.999"
            y="368.179"
          >
            Standard: {chartData?.bottom?.total - chartData?.bottom?.additional}
            %
          </text>
          <text
            style={{
              fill: "rgb(143, 139, 139)",
              fontSize: "10px",
              whiteSpace: "pre",
              fontWeight: 600,
              fontFamily: "Roboto, sans-serif",
            }}
            x="324.531"
            y="382.305"
          >
            {chartData?.bottom?.additional > 0 ? "Additional" : "Less"} :
            {Math.abs(chartData?.bottom?.additional)}%
          </text>
          <image
            width="95"
            height="95"
            transform="matrix(0.894737, 0, 0, 0.836531, 226.745987, 322.727539)"
            xlinkHref={`./images/tier1.png`}
          ></image>
        </g>
      </svg>

      {/* <div className="tooltip"></div> */}
    </div>
  );
};

export default Pyramid;
