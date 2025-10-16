function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="section-header" data-aos="fade-up">
        <h2>Contact Us</h2>
        <p>
          Get in touch with us for more information or to discuss your IT needs.
        </p>
      </div>
      <div className="contact-container" data-aos="fade-up">
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
