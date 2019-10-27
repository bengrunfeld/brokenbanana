const getUrlPrefix = () => {
  console.log("-> DEV/PROD:", process.env.NODE_ENV);

  if (process.env.NODE_ENV === "development") return "http://localhost:3000";
  if (process.env.NODE_ENV === "production") return "http://brokenbanana.tech";
  return "http://brokenbanana.tech";
};

export default getUrlPrefix;
