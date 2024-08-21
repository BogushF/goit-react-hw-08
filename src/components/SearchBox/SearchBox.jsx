import s from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filters/selectors";
import { setStatusFilter } from "../../redux/filters/slice";
import { useId } from "react";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);
  const id = useId();

  const handleFilter = (event) => {
    const name = event.target.value.trim();
    dispatch(setStatusFilter(name));
  };

  return (
    <div className={s.search}>
      <p className={s.label}>Find contacts</p>
      <input
        className={s.input}
        type="text"
        value={filter}
        id={id}
        onChange={handleFilter}
      />
    </div>
  );
};

export default SearchBox;
