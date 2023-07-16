import { useState, useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [work, setWork] = useState("");
  const [todos, setTodos] = useState([]);
  // console.log(work)
  const handleAdd = () => {
    if(todos.some(item => item.id===work.replace(/\s/g, " "))){
      toast.warn('Duplicate Work!!!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
    else{
      toast.success('Add Work Success', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      setTodos([...todos, { id: work.replace(/\s/g, " "), work: work }]);
      setWork("");
      inputRef.current.focus();
    }
  };
  
  const handleRemoveWork=(id)=>{
    toast.success('Remove Success', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
    setTodos(prev=>prev?.filter(item=>item.id!==id))
    // setTodos(todos.filter(item=>item.id!==id))
  }
  // console.log(todos)
  const inputRef = useRef();
  return (
    <div className="h-screen bg-blue-500 pt-10">
      <div className="flex flex-col gap-10  items-center justify-start pt-4 bg-white h-max w-max px-[2.5rem] pb-[100px] m-auto rounded-md">
        <h1 className="text-4xl font-medium">Todo-List</h1>
        <div className="flex gap-2 justify-center items-center">
          <input
            ref={inputRef}
            type="text"
            value={work}
            onChange={(e) => {
              setWork(e.target.value);
              // console.log(work)
            }}
            className="outline-none border border-blue-600 px-4 py-2 w-[400px] rounded-sm"
          />
          <button
            className="px-4 py-2 outline-none bg-blue-400 rounded-sm text-white cursor-pointer"
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
        <div>
          <h3 className="text-2xl">Works today</h3>
          <ul>
            {todos?.map((item) => {
              return (
                <li key={item.id} className="mt-1.5 flex justify-center">
                  <span className="py-1 px-0.5">{item.work}</span>
                  <span 
                    className="ml-2 cursor-pointer py-1 px-0.5"
                    onClick={()=>handleRemoveWork(item.id)}
                  >X</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
}

export default App;
