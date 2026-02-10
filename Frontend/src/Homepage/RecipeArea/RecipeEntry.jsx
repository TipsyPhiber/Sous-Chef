import style from './RecipeEntry.module.scss'

function RecipeEntry({
  name
}) {
  return (
    <>
      <div className={style.card}>
        <span>Recipe {name}</span>
      </div>
    </>
  );
}

export default RecipeEntry;