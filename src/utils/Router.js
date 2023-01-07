import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../pages";
import CrudAxiosExample from "../pages/crud-axios-example/crud-axios-example";
import Form from "../pages/form/Form";
import Hook from "../pages/hooks/Hook";
import TodoApp from "../pages/todo-app/TodoApp";
import TodoHook from "../pages/todo-hook/TodoHook";

const routerName = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/crud-axios-example",
    element: <CrudAxiosExample />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/form",
    element: <Form />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/hooks",
    element: <Hook />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/todo-app",
    element: <TodoApp />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/todo-hook",
    element: <TodoHook />,
    errorElement: <ErrorPage />,
  },
]);

export default routerName;
