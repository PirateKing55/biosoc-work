import ProfileComponent from "./ProfileComponent";
import profileimg from "../images/profileimg.jpg";
import { ocArray } from "../data";
export default function OurTeam() {
  return (
    <>
      <div className="our-team">
        <h1>Our Team</h1>

        <div className="overall-coordinator">
          <h2 style={{ textAlign: "center" }}>Overall Co-ordinator</h2>

          <div className="overall-cordi-profile">
            {ocArray.map((data) => (
              <ProfileComponent
                img={data.image}
                name={data.name}
                linkedinId={data.linkedinId}
                emailId={data.emailId}
                post={data.post}
              />
            ))}
          </div>
        </div>
        <div className="co-ordinator">
          <h2 style={{ textAlign: "center" }}>Co-ordinators</h2>
          <div className="cordi-profile">
            <ProfileComponent
              img={profileimg}
              name="Amrit"
              post="Web Development"
              linkedinId="#"
              emailId="#"
            />
            <ProfileComponent
              img={profileimg}
              name="Tanuja Kaleli"
              post="Research and Projects"
              linkedinId="#"
              emailId="#"
            />
            <ProfileComponent
              img={profileimg}
              name="Advaith Kannan"
              post="Marketing and Fundraising"
              linkedinId="#"
              emailId="#"
            />
            <ProfileComponent
              img={profileimg}
              name="Deepak"
              post="Social Media"
              linkedinId="#"
              emailId="#"
            />
            <ProfileComponent
              img={profileimg}
              name="Abhishek Kumar"
              post="Events"
              linkedinId="#"
              emailId="#"
            />
          </div>
        </div>

        <div className="secretary">
          <h2 style={{ textAlign: "center" }}>Secretary</h2>
          <div className="secy-profile">
            <ProfileComponent
              img={profileimg}
              name="Manasvi Nidugala"
              post="Marketing"
              linkedinId="#"
              emailId="#"
            />
            <ProfileComponent
              img={profileimg}
              name="Eeshwari Sunkersett"
              post="Marketting "
              linkedinId="#"
              emailId="#"
            />
            <ProfileComponent
              img={profileimg}
              name="Suryansh Dwivedi"
              post="Marketing"
              linkedinId="#"
              emailId="#"
            />
            <ProfileComponent
              img={profileimg}
              name="Asif nawaz "
              post="Marketing"
              linkedinId="#"
              emailId="#"
            />
            <ProfileComponent
              img={profileimg}
              name="Sneh"
              post="Marketing"
              linkedinId="#"
              emailId="#"
            />
            <ProfileComponent
              img={profileimg}
              name="Vanshika Yadav"
              post="Marketing"
              linkedinId="#"
              emailId="#"
            />
            <ProfileComponent
              img={profileimg}
              name="Pradeep Kumar"
              post="Web Dev"
              linkedinId="#"
              emailId="#"
            />
            <ProfileComponent
              img={profileimg}
              name="Karan Jangid"
              post="Web Dev"
              linkedinId="#"
              emailId="#"
            />
            <ProfileComponent
              img={profileimg}
              name="Bhavya Garg"
              post="Web Dev"
              linkedinId="#"
              emailId="#"
            />
            <ProfileComponent
              img={profileimg}
              name="Lakshit Sharma"
              post="Research"
              linkedinId="#"
              emailId="#"
            />
            <ProfileComponent
              img={profileimg}
              name="Debarpita Dash"
              post="Research"
              linkedinId="#"
              emailId="#"
            />
            <ProfileComponent
              img={profileimg}
              name="Adhiraj Gupta"
              post="Research "
              linkedinId="#"
              emailId="#"
            />
            <ProfileComponent
              img={profileimg}
              name="Aryan Mittal "
              post="Research "
              linkedinId="#"
              emailId="#"
            />
            <ProfileComponent
              img={profileimg}
              name="Yeleena Vimal"
              post="Research "
              linkedinId="#"
              emailId="#"
            />
            <ProfileComponent
              img={profileimg}
              name="Jonnala Hema Phani Sri"
              post="Social Media"
              linkedinId="#"
              emailId="#"
            />
            <ProfileComponent
              img={profileimg}
              name="Deepak Gautam"
              post="Social Media"
              linkedinId="#"
              emailId="#"
            />
            <ProfileComponent
              img={profileimg}
              name="Aradhya Gautam"
              post="Social Media"
              linkedinId="#"
              emailId="#"
            />
            <ProfileComponent
              img={profileimg}
              name="Krrish khandelwal"
              post="Social Media"
              linkedinId="#"
              emailId="#"
            />
            <ProfileComponent
              img={profileimg}
              name="ADRISH CHAKRABARTI"
              post="Events"
              linkedinId="#"
              emailId="#"
            />
            <ProfileComponent
              img={profileimg}
              name="Nischay Patel"
              post="Events"
              linkedinId="#"
              emailId="#"
            />
            <ProfileComponent
              img={profileimg}
              name="Anuj Gargya"
              post="Events"
              linkedinId="#"
              emailId="#"
            />
            <ProfileComponent
              img={profileimg}
              name="Aarsh Choudhari "
              post="Events"
              linkedinId="#"
              emailId="#"
            />
            <ProfileComponent
              img={profileimg}
              name="Rajavardhan Ramavath"
              post="Events"
              linkedinId="#"
              emailId="#"
            />
            <ProfileComponent
              img={profileimg}
              name="Keshav Khandelwal"
              post="Events"
              linkedinId="#"
              emailId="#"
            />
            <ProfileComponent
              img={profileimg}
              name="Kritnandan"
              post="Events"
              linkedinId="#"
              emailId="#"
            />
            <ProfileComponent
              img={profileimg}
              name="Hariom Singh"
              post="Events"
              linkedinId="#"
              emailId="#"
            />
          </div>
        </div>
      </div>
    </>
  );
}
