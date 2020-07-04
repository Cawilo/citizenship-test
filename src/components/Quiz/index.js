import React, {Component} from "react"
import "./style.css"

class Quiz extends Component{

    state = {
        nextQ: 0,
        questions: this.props.questions,
        visible: true,
        sound: false
    }

    componentDidMount = () => {
        let q = this.state.questions.sort(() => Math.random() - 0.5);
        this.setState({questions: q})
        let msg = new SpeechSynthesisUtterance();
        msg.text = this.state.questions[this.state.nextQ].q;
        speechSynthesis.speak(msg);
        msg.onstart =function(event) {
            this.setState({sound: true})
        }.bind(this)
        msg.onend = function(event) {
            this.setState({sound: false})
        }.bind(this)
    }

   

    nextQuestion = value => {
        var synth = window.speechSynthesis;
        synth.cancel();
        if(this.state.nextQ === this.props.questions.length - 1){
            this.props.history.push("/")
        }
        let n = this.state.nextQ + 1
        this.setState({nextQ: n, showAns: false})
        if(this.state.questions[this.state.nextQ + 1]){
            let msg = new SpeechSynthesisUtterance(this.state.questions[this.state.nextQ + 1].q);
            window.speechSynthesis.speak(msg);
            this.setState({sound: true})
            msg.onstart =function(event) {
                this.setState({sound: true})
            }.bind(this)
            msg.onend = function(event) {
                this.setState({sound: false})
            }.bind(this)
        } else {
            return
        }
    }

    speakTTS = () => {
        let msg = new SpeechSynthesisUtterance(this.state.questions[this.state.nextQ].q);
        window.speechSynthesis.speak(msg);
        this.setState({sound: true})
        msg.onend = function(event) {
            this.setState({sound: false})
        }.bind(this)
    }


    render(){
        return(
            <div>
            <div className="title-quiz">{this.props.title}</div>
            <div className="quiz">
                <div>
                    <div>
                    <button className="adj" onClick={()=>this.state.visible ? this.setState({visible: false}):this.setState({visible: true})}>{this.state.visible ? (<i className="fas fa-eye fa-2x"></i>):(<i className="fas fa-eye-slash fa-2x"></i>)}</button>
                    </div>
                    {this.state.visible ? (
                    <div>{this.state.questions[this.state.nextQ].q}</div>
                    ):(<div></div>)}
                    <div>
                    <button disabled={this.state.sound} className="adj" onClick={this.speakTTS}>{this.state.sound ? (<i className="fas fa-volume-up fa-2x"></i>):(<i className="fas fa-volume-off fa-2x"></i>)}</button>
                    </div>
                </div>
                <div>
                {this.state.showAns ? (
                <div className="quiz-ans-cont">
                {this.state.questions[this.state.nextQ].a.map((ans, index)=>(
                    <div className="quiz-ans" key={index}>{ans}</div>
                ))}
                </div>
                ):(null)}
                </div>
                <div className="quiz-buttons">
                <div className="questions-counter"><span>Question:</span> <span>{this.state.nextQ + 1}</span>/<span>{this.state.questions.length}</span></div>
                {/* <div id="previous"><button onClick={this.Question} style={this.state.sound ? {color: "#bebebe", background: "rgb(128, 39, 13)"}:null} disabled={this.state.sound}>Previous</button></div> */}
                <div id="show"><button onClick={()=>this.state.showAns ? this.setState({showAns: false}):this.setState({showAns: true})}>Show Answer</button></div>
                <div id="next"><button onClick={this.nextQuestion}  >Next</button></div>
                </div>
            </div>
            </div>
        )
    }
}

export default Quiz