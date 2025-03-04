import { useState } from "react"
import data from "./data";
import "./styles.css";


export default function Accordion() {
  const [selected,setSelected] = useState(null);
  const [enableMultiMode,setEnableMultiMode] = useState(false);
  const [multiple,setMultiple] = useState([])

  function handleSingleSelection(currentId) {
    console.log(currentId);
    setSelected(currentId === selected ? null : currentId)
  }

  function handleMultiMode(currentId) {
    let copyMultiple = [...multiple];
    const findIndexOfCurrentId = copyMultiple.indexOf(currentId);

    console.log(findIndexOfCurrentId);
    
     if(findIndexOfCurrentId === -1)copyMultiple.push(currentId)
    else copyMultiple.splice(findIndexOfCurrentId,1)

     setMultiple(copyMultiple)
  }
console.log(multiple);

    return (
        <>
          <div className="wrapper">
            <button onClick={() => setEnableMultiMode(!enableMultiMode)}>Enable Multi-Mode</button>
            <div className="accordion">
              {
                data && data.length > 0 ? 
                data.map(dataItem => <div className="item">
                    <div onClick={enableMultiMode ? 
                      () => handleMultiMode(dataItem.id)
                      :() => handleSingleSelection(dataItem.id)} className="title">
                      <h3>{dataItem.name}</h3>
                      <div>+</div>
                    </div>
                    {
                      enableMultiMode ? 
                      multiple.indexOf(dataItem.id) !== -1 && (
                        <div className="content">{dataItem.body}</div>
                      )
                      :
                      selected === dataItem.id && (
                        <div className="content">{dataItem.body}</div>
                      )
                    }
                    {/* {
                      selected === dataItem.id ? 
                      <div className="content">{dataItem.body}</div>
                      : null 
                    } */}
                   </div>)
                : <div> No data found ! </div>
              }
            </div>
          </div>
        </>
    )
}