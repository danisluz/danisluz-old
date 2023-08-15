import { Fragment, useEffect, useRef, useCallback } from "react";
import Typed from "typed.js";
import { useRouter } from 'next/router'
import { useIntl } from 'react-intl'

const TypingAnimation = () => {
  const el = useRef(null);
  const intl = useIntl();

  const handleLocaleChange = useCallback(() => {}, []);
  const router = useRouter();

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        intl.formatMessage({ id: "page.home.office" }, { b: (info) => `<b>${info}</b>` }),
        "Full Stack"
      ],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: true,
    });

    router.events.on('localeChange', handleLocaleChange);

    return () => {
      typed.destroy();
      router.events.off('localeChange', handleLocaleChange);
    };
  }, [handleLocaleChange, intl, router]);

  return (
    <Fragment>
      <span id="type-it" className="subtitle subtitle-typed" ref={el}>
      </span>
    </Fragment>
  );
};

export default TypingAnimation;
