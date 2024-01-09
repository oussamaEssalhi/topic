import "./SectionFrequently.css";
import image from "../../assets/images/faq_graphic.jpg";

// import { useState } from "react";
const SectionFrequently = () => {
    // const [btnState, setBtnState] = useState(false);
    // function show(e) {
    //     setBtnState((btnState) => !btnState);
    // }
    // let toggleclassName = btnState ? "active" : null;

    return (
        <div className="section-freq container" id="section-freq">
            <h2>Frequently Asked Questions</h2>
            <div className="freq-text-image">
                <div
                    className="freq-image"
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                >
                    <img src={image} alt="frequently" />
                </div>
                <div
                    className="accordion accordion-flush"
                    id="accordionFlushExample"
                    data-aos="flip-left"
                >
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button "
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseOne"
                                aria-expanded="true"
                                aria-controls="flush-collapseOne"
                            >
                                What is Topic Listing?
                            </button>
                        </h2>
                        <div
                            id="flush-collapseOne"
                            className="accordion-collapse collapse show"
                            data-bs-parent="#accordionFlushExample"
                        >
                            <div className="accordion-body">
                                Topic Listing is free Bootstrap 5 CSS template.
                                <strong>
                                    You are not allowed to redistribute this
                                    template
                                </strong>{" "}
                                on any other template collection website without
                                our permission. Please contact TemplateMo for
                                more detail. Thank you.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseTwo"
                                aria-expanded="false"
                                aria-controls="flush-collapseTwo"
                            >
                                How to find a topic?
                            </button>
                        </h2>
                        <div
                            id="flush-collapseTwo"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                        >
                            <div className="accordion-body">
                                You can search on Google with{" "}
                                <strong>keywords</strong> such as templatemo
                                portfolio, templatemo one-page layouts,
                                photography, digital marketing, etc
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseThree"
                                aria-expanded="false"
                                aria-controls="flush-collapseThree"
                            >
                                Does it need to paid?
                            </button>
                        </h2>
                        <div
                            id="flush-collapseThree"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                        >
                            <div className="accordion-body">
                                You can modify any of this with custom CSS or
                                overriding our default variables. It's also
                                worth noting that just about any HTML can go
                                within the <code> .accordion-body,</code> though
                                the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionFrequently;
