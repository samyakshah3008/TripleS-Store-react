import cricketBall from "../assets/cricket-ball.jpg";

export function Testimonials() {
  return (
    <div>
      <div className="testimonials-container">
        <div className="testimonial-card">
          <i className="fa fa-quote-left testimonial-quote star selected-star"></i>
          <div className="feedback-content">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Dignissimos, quia!
          </div>
          <div className="ratings">
            <i className="fas fa-star star selected-star"></i>
            <i className="fas fa-star star selected-star"></i>
            <i className="fas fa-star star selected-star"></i>
            <i className="fas fa-star-half-alt star selected-star"></i>
            <i className="far fa-star star selected-star"></i>
          </div>
          <img src={cricketBall} className="avatar"></img>
          <h2 className="author-name">Lorem, ipsum.</h2>
        </div>

        <div className="testimonial-card">
          <i className="fa fa-quote-left testimonial-quote star selected-star"></i>

          <div className="feedback-content">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Dignissimos, quia!
          </div>
          <div className="ratings">
            <i className="fas fa-star star selected-star"></i>
            <i className="fas fa-star star selected-star"></i>
            <i className="fas fa-star star selected-star"></i>
            <i className="fas fa-star-half-alt star selected-star"></i>
            <i className="far fa-star star selected-star"></i>
          </div>
          <img src={cricketBall} className="avatar"></img>
          <h2 className="author-name">Lorem, ipsum.</h2>
        </div>

        <div className="testimonial-card">
          <i className="fa fa-quote-left testimonial-quote star selected-star"></i>

          <div className="feedback-content">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Dignissimos, quia!
          </div>
          <div className="ratings">
            <i className="fas fa-star star selected-star"></i>
            <i className="fas fa-star star selected-star"></i>
            <i className="fas fa-star star selected-star"></i>
            <i className="fas fa-star-half-alt star selected-star"></i>
            <i className="far fa-star star selected-star"></i>
          </div>
          <img src={cricketBall} className="avatar"></img>
          <h2 className="author-name">Lorem, ipsum.</h2>
        </div>
      </div>
    </div>
  );
}
