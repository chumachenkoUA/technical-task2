import {FormEvent, useState} from "react";
import * as React from "react";

interface Goal {
    title: string;
    description: string;
}

interface GoalListFormProps {
    setGoals: React.Dispatch<React.SetStateAction<Goal[]>>;
}

function GoalListForm({setGoals}: GoalListFormProps) {
    const [changeTitle,setChangeTitle] = useState("")
    const [changeDescription,setChangeDescription] = useState("")

    const handleAddItem =( event:FormEvent) => {
        event.preventDefault()

        if (!(changeTitle === "" || changeDescription === "")) {
            const newGoal: Goal = {
                title: changeTitle,
                description: changeDescription,
            }
            setGoals(prev => [...prev, newGoal]);
            setChangeTitle("")
            setChangeDescription("")
        }
        else {
            return alert("Please enter a title and description")
        }

    }

    return (
        <>
            <form className={"goal-list__form"} onSubmit={handleAddItem}>
                <input
                    className={"goal-list__input"}
                    type="text"
                    placeholder="Enter Title"
                    value={changeTitle}
                    onChange={(e) => setChangeTitle(e.target.value)}
                />
                <input
                    className={"goal-list__input"}
                    type="text"
                    placeholder="Enter Description"
                    value={changeDescription}
                    onChange={(e) => setChangeDescription(e.target.value)}
                />
                <button className={"goal-list__add-button"} type={"submit"}>Add new goal</button>
            </form>
        </>
    )
}

export default GoalListForm;