import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Root } from "./routers/Root/Root"

let rooooooter = createBrowserRouter([{
  path: '/',
  element: <Root />
}])

function App() {
  return <RouterProvider router={rooooooter} />
}
export default App