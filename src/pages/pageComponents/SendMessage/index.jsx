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
            <label>Nome</label>
            <input placeholder="ex: Fulano da Silva" />
          </div>

          <div className="field">
            <label>Email de Contato</label>
            <input placeholder="silvafulano@exemplo.com" />
          </div>
        </div>

        <div className="field">
          <label>tema</label>
          <select>
            <option>Preciso fazer um Software</option>
            <option>Dúvidas</option>
            <option>Suporte </option>
          </select>
        </div>

        <div className="field">
          <label>Motivo da mensagem</label>
          <textarea placeholder="Descreva o escopo do trabalho ou conteúdo da mensagem..." />
        </div>

        <button type="submit" className="send-message__button">
          ▶ ENVIAR_AGORA
        </button>
      </form>
    </section>
  );
}
