// // // import * as D from "./data";

// // // export default function App() {
// // //   return (
// // //     <div>
// // //       <p>
// // //         {D.randomName()}, {D.randomJobTitle()}, {D.randomDayMonthYear()}
// // //       </p>
// // //       <img src={D.randomAvatar()} height="50" />
// // //       <img src={D.randomImage()} height="300" />
// // //     </div>
// // //   );
// // // }

// // import { Component } from "react";
// // import ClassComponent from "./ClassComponent";
// // import ArrowComponent from "./ArrowComponent";

// // // export default function App(){
// // //   return <div>Hello function-keyword component!</div>
// // // }

// // // const App = () => {
// // //   return (
// // //     <ul>
// // //       <ClassComponent href="http://www.google.com" text="go to google" />
// // //       <ArrowComponent href="http://www.X.com" text="go to X(twitter)" />
// // //     </ul>
// // //   );
// // // };
// // const App = () => {
// //   // refactoring map 함수 사용
// //   // const texts = [<p key="1">hello</p>, <p key="2">world</p>];
// //   const texts = ["hello", "world"].map((item, index) => (
// //     <p key={index} children={item} />
// //   ));
// //   return <div children={texts} />;
// // };

// // export default App;

// import EventLisner from "./pages/EventListner";
// import OnClick from "./pages/OnClick";
// import ReactOnClick from "./pages/ReactOnClick";
// import DispatchEvent from "./pages/DispatchEvent";
// import EventBubbling from "./pages/EventBubbling";
// import StopPropagation from "./pages/StopPropagation";
// import VariousInputs from "./pages/VariousInputs";
// import OnChange from "./pages/OnChange";
// import FileInput from "./pages/FileInput";
// import DragDrop from "./pages/DragDrop";
// import FileDrop from "./pages/FileDrop";

// export default function App() {
//   return (
//     <div>
//       <FileDrop />
//       <DragDrop />
//       <FileInput />
//       <OnChange />
//       <VariousInputs />
//       <StopPropagation />
//       <EventBubbling />
//       <DispatchEvent />
//       <ReactOnClick />
//       <OnClick />
//       <EventLisner />
//     </div>
//   );
// }

import Bootstrap from "./pages/Bootstrap";
import Icon from "./pages/Icon";
// import Style from "./pages/Style";
// import UsingIcon from "./pages/UsingIcon";
// import UsingIconWithCSSClass from "./pages/UsingIconwithCSSClass";

export default function App() {
  return (
    <div>
      {/* <UsingIconWithCSSClass />
      <UsingIcon />
      <Style /> */}
      <Icon />
      <Bootstrap />
    </div>
  );
}
