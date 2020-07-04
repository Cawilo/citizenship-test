import React, {Component} from "react"
import Quiz from "../../components/Quiz"

class G extends Component{

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
            {q: "What is the “rule of law”?",a: ["Everyone must follow the law", "Leaders must obey the law", "Government must obey the law", "No one is above the law."]},
            {q: "Name one branch or part of the government.",a: ["Congress", "legislative", "President", "executive", "the courts", "judicial"]},
            {q: "What stops one branch of government from becoming too powerful?",a: ["checks and balances", "separation of powers"]},
            {q: "Who is in charge of the executive branch?",a: ["the President"]},
            {q: "Who makes federal laws?",a: ["Congress", "Senate and House (of Representatives)", "(U.S. or national) legislature"]},
            {q: "What are the two parts of the U.S. Congress?",a: ["the Senate and House (of Representatives)"]},
            {q: "How many U.S. Senators are there?",a: ["one hundred (100)"]},
            {q: "We elect a U.S. Senator for how many years? ",a: ["six (6)"]},
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
            {q: "What is the name of the Speaker of the House of Representatives now?",a: ["Nancy Pelosi ***********"]},
            {q: "There are four amendments to the Constitution about who can vote. Describe one of them.",a: ["Citizens eighteen (18) and older (can vote).", "You don’t have to pay (a poll tax) to vote.", "Any citizen can vote. (Women and men can vote.)", "A male citizen of any race (can vote)."]},
            {q: "What is one responsibility that is only for United States citizens?", a:["serve on a jury", "vote in a federal election"]},
            {q: "Name one right only for United States citizens.", a:["vote in a federal election", "run for federal office"]},
            {q: "What are two rights of everyone living in the United States?", a:["freedom of expression", "freedom of speech", "freedom of assembly", "freedom to petition the government", "freedom of religion", "the right to bear arms"]},
            {q: "What do we show loyalty to when we say the Pledge of Allegiance?", a:["the United States", "the flag"]},
            {q: "What is one promise you make when you become a United States citizen?", a:["give up loyalty to other countries", "defend the Constitution and laws of the United States", "obey the laws of the United States", "serve in the U.S. military (if needed)", "serve (do important work for) the nation (if needed)", "be loyal to the United States"]},
            {q: "How old do citizens have to be to vote for President?", a:["eighteen (18) and older"]},
            {q: "What are two ways that Americans can participate in their democracy?", a:["vote", "join a political party", "help with a campaign", "join a civic group", "join a community group", "give an elected official your opinion on an issue", "call Senators and Representatives", "publicly support or oppose an issue or policy", "run for office", "write to a newspaper"]},
            {q: "When is the last day you can send in federal income tax forms?", a:["April 15"]},
            {q: "When must all men register for the Selective Service?", a:["at age eighteen (18)", "between eighteen (18) and twenty-six (26)"]}
        ]
    }

    

    render(){
        return(
            <Quiz title="American Government" questions={this.state.questions} history={this.props.history}/>
        )
    }
}

export default G