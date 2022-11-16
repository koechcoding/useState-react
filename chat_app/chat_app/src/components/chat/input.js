import React ,{component} from "react";
import { postMessage } from '../../redux/actions/messageActions';
import { connect } from 'react-redux';

class Input extends React.Component{
    state ={
        message: ""
    };

    onChange=(e)=>{
        this.setState({ [e.target.name]: e.target.value })
    }

    handleKeyPress=(e)=>{
        const { postMessage } = this.props;
        if(e.key === 'Enter' && this.state.message.length){
            const msg = {
                message: this.state.message,
                createdAt: new Date()
            }
            postMessage(msg);
            e.target.value='';
        }
    }

    render(){
        return(
            <div className="field">
                <div className="control">
                    <input
                       className="input"
                       type="text"
                       placeholder="Write something and press enter to send.."
                       onChange={this.onChange}
                       onKeyPress={this.handleKeyPress}
                       neme="message"
                    />
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = {
    postMessage
};

export default connect(null, mapDispatchToProps)(Input);