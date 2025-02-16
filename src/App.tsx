import GoalList from "./components/GoalList.tsx";
import {useState} from "react";
import GoalListForm from "./components/GoalListForm.tsx";

function App() {
    const goalList = [
        {title: "Learn Html", description: "Learn basics tags"},
        {title: "Learn Css", description: "Learn basics css"},
        {title: "Learn JavaScript", description: "Learn basics JS"},
    ];

    const [goals, setGoals] = useState(goalList);

    return (
        <>
            <GoalListForm setGoals={setGoals}/>
            <GoalList goalList={goals} setGoals={setGoals}/>
        </>
    )
}

export default App
