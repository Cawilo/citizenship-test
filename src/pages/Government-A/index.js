import React, {Component} from "react"
import Quiz from "../../components/Quiz"

class GA extends Component{

    state = {
        questions: [
            {q: "What is the supreme law of the land?",a: ["the Constitution"]},
            {q: "What does the Constitution do?",a: ["sets up the government", "defines the government", "protects basic rights of Americans"]},
            {q: "The idea of self-government is in the first three words of the Constitution. What are these words?",a: ["We the People"]},
            {q: "What is an amendment?",a: ["a change (to the Constitution)", "an addition (to the Constitution)"]},
            {q: "What do we call the first ten amendments to the Constitution?",a: ["the Bill of Rights"]},
            {q: "What is one right or freedom from the First Amendment?",a: ["speech", "religion", "assembly", "press", "petition the government"]},
            {q: "How many amendments does the Constitution have?",a: ["twenty-seven (27)"]},
            {q: "What did the Declaration of Independence do?",a: ["announced our independence (from Great Britain)", "declared our independence (from Great Britain)", "said that the United States is free (from Great Britain)"]},
            {q: "What are two rights in the Declaration of Independence?",a: ["life", "liberty", "pursuit of happiness"]},
            {q: "What is freedom of religion?",a: ["You can practice any religion, or not practice a religion"]},
            {q: "What is the economic system in the United States?",a: ["capitalist economy", "market economy"]},
            {q: "What is the “rule of law”?",a: ["Everyone must follow the law", "Leaders must obey the law", "Government must obey the law", "No one is above the law."]}
        ]
    }

    

    render(){
        return(
            <Quiz title="American Government > Principles of American Democracy" questions={this.state.questions} history={this.props.history}/>
        )
    }
}

export default GA