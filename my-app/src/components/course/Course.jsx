import style from'./Course.module.scss';
import data from "../../data.json"


const Course = ({course,deleteData}) => {
    const hoursStyle = {
        color: course.hours === 100 ? 'red' : 'initial'
    }

    const handleDelete = (id) => {
        deleteData(id);
    }

    return (
        <div className={style.div}>
            <h3>{course.title}</h3>
            <p className={style.p}>{course.description}</p>
            <p>Время обучения: <span style={hoursStyle}>{course.hours}</span></p>
            <img src={course.img} alt="" className={style.img}/>
            <button onClick={() => handleDelete(course.id)}>Delete</button>
        </div>
    )
}



export default Course;
