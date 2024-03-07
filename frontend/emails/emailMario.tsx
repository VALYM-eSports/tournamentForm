import {
  Button,
  Img,
  Tailwind,
  Html,
  Head,
  Body,
  Container,
} from "@react-email/components";
import { SECTOR_ENUM, LEVEL_ENUM } from "@/utils/enum";

interface EmailProps {
  firstName: string;
  lastName: string;
  email: string;
  level: LEVEL_ENUM;
  sector: SECTOR_ENUM;
  console: string;
  controller: string;
}

export default function Email(props: EmailProps) {
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
        <Head />
        <Body className="bg-base-100 text-white">
          <div className="flex flex-col justify-center items-center ">
            <h1 className="text-3xl">VALYM Esport</h1>
            <h2 className="text-xl">TOURNOIS MARIO KART Register</h2>
          </div>
          <Container>
            <div className="flex gap-2 flex-col justify-start bg-base-300 p-4 rounded-lg mb-6 border border-white">
              <p>
                <strong className="text-accent">Nom :</strong> {props.lastName}
              </p>
              <p>
                <strong className="text-accent">Prénom :</strong>{" "}
                {props.firstName}
              </p>
              <p>
                <strong className="text-accent">Email :</strong> {props.email}
              </p>
              <p>
                <strong className="text-accent">Filière :</strong>{" "}
                {props.sector}
              </p>
              <p>
                <strong className="text-accent">Niveau :</strong> {props.level}
              </p>
              <p>
                <strong className="text-accent">Switch :</strong>{" "}
                {props.console}
              </p>
              <p>
                <strong className="text-accent">Manette :</strong>{" "}
                {props.controller}
              </p>
            </div>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
}
