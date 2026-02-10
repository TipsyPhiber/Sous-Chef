import style from './Homepage.module.scss'
import Sidebar from './Sidebar.jsx'
import TitleBar from './TitleBar.jsx'
import RecipeArea from './RecipeArea/RecipeArea.jsx'

function Homepage() {
  return (
    <div className={style.homepage_container}>
        <Sidebar />
        <div className={style.main_content}>
            <TitleBar />
            <div className={style.recipes_wrapper}>
                <RecipeArea />
            </div>
        </div>
    </div>
  );
}

export default Homepage;