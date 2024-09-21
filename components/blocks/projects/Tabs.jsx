import { useRouter } from "next/router";
import css from "../../../styles/sections/projects/Tab.module.scss";

const Tabs = ({ currentCategory }) => {
  const categories = ["all", "web", "python", "datascience", "AI&ML"];
  const displayNames = ["All", "Web", "Python", "Data Science", "AI & ML"];

  const router = useRouter();

  const handleTabClick = (category) => {
    if (category == "all") {
      router.push(`/projects`);
    } else {
      router.push(`/projects/${category}`);
    }
  };

  return (
    <div className={css.tabs}>
      {categories.map((cat, index) => (
        <div
          key={cat}
          className={`${css.tab} ${
            currentCategory === cat ? css.active : css.inactive
          }`}
          onClick={() => handleTabClick(cat)}
        >
          {displayNames[index]}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
