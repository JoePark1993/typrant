import React from 'react';
import "./HomePlans.css";

class HomePlans extends React.PureComponent {
    render() {
        return (
            <div class = "PlanBackground">
                <div class = "Plans"> 
                    Premium Plans
                </div>
                <span class = "TeacherStudent"> 
                <a href = "/TeacherStudent" class = "PlanButton">
                    Teacher-Student Plans
                </a> 
                </span>
                <span class = "ParentChild">
                <a href = "/ParentChild" class = "PlanButton">
                    Parent-Child Plans
                </a>
                </span>

                <div class = "Independent">
                <a href = 
                "/Independent" class = "PlanButton">
                    Independent Plans
                </a>

                </div>



            </div>
        )
    }
}

export default HomePlans;