import { FormattedMessage, useIntl } from 'react-intl';
import { useRouter } from 'next/router'

const Experience = () => {

  return (
    <section
      id="experience"
      data-nav-tooltip="Experience"
      className="pp-section pp-scrollable section counter"
    >
      <div className="container">

        
      <div className="separated" />
        <div className="title">
          <h3>
            <FormattedMessage id="page.experiencies.title" /> .
          </h3>
        </div>
        <div className="resume-box">

            <div className="resume-row">
              <div className="row">
                <div className="col-sm-3 col-md-3 col-xl-2">
                  <div className="rb-left">
                    <img src="static/img/mirante.png" title="" alt="" />
                  </div>
                </div>
                <div className="col-sm-9 col-md-9 col-xl-10">
                  <div className="rb-right">
                    <h6>
                      <FormattedMessage id="page.experiencies.experience1.title" />
                    </h6>
                    <label>
                      <FormattedMessage id="page.experiencies.experience1.name" />
                    </label>
                    <div className="rb-time">
                      <FormattedMessage id="page.experiencies.experience1.type" />
                    </div>
                    <p>
                      <FormattedMessage id="page.experiencies.experience1.description" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="resume-row">
              <div className="row">
                <div className="col-sm-3 col-md-3 col-xl-2">
                  <div className="rb-left">
                    <img src="static/img/barake.png" title="" alt="" />
                  </div>
                </div>
                <div className="col-sm-9 col-md-9 col-xl-10">
                  <div className="rb-right">
                    <h6>
                      <FormattedMessage id="page.experiencies.experience2.title" />
                    </h6>
                    <label>
                      <FormattedMessage id="page.experiencies.experience2.name" />
                    </label>
                    <div className="rb-time">
                      <FormattedMessage id="page.experiencies.experience2.type" />
                    </div>
                    <p>
                      <FormattedMessage id="page.experiencies.experience2.description" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="resume-row">
              <div className="row">
                <div className="col-sm-3 col-md-3 col-xl-2">
                  <div className="rb-left">
                    <img src="static/img/senac.png" title="" alt="" />
                  </div>
                </div>
                <div className="col-sm-9 col-md-9 col-xl-10">
                  <div className="rb-right">
                    <h6>
                      <FormattedMessage id="page.experiencies.experience3.title" />
                    </h6>
                    <label>
                      <FormattedMessage id="page.experiencies.experience3.name" />
                    </label>
                    <div className="rb-time">
                      <FormattedMessage id="page.experiencies.experience3.type" />
                    </div>
                    <p>
                      <FormattedMessage id="page.experiencies.experience3.description" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="resume-row">
              <div className="row">
                <div className="col-sm-3 col-md-3 col-xl-2">
                  <div className="rb-left">
                    <img src="static/img/liberdade.png" title="" alt="" />
                  </div>
                </div>
                <div className="col-sm-9 col-md-9 col-xl-10">
                  <div className="rb-right">
                    <h6>
                      <FormattedMessage id="page.experiencies.experience4.title" />
                    </h6>
                    <label>
                      <FormattedMessage id="page.experiencies.experience4.name" />
                    </label>
                    <div className="rb-time">
                      <FormattedMessage id="page.experiencies.experience4.type" />
                    </div>
                    <p>
                      <FormattedMessage id="page.experiencies.experience4.description" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="resume-row">
              <div className="row">
                <div className="col-sm-3 col-md-3 col-xl-2">
                  <div className="rb-left">
                    <img src="static/img/rocket.png" title="" alt="" />
                  </div>
                </div>
                <div className="col-sm-9 col-md-9 col-xl-10">
                  <div className="rb-right">
                    <h6>
                      <FormattedMessage id="page.experiencies.experience5.title" />
                    </h6>
                    <label>
                      <FormattedMessage id="page.experiencies.experience5.name" />
                    </label>
                    <div className="rb-time">
                      <FormattedMessage id="page.experiencies.experience5.type" />
                    </div>
                    <p>
                      <FormattedMessage id="page.experiencies.experience5.description" />
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>


        
      </div>
    </section>
  );
};
export default Experience;
