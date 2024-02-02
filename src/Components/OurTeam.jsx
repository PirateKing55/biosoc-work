import ProfileComponent from "./ProfileComponent";
import { ocArray, cArray, secyArray } from "../data";
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
            {
              cArray.map((data) => {
                return (<>
                  <ProfileComponent
                  img={data.img}
                  name={data.name}
                  post={data.post}
                  linkedinId={data.linkedinId}
                  emailId={data.emailId}
                />
                </>)
                
              })
            }
          </div>
        </div>

        <div className="secretary">
          <h2 style={{ textAlign: "center" }}>Secretary</h2>
          <div className="secy-profile">
            {
              secyArray.map((data) => {
                return (<>
                <ProfileComponent
                  img={data.img}
                  name={data.name}
                  post={data.post}
                  linkedinId={data.linkedinId}
                  emailId={data.emailId}
                />
                </>)    
              })
            }

          </div>
        </div>
      </div>
    </>
  );
}
