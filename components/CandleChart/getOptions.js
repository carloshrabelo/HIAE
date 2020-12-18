import { v4 as uuidv4 } from "uuid";

const today = new Date();
const lastYear = new Date();
lastYear.setFullYear(lastYear.getFullYear() - 1);

const f = (val) => {
  const f = new Intl.DateTimeFormat("pt-br", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return f.format(val);
};

export default () => {
  const id = uuidv4();
  return {
    options: {
      chart: {
        id,
        type: "candlestick",
        toolbar: {
          autoSelected: "pan",
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      plotOptions: {
        candlestick: {
          colors: {
            upward: "var(--success)",
            downward: "var(--danger)",
          },
        },
      },

      xaxis: {
        type: "datetime",
        labels: {
          formatter: (val) => val && f(val),
        },
      },
    },
    optionsBar: {
      chart: {
        type: "bar",
        brush: {
          enabled: true,
          target: id,
        },
        selection: {
          enabled: true,
          xaxis: {
            min: lastYear.getTime(),
            max: today.getTime(),
          },
          fill: {
            color: "var(--gray)",
            opacity: 0.4,
          },
          stroke: {
            color: "var(--primary)",
          },
        },
      },
      plotOptions: {
        bar: {
          columnWidth: "80%",
          colors: {
            ranges: [
              {
                from: -1000,
                to: 0,
                color: "var(--danger)",
              },
              {
                from: 0,
                to: 1,
                color: "var(--primary-lighten)",
              },
              {
                from: 1,
                to: 10000,
                color: "var(--success)",
              },
            ],
          },
        },
      },
      stroke: {
        width: 0,
      },
      xaxis: {
        type: "datetime",
        labels: {
          formatter: (val) => val && f(val),
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
    },
  };
};
