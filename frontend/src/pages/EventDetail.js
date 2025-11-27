import {
  useLoaderData,
  json,
  redirect,
  Await,
  Suspense,
  useRouteLoaderData,
} from "react-router-dom";
import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";
function EventDetailPage() {
  const { event, events } = useRouteLoaderData("event-detail");

  //  hook useLoaderData dùng để láy dữ liệu từ loader truyền về component con
  // const params = useParams();
  return (
    <>
      {/* <h1>EventDetailPage</h1>;<p>{params.eventId}</p>
       */}
      <Suspense fallback={<p style={{ textAlign: center }}>Loading....</p>}>
        <Await resolve={event}>
          {(loadedEvent) => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: center }}>Loading....</p>}>
        <Await resolve={events}>
          {(loadEvents) => <EventsList event={loadEvents} />}
        </Await>
      </Suspense>
    </>
  );
}
export default EventDetailPage;
async function loadEvent(id) {
  const response = await fetch("http://localhost:8080/events/" + id);
  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected event." },
      { status: 500 }
    );
  } else {
    const resData = await response.json();
    return resData;
  }
}
async function loadEvents() {
  const response = await fetch("http://localhost:8080/events/");
  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected event." },
      { status: 500 }
    );
  } else {
    const resData = await response.json();
    return resData;
  }
}
export async function loader({ request, params }) {
  const id = params.eventId;
  return defer({
    event: loadEvent(id),
    events: loadEvents(),
  });
}

export async function action({ request, params }) {
  const eventId = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + eventId, {
    method: request.method,
  });
  if (!response.ok) {
    throw json({ message: "Could not delete event" }, { status: 500 });
  } else {
    return redirect("/events");
  }
}
