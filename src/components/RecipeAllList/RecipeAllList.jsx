import { NavLink } from "react-router";
import { resipes } from "../../data";
import { useRef, useState } from "react";
import ResipeSearch from "../../components/RecipeSearch/RecipeSearch";
import "./ResipeAllList.css";


const resipeAllTitle = "Все рецепты:";


function ResipeAllList() {
const [value, setValue] = useState('')


  const inp = useRef(null);

  const handleClick = (event) => {
    event.preventDefault();
    setValue(inp.current.value);
  };

  

  const filteredResipes = resipes.filter(resipe => {
    return resipe.title.toLowerCase().includes(value.toLowerCase())
    
  })

  if (filteredResipes.length === 0) {
 
    return (
      <>
        <ResipeSearch handleClick={handleClick} inp={inp} />
        <div className="result">
          <p>Рецепт не найден</p>
          <p>Введите другое название</p>
        </div>
      </>
    ); 
    
  } else{
    return (
      <>
        <ResipeSearch handleClick={handleClick} inp={inp} />
        <h2 className="resipe-all_title">{resipeAllTitle}</h2>
        <div className="resipe-all">
          {filteredResipes.map((item, id) => {
            return (
              <>
                <NavLink to={`/ResipePage/${id}`} key={id}>
                  <div className="resipe-all_list" key={id}>
                    <div>
                      <img className="resipe-all_img" src={item.image} alt="" />
                    </div>
                    <div>
                      <p>{item.title}</p>
                    </div>
                  </div>
                </NavLink>
              </>
            );
          })}
        </div>
      </>
    );
  }
}

export default ResipeAllList;
