// Custom logger - console.log use nahi karna
const logger = (message, data = null) => {
  const logEntry = {
    message,
    data,
    timestamp: new Date().toISOString(),
  };
  let logs = JSON.parse(localStorage.getItem("logs")) || [];
  logs.push(logEntry);
  localStorage.setItem("logs", JSON.stringify(logs));
};

export default logger;
