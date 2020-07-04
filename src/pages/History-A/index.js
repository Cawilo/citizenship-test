import React, {Component} from "react"
import Quiz from "../../components/Quiz"

class HA extends Component{

    state = {
        questions: [
            {q: "What is one reason colonists came to America?", a:["freedom", "political liberty", "religious freedom", "economic opportunity", "practice their religion", "escape persecution"]},
            {q: "Who lived in America before the Europeans arrived?", a:["American Indians", "Native Americans"]},
            {q: "What group of people was taken to America and sold as slaves?", a:["Africans", "people from Africa"]},
            {q: "Why did the colonists fight the British?", a:["because of high taxes (taxation without representation)", "because the British army stayed in their houses (boarding, quartering)", "because they didn’t have self-government"]},
            {q: "Who wrote the Declaration of Independence?", a:["(Thomas) Jefferson"]},
            {q: "When was the Declaration of Independence adopted?", a:["July 4, 1776"]},
            {q: "There were 13 original states. Name three.", a:["New Hampshire", "Massachusetts", "Rhode Island", "Connecticut", "New York", "New Jersey", "Pennsylvania", "Delaware", "Maryland", "Virginia", "North Carolina", "South Carolina", "Georgia"]},
            {q: "What happened at the Constitutional Convention?", a:["The Constitution was written.", "The Founding Fathers wrote the Constitution."]},
            {q: "When was the Constitution written?", a:["1787"]},
            {q: "The Federalist Papers supported the passage of the U.S. Constitution. Name one of the writers.", a:["(James) Madison", "(Alexander) Hamilton", "(John) Jay", "Publius"]},
            {q: "What is one thing Benjamin Franklin is famous for?", a:["U.S. diplomat", "oldest member of the Constitutional Convention", "first Postmaster General of the United States", "writer of “Poor Richard’s Almanac”", "started the first free libraries"]},
            {q: "Who is the “Father of Our Country”?", a:["(George) Washington"]},
            {q: "Who was the first President?", a:["(George) Washington"]},
        ]
    }

    

    render(){
        return(
            <Quiz title="American History > Colonial Period and Independence" questions={this.state.questions} history={this.props.history}/>
        )
    }
}

export default HA