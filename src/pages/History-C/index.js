import React, {Component} from "react"
import Quiz from "../../components/Quiz"

class HC extends Component{

    state = {
        questions: [
            {q: "Name one war fought by the United States in the 1900s.", a:["World War I", "World War II", "Korean War", "Vietnam War", "(Persian) Gulf War"]},
            {q: "Who was President during World War I?", a:["(Woodrow) Wilson"]},
            {q: "Who was President during the Great Depression and World War II?", a:["(Franklin) Roosevelt"]},
            {q: "Who did the United States fight in World War II?", a:["Japan, Germany, and Italy"]},
            {q: "Before he was President, Eisenhower was a general. What war was he in?", a:["World War II"]},
            {q: "During the Cold War, what was the main concern of the United States?", a:["Communism"]},
            {q: "What movement tried to end racial discrimination?", a:["civil rights (movement)"]},
            {q: "What did Martin Luther King, Jr. do?", a:["fought for civil rights", "worked for equality for all Americans"]},
            {q: "What major event happened on September 11, 2001, in the United States?", a:["Terrorists attacked the United States."]},
            {q: "Name one American Indian tribe in the United States.", a:["Cherokee*****"]},
        ]
    }

    

    render(){
        return(
            <Quiz title="American History > Recent American History and Other Important Historical Information" questions={this.state.questions} history={this.props.history}/>
        )
    }
}

export default HC