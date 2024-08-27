import SvgBcLogo from "../Icons/SvgBcLogo";

import "./Footer.css";

export interface FooterLinksProps {
  /**
   * Title for the list of links - associated to the list of links as a `<figcaption>`
   */
  title: string;
  /**
   * Array of link elements (`<a>` or `<Link>`)
   */
  links: React.ReactElement[];
}

/**
 * A titled list of links for use in the Footer. Rendered inside a `<figure>`
 * with the `title` prop inside of the `<figcaption>`.
 * @param {FooterLinksProps} props
 * @returns {React.ReactElement}
 */
export function FooterLinks({ title, links }: FooterLinksProps) {
  return (
    <figure className="bcds-footer--links">
      {title && (
        <figcaption className="bcds-footer--links-title">{title}</figcaption>
      )}
      {links && (
        <ul>
          {Array.isArray(links) &&
            links.map((link: React.ReactElement, index) => {
              return (
                <li key={`${title.toLowerCase().replace(/\s/g, "-")}-${index}`}>
                  {link}
                </li>
              );
            })}
        </ul>
      )}
    </figure>
  );
}

export interface FooterProps {
  /**
   * Land acknowledgement block (defaults to Gov.bc.ca land acknowledgement)
   */
  acknowledgement?: React.ReactElement;
  /**
   * Logo slot (defaults to BC Gov horizontal logo)
   */
  logo?: React.ReactElement;
  /**
   * Contact information block (defaults to Gov.bc.ca contact information)
   */
  contact?: React.ReactElement;
  /**
   * Link list block (defaults to Gov.bc.ca link list).
   *
   * Pass the `<FooterLinks>` component for a styles-included list.
   */
  links?: React.ReactElement;
  /**
   * Copyright string (defaults to current year)
   */
  copyright?: string;
  /**
   * Hide the acknowledgement section
   */
  hideAcknowledgement?: boolean;
  /**
   * Hide the logo, contact information, and links section
   */
  hideLogoAndLinks?: boolean;
  /**
   * Hide the copyright string
   */
  hideCopyright?: boolean;
}

/**
 * A `<footer>` element with default content included.
 *
 * Passing `children` replaces `logo`, `contact`, and `links`.
 * @param {FooterProps} props
 * @returns {React.ReactElement}
 */
export default function Footer({
  children,
  acknowledgement,
  logo,
  contact,
  links,
  copyright,
  hideAcknowledgement = false,
  hideLogoAndLinks = false,
  hideCopyright = false,
}: React.PropsWithChildren<FooterProps>) {
  function defaultAcknowledgement() {
    return (
      <p>
        The B.C. Public Service acknowledges the territories of First Nations
        around B.C. and is grateful to carry out our work on these lands. We
        acknowledge the rights, interests, priorities, and concerns of all
        Indigenous Peoples — First Nations, Métis, and Inuit — respecting and
        acknowledging their distinct cultures, histories, rights, laws, and
        governments.
      </p>
    );
  }

  function defaultLogo() {
    return <SvgBcLogo id="bcgov-logo-footer" />;
  }

  function defaultContact() {
    // "Call, email or text us" human-readable URL:
    // https://www2.gov.bc.ca/gov/content/home/get-help-with-government-services
    // "find a service centre" human-readable URL:
    // https://www2.gov.bc.ca/gov/content/home/services-a-z
    return (
      <p>
        We can help in over 220 languages and through other accessible options.{" "}
        <a href="https://www2.gov.bc.ca/gov/content?id=6A77C17D0CCB48F897F8598CCC019111">
          Call, email or text us
        </a>
        , or{" "}
        <a href="https://www2.gov.bc.ca/gov/content?id=FBC4210F6BC047A5884198F543C97D53">
          find a service centre
        </a>
      </p>
    );
  }

  function defaultLinks() {
    return (
      <FooterLinks
        title="More Info"
        links={[
          <a href="https://www2.gov.bc.ca/gov/content/home">Home</a>,
          <a href="https://www2.gov.bc.ca/gov/content?id=3C4F47288DFB454987435AB5EFEFBB7F">
            About gov.bc.ca
          </a>,
          <a href="https://www2.gov.bc.ca/gov/content?id=79F93E018712422FBC8E674A67A70535">
            Disclaimer
          </a>,
          <a href="https://www2.gov.bc.ca/gov/content?id=9E890E16955E4FF4BF3B0E07B4722932">
            Privacy
          </a>,
          <a href="https://www2.gov.bc.ca/gov/content?id=E08E79740F9C41B9B0C484685CC5E412">
            Accessibility
          </a>,
          <a href="https://www2.gov.bc.ca/gov/content?id=1AAACC9C65754E4D89A118B875E0FBDA">
            Copyright
          </a>,
          <a href="https://www2.gov.bc.ca/gov/content?id=6A77C17D0CCB48F897F8598CCC019111">
            Contact us
          </a>,
        ]}
      />
    );
  }

  const defaultCopyright = `© ${new Date().getUTCFullYear()} Government of British Columbia.`;

  return (
    <footer className="bcds-footer">
      {!hideAcknowledgement && (
        <div className="bcds-footer--acknowledgement">
          <div className="bcds-footer--acknowledgement-text">
            {acknowledgement ? acknowledgement : defaultAcknowledgement()}
          </div>
        </div>
      )}
      <div className="bcds-footer--container">
        <div className="bcds-footer--container-content">
          {!hideLogoAndLinks && (
            <div
              className={`bcds-footer--logo-links ${children ? "vertical" : "horizontal"}`}
            >
              {children ? (
                children
              ) : (
                <>
                  <div className="bcds-footer--logo">
                    {logo ? logo : defaultLogo()}
                    {contact ? contact : defaultContact()}
                  </div>
                  {links ? links : defaultLinks()}
                </>
              )}
            </div>
          )}
          {!hideLogoAndLinks && !hideCopyright && <hr />}
          {!hideCopyright && (
            <p className="bcds-footer--copyright">
              {copyright ? copyright : defaultCopyright}
            </p>
          )}
        </div>
      </div>
    </footer>
  );
}
