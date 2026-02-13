import { PlusCircle } from 'lucide-react'
import React, { useState } from 'react'

const data = [
    { id: 1, question: "What is TypeScript?", answer: "TypeScript is a superset of JavaScript..." },
    { id: 2, question: "Interface vs type?", answer: "Interfaces are for object shapes..." },
    { id: 3, question: "What are generics?", answer: "Generics make code reusable..." },
    { id: 4, question: "What are enums?", answer: "Enums define named constants..." },
    { id: 5, question: "What is type inference?", answer: "TypeScript infers types automatically..." }
]
function Accordion() {
    const [selected, setSelected] = useState(null)
    const [multi, setMulti] = useState([]);
    const [enable, setEnable] = useState(false)

    const handleMultiSelection = (id) => {
        const cpyMulti = [...multi];
        const ind = cpyMulti.indexOf(id)

        if (ind === -1) {
            cpyMulti.push(id)
        }
        else {
            cpyMulti.splice(ind, 1);
        }
         setMulti(cpyMulti)
    }

    const handleSingle = (id) => {
        if (selected === id) {
            setSelected(null)
        }
        else {
            setSelected(id)
        }
    }
    return (
        <div className=" min-h-screen flex flex-col items-center justify-center">
            <div className='bg-amber-300 text-amber-800 p-3 rounded-2xl border border-black shadow-md hover:shadow-xl hover:text-green-500 hover:bg-green-100 transition-all cursor-pointer'>
                <button onClick={() => setEnable((x) => !x)} className='cursor-pointer'>Enable Multi-selection</button>
            </div>
            <div className='w-[500px] border border-black rounded-2xl m-4'>
                {data.map((d, i) => (
                    <div key={i} className='text-gray-500 border border-black-2 flex justify-around overflow-hidden' >
                        <div className="flex flex-col">
                            <h1 className="font-semibold">
                                {d.id}. {d.question}
                            </h1>
                            {
                                enable ? multi.indexOf(d.id) !== -1 && (<div>{d.answer}</div>) : selected === d.id && (<div>{d.answer}</div>)
                            }
                        </div>
                        <button onClick={enable ? () => handleMultiSelection(d.id) : () => handleSingle(d.id)}><PlusCircle /></button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Accordion