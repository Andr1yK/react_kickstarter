import React, { FC, LegacyRef, useCallback, useRef, useState, memo } from 'react';
import Container from '../Container/Container';

import './ContactUs.scss';

const ContactUs: FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const emailRef: null | LegacyRef<HTMLInputElement> = useRef(null);
  const messageRef: null | LegacyRef<HTMLTextAreaElement> = useRef(null);

  const setElementValid = (
    elementRef: HTMLTextAreaElement | HTMLInputElement | null, valid: boolean,
  ) => {
    if (valid && elementRef) {
      elementRef.classList.remove('contact__form-field--error');
      elementRef.classList.add('contact__form-field--valid');
    }

    if (!valid && elementRef) {
      elementRef.classList.add('contact__form-field--error');
      elementRef.classList.remove('contact__form-field--valid');
    }
  };

  const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // eslint-disable-next-line no-useless-escape
    const isEmailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    const isMessageValid = message.length > 30;

    setElementValid(emailRef.current, isEmailValid);
    setElementValid(messageRef.current, isMessageValid);

    if (isEmailValid && isMessageValid) {
      setEmail('');
      setMessage('');
      setTimeout(() => window.scrollTo(0, 0), 500);
      emailRef.current?.classList.remove('contact__form-field--valid');
      messageRef.current?.classList.remove('contact__form-field--valid');
    }
  }, [email, message]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    switch (name) {
      case 'email':
        setEmail(value);
        emailRef.current?.classList.remove('contact__form-field--error');
        emailRef.current?.classList.remove('contact__form-field--valid');
        break;

      case 'message':
        setMessage(value);
        messageRef.current?.classList.remove('contact__form-field--error');
        messageRef.current?.classList.remove('contact__form-field--valid');
        break;

      default:
        break;
    }
  };

  return (
    <section
      id="contact-us"
      data-sect-name="contact-us-mob"
      className="page__section contact"
    >
      <Container>
        <div className="contact__content">
          <div className="grid grid--tablet">
            <h2
              className="
                contact__title
                grid__item--t--1-4
                grid__item--d--2-6
              "
            >
              DO YOU HAVE ANY QUESTIONS?
            </h2>
            <form
              onSubmit={handleSubmit}
              className="
                contact__form
                grid__item--t--5-8
                grid__item--d--7-11
              "
            >
              <label htmlFor="contact-email">
                <input
                  type="email"
                  name="email"
                  value={email}
                  ref={emailRef}
                  className="contact__form-field contact__email"
                  id="contact-email"
                  placeholder="Your email"
                  onChange={handleChange}
                />
              </label>
              <textarea
                name="message"
                ref={messageRef}
                value={message}
                onChange={handleChange}
                className="
                    contact__message
                    contact__form-field
                    contact__form-field--last
                    contact__form-field--textarea
                  "
                placeholder="Your message..."
                required
              />

              <button type="submit" className="button button--color--green">
                Send
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default memo(ContactUs);
