// const production = process.env.NODE_ENV === "production";

// export const url = production
//   ? "https://jcdiambilayministries.herokuapp.com/"
//   : "https://localhost:1337";

module.exports = {
  env: {
    API_URL: process.env.API_URL,
  },
  images: {
    domains: ["ucarecdn.com", "res.cloudinary.com"],
  },
};
