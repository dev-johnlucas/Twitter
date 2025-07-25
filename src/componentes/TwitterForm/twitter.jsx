import {
  faCalendarAlt,
  faChartBar,
  faFilm,
  faImage,
  faSmile,
} from "@fortawesome/free-solid-svg-icons";
import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons/faMapMarkedAlt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import PropTypes from "prop-types";

export function TwitterForm({ onTweet }) {
  const textAreaRef = useRef();

  function handleSubimit() {
    if (textAreaRef.current.value) {
      onTweet(textAreaRef.current.value);
      textAreaRef.current.value = "";
    }
  }

  return (
    <div className="border-b border-gray-800 p-4 ">
      <textarea
        placeholder="What's happening?"
        className="w-full bg-transparent text-white text-xl resize-none outline-none "
        ref={textAreaRef}
      />
      <div className="flex justify-between mt-4 items-center">
        <div className="flex space-x-4 ">
          <FontAwesomeIcon
            icon={faImage}
            className="text-blue-400 cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faFilm}
            className="text-blue-400 cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faChartBar}
            className="text-blue-400 cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faSmile}
            className="text-blue-400 cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faCalendarAlt}
            className="text-blue-400 cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faMapMarkedAlt}
            className="text-blue-400 cursor-pointer"
          />
        </div>
        <button
          className="font-bold bg-blue-400 text-white px-4 py-2 rounded-full hover:bg-blue-600 cursor-pointer transition duration-200 "
          onClick={handleSubimit}
        >
          Tweet
        </button>
      </div>
    </div>
  );
}

TwitterForm.propTypes = {
  onTweet: PropTypes.func,
};
