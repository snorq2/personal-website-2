import '../styles/styles.css'
import NavBar from './Components/navbar'
import Footer from './Components/footer'

function App() {
  return (
    <>
      <NavBar />
      <main className="content index">
        <img
          className="content-element"
          id="front-image"
          src="/Sawyer_Face_1.jpg"
          alt="Sawyer's face"
        />
        <p className="content-element">
          My name is Sawyer Norquist, undergraduate student in the Portland State
          University Computer Science program. I enjoy taking problems and
          constructing solutions for them – both novel and based on tried
          methodology. While this has led many places, most recently it has been
          through a time as an Operational Excellence technician. During this time I
          built a substantial interest in systems-level approaches to problem
          solving, viewing most puzzles not as isolated instances but as some part
          of a greater whole. I used this approach in tasks such as helping redesign
          the flow of a production line to establishing a new process for handling
          non-conformance reporting for both materials and processes. Now I seek to
          grow these skills even further, pursing a bachelor’s in Computer Science
          with the goal of transitioning to a development role – ideally in a role
          where I can combine my experience with Lean, Six Sigma methodology, and
          the production environment to continue building systems and solving
          problems.
        </p>
      </main>
      <Footer />
    </>
  )
}

export default App
