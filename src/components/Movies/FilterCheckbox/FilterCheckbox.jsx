import "./FilterCheckbox.css";

function FilterCheckbox({ handleClickCheckbox, isChecked }) {
  return (
    <div className="filterCheckbox">
      <input
        checked={isChecked}
        onChange={handleClickCheckbox}
        className="filterCheckbox__checkbox"
        id={`filterCheckbox`}
        type="checkbox"
      />
      <label
        style={{
          background: isChecked && "#3DDC84",
        }}
        className="filterCheckbox__label"
        htmlFor={`filterCheckbox`}
      >
        <span
          style={{
            background: isChecked && "#fff",
          }}
          className={`filterCheckbox__button`}
        />
        <span className="filterCheckbox__underscribe">Короткометражки</span>
      </label>
    </div>
  );
}

export default FilterCheckbox;
