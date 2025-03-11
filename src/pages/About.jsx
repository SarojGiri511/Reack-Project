import { Topbar } from "../components/Topbar";
import Navbar from "../components/Navbar";

function About() {
  return (
    <div>
      <Topbar />
      <Navbar />
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mt-10">About Us</h1>
        <p className="text-center mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptas, voluptates, quidem, quod molestias quos doloremque
          perspiciatis quas consequuntur quae doloribus? Quisquam voluptas,
          voluptates, quidem, quod molestias quos doloremque perspiciatis quas
          consequuntur quae doloribus?
        </p>
      </div>
    </div>
  );
}

export default About;
