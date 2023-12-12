import "./Help.css";
const Help = () => {
  return (
    <div className="Help container">
      <h2>Have Question in Mind? Let us help you</h2>
      <div className="send">
        <input type="text" placeholder="Enter your question" />
        <button className="btn">Send</button>
      </div>
    </div>
  );
};

export default Help;
