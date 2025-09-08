import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUrls } from "../utils/urlHelper";
import logger from "../utils/logger";

function RedirectHandler() {
  const { shortcode } = useParams();

  useEffect(() => {
    const urls = getUrls();
    const match = urls.find((u) => u.shortcode === shortcode);

    if (match) {
      if (Date.now() > match.expiry) {
        alert("This link has expired!");
        logger("Expired link attempted", { shortcode });
        return;
      }

      // log button ko click karne ka process
      match.clicks.push({
        time: new Date().toISOString(),
        referrer: document.referrer || "Direct",
      });
      localStorage.setItem("urls", JSON.stringify(urls));

      logger("Redirecting", { shortcode, longUrl: match.longUrl });
      window.location.href = match.longUrl;
    } else {
      alert("Shortcode not found");
      logger("Invalid shortcode", { shortcode });
    }
  }, [shortcode]);

  return <p>Redirecting...</p>;
}

export default RedirectHandler;
