import Course from "../course/Course"
import data from "../../data.json"
import style from'./CourseList.module.scss';
import { useEffect, useState } from "react";

const CourseList = () => {

    const[course, setCourse] = useState([]);
    useEffect(() => {
        setCourse(data);
    })

    const[visibleCount, setVisibleCount] = useState(2);
    const handleCounter = () => {
        setVisibleCount(visibleCount + 1)
    }

    const deleteData = (id) => {
        const updatedCourse = course.filter((item) => item.id !== id);
        setCourse(updatedCourse);
    }

    return (
        <div className={style.div}>
            {data.slice(0, visibleCount).map ((item, index) => {
                return <Course key={index} deleteData = {deleteData} course={item}/>
            })}


            {/* <button onClick={() => {setCounter(counter => counter + 1)}}>click {counter}</button> */}
            {visibleCount < data.length && (
                <button onClick={handleCounter} className={style.button}> click {visibleCount}</button>
            )}

        </div>
    )
}

export default CourseList;
