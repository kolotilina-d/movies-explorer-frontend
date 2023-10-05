import "./FilterCheckbox.css";

function FilterCheckbox({ handleToggle }) {
 let isOn = (true);

  return (
    <div className="filterCheckbox">
      <input
        checked={isOn}
        onChange={handleToggle}
        className="filterCheckbox__checkbox"
        id={`filterCheckbox`}
        type="checkbox"
      />
      <label
        style={{
          background:
             isOn &&
            "#3DDC84",
        }}
        className="filterCheckbox__label"
        htmlFor={`filterCheckbox`}
      >
        <span style={{
          background:
             isOn &&
            "#fff",
        }} className={`filterCheckbox__button`} />
        <span className="filterCheckbox__underscribe">Короткометражки</span>
      </label>
    </div>
  );
}

export default FilterCheckbox;
