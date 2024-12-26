import ReactGA from "react-ga4";

const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Dynamically import web-vitals and execute the functions only after resolution
    import("web-vitals")
      .then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(onPerfEntry);
        getFID(onPerfEntry);
        getFCP(onPerfEntry);
        getLCP(onPerfEntry);
        getTTFB(onPerfEntry);
      })
      .catch((error) => {
        console.error("Error importing web-vitals:", error);
      });
  }
};

const logWebVitals = (metric) => {
  ReactGA.send({
    hitType: "timing",
    timingCategory: "Web Vitals",
    timingVar: metric.name,
    timingValue: Math.round(metric.value),
    page: window.location.pathname,
  });
};

// Call reportWebVitals safely
reportWebVitals(logWebVitals);

export default reportWebVitals;
