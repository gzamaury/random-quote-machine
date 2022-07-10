import PropTypes from "prop-types";
import arrow from "./arrow.svg";
import "./NextBtn.css";

function NextBtn({ btnId, onClick }) {
  return (
    <div id="next-btn">
      <div className="next-btn-container">
        <button id={btnId} type="button" className="btn" onClick={onClick}>
          <img src={arrow} alt="arrow" />
        </button>
      </div>
    </div>
  );
}

NextBtn.propTypes = {
  btnId: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

NextBtn.defaultProps = {
  btnId: undefined,
};

export default NextBtn;
