// import Card from "@shieldspire/components/cards/Card";
// import style from "@shieldspire/pages/home.module.scss";

// export const Home: React.FC = () => {
//   return (
//     <div className="home-page">
//       <h1>Welcome to the Home Page</h1>
//       <p>This is the main landing page of the application.</p>

//       <Card>
//         <div className={style["card_wrapper"]}>
//           <div className="container-1">Title</div>
//           <div className="container-2">
//             <p>
//               This is a simple card component that can be used to display content in a structured
//               way.
//             </p>
//           </div>
//           <div className="contact_section container-3">
//             <p>Contact us at:</p>
//           </div>
//           <div className="highlight_div container-4">
//             <div>
//               <p>Highlight this section1</p>
//               <p>Highlight this section2</p>
//               <p>Highlight this section3</p>
//               <p>Highlight this section4</p>
//               <p>Highlight this section5</p>
//             </div>
//             <div className="container-5">image container</div>
//           </div>
//           <a className="link-1">Link1</a>
//           <a className="link-2">Link2</a>
//           <a className={style["link3"]}>Link3</a>
//         </div>
//       </Card>
//     </div>
//   );
// };

//final version of Home.tsx
import Card from "@shieldspire/components/cards/Card";
import style from "@shieldspire/pages/home.module.scss";

export const Home: React.FC = () => (
  <div className="home-page">
    <Card>
      <div className={style.card_wrapper}>
        <div className={style.container1}>Title</div>
        <div className={style.container2}>
          <p>
            This is a simple card component that can be used to display content in a structured way.
          </p>
        </div>
        <div className={style.container3}>
          <p>Contact us at:</p>
        </div>
        <div className={style.container4}>
          <div>
            <p>Highlight this section1</p>
            <p>Highlight this section2</p>
            <p>Highlight this section3</p>
            <p>Highlight this section4</p>
            <p>Highlight this section5</p>
          </div>
          <div style={{ height: "5rem" }} className={style.container5}>
            image container
          </div>
        </div>
        <a className={style.link1}>Link1</a>
        <a className={style.link2}>Link2</a>
        <a className={style.link3}>Link3</a>
      </div>
    </Card>
  </div>
);

// import Card from "@shieldspire/components/cards/Card";
// import style from "@shieldspire/pages/home.module.scss";

// export const Home: React.FC = () => (
//   <div className="home-page">
//     <Card>
//       <div className={style.card_wrapper}>
//         <div className={style.container1}>Title</div>
//         <div className={style.container2}>
//           <p>
//             This is a simple card component that can be used to display content in a structured way.
//           </p>
//         </div>
//         <div className={style.container3}>
//           <p>Contact us at:</p>
//         </div>
//         <div className={style.container4}>
//           <div>
//             <p>Highlight this section1</p>
//             <p>Highlight this section2</p>
//             <p>Highlight this section3</p>
//             <p>Highlight this section4</p>
//             <p>Highlight this section5</p>
//           </div>
//           <div style={{ height: "5rem" }} className={style.container5}>
//             image container
//           </div>
//         </div>
//         <a className={style.link1}>Link1</a>
//         <a className={style.link2}>Link2</a>
//         <a className={style.link3}>Link3</a>
//       </div>
//     </Card>
//   </div>
// );
