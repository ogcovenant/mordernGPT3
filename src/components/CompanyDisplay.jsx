import atlassian from "../assets/atlassian.png"
import dropBox from "../assets/dropbox.png"
import google from "../assets/google.png"
import slack from "../assets/slack.png"
import shopify from "../assets/shopify.png"

const CompanyDisplay = () => {
  return (
    <div className=" p-5 flex items-center justify-center gap-5 overflow-scroll w-11/12 mx-auto md:overflow-hidden">
      <img className="w-24" src={google} alt="Google Logo" />
      <img className="w-24" src={atlassian} alt="Atlassian Logo" />
      <img className="w-24" src={slack} alt="Slack Logo" />
      <img className="w-24" src={dropBox} alt="DropBox Logo" />
      <img className="w-24" src={shopify} alt="Shopify Logo" />
    </div>
  )
}

export default CompanyDisplay