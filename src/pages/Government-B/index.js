import React, {Component} from "react"
import Quiz from "../../components/Quiz"

class GB extends Component{

    state = {
        questions: [
            {q: "Name one branch or part of the government.",a: ["Congress", "legislative", "President", "executive", "the courts", "judicial"]},
            {q: "What stops one branch of government from becoming too powerful?",a: ["checks and balances", "separation of powers"]},
            {q: "Who is in charge of the executive branch?",a: ["the President"]},
            {q: "Who makes federal laws?",a: ["Congress", "Senate and House (of Representatives)", "(U.S. or national) legislature"]},
            {q: "What are the two parts of the U.S. Congress?",a: ["the Senate and House (of Representatives)"]},
            {q: "How many U.S. Senators are there?",a: ["one hundred (100)"]},
            {q: "We elect a U.S. Senator for how many years?",a: ["six (6)"]},
            {q: "Who is one of your state’s U.S. Senators now?",a: ["Marco Rubio ******************************"]},
            {q: "The House of Representatives has how many voting members?",a: ["four hundred thirty-five (435)"]},
            {q: "We elect a U.S. Representative for how many years?",a: ["two (2)"]},
            {q: "Name your U.S. Representative",a: ["Matt Gaetz *************************"]},
            {q: "Who does a U.S. Senator represent?",a: ["all people of the state"]},
            {q: "Why do some states have more Representatives than other states?",a: ["(because of) the state’s population", "(because) they have more people", "(because) some states have more people"]},
            {q: "We elect a President for how many years?",a: ["four (4)"]},
            {q: "In what month do we vote for President?",a: ["November"]},
            {q: "What is the name of the President of the United States now?",a: ["Donald Trump ***********************"]},
            {q: "What is the name of the Vice President of the United States now?",a: ["Mike Pence **************"]},
            {q: "If the President can no longer serve, who becomes President?",a: ["the Vice President"]},
            {q: "If both the President and the Vice President can no longer serve, who becomes President?",a: ["the Speaker of the House"]},
            {q: "Who is the Commander in Chief of the military?",a: ["the President"]},
            {q: "Who signs bills to become laws?",a: ["the President"]},
            {q: "Who vetoes bills?",a: ["the President"]},
            {q: "What does the President’s Cabinet do?",a: ["advises the President"]},
            {q: "What are two Cabinet-level positions?",a: ["Secretary of Agriculture", "Secretary of Education"]},
            {q: "What does the judicial branch do?",a: ["reviews laws", "explains laws", "resolves disputes (disagreements)", "decides if a law goes against the Constitution"]},
            {q: "What is the highest court in the United States?",a: ["the Supreme Court"]},
            {q: "How many justices are on the Supreme Court?",a: ["Nine (9) ******"]},
            {q: "Who is the Chief Justice of the United States now?",a: ["John Roberts *********"]},
            {q: "Under our Constitution, some powers belong to the federal government. What is one power of the federal government?",a: ["to print money", "to declare war", "to create an army", "to make treaties"]},
            {q: "Under our Constitution, some powers belong to the states. What is one power of the states?",a: ["provide schooling and education", "provide protection (police)", "provide safety (fire departments)", "give a driver’s license", "approve zoning and land use"]},
            {q: "Who is the Governor of your state now?",a: ["Ron DeSantis ***********"]},
            {q: "What is the capital of your state?",a: ["Tallahassee"]},
            {q: "What are the two major political parties in the United States?",a: ["Democratic and Republican"]},
            {q: "What is the political party of the President now?",a: ["Republican Party *********"]},
            {q: "What is the name of the Speaker of the House of Representatives now?",a: ["Nancy Pelosi ***********"]}
            
        ]
    }

    

    render(){
        return(
            <Quiz title="American Government > System of Government" questions={this.state.questions} history={this.props.history}/>
        )
    }
}

export default GB