import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import EndSection from '../../components/Sections/EndSection';
import * as actions from '../../actions/questionnaire';
import { formatChoicesToExport } from '../../selectors/index';


const mapStateToProps = state => ({
    sendChoiceLoader: state.sendChoiceLoader,
    formatChoicesToExport: formatChoicesToExport(state)
});


const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EndSection)
