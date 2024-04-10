import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";
import * as React from "react";
interface ValidationMailProps {
  pseudoIg: string;
}

export const ValidationMail = ({ pseudoIg }: ValidationMailProps) => {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Preview>Validation de demande de réservation</Preview>
        <Body style={main} className="text-pink-200 bg-[#1f0025] py-10">
          <Container className="mb-28">
            <Section>
              <Img
                src="https://i.ibb.co/m9qcjC2/logo.png"
                alt="logo"
                width="100"
                className="my-0 mx-auto"
              />
            </Section>

            <Section style={content}>
              <Row style={{ ...boxInfos, paddingBottom: "0" }}>
                <Column>
                  <Heading
                    style={{
                      fontSize: 32,
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    Salut {pseudoIg},
                  </Heading>
                  <Section>
                    <Img
                      src="https://i.ibb.co/2MXPrrK/valym-register-validation.png"
                      alt="logo"
                      width="840"
                      className="my-0 mx-auto"
                    />
                  </Section>
                </Column>
              </Row>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

ValidationMail.PreviewProps = {
  pseudoIg: "BourFion",
} as ValidationMailProps;

export default ValidationMail;

const main = {
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const logo = {
  padding: "30px 20px",
};

const content = {
  border: "1px solid rgb(0,0,0, 0.1)",
  borderRadius: "3px",
  overflow: "hidden",
};

const image = {
  display: "flex",
  justifyContent: "center",
  itemAlign: "center",
};

const boxInfos = {
  padding: "20px",
};

const containerImageFooter = {
  padding: "45px 0 0 0",
};
