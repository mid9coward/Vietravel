import { useEffect } from "react";
import "./chatbot.css";

const Chatbot = () => {
  useEffect(() => {
    // Chèn script chatbot vào DOM
    const script = document.createElement("script");
    script.src = "/chatbot.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      {/* Chatbot Toggler */}
      <button id="chatbot-toggler">
        <span className="material-symbols-rounded">mode_comment</span>
        <span className="material-symbols-rounded">close</span>
      </button>

      <div className="chatbot-popup">
        {/* Header */}
        <div className="chat-header">
          <div className="header-info">
            <svg
              className="chatbot-logo"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024"
            >
              <path d="M738.3 287.6H285.7c-59 0-106.8 47.8-106.8 106.8v303.1c0 59 47.8 106.8 106.8 106.8h81.5v111.1c0 .7.8 1.1 1.4.7l166.9-110.6 41.8-.8h117.4l43.6-.4c59 0 106.8-47.8 106.8-106.8V394.5c0-59-47.8-106.9-106.8-106.9z" />
            </svg>
            <h2 className="logo-text">Chatbot</h2>
          </div>
          <button id="close-chatbot" className="material-symbols-rounded">
            keyboard_arrow_down
          </button>
        </div>

        {/* Body */}
        <div className="chat-body">
          <div className="message bot-message">
            <svg
              className="bot-avatar"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024"
            >
              <path d="M738.3 287.6H285.7c-59 0-106.8 47.8-106.8 106.8v303.1..." />
            </svg>
            <div className="message-text">
              Xin chào 👋
              <br />
              Tôi có thể giúp gì cho bạn hôm nay?
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="chat-footer">
          <form action="#" className="chat-form">
            <textarea
              placeholder="Message..."
              className="message-input"
              required
            ></textarea>
            <div className="chat-controls">
              <button
                type="button"
                id="emoji-picker"
                className="material-symbols-outlined"
              >
                sentiment_satisfied
              </button>
              <div className="file-upload-wrapper">
                <input type="file" id="file-input" hidden />
                <img src="#" alt="preview" />
                <button
                  type="button"
                  id="file-upload"
                  className="material-symbols-rounded"
                >
                  attach_file
                </button>
                <button
                  type="button"
                  id="file-cancel"
                  className="material-symbols-rounded"
                >
                  close
                </button>
              </div>
              <button
                type="submit"
                id="send-message"
                className="material-symbols-rounded"
              >
                arrow_upward
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
