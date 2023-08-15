import { FormattedMessage, useIntl } from 'react-intl';
import { useRouter } from 'next/router'

const Expertise = () => {
  return (
    <section
      id="expertise"
      data-nav-tooltip="Services"
      className="pp-section pp-scrollable section"
    >
      <div className="container">
        <div className="title">
          <h3>
          <FormattedMessage id="page.expertises.title" />
          </h3>
        </div>
        <div className="row">

          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              {/* <i className="icon theme-bg icon-browser" /> */}
              <div className="feature-content media-body">
                <h5>
                  <FormattedMessage id="page.expertises1.title" />
                </h5>
                <p>
                  <FormattedMessage id="page.expertises1.description" />
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              {/* <i className="icon theme-bg icon-browser" /> */}
              <div className="feature-content media-body">
                <h5>
                  <FormattedMessage id="page.expertises2.title" />
                </h5>
                <p>
                  <FormattedMessage id="page.expertises2.description" />
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              {/* <i className="icon theme-bg icon-browser" /> */}
              <div className="feature-content media-body">
                <h5>
                  <FormattedMessage id="page.expertises3.title" />
                </h5>
                <p>
                  <FormattedMessage id="page.expertises3.description" />
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              {/* <i className="icon theme-bg icon-browser" /> */}
              <div className="feature-content media-body">
                <h5>
                  <FormattedMessage id="page.expertises4.title" />
                </h5>
                <p>
                  <FormattedMessage id="page.expertises4.description" />
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              {/* <i className="icon theme-bg icon-browser" /> */}
              <div className="feature-content media-body">
                <h5>
                  <FormattedMessage id="page.expertises5.title" />
                </h5>
                <p>
                  <FormattedMessage id="page.expertises5.description" />
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              {/* <i className="icon theme-bg icon-browser" /> */}
              <div className="feature-content media-body">
                <h5>
                  <FormattedMessage id="page.expertises6.title" />
                </h5>
                <p>
                  <FormattedMessage id="page.expertises6.description" />
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              {/* <i className="icon theme-bg icon-browser" /> */}
              <div className="feature-content media-body">
                <h5>
                  <FormattedMessage id="page.expertises7.title" />
                </h5>
                <p>
                  <FormattedMessage id="page.expertises7.description" />
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              {/* <i className="icon theme-bg icon-browser" /> */}
              <div className="feature-content media-body">
                <h5>
                  <FormattedMessage id="page.expertises8.title" />
                </h5>
                <p>
                  <FormattedMessage id="page.expertises8.description" />
                </p>
              </div>
            </div>
          </div>
          
        </div>
        <div className="separated" />
      </div>
    </section>
  );
};
export default Expertise;
