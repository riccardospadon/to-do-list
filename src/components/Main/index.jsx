import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./style.module.scss";
import cn from "classnames";
import {
  ChevronDoubleDown,
  ChevronDoubleUp,
  Trash3Fill,
  PlusLg,
  CheckAll,
} from "react-bootstrap-icons";

export default function Main() {
  const [tasks, setTasks] = useState(["Gym", "Go to work"]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  /* function for add a task */
  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  /* function for delete a task*/
  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  /* function for moving up a task */
  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      const temp = updatedTasks[index];
      updatedTasks[index] = updatedTasks[index - 1];
      updatedTasks[index - 1] = temp;
      setTasks(updatedTasks);
    }
  }

  /* function for moving down a task */
  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      const temp = updatedTasks[index];
      updatedTasks[index] = updatedTasks[index + 1];
      updatedTasks[index + 1] = temp;
      setTasks(updatedTasks);
    }
  }

  /* TODO: Add a function for tasks already done and move down in another section called "done" */
  function taskDone(index) {}

  /* TODO: Add transitions when you move a task up/down or when its done */

  return (
    <>
      <Container className="mt-5">
        <h1 className="mb-5">TO DO LIST</h1>
        <Row className={cn("justify-content-between align-items-center")}>
          <Col>
            <input
              className={cn(styles.input)}
              type="text"
              placeholder="Enter a task..."
              value={newTask}
              onChange={handleInputChange}
            />
            </Col>

            <Col>
            <button
              className={cn(styles.addButton, styles.button)}
              onClick={addTask}
            >
              <PlusLg />
            </button>
          </Col>
        </Row>
      </Container>

      <Container className="mt-3">
        <ol className={cn(styles.ordinaryList)}>
          {tasks.map((task, index) => (
            <li key={index}>
              <span className={cn(styles.textList)}>{task}</span>
              <button
                className={cn(styles.deleteButton, styles.button)}
                onClick={() => deleteTask(index)}
              >
                <Trash3Fill />
              </button>
              <button
                className={cn(styles.moveUp, styles.button)}
                onClick={() => moveTaskUp(index)}
              >
                <ChevronDoubleUp />
              </button>
              <button
                className={cn(styles.moveDown, styles.button)}
                onClick={() => moveTaskDown(index)}
              >
                <ChevronDoubleDown />
              </button>
              <button
                className={cn(styles.check, styles.button)}
                onClick={() => taskDone(index)}
              >
                <CheckAll />
              </button>
            </li>
          ))}
        </ol>
      </Container>

      <Container className="mt-5">
        <h1>DONE</h1>
      </Container>
    </>
  );
}
