const Blog = () => {
  return (
    <>
      <section className="container">
        <div style={{ marginTop: "15%" }}>
          <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
              <div class="card">
                <div className="blogheight">
                  <img
                    height="100%"
                    src="https://api.bookmypet.com/static/images/blog/image-1670591086941.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                </div>
                <div class="card-body">
                  <h5 class="card-title">Blog 1</h5>
                  <p class="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div className="blogheight">
                  <img
                    height="100%"
                    src="https://api.bookmypet.com/static/images/blog/image-1669881141779.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                </div>
                <div class="card-body">
                  <h5 class="card-title">Blog 2</h5>
                  <p class="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div className="blogheight">
                  <img
                    height="100%"
                    src="https://api.bookmypet.com/static/images/blog/image-1661340899256.png"
                    class="card-img-top"
                    alt="..."
                  />
                </div>
                <div class="card-body">
                  <h5 class="card-title">Blog 3</h5>
                  <p class="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content.
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div className="blogheight">
                  <img
                    height="100%"
                    src="https://api.bookmypet.com/static/images/blog/image-1659764709530.jpeg"
                    class="card-img-top"
                    alt="..."
                  />
                </div>
                <div class="card-body">
                  <h5 class="card-title">Blog 4</h5>
                  <p class="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div className="blogheight">
                  <img
                    height="100%"
                    src="https://www.bookmypet.com/img/home-right.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                </div>
                <div class="card-body">
                  <h5 class="card-title">Blog 3</h5>
                  <p class="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content.
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div className="blogheight">
                  <img
                    height="100%"
                    src="https://api.bookmypet.com/images/offers/354ee19c-0f83-4a5b-869a-b56be08a5eb3.jpeg"
                    class="card-img-top"
                    alt="..."
                  />
                </div>
                <div class="card-body">
                  <h5 class="card-title">Blog 4</h5>
                  <p class="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <a href="#" className="btn btn-dark my-3">View More</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
