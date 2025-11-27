import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import Events, { eventsLoader } from "./pages/Events";
import EditEvent from "./pages/EditEvent";
import EventDetail from "./pages/EventDetail";
import Newsletter from "./pages/Newsletter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "events",
        element: <Events />,
        loader: eventsLoader, // loader đã được export trong Events.js
      },
      {
        path: "events/:eventId",
        element: <EventDetail />,
      },
      {
        path: "events/:eventId/edit",
        element: <EditEvent />,
      },
      {
        path: "newsletter",
        element: <Newsletter />,
      },
    ],
  },
]);

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
