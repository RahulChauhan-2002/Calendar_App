import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import dayjs from "dayjs";

// Helper to get matching Tailwind text color
const getTextColor = (label) => {
  switch (label) {
    case "indigo":
      return "text-indigo-600";
    case "gray":
      return "text-gray-600";
    case "green":
      return "text-green-600";
    case "blue":
      return "text-blue-600";
    case "red":
      return "text-red-600";
    case "purple":
      return "text-purple-600";
    default:
      return "text-gray-600";
  }
};

const getDotColor = (label) => {
  switch (label) {
    case "indigo":
      return "bg-indigo-500";
    case "gray":
      return "bg-gray-500";
    case "green":
      return "bg-green-500";
    case "blue":
      return "bg-blue-500";
    case "red":
      return "bg-red-500";
    case "purple":
      return "bg-purple-500";
    default:
      return "bg-gray-500";
  }
};

const Labels = () => {
  const { labels, updateLabel, filteredEvents } = useContext(GlobalContext);

  return (
    <>
      <p className="text-gray-500 font-bold mt-10">Scheduled Events</p>
      {labels?.map(({ label: lbl, checked }, idx) => (
        <div key={idx} className="mt-3">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={checked}
              onChange={() => updateLabel({ label: lbl, checked: !checked })}
              className={`form-checkbox h-5 w-5 text-${lbl}-400 rounded focus:ring-0 cursor-pointer`}
            />
            <span className="ml-2 flex items-center text-gray-700 font-medium">
                <span className={`w-3 h-3 rounded-full inline-block mr-2 ${getDotColor(lbl)}`}></span>
                Events
              </span>
          </label>

          {/* Show related events */}
          <ul className="ml-7 mt-1">
            {filteredEvents
              .filter((evt) => evt.label === lbl)
              .map((evt, idx) => (
                <li
                  key={idx}
                  className={`text-sm ${getTextColor(lbl)} mb-1`}
                >
                  <span className="font-semibold">{evt.title}</span>
                  <span className="ml-2 text-xs text-gray-500">
                    ({dayjs(evt.day).format("DD MMM, YYYY")})
                  </span>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default Labels;



