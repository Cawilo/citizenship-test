import React, {Component} from "react"
import Quiz from "../../components/Quiz"

class C extends Component{

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
            {q: "Why does the flag have 13 stripes?", a:["because there were 13 original colonies", "because the stripes represent the original colonies"]},
            {q: "Why does the flag have 50 stars?", a:["because there is one star for each state", "because each star represents a state", "because there are 50 states"]},
            {q: "What is the name of the national anthem?", a:["The Star-Spangled Banner"]},
            {q:"When do we celebrate Independence Day?",a:["July 4"]},
            {q:"Name two national U.S. holidays.",a:["Presidents’ Day", "Thanksgiving ********"]},
        ]
    }

    

    render(){
        return(
            <Quiz title="INTEGRATED CIVICS" questions={this.state.questions} history={this.props.history}/>
        )
    }
}

export default C