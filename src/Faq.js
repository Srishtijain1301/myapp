const Faq = () => {
  return (
    <>
      <section className="container">
        <div style={{ marginTop: "15%", height: "60vh" }}>
          <h4>Frequently Asked Question </h4>
          <div
            class="accordion accordion-flush my-4"
            id="accordionFlushExample"
          >
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingOne">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Q.1 Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Numquam, doloremque??
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                class="accordion-collapse collapse collapse show"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the class. This is the first item's accordion
                  body. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt velit perferendis et laboriosam illum perspiciatis
                  sunt ea nesciunt pariatur rerum?
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  Q.2 Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Numquam, doloremque??
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the class. This is the second item's accordion
                  body. Let's imagine this being filled with some actual
                  content. Lorem ipsum dolor sit, amet consectetur adipisicing
                  elit. Itaque omnis quis quaerat eum provident quia dolore
                  tempora illo, laudantium reprehenderit.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                 Q.3 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, doloremque??
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the class. This is the third item's accordion
                  body. Nothing more exciting happening here in terms of
                  content, but just filling up the space to make it look, at
                  least at first glance, a bit more representative of how this
                  would look in a real-world application. Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Quaerat, temporibus?
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
