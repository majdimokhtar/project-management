

const filterList = ["all","mine","development","design","marketing","sales"]
export default function ProjectFilter({currentFilter,changeFilter}) {
    
    const handleClick=(newFilter)=>{
        changeFilter(newFilter);
    }
  return (
    <div className='project-filter'>
        <nav>
        {filterList.map((f)=>(
            <button 
            className={currentFilter===f ? "active" : ""}
            onClick={()=>handleClick(f)}
            key={f}>
                {f}
            </button>
        ))}
        </nav>
    </div>
  )
}
