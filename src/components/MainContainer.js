import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Main from "./Main";
import { featchMainItemsList, updateMainItemsList } from "../actions/index";

const mapStateToProps = state => ({
  data: state.mainData.data,
  year: state.mainData.year
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ featchMainItemsList, updateMainItemsList }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
