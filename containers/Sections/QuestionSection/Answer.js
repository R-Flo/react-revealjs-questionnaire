import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Answer from '../../../components/Sections/QuestionSection/Answer';
import * as actions from '../../../actions/questionnaire';


const mapStateToProps = state => ({

})


const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Answer)

