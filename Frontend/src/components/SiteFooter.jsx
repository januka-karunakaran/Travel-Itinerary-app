import { Link } from "react-router-dom";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__main">
        <div>
          <h3>TripGenie</h3>
          <p>
            A formal travel planning platform for curated itineraries, verified
            guides, and organized bookings across Sri Lanka.
          </p>
        </div>
      </div>

      <div className="site-footer__bottom">
        <span>Copyright {year} TripGenie. All rights reserved.</span>
        <span>Built for reliable travel planning.</span>
      </div>
    </footer>
  );
}
