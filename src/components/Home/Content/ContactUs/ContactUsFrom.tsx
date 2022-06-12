import {
  memo,
  FC,
  LegacyRef,
  useCallback,
  useRef,
  useState,
} from 'react';

export const ContactUsFrom: FC = memo(() => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const emailRef: null | LegacyRef<HTMLInputElement> = useRef(null);
  const messageRef: null | LegacyRef<HTMLTextAreaElement> = useRef(null);

  const setElementStyle = (
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

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      // eslint-disable-next-line no-useless-escape
      const isEmailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
      const isMessageValid = message.length > 30;

      setElementStyle(emailRef.current, isEmailValid);
      setElementStyle(messageRef.current, isMessageValid);

      if (isEmailValid && isMessageValid) {
        setEmail('');
        setMessage('');
        setTimeout(() => window.scrollTo(0, 0), 500);
        emailRef.current?.classList.remove('contact__form-field--valid');
        messageRef.current?.classList.remove('contact__form-field--valid');
      }
    },
    [email, message],
  );

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
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
    <form onSubmit={handleSubmit} className="contact__form">
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
  );
});
