import {
  Img,
  Tailwind,
  Text,
  Html,
  Head,
  Body,
  Container,
  Heading,
  Preview,
} from "@react-email/components";
import { FormData, LEVEL_ENUM, RANKED_ENUM, SECTOR_ENUM } from "@/utils/enum";

export const EmailMarioRecap = ({
  lastName,
  firstName,
  email,
  level,
  sector,
  pseudoIg,
  pseudoDiscord,
  phoneNumber,
  rank,
  network,
  partner,
  rightImage,
}: FormData) => {
  return (
    <Tailwind
      config={{
        theme: {
          extend: {
            colors: {
              brand: "#007291",
              primary: "#662895",
              secondary: "#3b278b",
              accent: "#ff70ac",
              neutral: "#26281c",
              "base-100": "#110b28",
              info: "#075985",
              success: "#4da000",
              warning: "#e50000",
              error: "#ff556b",
            },
          },
        },
      }}
    >
      <Html data-theme="mytheme">
        <Preview>INSCRIPTION - RECAP</Preview>
        <Head />
        <Body className="bg-base-100 text-white py-10">
          <Img
            src="https://i.ibb.co/7yyy0nG/logo.png"
            alt="logo"
            width="140"
            className="my-0 mx-auto mb-2"
          />
          <Heading as="h2" className="text-xl font-bold text-center">
            TOURNOI ROCKET LEAGUE Register
          </Heading>
          <Container className="bg-[#4814444c] p-4 rounded-lg mb-6 border border-white">
            <Text>
              <strong className="text-accent mr-3">Nom :</strong> {lastName}
            </Text>
            <Text>
              <strong className="text-accent mr-3">Prénom :</strong> {firstName}
            </Text>
            <Text>
              <strong className="text-accent mr-3">Telephone :</strong>{" "}
              {phoneNumber}
            </Text>
            <Text>
              <strong className="text-accent mr-3">Pseudo RL :</strong>{" "}
              {pseudoIg}
            </Text>
            <Text>
              <strong className="text-accent mr-3">Pseudo Discord :</strong>{" "}
              {pseudoDiscord}
            </Text>
            <Text>
              <strong className="text-accent mr-3">Email :</strong> {email}
            </Text>
            <Text>
              <strong className="text-accent mr-3">Filière :</strong> {sector}
            </Text>
            <Text>
              <strong className="text-accent mr-3">Niveau :</strong> {level}
            </Text>
            <Text>
              <strong className="text-accent mr-3">Réseau :</strong> {network}
            </Text>
            <Text>
              <strong className="text-accent mr-3">Partenaire :</strong>{" "}
              {partner}
            </Text>
            <Text>
              <strong className="text-accent mr-3">Rang :</strong> {rank}
            </Text>
            <Text>
              <strong className="text-accent mr-3">Droit à l'image :</strong> {rightImage}
            </Text>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
};

EmailMarioRecap.PreviewProps = {
  lastName: "Antoine",
  firstName: "Dupont",
  email: "Antoine@gmail.com",
  level: LEVEL_ENUM.B3,
  sector: SECTOR_ENUM.INFO,
  pseudoIg: "Meent",
  pseudoDiscord: "Bourfion",
  phoneNumber: "0606060606",
  rank: RANKED_ENUM.BRONZE,
  network: "Valyrian",
  partner: "Chainswo",
} as FormData;

export default EmailMarioRecap;
