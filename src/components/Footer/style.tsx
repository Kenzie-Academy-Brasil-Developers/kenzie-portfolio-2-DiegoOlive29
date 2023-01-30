import { styled } from "@/styles/stitches.config";
import { Container, Flex } from '@/styles/Global'
import dots from "@/public/static/img/background/dots.svg";

export const Footer = styled("footer", {
    backgroundColor: "$grey0",
    padding: "7rem 0",
    backgroundImage: `url(${dots})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left top 8rem",
    "@mobile": {
        backgroundPosition: "center top 1rem",
    },
    [`& ${Container}`]:{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        "@mobile": {
            flexDirection: "column",
            [`& ${Flex}:first-child`]: {
                marginBottom: "$5",
                flexDirection: "column",
                textAlign: "center",
                [`& img`]: {
                    marginBottom: "$2",
                }
            }
        }
    },
    
})
export const UserImage = styled("img", {
    borderRadius: "30%",
    width: "5.25rem",
    height: "5.25rem",
  
    "@mobile": {
      width: "3.25rem",
      height: "3.25rem",
    },
  });