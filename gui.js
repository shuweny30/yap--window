(async function () {
  const style = document.createElement("style");
  style.id = "bookmarklet-style";
  let isDark = localStorage.getItem("bookmarklet-mode") === "dark";
    document.getElementById("dark-mode").textContent =
      `${isDark ? "☀️" : "🌙"}`;
  function toggleDarkMode() {
    isDark = !isDark;
    localStorage.setItem("bookmarklet-mode", isDark ? "dark" : "light");
    document.getElementById("dark-mode").textContent =
      `${isDark ? "☀️" : "🌙"}`;
    updateColor();
  }
  document.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.altKey && e.key === "d") {
      e.preventDefault();
      toggleDarkMode();
    }
  });

  function updateColor() {
    style.innerHTML = `
      #body {
        position: fixed;
        z-index: 1000000;
        background-color: ${isDark ? "#333" : "#fff"};
        color: ${isDark ? "#ddd" : "#333"};
        font-family: 'Aptos',
          Calibri,
          sans-serif;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        overflow: hidden;
      }

      .screen {
        width: 100%;
        height: calc(100% - 40px);
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding: 20px;
        box-sizing: border-box;
        overflow-y: auto;
        margin-top: 40px;
        background-color: ${isDark ? "#333" : "#fff"};
        color: ${isDark ? "#ddd" : "#333"};
      }

      .screen.hidden {
        display: none !important;
      }

      .screen input,
      .screen textarea,
      .screen button {
        width: 100%;
        height: auto;
        margin: 10px 0;
        padding: 10px;
        border-radius: 5px;
        box-sizing: border-box;
        font-size: 12px;
        text-align: center;
        display: block;
        margin-left: auto;
        margin-right: auto;
        color: ${isDark ? "#ddd" : "#333"};
        background-color: ${isDark ? "#444" : "#ddd"};
        border: 1px solid ${isDark ? "#555" : "#ccc"};
      }

      .screen button:hover {
        background-color: ${isDark ? "#555" : "#ccc"};
        color: ${isDark ? "#eee" : "#333"};
      }

      .screen h2,
      .screen h3 {
        color: ${isDark ? "#ddd" : "#333"};
        text-align: center;
      }

      .screen label {
        color: ${isDark ? "#ddd" : "#333"};
      }

      .screen textarea {
        min-height: 50px;
        color: ${isDark ? "#ddd" : "#333"};
        background-color: ${isDark ? "#444" : "#fff"};
        border: 1px solid ${isDark ? "#555" : "#ccc"};
      }

      .screen div {
        width: 90%;
        border: 1px solid ${isDark ? "#555" : "#ccc"};
        justify-items: center;
      }

      .chat {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 0;
        box-sizing: border-box;
        background-color: ${isDark ? "#222" : "#fff"};
        color: ${isDark ? "#ddd" : "#333"};
        height: 100%;
      }

      .chat.hidden {
        display: none !important;
      }

      #chat-screen {
        flex-direction: column;
        margin-top: 40px;
        padding-top: 0;
        height: calc(100% - 40px);
      }

      #lower-chat {
        display: flex;
        flex-direction: row;
        height: calc(100% - 40px);
        width: 100%;
        margin: 0;
      }

      #settings-bar {
        width: 100%;
        height: 40px;
        display: flex;
        flex-direction: row;
        align-items: center;
        border-bottom: 1px solid ${isDark ? "#444" : "#e0e0e0"};
        background: ${isDark ? "#2a2a2a" : "#f8f9fa"};
        padding: 0 16px;
        gap: 12px;
        position: sticky;
        top: 0;
        z-index: 10;
      }

      .setting-button {
        height: 32px;
        font-size: 13px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${isDark ? "#404040" : "#e9ecef"};
        color: ${isDark ? "#ffffff" : "#495057"};
        border: none;
        padding: 6px 16px;
        border-radius: 4px;
        font-weight: 500;
        transition: all 0.2s ease;
      }

      .setting-button:hover {
        background: ${isDark ? "#505050" : "#dee2e6"};
      }

      #left-sidebar {
        width: 20%;
        min-width: 180px;
        display: flex;
        flex-direction: column;
        height: 100%;
        border-right: 2px solid ${isDark ? "#555" : "#ccc"};
        background: ${isDark ? "linear-gradient(to bottom, #444, #333)" : "linear-gradient(to bottom, #f7f7f7, #e0e0e0)"};
        padding: 8px;
        box-sizing: border-box;
        flex-shrink: 0;
        margin-bottom: 0;
      }

      #top-left-sidebar {
        height: 60%;
        min-height: 60%;
        max-height: 60%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 10px;
        overflow-y: auto;
        overflow-x: hidden;
      }

      #bottom-left-sidebar {
        height: 40%;
        min-height: 40%;
        width: 100%;
        padding: 8px 0 0 0;
        background-color: ${isDark ? "#333" : "#f1f1f1"};
        display: flex;
        flex-direction: column;
        align-items: center;
        border-top: 1px solid ${isDark ? "#555" : "#ddd"};
        overflow-y: auto;
        overflow-x: hidden;
        margin-bottom: 0;
      }

      #server-list {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      #create-new-server {
        padding: 8px 5px;
        background-color: ${isDark ? "#a65653" : "#5865F2"};
        color: white;
        border: none;
        border-radius: 4px;
        width: 90%;
        font-size: 13px;
        font-weight: 500;
        transition: background-color 0.3s ease;
        margin-bottom: 8px;
      }

      #create-new-server:hover {
        background-color: ${isDark ? "#c79d9b" : "#4752C4"};
      }

      .server {
        background-color: ${isDark ? "#555" : "#e0e0e0"};
        width: 90%;
        padding: 5px 4px;
        margin-bottom: 1px;
        font-size: 13px;
        font-weight: 500;
        text-align: center;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.2s ease;
      }

      .server:hover {
        background-color: ${isDark ? "#666" : "#d0d0d0"};
      }

      .server.selected {
        background-color: ${isDark ? "#777" : "#ccc"};
        box-shadow: 0 0 0 1px ${isDark ? "#888" : "#999"};
      }

      .dm {
        width: 90%;
        padding: 8px 12px;
        margin: 0;
        font-size: 13px;
        font-weight: 500;
        text-align: center;
        border-radius: 6px;
        background-color: ${isDark ? "#444" : "#e8e8e8"};
        color: ${isDark ? "#fff" : "#333"};
        transition: all 0.2s ease;
        cursor: pointer;
        border: 1px solid transparent;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      }

      .dm:hover {
        background-color: ${isDark ? "#555" : "#d0d0d0"};
        transform: translateY(-1px);
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      }

      #right-sidebar {
        width: 80%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        padding-left: 10px;
        padding: 0 10px 0 10px;
        background-color: ${isDark ? "#333" : "#fff"};
        color: ${isDark ? "#ddd" : "#333"};
        min-width: 0;
      }

      #messages {
        flex: 1;
        overflow-y: auto;
        background-color: ${isDark ? "#222" : "#f9f9f9"};
        padding: 10px;
        margin-bottom: 10px;
      }

      .message {
        padding: 3px 8px;
        margin-bottom: 3px;
        border-radius: 5px;
        font-size: 12px;
        width: 95%;
        max-width: 95%;
        word-wrap: break-word;
        background-color: ${isDark ? "#444" : "#e0e0e0"};
        color: ${isDark ? "#ccc" : "#333"};
        white-space: pre-wrap;
      }

      .message.sent {
        text-align: right;
        background-color: ${isDark ? "#4a4a4a" : "#e0f7fa"};
        color: ${isDark ? "#cccccc" : "#006064"};
      }

      .message.received {
        text-align: left;
        background-color: ${isDark ? "#3a3a3a" : "#f1f8e9"};
        color: ${isDark ? "#cccccc" : "#33691e"};
      }

      .message.received.unread {
        background-color: ${isDark ? "#4a3a3a" : "#e8f5e9"};
        border-left: 3px solid ${isDark ? "#ff6b6b" : "#4caf50"};
        box-shadow: 0 1px 3px ${isDark ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.1)"};
      }

      .message.bot {
        text-align: left;
        background-color: ${isDark ? "#2a323c" : "#f0f7ff"};
        color: ${isDark ? "#e2e8f0" : "#1a365d"};
      }

      .message.bot.unread {
        background-color: ${isDark ? "#2d3748" : "#ebf8ff"};
        border-left: 3px solid ${isDark ? "#90cdf4" : "#4299e1"};
        box-shadow: 0 1px 3px ${isDark ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.1)"};
      }

      .message.system{
        text-align: left;
        background-color: ${isDark ? "#2a323c" : "#ff8282"};
        color: ${isDark ? "#ff6767" : "#1a365d"};
      }

      .message.system.unread {
        background-color: ${isDark ? "#2d3748" : "#ff6767"};
        border-left: 3px solid ${isDark ? "#ffe7e7ff" : "#ce2727ff"};
        box-shadow: 0 1px 3px ${isDark ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.1)"};
      }

      .message.winston.sent {
        text-align: right;
        background-color: ${isDark ? "#4a4a4a" : "#e0f7fa"};
        color: ${isDark ? "#cccccc" : "#006064"};
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60' style='transform: rotate(-20deg);'%3E%3Ctext x='-5' y='30' font-size='30' opacity='0.08'%3E🐼🐼%3C/text%3E%3C/svg%3E");
        background-repeat: repeat;
        background-size: 60px 40px;
      }

      .message.winston.received {
        text-align: left;
        background-color: ${isDark ? "#3a3a3a" : "#f1f8e9"};
        color: ${isDark ? "#cccccc" : "#33691e"};
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60' style='transform: rotate(-20deg);'%3E%3Ctext x='-5' y='30' font-size='30' opacity='0.08'%3E🐼🐼%3C/text%3E%3C/svg%3E");
        background-repeat: repeat;
        background-size: 60px 40px;
      }

      .message.winston.received.unread {
        background-color: ${isDark ? "#4a3a3a" : "#e8f5e9"};
        border-left: 3px solid ${isDark ? "#ff6b6b" : "#4caf50"};
        box-shadow: 0 1px 3px ${isDark ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.1)"};
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60' style='transform: rotate(-20deg);'%3E%3Ctext x='-5' y='30' font-size='30' opacity='0.08'%3E🐼🐼%3C/text%3E%3C/svg%3E");
        background-repeat: repeat;
        background-size: 60px 40px;
      }

      .send-info {
        font-size: 8px;
        color: ${isDark ? "#888" : "#666"};
      }

      #message-send {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 5px;
        border-top: 1px solid #ccc;
      }

      #formatting-bar {
        display: flex;
        gap: 4px;
        margin-bottom: 5px;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
      }

      #formatting-bar button {
        width: 24px;
        height: 24px;
        font-size: 12px;
        border: 1px solid ${isDark ? "#555" : "#ccc"};
        background: ${isDark ? "#444" : "#eee"};
        color: ${isDark ? "#fff" : "#333"};
        border-radius: 3px;
        cursor: pointer;
        padding: 0;
      }

      .color-picker-container {
        width: 23px;
        height: 23px;
        font-size: 12px;
        border: 1px solid ${isDark ? "#555" : "#ccc"};
        background: ${isDark ? "#444" : "#eee"};
          color: ${isDark ? "#fff" : "#333"};
        border-radius: 3px;
          cursor: pointer;
          text-align: center;
      }

      #formatting-bar select {
        height: 28px;
        font-size: 10px;
      }

      #message-send-row {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      #message-input {
        flex-grow: 1;
        min-height: 28px;
        max-height: 200px;
        border: 1px solid ${isDark ? "#555" : "#ccc"};
        border-radius: 5px;
        padding: 5px;
        overflow-y: auto;
        background: ${isDark ? "#333" : "#fff"};
        color: ${isDark ? "#ddd" : "#333"};
        resize: none;
      }

      #send-button {
        height: 40px;
        padding: 0 16px;
        border-radius: 5px;
        border: none;
        background: ${isDark ? "#4a4a4a" : "#00796b"};
        color: white;
        cursor: pointer;
      }

      .color-picker-container {
        position: relative;
        cursor: pointer;
      }

      .color-grid {
        display: none;
        position: absolute;
        bottom: 30px;
        background: ${isDark ? "#333" : "#fff"};
        border: 1px solid ${isDark ? "#555" : "#ccc"};
        border-radius: 4px;
        padding: 6px;
        display: grid;
        grid-template-columns: repeat(6, 20px);
        gap: 4px;
        z-index: 1000;
      }

      .color-grid div {
        width: 20px;
        height: 20px;
        border-radius: 3px;
        cursor: pointer;
        border: 1px solid #ccc;
        position: relative;
      }

      .color-grid div.selected::after {
        content: "✓";
        color: white;
        font-size: 14px;
        position: absolute;
        top: 2px;
        left: 5px;
      }

      .selection-highlight {
        background: lightgray;
      }

      #send-button:hover {
        background-color: ${isDark ? "#3a3a3a" : "#004d40"};
      }

      .selected-members-container {
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
        margin: 8px 0;
        min-height: 24px;
        padding: 4px;
        border: 1px solid ${isDark ? "#555" : "#ccc"};
        border-radius: 4px;
        overflow: hidden;
      }

      .selected-member {
        background: ${isDark ? "#444" : "#e0e0e0"};
        padding: 2px 6px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        gap: 4px;
        font-size: 0.85em;
        white-space: nowrap;
      }

      .remove-member {
        cursor: pointer;
        color: ${isDark ? "#fff" : "#666"};
        font-weight: bold;
        font-size: 0.9em;
      }

      .members-dropdown {
        position: relative;
      }

      .members-list {
        border: 1px solid ${isDark ? "#555" : "#ccc"};
        border-radius: 4px;
        max-height: 200px;
        overflow-y: auto;
        position: absolute;
        width: 100%;
        background: ${isDark ? "#333" : "#fff"};
        display: none;
      }

      .member-option {
        padding: 8px;
        cursor: pointer;
      }

      .member-option:hover {
        background: ${isDark ? "#444" : "#f0f0f0"};
      }

      #member-search {
        width: 100%;
        padding: 8px;
        margin: 8px 0;
        border: 1px solid ${isDark ? "#555" : "#ccc"};
        border-radius: 4px;
      }

      #link-dialog {
        position: fixed;
        width: 280px;
        z-index: 1001;
        border-radius: 8px;
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
        animation: fade-in 0.2s ease-out;
      }

      @keyframes fade-in {
        from {
          opacity: 0;
          transform: translateY(10px);
        }

        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .link-dialog-content {
        background-color: ${isDark ? "#383838" : "#ffffff"};
        color: ${isDark ? "#e0e0e0" : "#333333"};
        border: 1px solid ${isDark ? "#555555" : "#e0e0e0"};
        border-radius: 8px;
        padding: 16px;
        z-index: 3000000;
      }

      .link-input-group {
        margin-bottom: 12px;
      }

      .link-input-group label {
        display: block;
        margin-bottom: 6px;
        font-size: 13px;
        font-weight: 500;
        color: ${isDark ? "#cccccc" : "#555555"};
      }

      .link-input-group input {
        width: 100%;
        padding: 10px;
        border: 1px solid ${isDark ? "#555555" : "#dddddd"};
        border-radius: 6px;
        background-color: ${isDark ? "#2a2a2a" : "#f7f7f7"};
        color: ${isDark ? "#e0e0e0" : "#333333"};
        box-sizing: border-box;
        transition: border-color 0.2s ease, box-shadow 0.2s ease;
        font-size: 13px;
      }

      .link-input-group input:focus {
        outline: none;
        border-color: ${isDark ? "#6b8afd" : "#4285f4"};
        box-shadow: 0 0 0 2px ${isDark ? "rgba(107, 138, 253, 0.25)" : "rgba(66, 133, 244, 0.25)"};
      }

      .link-button-group {
        display: flex;
        justify-content: space-between;
        margin-top: 16px;
      }

      .link-button-group button {
        padding: 8px 14px;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        font-size: 13px;
        font-weight: 500;
        transition: background-color 0.15s ease, transform 0.15s ease;
      }

      .link-button-group button:hover {
        transform: translateY(-1px);
      }

      .link-button-group button:active {
        transform: translateY(0);
      }

      #apply-link {
        background-color: ${isDark ? "#4a5d7e" : "#4285f4"};
        color: white;
        flex-grow: 1;
        margin-right: 8px;
        height: 25px;
      }

      #apply-link:hover {
        background-color: ${isDark ? "#5a6d8e" : "#3b78e7"};
      }

      #remove-link {
        background-color: ${isDark ? "#7e4a4a" : "#f44242"};
        color: white;
        width: 80px;
        height: 25px;
      }

      #remove-link:hover {
        background-color: ${isDark ? "#8e5a5a" : "#e63535"};
      }

      #cancel-link {
        background-color: ${isDark ? "#333333" : "#e0e0e0"};
        color: ${isDark ? "#e0e0e0" : "#333333"};
        width: 80px;
        margin-left: 8px;
        height: 25px;
      }

      #cancel-link:hover {
        background-color: ${isDark ? "#444444" : "#d0d0d0"};
      }

      a {
        color: ${isDark ? "#8ab4f8" : "#1a73e8"};
        text-decoration: underline;
        cursor: pointer;
      }

      a:hover {
        text-decoration: underline;
      }

      #attachment-preview {
        display: none;
        width: 97.5%;
        flex-wrap: wrap;
        gap: 8px;
        margin-top: 8px;
        background-color: ${isDark ? "#333333" : "#e0e0e0"};
        border: 1px solid ${isDark ? "#555555" : "#cccccc"};
        border-radius: 4px;
        padding: 6px;
      }

      .attachment-item {
        width: 60px;
        height: 60px;
        object-fit: cover;
        border: 1px solid ${isDark ? "#666666" : "#cccccc"};
        border-radius: 4px;
        cursor: pointer;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: hidden;
        background-color: rgba(0,0,0,0.05);
      }

      .remove-attachment {
        position: absolute;
        top: 2px;
        right: 2px;
        background: rgba(0,0,0,0.5);
        border: none;
        color: white;
        width: 14px;
        height: 14px;
        font-size: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        padding: 0;
        line-height: 1;
        border-radius: 2px;
        z-index: 10;
      }

      .attachment-filename {
        background-color: rgba(0,0,0,0.1);
        width: 100%;
        font-size: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width: 100%;
        padding: 1px 2px;
        text-align: center;
        position: absolute;
        bottom: 0;
        left: 0;
      }

      .preview-image {
        max-width: 120px;
        max-height: 120px;
        display: inline-block;
        margin: 4px;
        border: 1px solid ${isDark ? "#555" : "#ccc"};
        border-radius: 6px;
        cursor: pointer;
        transition: transform 0.2s, background-color 0.2s;
      }

      .preview-image:hover {
        transform: scale(1.05);
        background-color: ${isDark ? "#444" : "#f0f0f0"};
      }

      .preview-link {
        color: ${isDark ? "#66b2ff" : "#007bff"};
        text-decoration: underline;
        font-size: 0.95em;
        margin: 4px;
        display: inline-flex;
        align-items: center;
        gap: 4px;
        cursor: pointer;
      }

      .preview-link:hover {
        text-decoration: none;
      }

      .file-attachment {
        display: inline-flex;
        align-items: center;
        padding: 2px 6px;
        background-color: rgba(0,0,0,0.05);
        border-radius: 4px;
        margin: 2px 0;
      }
      .mention-suggestions {
        position: absolute;
        background: var(--mention-bg, #fff);
        border: 1px solid var(--mention-border, #ccc);
        border-radius: 5px;
        padding: 5px;
        display: none;
        z-index: 3000000;
        max-height: 150px;
        overflow-y: auto;
        font-size: 12px;
      }

      .mention-suggestions div {
        padding: 4px 8px;
        cursor: pointer;
      }

      .mention-suggestions div.selected {
        background-color: #b3d9ff;  
        color: #005b8c;  
      }

      .mention-suggestions div:hover {
        background-color: var(--mention-hover, #eef);
      }

      .mention {
        background-color: ${isDark ? "#687183ff" : "#d0f0ff"};
        color: ${isDark ? "#fff" : "#006699"};
        padding: 2px 5px;
        border-radius: 4px;
        font-weight: bold;
      }

      .mention.highlight {
        background-color: ${isDark ? "#666" : "#c0e8ff"};
        color: ${isDark ? "#ffffff" : "#004466"};
        border: 1px solid ${isDark ? "#888" : "#0077aa"};
        padding: 2px 5px;
        border-radius: 4px;
        font-weight: bold;
      }
      #right-user-sidebar {
        width: 250px;
        height: 100%;
        background-color: ${isDark ? "#222" : "#f7f7f7"};
        border-left: 1px solid ${isDark ? "#444" : "#e0e0e0"};
        display: none; /* start hidden, toggle to show */
        flex-direction: column;
        overflow: hidden;
        flex-shrink: 0;
      }

      #right-user-sidebar.visible {
        display: flex;
      }

      #user-sidebar-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 15px;
        background-color: ${isDark ? "#333" : "#eee"};
        border-bottom: 1px solid ${isDark ? "#555" : "#ddd"};
      }

      #user-sidebar-header h3 {
        margin: 0;
        color: ${isDark ? "#ddd" : "#333"};
        font-size: 16px;
      }

      #close-user-sidebar {
        font-size: 18px;
        cursor: pointer;
        color: ${isDark ? "#aaa" : "#666"};
        transition: color 0.2s ease;
      }

      #close-user-sidebar:hover {
        color: ${isDark ? "#fff" : "#333"};
      }

      #user-lists-container {
        flex: 1;
        overflow-y: auto;
        padding: 10px;
      }

      .user-category {
        margin-bottom: 15px;
      }

      .category-header {
        display: flex;
        align-items: center;
        margin-bottom: 5px;
        padding: 3px 5px;
        border-radius: 4px;
      }

      .category-header h4 {
        margin: 0;
        font-size: 14px;
        font-weight: 500;
        color: ${isDark ? "#ccc" : "#444"};
      }

      .status-indicator {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        margin-right: 8px;
      }

      .status-indicator.active {
        background-color: #4CAF50;
        box-shadow: 0 0 4px #4CAF50;
      }

      .status-indicator.recently-active {
        background-color: #FFC107;
        box-shadow: 0 0 4px #FFC107;
      }

      .status-indicator.inactive {
        background-color: #F44336;
        box-shadow: 0 0 4px #F44336;
      }

      .user-list {
        margin-left: 16px;
      }

      .user-item {
        display: flex;
        align-items: center;
        padding: 5px 8px;
        border-radius: 4px;
        margin: 2px 0;
        font-size: 13px;
        color: ${isDark ? "#bbb" : "#555"};
        transition: background-color 0.2s ease;
      }

      .user-item:hover {
        background-color: ${isDark ? "#333" : "#e9e9e9"};
      }

      .user-item .status-indicator {
        width: 6px;
        height: 6px;
      }

      .user-item .user-name {
        font-weight: 500;
        margin-right: 5px;
      }

      .user-item .user-email {
        font-size: 11px;
        color: ${isDark ? "#888" : "#888"};
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .no-users {
        font-size: 12px;
        color: ${isDark ? "#888" : "#999"};
        font-style: italic;
        margin-left: 16px;
        padding: 4px 0;
      }

      /* Voting System Styles */
      #voting-screen, #leaderboard-screen {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding: 20px;
        color: ${isDark ? "#ddd" : "#333"};
        background-color: ${isDark ? "#333" : "#fff"};
        height: 100%;
        overflow-y: auto;
        box-sizing: border-box;
      }

      #voting-header, #leaderboard-header {
        width: 100%;
        text-align: center;
        margin-bottom: 20px;
        border: 0px !important;
      }

      #voting-header h2, #leaderboard-header h2 {
        margin-bottom: 8px;
      }

      #voting-description {
        font-size: 14px;
        margin-bottom: 20px;
        color: ${isDark ? "#bbb" : "#555"};
        max-width: 600px;
      }

      #voting-container, #leaderboard-container {
        width: 90%;
        max-width: 800px;
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 0px !important;
      }

      #voting-list, #leaderboard-list {
        width: 100%;
        margin-bottom: 20px;
        border: 0px !important;
      }

      .voting-item, .leaderboard-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 15px;
        margin-bottom: 12px;
        border-radius: 6px;
        background-color: ${isDark ? "#444" : "#f5f5f5"};
        transition: transform 0.2s, background-color 0.2s;
        box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        flex-direction: column;
      }

      .voting-item:hover {
        background-color: ${isDark ? "#4a4a4a" : "#eaeaea"};
      }

      .bot-info {
        flex: 1;
        padding-right: 15px;
        border: 0px !important;
      }

      .bot-name {
        font-weight: bold;
        font-size: 16px;
        margin-bottom: 4px;
        color: ${isDark ? "#fff" : "#222"};
        border: 0px !important;
        text-align: center;
      }

      .vote-options {
        display: flex;
        gap: 8px;
        flex-shrink: 0;
        border: 0px !important;
      }

      .vote-button {
        padding: 6px 12px;
        border-radius: 16px;
        font-weight: bold;
        font-size: 13px;
        cursor: pointer;
        border: none;
        transition: all 0.2s ease;
        border: 0px !important;
      }

      .vote-button.yes {
        background-color: ${isDark ? "#2e7d32" : "#4caf50"};
        color: white;
      }

      .vote-button.no {
        background-color: ${isDark ? "#c62828" : "#f44336"};
        color: white;
      }

      .vote-button.yes.selected {
        background-color: ${isDark ? "#1b5e20" : "#388e3c"};
        box-shadow: 0 0 0 2px #81c784;
        transform: scale(1.05);
      }

      .vote-button.no.selected {
        background-color: ${isDark ? "#b71c1c" : "#d32f2f"};
        box-shadow: 0 0 0 2px #e57373;
        transform: scale(1.05);
      }

      .vote-button:not(.selected) {
        opacity: 0.7;
      }

      .vote-button:hover:not(.selected) {
        opacity: 0.9;
        transform: translateY(-1px);
      }

      #voting-buttons, #leaderboard-buttons {
        display: flex;
        gap: 0px;
        margin-top: 0px;
        justify-content: center;
        width: 100%;
        flex-wrap: wrap;
        border: 0px !important;
      }

      .voting-button {
        padding: 8px 16px;
        border-radius: 6px;
        font-weight: 500;
        font-size: 14px;
        cursor: pointer;
        transition: all 0.2s ease;
        border: none;
        background-color: ${isDark ? "#546e7a" : "#64b5f6"};
        color: white;
        border: 0px !important;
        margin: 5px 0 !important;
      }

      .voting-button:hover {
        transform: translateY(-2px);
        background-color: ${isDark ? "#607d8b" : "#42a5f5"};
        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
      }

      .voting-button:active {
        transform: translateY(0);
      }

      #submit-votes {
        background-color: ${isDark ? "#388e3c" : "#4caf50"};
      }

      #submit-votes:hover {
        background-color: ${isDark ? "#2e7d32" : "#43a047"};
      }

      /* Leaderboard specific styles */
      .leaderboard-item {
        position: relative;
        padding: 12px 15px;
        margin-bottom: 10px;
        border: 0px !important;
      }

      .approval-bar-container {
        position: relative;
        width: 100%;
        height: 8px;
        background-color: ${isDark ? "#555" : "#e0e0e0"};
        border-radius: 4px;
        margin-top: 8px;
        overflow: hidden;
        border: 0px !important;
      }

      .approval-bar {
        position: absolute;
        height: 100%;
        background: linear-gradient(to right, #4caf50, #8bc34a);
        border-radius: 4px;
        transition: width 1s ease-out;
        border: 0px !important;
      }

      .approval-percentage {
        position: absolute;
        right: 15px;
        top: 12px;
        font-weight: bold;
        font-size: 16px;
        color: ${isDark ? "#8bc34a" : "#388e3c"};
        border: 0px !important;
      }

      .vote-count {
        font-size: 12px;
        color: ${isDark ? "#bbb" : "#777"};
        margin-top: 4px;
        border: 0px !important;
      }

      .no-votes-message {
        text-align: center;
        padding: 20px;
        color: ${isDark ? "#bbb" : "#777"};
        font-style: italic;
        border: 0px !important;
      }

      /* Tooltip */
      .bot-tooltip {
        position: relative;
        display: inline-block;
        margin-left: 5px;
        font-size: 14px;
        color: ${isDark ? "#aaa" : "#777"};
        cursor: help;
        border: 0px !important;
      }

      .bot-tooltip .tooltip-text {
        visibility: hidden;
        width: 200px;
        background-color: ${isDark ? "#212121" : "#555"};
        color: #fff;
        text-align: center;
        border-radius: 6px;
        padding: 8px;
        position: absolute;
        z-index: 1;
        bottom: 125%;
        left: 50%;
        margin-left: -100px;
        opacity: 0;
        transition: opacity 0.3s;
        font-size: 12px;
        font-weight: normal;
        border: 0px !important;
      }

      .bot-tooltip .tooltip-text::after {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: ${isDark ? "#212121" : "#555"} transparent transparent transparent;
        border: 0px !important;
      }

      .bot-tooltip:hover .tooltip-text {
        visibility: visible;
        opacity: 1;
      }

      /* Error message */
      .error-message {
        color: ${isDark ? "#ff6b6b" : "#d32f2f"};
        text-align: center;
        padding: 15px;
        background-color: ${isDark ? "#3e2727" : "#ffebee"};
        border-radius: 6px;
        margin-bottom: 15px;
      }

      .dropdown-container {
        position: relative;
        display: inline-block;
      }
      .settings-dropdown {
        position: absolute;
        top: 40px;
        left: -10px;
        background-color: ${isDark ? "#444" : "#fff"};
        border: 1px solid ${isDark ? "#666" : "#ddd"};
        border-radius: 4px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        z-index: 1000;
        min-width: 100px;
        display: none;
      }
      .dropdown-option {
        padding: 8px 12px;
        color: ${isDark ? "#eee" : "#333"};
        cursor: pointer;
        transition: background-color 0.2s;
        font-size: 14px;
      }
      .dropdown-option:hover {
        background-color: ${isDark ? "#555" : "#f0f0f0"};
      }
      .dropdown-option.selected {
        background-color: ${isDark ? "#666" : "#e0e0e0"};
        font-weight: bold;
      }

      .fake-message {
        /* Make fake messages look more like normal messages */
        padding: 3px 8px;
        margin-bottom: 3px;
        border-radius: 5px;
        font-size: 12px;
        width: 95%;
        max-width: 95%;
        word-wrap: break-word;
        background-color: ${isDark ? "#2a323c" : "#f0f7ff"};
        color: ${isDark ? "#e2e8f0" : "#1a365d"};
        text-align: left;
      }
      .jimmy-bot-header {
        font-weight: bold;
        margin-bottom: 3px;
        color: ${isDark ? "#90cdf4" : "#4299e1"};
        font-size: 12px;
      }
      .jimmy-bot-content {
        margin-bottom: 6px;
        font-size: 12px;
      }
      .corrected-message {
        margin: 6px 0;
        padding: 6px;
        border-radius: 4px;
        background-color: ${isDark ? "#36394a" : "#e6f7ff"};
        border-left: 2px solid ${isDark ? "#90cdf4" : "#4299e1"};
        font-size: 12px;
      }
      .jimmy-bot-buttons {
        display: flex;
        gap: 8px;
        margin-top: 6px;
        justify-content: flex-end;
      }
      .jimmy-yes-btn, .jimmy-no-btn {
        padding: 4px 12px;
        border-radius: 4px;
        cursor: pointer;
        font-size: 12px;
        border: none;
        transition: all 0.2s ease;
        font-weight: 500;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
      }
      .jimmy-yes-btn {
        background-color: ${isDark ? "#38a169" : "#48bb78"};
        color: white;
        border: 1px solid ${isDark ? "#2f855a" : "#38a169"};
      }
      .jimmy-no-btn {
        background-color: ${isDark ? "#e53e3e" : "#f56565"};
        color: white;
        border: 1px solid ${isDark ? "#c53030" : "#e53e3e"};
      }
      .jimmy-yes-btn:hover {
        background-color: ${isDark ? "#2f855a" : "#38a169"};
        transform: translateY(-1px);
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
      }
      .jimmy-no-btn:hover {
        background-color: ${isDark ? "#c53030" : "#e53e3e"};
        transform: translateY(-1px);
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
      }
      .jimmy-yes-btn:active, .jimmy-no-btn:active {
        transform: translateY(0);
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
      }
    `;
  }

  document.head.appendChild(style);
  updateColor();

  document
    .getElementById("dark-mode")
    ?.addEventListener("click", toggleDarkMode);
})();
