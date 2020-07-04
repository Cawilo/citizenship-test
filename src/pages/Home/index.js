import React, {Component} from "react"
import "./style.css"


class Home extends Component{

    componentDidMount = () => {
        let synth = window.speechSynthesis;
        synth.cancel();
    }



    render(){
        return(
            <div className="quizzes-container">
                <div><button className="full-test" onClick={()=>this.props.history.push("/quiz")}>Full Test</button></div>
                <div><button className="sub-test" onClick={()=>this.props.history.push("/government/quiz")}>American Government</button></div>
                <div>
                    <div className="sub-sub-test" onClick={()=>this.props.history.push("/government/A/quiz")}><span>A: </span>Principles of American Democracy</div>
                    <div className="sub-sub-test" onClick={()=>this.props.history.push("/government/B/quiz")}><span>B: </span>System of Government</div>
                    <div className="sub-sub-test" onClick={()=>this.props.history.push("/government/C/quiz")}><span>C: </span>Rights and Responsibilities</div>
                </div>
                <div><button className="sub-test" onClick={()=>this.props.history.push("/history/quiz")}>American History</button></div>
                <div>
                    <div className="sub-sub-test" onClick={()=>this.props.history.push("/history/A/quiz")}><span>A: </span>Colonial Period and Independence</div>
                    <div className="sub-sub-test" onClick={()=>this.props.history.push("/history/B/quiz")}><span>B: </span>1800s</div>
                    <div className="sub-sub-test" onClick={()=>this.props.history.push("/history/C/quiz")}><span>C: </span>Recent American History and Other Important Historical Information</div>
                </div>
                <div><button className="sub-test" onClick={()=>this.props.history.push("/civics/quiz")}>INTEGRATED CIVICS</button></div>
                <div>
                    <div className="sub-sub-test" onClick={()=>this.props.history.push("/civics/A/quiz")}><span>A: </span>Geography</div>
                    <div className="sub-sub-test" onClick={()=>this.props.history.push("/civics/B/quiz")}><span>B: </span>Symbols</div>
                    <div className="sub-sub-test" onClick={()=>this.props.history.push("/civics/C/quiz")}><span>C: </span>Holidays</div>
                </div>
            </div>
        )
    }
}


export default Home