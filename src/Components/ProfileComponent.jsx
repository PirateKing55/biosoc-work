import linkedinicon from "../images/linkedin-icon.png";
import emailicon from "../images/mail-icon.png";
export default function ProfileComponent(props) {
  return (
    <>
      <div className="card">
        <div className="pimg">
          <img src={props.img} alt="profile" />
        </div>
        <div className="name">
          <h3>{props.name}</h3>
        </div>
        <div className="post">
          <p>{props.post}</p>
        </div>
        <div className="team-connect">
          <div className="linkedin">
            <a href={props.linkedinId}>
              <img src={linkedinicon} alt="linkedinicon" />
            </a>
          </div>
          <div className="mail">
            <a href={props.emailId}>
              <img src={emailicon} alt="linkedinicon" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
