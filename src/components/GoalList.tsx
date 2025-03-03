import * as React from "react";
interface Goal {
    title: string;
    description: string;
}


interface GoalListProps {
    goalList: Goal[];
    setGoals: React.Dispatch<React.SetStateAction<Goal[]>>;
}

function GoalList({goalList, setGoals}: GoalListProps) {

    const handleDeleteGoal = ({title, description}: Goal) => {
        setGoals((prev) => prev.filter(goal => !(goal.title === title && goal.description === description)));
    }


    return (
        <>
            <ul className={"goal-list container"}>
                {goalList.map((goal,index) => (
                    <li key={goal.title+goal.description+index} className={"goal-list__item"}>
                        <div className="goal-list__text-wrapper">
                            <h2 className={"goal-list__title"}>{goal.title}</h2>
                            <span className={"goal-list__description"} >{goal.description}</span>
                        </div>
                        <button className={"button goal-list__delete-button"} onClick={() => handleDeleteGoal(goal)}>
                        <svg className={"goal-list__delete-button-icon"}  viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.364878 24.1561C0.153611 24.3395 0.0234784 24.5991 0.00287804 24.8781C-0.0177223 25.1572 0.0728815 25.433 0.254918 25.6455C0.467406 25.8276 0.743268 25.9182 1.02231 25.8976C1.30135 25.877 1.56092 25.7468 1.74437 25.5356L25.5356 1.74437C25.7468 1.56092 25.877 1.30135 25.8976 1.02231C25.9182 0.743268 25.8276 0.467406 25.6455 0.254918C25.433 0.0728815 25.1572 -0.0177223 24.8781 0.00287804C24.5991 0.0234784 24.3395 0.153611 24.1561 0.364878L0.364878 24.1561Z" fill="grey"/>
                            <path d="M0.254918 0.254918C0.0728815 0.467406 -0.0177223 0.743268 0.00287804 1.02231C0.0234784 1.30135 0.153611 1.56092 0.364878 1.74437L24.1561 25.5356C24.2363 25.6621 24.344 25.769 24.4711 25.8484C24.5982 25.9277 24.7415 25.9775 24.8904 25.9939C25.0394 26.0104 25.1901 25.9932 25.3315 25.9436C25.4728 25.8939 25.6013 25.8132 25.7072 25.7072C25.8132 25.6013 25.8939 25.4728 25.9436 25.3315C25.9932 25.1901 26.0104 25.0394 25.9939 24.8904C25.9775 24.7415 25.9277 24.5982 25.8484 24.4711C25.769 24.344 25.6621 24.2363 25.5356 24.1561L1.74437 0.364878C1.56092 0.153611 1.30135 0.0234784 1.02231 0.00287804C0.743268 -0.0177223 0.467406 0.0728815 0.254918 0.254918Z" fill="grey"/>
                        </svg>
                        </button>

                    </li>
                ))}
            </ul>
        </>
    )
}

export default GoalList