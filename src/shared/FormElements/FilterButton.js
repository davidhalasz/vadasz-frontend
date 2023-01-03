const baseButton = 'm-1 text-customBlue rounded-full px-3 border border-1 border-customBlue';
const active = 'm-1 text-white rounded-full px-3 border border-1 border-customBlue bg-customBlue';
const FilterButton = (props) => {
    return <button 
        className={props.activated ? active : baseButton } 
        value={props.value} 
        onClick={props.onSaveData}>{props.title}</button>;
}

export default FilterButton; 