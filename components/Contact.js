import emailjs from "emailjs-com";
import { useState } from "react";

import { FormattedMessage, useIntl } from 'react-intl';
import { useRouter } from 'next/router'


const Contact = () => {

  const intl = useIntl();
  const btnSend = intl.formatMessage({ id: "page.contact.button"})
  const placeholderName = intl.formatMessage({ id: "page.contact.placeholder.nome"})
  const placeholderEmail = intl.formatMessage({ id: "page.contact.placeholder.email"})
  const placeholderSubject = intl.formatMessage({ id: "page.contact.placeholder.subject"})
  const placeholderMessage = intl.formatMessage({ id: "page.contact.placeholder.message"})

  const [mailData, setMailData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { name, email, message, subject } = mailData;
  const [error, setError] = useState(null);
  const onChange = (e) =>
    setMailData({ ...mailData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    if (
      name.length === 0 ||
      email.length === 0 ||
      message.length === 0 ||
      subject.length === 0
    ) {
      setError(true);
      clearError();
    } else {
      emailjs
        .send(
          "service_8p3152d", // service id
          "template_2398jih", // template id
          mailData,
          "xrse7rO5XoPMQJPeH" // public api
        )
        .then(
          (response) => {
            setError(false);
            clearError();
            setMailData({ name: "", email: "", message: "", subject: "" });
          },
          (err) => {
            console.log(err.text);
          }
        );
    }
  };
  const clearError = () => {
    setTimeout(() => {
      setError(null);
    }, 2000);
  };
  return (
    <section
      id="contactus"
      data-nav-tooltip="Contact Me"
      className="pp-section pp-scrollable section dark-bg"
    >
      <div className="container">
        <div className="title">
          <h3>
            <FormattedMessage id="page.contact.title" /> .
          </h3>
        </div>
        <div className="row">
          <div className="col-lg-5 col-xl-4 m-15px-tb">
            <div className="contact-info">
              <h4>
                <FormattedMessage id="page.contact.caption" />
              </h4>
              <p>
                <FormattedMessage id="page.contact.text" />
              </p>
              <ul>
                <li className="media">
                  <i className="ti-map" />
                  <span className="media-body">
                    Montreal, QC , Canadá.
                  </span>
                </li>
                <li className="media">
                  <i className="ti-email" />
                  <span className="media-body">danisluz@gmail.com</span>
                </li>
                <li className="media">
                  <i className="ti-mobile" />
                  <span className="media-body">+1 438 365 3251</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-7 col-xl-8 m-15px-tb">
            <div className="contact-form">
              <h4>
                <FormattedMessage id="page.contact.titleForm" />
              </h4>
              <form id="contact-form" onSubmit={(e) => onSubmit(e)}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        name="name"
                        onChange={(e) => onChange(e)}
                        value={name}
                        id="name"
                        placeholder={placeholderName}
                        className={`form-control ${
                          error ? (!name ? "invalid" : "") : ""
                        }`}
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        name="email"
                        onChange={(e) => onChange(e)}
                        value={email}
                        id="email"
                        placeholder={placeholderEmail}
                        className={`form-control ${
                          error ? (!email ? "invalid" : "") : ""
                        }`}
                        type="email"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <input
                        name="subject"
                        onChange={(e) => onChange(e)}
                        value={subject}
                        id="subject"
                        placeholder={placeholderSubject}
                        className={`form-control ${
                          error ? (!subject ? "invalid" : "") : ""
                        }`}
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        onChange={(e) => onChange(e)}
                        value={message}
                        id="message"
                        placeholder={placeholderMessage}
                        rows={5}
                        className={`form-control ${
                          error ? (!message ? "invalid" : "") : ""
                        }`}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="send">
                      {/* <button
                        onSubmit={(e) => onSubmit(e)}
                        className="px-btn px-btn-theme"
                        type="button"
                        value="Send"
                      >
                        {" "}
                        send message
                      </button> */}
                      <input
                        className="px-btn px-btn-theme"
                        type="submit"
                        value={btnSend}
                      />
                    </div>
                    <span
                      id="suce_message"
                      className="text-success"
                      style={{
                        display:
                          error !== null ? (!error ? "block" : "none") : "none",
                      }}
                    >
                      <FormattedMessage id="page.contact.successMessage" />
                    </span>
                    <span
                      id="err_message"
                      className="text-danger"
                      style={{ display: "none" }}
                    >
                      <FormattedMessage id="page.contact.errorMessage" />
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
