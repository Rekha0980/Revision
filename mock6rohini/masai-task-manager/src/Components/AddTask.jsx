import { useEffect } from "react";
import { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { addTaskData, deleteTask, getLoggedUserData, getLoggedUserTask, logoutUser } from "../api/api";
import styles from "./styles/AddTask.module.css";
import { AiFillDelete } from "react-icons/ai";
export const AddTask = () => {
    const navigate = useNavigate();
    const [task, setTask] = useState([]);
    const [text, setText] = useState("");
    const [loggedUser, setloggedUser] = useState([]);
    const params = useParams();
    console.log(params);

    //----------------------------current date------------------//
    var objToday = new Date(),
        domEnder = (function () {
            var a = objToday;
            if (/1/.test(parseInt((a + "").charAt(0)))) return "th";
            a = parseInt((a + "").charAt(1));
            return 1 == a ? "" : 2 == a ? "" : 3 == a ? "" : "";
        })(),
        dayOfMonth =
            todayDate + (objToday.getDate() < 10)
                ? "0" + objToday.getDate() + domEnder
                : objToday.getDate() + domEnder,
        months = new Array(
            "Jan",
            "Feb",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "Sept",
            "Oct",
            "Nov",
            "Dec"
        ),
        curMonth = months[objToday.getMonth()],
        curYear = objToday.getFullYear();
    let date = dayOfMonth < 10 ?
        "0" + dayOfMonth + "th" :
        dayOfMonth == 1 ?
            "0" + dayOfMonth + "st" :
            dayOfMonth == 2 ?
                "0" + dayOfMonth + "nd" :
                dayOfMonth == 3 ?
                    "0" + dayOfMonth + "rd" :
                    dayOfMonth + "th";

    var todayDate = date + " " + curMonth + ",  " + curYear;

    useEffect(() => {
        handleGetTask();
        getLoggedUserData(params.loggeduser_id)
            .then((res) => {
                setloggedUser(res);
                console.log("loggeduser", loggedUser);
            })
            .catch((err) => console.log(err));
    }, [params.loggeduser_id,loggedUser.userName])

    const handleGetTask = async () => {
        return await getLoggedUserTask(loggedUser.userName)
            .then((res) => {
                console.log("data", res);
                setTask(res)
            })
            .catch((err) => console.log(err));
    }

    const handleChange = (e) => {
        setText(e.target.value);
        console.log(text);
    }

    const handleAddTask = async (text) => {
        const payload = {
            name: loggedUser.userName,
            task: text,
        }
        try {
            await addTaskData(payload)
                .then((res) => {
                    setTask([...task, res]);
                })
        }
        catch (err) {
            console.log(err);
        }
        handleGetTask();
        setText("");
    }

    const handleDelete = async (id) => {
        await deleteTask(id)
            .then((res) => {
                handleGetTask();
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const handleLogout = async () => {
        await logoutUser(params.loggeduser_id)
            .then((res) => {
                console.log("logged user deleted", res);
            })
            .catch((err) => console.log(err));
        navigate("/");
    }

    return (
        <div className={styles.task}>
            <div className={styles.log}>
                <p>Hello</p>
                <button onClick={handleLogout}>Logout</button>
            </div>
            <h2>{loggedUser.userName}</h2>
            <p>Good to see you here!</p>
            <p>Your total tasks for today - {task.length}</p>
            <h3>Tasks for {todayDate}</h3>
            <ol>
                {
                    task.map((el) => (
                        <li key={el.id}>
                            <div className={styles.delete}>
                                <span>{el.task}</span>
                                <span onClick={() => handleDelete(el.id)}><AiFillDelete /></span>
                            </div>
                        </li>
                    ))
                }
            </ol>
            <br />
            <div className={styles.form}>
                {
                    task.length < 5 ?
                        <input type="text" placeholder="Add task here" value={text} onChange={handleChange} />
                        :
                        <p className={styles.perr}>You have exceeded the limit of 5 task, delete some task to add</p>
                }
                <button onClick={() => handleAddTask(text)} disabled={task.length < 5 ? false : true}>
                    {
                        task.length < 5 ? "Add New Task" : "Daily limit exceeded !"
                    }
                </button>
            </div>
        </div>
    )
}