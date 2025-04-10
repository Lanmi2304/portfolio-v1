import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

type EmailTemplateProps = {
  senderName: string;
  email: string;
  letterContent: string;
};

export const EmailTemplate = ({
  senderName,
  email,
  letterContent,
}: EmailTemplateProps) => {
  return (
    <Html>
      <Head />
      <Preview>Swimming instructor</Preview>
      <Tailwind>
        <Body className="bg-gray-100 font-sans">
          <Container className="mx-auto my-[40px] rounded-[8px] bg-white p-[20px] shadow-sm">
            <Heading className="my-[16px] font-bold text-[24px] text-gray-800"></Heading>

            <Section className="mb-[20px] rounded-[8px] bg-gray-50 p-[16px]">
              <Text className="mb-[8px] text-[16px] text-gray-700">
                <strong>Od:</strong> {senderName}
              </Text>
              <Text className="mb-[8px] text-[16px] text-gray-700">
                <strong>Email:</strong> {email}
              </Text>
              <Text className="mb-[8px] text-[16px] text-gray-700">
                <strong>Datum dospeca:</strong>{" "}
                {new Date().toLocaleDateString()}
              </Text>
              <Hr className="my-[12px] border-gray-300" />
              <Text className="text-[16px] text-gray-700">
                <strong>Poruka:</strong>
              </Text>
              <Text className="whitespace-pre-line text-[16px] text-gray-700">
                {letterContent}
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default EmailTemplate;
