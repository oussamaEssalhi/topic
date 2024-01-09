import "./Contact.css";

const Contact = () => {
    return (
        <div className="contact" id="contact">
            <div className="container">
                <h2>Get in touch</h2>
                <div className="contact-items">
                    <div className="item">
                        <iframe
                            className="maps"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2206.030039351039!2d-7.602152628159945!3d33.56746221012623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4d8aaa1aa3%3A0x8c6883a727e8482f!2sArrondissement%20Derb%20Sultan-El%20Fida%2C%20Casablanca%2020250!5e0!3m2!1sfr!2sma!4v1696947294902!5m2!1sfr!2sma"
                            width="600"
                            height="350"
                            style={{ border: "0" }}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <div className="item">
                        <h4>Head office</h4>
                        <p>
                            Bay St &, Larkin St, San Francisco, CA 94109, United
                            States
                        </p>
                        <hr />
                        <p>
                            Phone <span className="color">305-240-9671</span>
                        </p>
                        <p>
                            Email{" "}
                            <span className="color">info@company.com</span>
                        </p>
                    </div>
                    <div className="item">
                        <h4>Dubai office</h4>
                        <p>
                            Burj Park, Downtown <br /> Dubai, United Arab
                            Emirates
                        </p>
                        <hr />
                        <p>
                            Phone <span className="color">110-220-3400</span>
                        </p>
                        <p>
                            Email{" "}
                            <span className="color">info@company.com</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
