import classNames from "classnames";

interface BannerProps {
  data: {
    heading: string;
    text: string;
    type: string;
    show: boolean;
    link: {
      id: number;
      url: string;
      newTab: boolean;
      text: string;
    };
  } | null;
}

export default function Banner({ data }: BannerProps) {
  if (!data) return null;
  const { heading, text, type, show, link } = data;
  if (!show) return null;
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 sm:flex sm:justify-center sm:px-6 sm:pb-5 lg:px-8">
      <div>
        <p>
          <a href={link.url} target={link.newTab ? "_blank" : "_self"}>
            <strong>{heading}</strong> {text}&nbsp;
            <span aria-hidden="true">&rarr;</span>
          </a>
        </p>
      </div>
    </div>
  );
}
