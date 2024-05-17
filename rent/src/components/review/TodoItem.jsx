import React, { useState } from 'react'
import { useTodo } from '../../context/TodoContext'
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

export default function TodoItem({ todo }) {
    
    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [todoMsg, setTodoMsg] = useState(todo.todo)
    const {updateTodo, deleteTodo } = useTodo()

    const editTodo = () => {
        updateTodo(todo.id, {...todo, todo})
        setIsTodoEditable(false)
    }

  return (
    
      <MDBRow>
        <MDBCol md="10" className="mb-4 mb-md-0 text-black">
          <MDBCard>
            <MDBCardBody >
      {/* User image */}
      <div className='flex justify-around items-center'>
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                  className="rounded-circle shadow-1-strong d-flex justify-content-center  mb-4"
                  width="100"
                  height="100"
                />

              {/* Person name */}
              <div  className='flex-col'>
              <h5 className="font-semibold flex">Teresa May</h5>

              {/* Rating */}
              <MDBTypography
                listUnStyled
                className="flex  pl-11"
              >
                <li>
                  <MDBIcon fas icon="star" size="sm" color="info" />
                </li>
                <li>
                  <MDBIcon fas icon="star" size="sm" color="info" />
                </li>
                <li>
                  <MDBIcon fas icon="star" size="sm" color="info" />
                </li>
                <li>
                  <MDBIcon fas icon="star" size="sm" color="info" />
                </li>
                <li>
                  <MDBIcon fas icon="star-half-alt" size="sm" color="info" />
                </li>
              </MDBTypography>
              </div>
              </div>
              {/* Add review  */}
              <div className="flex justify-center items-end">
              <input
                type="text"
                className={` outline-none w-full bg-transparent rounded-lg 
                ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                }`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
                                {/* Edit, Save Button */}
                                
            <button
                className="inline-flex w-8 h-8 ml-5 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {  
                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }} >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
            </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    
  );
}