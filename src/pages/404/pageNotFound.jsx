import React from "react";

import "./style.scss";

import ContentWrapper from "../../components/contentWrapper/ContentWrapper";

const PageNotFound = () => {
    return (
        <div className="pageNotFound">
            <ContentWrapper>
                <span className="bigText">404</span>
                <span className="smallText">Page not found!</span>
                <span className="smallText">Extremely Sorry for the inconvinence but this page is not into our database right now try again in future ! </span>
            </ContentWrapper>
        </div>
    );
};

export default PageNotFound;
