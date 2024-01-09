import "./Taps.css";
import DataCardes from "../../Data/DataCardes";
import { CardeItem } from "../index";
import { useState } from "react";

const Taps = () => {
    const [categortSelect, setCategorySelect] = useState("design");

    const cardDesign = DataCardes.filter((el) => {
        return el.category === categortSelect;
    });

    const CardItems = cardDesign.map((el) => {
        return (
            <CardeItem
                key={el.id}
                title={el.title}
                content={el.content}
                color={el.color}
                image={el.image}
                badgeNumber={el.badgeNumber}
            />
        );
    });

    return (
        <div>
            <nav>
                <div
                    className="nav nav-tabs justify-content-center"
                    id="nav-tab"
                    role="tablist"
                >
                    <button
                        className="nav-link active"
                        id="nav-home-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-home"
                        type="button"
                        role="tab"
                        aria-controls="nav-home"
                        aria-selected="true"
                        onClick={() => {
                            setCategorySelect("design");
                        }}
                    >
                        Design
                    </button>
                    <button
                        className="nav-link"
                        id="nav-profile-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-profile"
                        type="button"
                        role="tab"
                        aria-controls="nav-profile"
                        aria-selected="false"
                        onClick={() => {
                            setCategorySelect("marketing");
                        }}
                    >
                        Marketing
                    </button>
                    <button
                        className="nav-link"
                        id="nav-contact-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-contact"
                        type="button"
                        role="tab"
                        aria-controls="nav-contact"
                        aria-selected="false"
                        onClick={() => {
                            setCategorySelect("finance");
                        }}
                    >
                        Finance
                    </button>
                    <button
                        className="nav-link"
                        id="nav-contact-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-contact"
                        type="button"
                        role="tab"
                        aria-controls="nav-contact"
                        aria-selected="false"
                        onClick={() => {
                            setCategorySelect("music");
                        }}
                    >
                        Music
                    </button>
                    <button
                        className="nav-link"
                        id="nav-disabled-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-disabled"
                        type="button"
                        role="tab"
                        aria-controls="nav-disabled"
                        aria-selected="false"
                        onClick={() => {
                            setCategorySelect("Education");
                        }}
                    >
                        Education
                    </button>
                </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
                <div
                    className="tab-pane fade design show active"
                    id="nav-home"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab"
                    tabIndex="0"
                >
                    <div className="design">{CardItems}</div>
                </div>
                <div
                    className="tab-pane fade design"
                    id="nav-profile"
                    role="tabpanel"
                    aria-labelledby="nav-profile-tab"
                    tabIndex="0"
                >
                    {CardItems}
                </div>
                <div
                    className="tab-pane fade design"
                    id="nav-contact"
                    role="tabpanel"
                    aria-labelledby="nav-contact-tab"
                    tabIndex="0"
                >
                    {CardItems}
                </div>
                <div
                    className="tab-pane fade design"
                    id="nav-disabled"
                    role="tabpanel"
                    aria-labelledby="nav-disabled-tab"
                    tabIndex="0"
                >
                    {CardItems}
                </div>
            </div>
        </div>
    );
};

export default Taps;
