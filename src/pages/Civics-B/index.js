import React, {Component} from "react"
import Quiz from "../../components/Quiz"

class CB extends Component{

    state = {
        questions: [
            {q: "Why does the flag have 13 stripes?", a:["because there were 13 original colonies", "because the stripes represent the original colonies"]},
            {q: "Why does the flag have 50 stars?", a:["because there is one star for each state", "because each star represents a state", "because there are 50 states"]},
            {q: "What is the name of the national anthem?", a:["The Star-Spangled Banner"]},
        ]
    }

    

    render(){
        return(
            <Quiz title="INTEGRATED CIVICS > Symbols" questions={this.state.questions} history={this.props.history}/>
        )
    }
}

export default CB