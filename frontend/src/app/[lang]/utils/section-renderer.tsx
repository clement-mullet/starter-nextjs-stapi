import Email from "../components/Email";

export function sectionRenderer(section: any, index: number) {
  switch (section.__component) {
    case "sections.lead-form":
      return <Email key={index} data={section} />;
    default:
      return null;
  }
}
