import Subfeature from "./Subfeature";

const data = [
  {
    image: "images/Mask group-1.png",
    heading: "Organized Code",
    para: "Trying to make sure that people can understand the code well enough that they will be able to maintain and evolve it with some degree of efficiency and confidence.",
  },
  {
    image: "images/icons .png",
    heading: "Easy Customization",
    para: "the action of making or changing something according to the buyer's or user's needs: The website allows users some customization.",
  },
  {
    image: "images/Mask group-3.png",
    heading: "Fully Responsive",
    para: "A fully responsive website will rescale itself to preserve the user experience and look and feel across all devices",
  },
  {
    image: "images/Mask group-2.png",
    heading: "User Friendly",
    para: "a technical solution that is easy for all (or at least most) people to use to get their jobs done.",
  },
  {
    image: "images/download.png",
    heading: "Simply Download",
    para: "It can be simply downlaod from online platforms like playstore.",
  },
];

const Feature = () => {
  return (
    <>
      <section class="feature">
        <div class="container">
          <h2 class="text-center mb-4 fw-bold head">
            Some of the Best features Of Our App!
          </h2>

          <div class="row row-cols-md-1 row-cols-md-3 gy-0 gy-md-5 align-items-center justify-content-center my-2 my-md-0">

            {data.map((showdata, index) => {
              return (
                <Subfeature
                  key={index}
                  myimg={showdata.image}
                  myhead={showdata.heading}
                  mypara={showdata.para}
                />
              );
            })}
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Feature;
