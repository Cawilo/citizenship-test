import React, {Component} from "react"
import Quiz from "../../components/Quiz"

class GC extends Component{

    state = {
        questions: [
            {q: "There are four amendments to the Constitution about who can vote. Describe one of them.",a: ["Citizens eighteen (18) and older (can vote).", "You don’t have to pay (a poll tax) to vote.", "Any citizen can vote. (Women and men can vote.)", "A male citizen of any race (can vote)."]},
            {q: "What is one responsibility that is only for United States citizens?", a:["serve on a jury", "vote in a federal election"]},
            {q: "Name one right only for United States citizens.", a:["vote in a federal election", "run for federal office"]},
            {q: "What are two rights of everyone living in the United States?", a:["freedom of expression", "freedom of speech", "freedom of assembly", "freedom to petition the government", "freedom of religion", "the right to bear arms"]},
            {q: "What do we show loyalty to when we say the Pledge of Allegiance?", a:["the United States", "the flag"]},
            {q: "What is one promise you make when you become a United States citizen?", a:["give up loyalty to other countries", "defend the Constitution and laws of the United States", "obey the laws of the United States", "serve in the U.S. military (if needed)", "serve (do important work for) the nation (if needed)", "be loyal to the United States"]},
            {q: "How old do citizens have to be to vote for President?", a:["eighteen (18) and older"]},
            {q: "What are two ways that Americans can participate in their democracy?", a:["vote", "join a political party", "help with a campaign", "join a civic group", "join a community group", "give an elected official your opinion on an issue", "call Senators and Representatives", "publicly support or oppose an issue or policy", "run for office", "write to a newspaper"]},
            {q: "When is the last day you can send in federal income tax forms?", a:["April 15"]},
            {q: "When must all men register for the Selective Service?", a:["at age eighteen (18)", "between eighteen (18) and twenty-six (26)"]},
        ]
    }

    

    render(){
        return(
            <Quiz title="American Government > Rights and Responsibilities" questions={this.state.questions} history={this.props.history}/>
        )
    }
}

export default GC