import { useState } from "react"

const Deletobj = () => {
    const [list, setList] = useState(["bnana", "apple", "orange"])

    const handleDelete = (i) => {
        list.splice(i, 1)
        setList([...list])

    }

    return (
        <div>
            {list.map((el, i) => (
                <div>
                    <p>{el}</p>
                    <button onClick={() => handleDelete(i)}>delete</button>
                </div>
            ))}
        </div>
    )
}

export default Deletobj