import "./style.css";

export default function SendMessage() {
  return (
    <section className="send-message">
      <header className="send-message__header">
        <span className="icon">▶</span>
        <h2>SEND_MESSAGE</h2>
      </header>

      <form className="send-message__form">
        <div className="row">
          <div className="field">
            <label>Sender Name</label>
            <input placeholder="e.g. Alan Turing" />
          </div>

          <div className="field">
            <label>Contact Endpoint</label>
            <input placeholder="email@address.com" />
          </div>
        </div>

        <div className="field">
          <label>Subject</label>
          <select>
            <option>Project Architecture Request</option>
            <option>General Contact</option>
            <option>Support</option>
          </select>
        </div>

        <div className="field">
          <label>Message Payload</label>
          <textarea placeholder="Describe the scope of work or message content..." />
        </div>

        <button type="submit" className="send-message__button">
          ▶ EXECUTE_SEND
        </button>
      </form>
    </section>
  );
}
