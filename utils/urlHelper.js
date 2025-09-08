// Shortcode generator
export const generateShortcode = () => {
  return Math.random().toString(36).substring(2, 8);
};

// Save URL jo localStorage me h 
export const saveUrl = (longUrl, shortcode, validity) => {
  let urls = JSON.parse(localStorage.getItem("urls")) || [];

  // sabse alag check
  if (urls.find((u) => u.shortcode === shortcode)) {
    throw new Error("exists");
  }

  urls.push({
    longUrl,
    shortcode,
    createdAt: Date.now(),
    expiry: Date.now() + validity * 60000,
    clicks: [],
  });
  localStorage.setItem("urls", JSON.stringify(urls));
};

// sare URLs milage
export const getUrls = () => {
  return JSON.parse(localStorage.getItem("urls")) || [];
};
