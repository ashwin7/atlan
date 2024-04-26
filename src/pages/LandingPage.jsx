import Header from "../components/editor-components/Header";
import Footer from "../components/editor-components/Footer";
import Editor from "../components/editor/Editor"
import "font-awesome/css/font-awesome.min.css";

export default function LandingPage() {
  return (
    <div>
      <div className="video-bg">
        <video width="320" height="240" autoPlay loop muted>
          <source src="https://assets.codepen.io/3364143/7btrrd.mp4" type="video/mp4"></source>
            Your browser does not support the video tag.
        </video>
      </div>
      <Header />
      <Editor />
      <Footer />
    </div>
  )
}
