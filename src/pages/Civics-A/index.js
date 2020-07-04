import React, {Component} from "react"
import Quiz from "../../components/Quiz"

class CA extends Component{

    state = {
        questions: [
            {q: "Name one of the two longest rivers in the United States", a:["Missouri (River)", "Mississippi (River)"]},
            {q: "What ocean is on the West Coast of the United States?", a:["Pacific (Ocean)"]},
            {q: "What ocean is on the East Coast of the United States?", a:["Atlantic (Ocean)"]},
            {q: "Name one U.S. territory", a:["Puerto Rico", "U.S. Virgin Islands", "American Samoa", "Northern Mariana Islands", "Guam"]},
            {q: "Name one state that borders Canada.", a:["Washington ********"]},
            {q: "Name one state that borders Mexico.", a:["California", "Arizona", "New Mexico", "Texas"]},
            {q: "What is the capital of the United States?", a:["Washington, D.C."]},
            {q: "Where is the Statue of Liberty?", a:["New York (Harbor)", "Liberty Island"]},
        ]
    }

    

    render(){
        return(
            <Quiz title="INTEGRATED CIVICS > Geography" questions={this.state.questions} history={this.props.history}/>
        )
    }
}

export default CA