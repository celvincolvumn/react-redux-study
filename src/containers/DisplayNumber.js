import DisplayNumber from "../components/DisplayNumber";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  number: state.number,
});

export default connect(mapStateToProps)(DisplayNumber);
