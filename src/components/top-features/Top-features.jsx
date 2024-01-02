import "./Top-features.scss";

function TopFeatures() {
  return (
    <div className="top-features__container">
      <h1 className="top-features__title">Top Features</h1>
      <div className="top-features__item-container">
        <div className="top-features__item">
          <h2 className="top-features__item__title">
            Skill & competency matrix
          </h2>
          <p className="top-features__item__description">
            Create an employee skill matrix in minutes
          </p>
        </div>
        <div className="top-features__item">
          <h2 className="top-features__item__title">Certification tracking</h2>
          <p className="top-features__item__description">
            Active, expiring or expired. Stay on top.
          </p>
        </div>
        <div className="top-features__item">
          <h2 className="top-features__item__title">Organisational chart</h2>
          <p className="top-features__item__description">
            An interactive org chart that generates automatically
          </p>
        </div>
        <div className="top-features__item">
          <h2 className="top-features__item__title">Skill gap analysis</h2>
          <p className="top-features__item__description">
            Spot skill gaps in real-time
          </p>
        </div>
        <div className="top-features__item">
          <h2 className="top-features__item__title">Upskilling & reskilling</h2>
          <p className="top-features__item__description">
            Identify upskilling opportunities for your team
          </p>
        </div>
      </div>
    </div>
  );
}

export default TopFeatures;
