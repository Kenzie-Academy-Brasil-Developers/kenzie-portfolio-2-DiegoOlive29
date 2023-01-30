import { Container, Flex, Box } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Footer as FooterWrapper , UserImage } from "./style";
import { userData } from "@/utils/userData";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Button } from "@/styles/Buttons";
import { HandEffect } from "../HandEffect";

export const Footer = (): JSX.Element => {
  return (
    <FooterWrapper id="social-media">
      <Container>
        <Flex>
          <UserImage
            src={`https://github.com/${userData.githubUser}.png`}
            alt={userData.nameUser}
            title={userData.nameUser}
            width={"70px"}
            height={"70px"}
          />
          <Box css={{ marginLeft: "$2" }}>
            <Text type="heading4" color="grey5" css={{ marginBottom: "$2" }}>
              Obrigado pela visita! <HandEffect />
            </Text>
            <Text type="body1" color="grey2">
            Me siga para mantermos contato.   
             </Text>
          </Box>
        </Flex>
        <Flex>
          <Button
            className="linkedin"
            type="circle"
            as="a"
            target="_blank"
            href={`https://linkedin.com/in/${userData.linkedinUser}`}
          >
            <FaLinkedinIn />
          </Button>
          <Button
            className="github"
            as="a"
            type="circle"
            target="_blank"
            href={`https://github.com/${userData.githubUser}`}
          >
            <FaGithub />
          </Button>
        </Flex>
      </Container>
    </FooterWrapper>
  );
};
