import React from 'react';
import './person.scss';

export class Person extends React.Component {
  static defaultProps = {
    className: 'person',
    headshotClassName: 'headshot',
    nameClassName: 'name',
    titleClassName: 'title',
    mobileClassName: 'mobile',
    webClassName: 'web',
    emailClassName: 'email',
    emailLinkClassName: 'email-link',
    residenceClassName: 'residence',
  };

  render() {
    const {
      value: {
        name,
        title,
        residence,
        mobile,
        email,
        web,
        headshot: { source: headshotSource, alt: headshotAlt },
        preMobile = 'Mobile: ',
        preSkype = '',
      },
      className,
      headshotClassName,
      nameClassName,
      titleClassName,
      mobileClassName,
      webClassName,
      emailClassName,
      emailLinkClassName,
      residenceClassName,
    } = this.props;

    return (
      <div className={className}>
        <img
          className={headshotClassName}
          src={headshotSource}
          alt={headshotAlt}
          style={{borderRadius: 30}}
        />
        <div className={nameClassName}>{name}</div>
        <div className={titleClassName}>{title}</div>
        <address className={residenceClassName}>{residence}</address>
        <div className={mobileClassName}>{`${preMobile}${mobile}`}</div>
        <div className={webClassName} target="_blank">
          <a style={{ color: 'blue' }} href={web} target="_blank">
            anoopsingh1996.github.io
          </a>
        </div>
        <div className={emailClassName}>
          <a className={emailLinkClassName} href={`mailto:${email}`}>
            {email}
          </a>
        </div>
      </div>
    );
  }
}
