import Subcontent from "./Subcontent";

const mydata = [
  {
    contentheading: "Verified service providers",
    Contentpara:
      "Each provider is verified by our team of purrfessionals and reviewed by you, our photography is done organically by our photography team to give you the best visual listing of the facilities.",
  },
  {
    contentheading: "24/7 online booking & payment",
    Contentpara:
      "Book available slots when you need them from a wide range of providers and pay online securely – Book and Manage your bookings with a click of a button.",
  },
  {
    contentheading: "Treats",
    Contentpara:
      "We all love treats, enjoy treats everytime you book through Bookmypet. These treats can be redeemed for any future booking with us. Spend more, save more",
  },
];

const Content = () => {
  return (
    <>
      <section class="detail">
        <div class="container py-2 py-md-5">
          <div class="row gx-3 gx-md-5 gy-4 gy-md-0">
            {mydata.map((mycontent, index) => {
              return (
                <Subcontent
                  key={index}
                  mycontenthead={mycontent.contentheading}
                  mycontentpara={mycontent.Contentpara}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
