import "./RecipeSearch.css";

function ResipeSearch({ handleClick, inp }) {
  return (
    <form className="resipe-search" action="">
      <input
        type="text"
        className="resipe-search_input"
        placeholder="Поиск рецептов"
        ref={inp}
      />
      <button className="resipe-search_button" onClick={handleClick}>
        <img className="resipe-search_img" src="./icons8-поиск-24.png" alt="" />
      </button>
    </form>
  );
}

export default ResipeSearch;
