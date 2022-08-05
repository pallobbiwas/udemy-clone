import { Route, Routes } from "react-router-dom";
import "./App.css";
import Allabout from "./components/about/Allabout";
import Blogs from "./components/blog/Blogs";
import Career from "./components/career/Career";
import Comapny from "./components/company/Comapny";
import CourseContent from "./components/courseVewing/CourseContent";
import CourseVewing from "./components/courseVewing/CourseVewing";
import Notes from "./components/courseVewing/Notes";
import Investores from "./components/investores/Investores";
import Allcourse from "./components/myLearning/Allcourse";
import Archived from "./components/myLearning/Archived";
import LearningTools from "./components/myLearning/LearningTools";
import MyLearning from "./components/myLearning/MyLearning";
import MyList from "./components/myLearning/MyList";
import Wishlist from "./components/myLearning/Wishlist";
import Press from "./components/press/Press";
import UsgUdemy from "./components/usgUdemy/UsgUdemy";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Allabout />}></Route>
        <Route path="/about" element={<Allabout />}></Route>
        <Route path="/usgudemy" element={<UsgUdemy />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/company" element={<Comapny />}></Route>
        <Route path="/career" element={<Career />}></Route>
        <Route path="/press" element={<Press />}></Route>
        <Route path="/investor" element={<Investores />}></Route>

        <Route path="/myLearning" element={<MyLearning />}>
          <Route path="allcourse" element={<Allcourse />}></Route>
          <Route path="mylist" element={<MyList />}></Route>
          <Route path="wishlist" element={<Wishlist />}></Route>
          <Route path="archived" element={<Archived />}></Route>
          <Route path="learningtools" element={<LearningTools />}></Route>
        </Route>

        <Route path="/coursevewing" element={<CourseVewing />}>
          <Route path="coursecontent" element={<CourseContent />}></Route>
          <Route path="overview" element={<MyList />}></Route>
          <Route path="notes" element={<Notes />}></Route>
          <Route path="announcement" element={<Archived />}></Route>
          <Route path="review" element={<LearningTools />}></Route>
          <Route path="learning" element={<LearningTools />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
