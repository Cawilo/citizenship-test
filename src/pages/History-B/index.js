import React, {Component} from "react"
import Quiz from "../../components/Quiz"

class HB extends Component{

    state = {
        questions: [
            {q: "What territory did the United States buy from France in 1803?", a:["the Louisiana Territory", "Louisiana"]},
            {q: "Name one war fought by the United States in the 1800s.", a:["War of 1812", "Mexican-American War", "Civil War", "Spanish-American War"]},
            {q: "Name the U.S. war between the North and the South.", a:["the Civil War", "the War between the States"]},
            {q: "Name one problem that led to the Civil War.", a:["slavery", "economic reasons", "states’ rights"]},
            {q: "What was one important thing that Abraham Lincoln did?", a:["freed the slaves (Emancipation Proclamation)", "saved (or preserved) the Union", "led the United States during the Civil War"]},
            {q: "What did the Emancipation Proclamation do?", a:["freed the slaves", "freed slaves in the Confederacy", "freed slaves in the Confederate states", "freed slaves in the Confederate states", "freed slaves in most Southern states"]},
            {q: "What did Susan B. Anthony do?", a:["fought for women’s rights", "fought for civil rights"]},
        ]
    }

    

    render(){
        return(
            <Quiz title="American History > 1800s" questions={this.state.questions} history={this.props.history}/>
        )
    }
}

export default HB