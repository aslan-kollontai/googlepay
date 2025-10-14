function Testimonials() {
  return (
    <section className="section testimonials" id="testimonials">
      <div className="section-header" data-aos="fade-up">
        <h2>Testimonials</h2>
        <p>What our users are saying about us</p>
      </div>
      <div className="section-grid">
        <div className="section-card" data-aos="fade-up">
          <p>"Google Pay has changed the way I handle transactions!"</p>
          <cite>- Happy Customer</cite>
        </div>
        <div className="section-card" data-aos="fade-up" data-aos-delay="100">
          <p>"The security features give me peace of mind."</p>
          <cite>- Satisfied User</cite>
        </div>
        <div className="section-card" data-aos="fade-up" data-aos-delay="200">
          <p>"I love how easy it is to use."</p>
          <cite>- Loyal Client</cite>
        </div>

        <div className="section-card" data-aos="fade-up" data-aos-delay="300">
          <p>"A must-have app for anyone who shops online."</p>
          <cite>- Regular Shopper</cite>
        </div>
      </div>
    </section>
  );
}
export default Testimonials;
