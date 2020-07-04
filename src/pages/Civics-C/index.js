import React, {Component} from "react"
import Quiz from "../../components/Quiz"

class CC extends Component{

    state = {
        questions: [
            {q:"When do we celebrate Independence Day?",a:["July 4"]},
            {q:"Name two national U.S. holidays.",a:["Presidents’ Day", "Thanksgiving ********"]},
        ]
    }

    

    render(){
        return(
            <Quiz title="INTEGRATED CIVICS > Holidays" questions={this.state.questions} history={this.props.history}/>
        )
    }
}

export default CC