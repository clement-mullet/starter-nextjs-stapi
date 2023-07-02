import FormSubmit from "./FormSubmit";

interface EmailProps {
  id: string;
  __component: string;
  title: string;
  description: string;
  emailPlaceholder: string;
  submitButton: {
    text: string;
  };
}

export default function Email({ data }: { data: EmailProps }) {
  return (
    <section>
      <div>
        <div>
          <h1>{data.title}</h1>
          <p>{data.description}</p>
        </div>
        <FormSubmit
          placeholder={data.emailPlaceholder}
          text={data.submitButton.text}
        />
      </div>
    </section>
  );
}
