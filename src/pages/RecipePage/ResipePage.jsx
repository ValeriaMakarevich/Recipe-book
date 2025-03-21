
import { useParams } from "react-router";
import "./ResipePage.css";
import { resipes } from "../../data";



function ResipePage(){
   const {id} = useParams()
   const resipeManual  = resipes [id]


    
    
    return (
      <div className="resipe-page">
        <h1 className="resipe-page_title">{resipeManual.title}</h1>
        <div></div>
        <img src={resipeManual.image} alt="" />
        <div></div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          exercitationem asperiores itaque placeat ab numquam assumenda quisquam
          veniam possimus nemo voluptas minus cumque autem odio ullam
          voluptatem, totam voluptatibus obcaecati inventore quos. Aspernatur
          neque fugiat sed quaerat, architecto mollitia eveniet ducimus ipsa
          asperiores delectus aliquam rerum culpa necessitatibus distinctio id?
        </p>
      </div>
    );
}

export default ResipePage