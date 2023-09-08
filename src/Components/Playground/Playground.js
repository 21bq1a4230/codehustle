import { Component } from "react";
import React from "react";
import Headingbar from "../Headingbar/Headingbar";
import "./Playground.css"

class Playground extends Component{
    constructor(){
        super()
        this.state = {
            q:"",

        }
    }
    tabSpace = (e) => {
        if (e.key === 'Tab') {
            e.preventDefault();

            e.preventDefault();

            const TAB_SIZE = 3;

            document.execCommand('insertText', false, ' '.repeat(TAB_SIZE));
        }
    }
    render(){
        return(
            <div className="pg-body">
                <Headingbar />
                <div className="pg">
                    <div className="question-container">

                    </div>
                    <div className="code-side">
                        <textarea className="code-container" id="textarea" onKeyDown={this.tabSpace}>

                        </textarea>
                        <div className="outputDisplay-board">

                        </div>
                        <button className="submit-btn">
                            RUN
                        </button>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Playground