import React, {Component} from "react"
import Quiz from "../../components/Quiz"

class H extends Component{

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
            {q: "What territory did the United States buy from France in 1803?", a:["the Louisiana Territory", "Louisiana"]},
            {q: "Name one war fought by the United States in the 1800s.", a:["War of 1812", "Mexican-American War", "Civil War", "Spanish-American War"]},
            {q: "Name the U.S. war between the North and the South.", a:["the Civil War", "the War between the States"]},
            {q: "Name one problem that led to the Civil War.", a:["slavery", "economic reasons", "states’ rights"]},
            {q: "What was one important thing that Abraham Lincoln did?", a:["freed the slaves (Emancipation Proclamation)", "saved (or preserved) the Union", "led the United States during the Civil War"]},
            {q: "What did the Emancipation Proclamation do?", a:["freed the slaves", "freed slaves in the Confederacy", "freed slaves in the Confederate states", "freed slaves in the Confederate states", "freed slaves in most Southern states"]},
            {q: "What did Susan B. Anthony do?", a:["fought for women’s rights", "fought for civil rights"]},
            {q: "Name one war fought by the United States in the 1900s.", a:["World War I", "World War II", "Korean War", "Vietnam War", "(Persian) Gulf War"]},
            {q: "Who was President during World War I?", a:["(Woodrow) Wilson"]},
            {q: "Who was President during the Great Depression and World War II?", a:["(Franklin) Roosevelt"]},
            {q: "Who did the United States fight in World War II?", a:["Japan, Germany, and Italy"]},
            {q: "Before he was President, Eisenhower was a general. What war was he in?", a:["World War II"]},
            {q: "During the Cold War, what was the main concern of the United States?", a:["Communism"]},
            {q: "What movement tried to end racial discrimination?", a:["civil rights (movement)"]},
            {q: "What did Martin Luther King, Jr. do?", a:["fought for civil rights", "worked for equality for all Americans"]},
            {q: "What major event happened on September 11, 2001, in the United States?", a:["Terrorists attacked the United States."]},
            {q: "Name one American Indian tribe in the United States.", a:["Cherokee*****"]}
        ]
    }

    

    render(){
        return(
            <Quiz title="American History" questions={this.state.questions} history={this.props.history}/>
        )
    }
}

export default H