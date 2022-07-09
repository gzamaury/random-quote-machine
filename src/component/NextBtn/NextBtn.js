import PropTypes from "prop-types";
import arrow from "./arrow.svg";
import "./NextBtn.css";

function NextBtn({ onClick }) {
  return (
    <div id="next-btn">
      <div className="next-btn-container">
        <button type="button" className="btn" onClick={onClick}>
          <img src={arrow} alt="arrow" />
        </button>
      </div>
    </div>
  );
}

NextBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default NextBtn;
